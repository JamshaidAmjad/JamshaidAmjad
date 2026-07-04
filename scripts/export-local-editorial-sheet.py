#!/usr/bin/env python3
"""Export the Articles tab from the local editorial workbook to repo CSV."""

from __future__ import annotations

import csv
import re
import sys
import zipfile
from datetime import datetime, timedelta
from pathlib import Path
from xml.etree import ElementTree as ET

NS = {
    "main": "http://schemas.openxmlformats.org/spreadsheetml/2006/main",
    "rel": "http://schemas.openxmlformats.org/officeDocument/2006/relationships",
    "pkgrel": "http://schemas.openxmlformats.org/package/2006/relationships",
}

DEFAULT_SOURCE = Path("/tmp/jamshaid-editorial-sheet/jamshaid-amjad-editorial-calendar.xlsx")
DEFAULT_OUTPUT = Path("content/editorial/articles.csv")
DATE_COLUMNS = {"publish_date", "published_at"}


def column_index(cell_ref: str) -> int:
    letters = "".join(char for char in cell_ref if char.isalpha())
    index = 0
    for char in letters:
        index = index * 26 + (ord(char.upper()) - ord("A") + 1)
    return index - 1


def read_xml(zf: zipfile.ZipFile, path: str) -> ET.Element:
    return ET.fromstring(zf.read(path))


def shared_strings(zf: zipfile.ZipFile) -> list[str]:
    if "xl/sharedStrings.xml" not in zf.namelist():
        return []

    root = read_xml(zf, "xl/sharedStrings.xml")
    values: list[str] = []
    for item in root.findall("main:si", NS):
        parts = [node.text or "" for node in item.findall(".//main:t", NS)]
        values.append("".join(parts))
    return values


def article_sheet_path(zf: zipfile.ZipFile) -> str:
    workbook = read_xml(zf, "xl/workbook.xml")
    rels = read_xml(zf, "xl/_rels/workbook.xml.rels")

    relation_targets = {
        rel.attrib["Id"]: rel.attrib["Target"]
        for rel in rels.findall("pkgrel:Relationship", NS)
    }

    for sheet in workbook.findall("main:sheets/main:sheet", NS):
        if sheet.attrib.get("name") != "Articles":
            continue

        rel_id = sheet.attrib.get(f"{{{NS['rel']}}}id")
        if not rel_id or rel_id not in relation_targets:
            raise SystemExit("Articles sheet relationship was not found in workbook.")

        target = relation_targets[rel_id]
        if target.startswith("/"):
            return target.lstrip("/")
        return str(Path("xl") / target)

    raise SystemExit("No sheet named Articles was found in the workbook.")


def cell_text(cell: ET.Element, strings: list[str]) -> str:
    cell_type = cell.attrib.get("t")

    if cell_type == "inlineStr":
        return "".join(node.text or "" for node in cell.findall(".//main:t", NS))

    value = cell.find("main:v", NS)
    if value is None or value.text is None:
        return ""

    raw = value.text
    if cell_type == "s":
        try:
            return strings[int(raw)]
        except (ValueError, IndexError):
            return raw

    if cell_type == "b":
        return "true" if raw == "1" else "false"

    return raw


def excel_date(value: str, include_time: bool) -> str:
    if not re.fullmatch(r"\d+(\.\d+)?", value):
        return value

    serial = float(value)
    if serial < 1:
        return value

    dt = datetime(1899, 12, 30) + timedelta(days=serial)
    if include_time:
        return dt.strftime("%Y-%m-%d %H:%M")
    return dt.strftime("%Y-%m-%d")


def extract_articles(source: Path) -> list[list[str]]:
    with zipfile.ZipFile(source) as zf:
        strings = shared_strings(zf)
        sheet = read_xml(zf, article_sheet_path(zf))

        rows: list[list[str]] = []
        for row in sheet.findall("main:sheetData/main:row", NS):
            values: list[str] = []
            for cell in row.findall("main:c", NS):
                ref = cell.attrib.get("r", "")
                index = column_index(ref)
                while len(values) <= index:
                    values.append("")
                values[index] = cell_text(cell, strings)
            if any(value.strip() for value in values):
                rows.append(values)

    if not rows:
        raise SystemExit("Articles sheet is empty.")

    width = max(len(row) for row in rows)
    normalized = [row + [""] * (width - len(row)) for row in rows]
    headers = [value.strip() for value in normalized[0]]

    for row in normalized[1:]:
        for index, header in enumerate(headers):
            if header in DATE_COLUMNS and index < len(row):
                row[index] = excel_date(row[index].strip(), include_time=header == "published_at")

    return normalized


def main() -> None:
    source = Path(sys.argv[1]) if len(sys.argv) > 1 else DEFAULT_SOURCE
    output = Path(sys.argv[2]) if len(sys.argv) > 2 else DEFAULT_OUTPUT

    if not source.exists():
        raise SystemExit(f"Workbook not found: {source}")

    rows = extract_articles(source)
    output.parent.mkdir(parents=True, exist_ok=True)
    with output.open("w", newline="", encoding="utf-8") as handle:
        writer = csv.writer(handle)
        writer.writerows(rows)

    print(f"Exported {len(rows) - 1} article row(s) to {output}")


if __name__ == "__main__":
    main()
