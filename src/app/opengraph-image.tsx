import { ImageResponse } from "next/og";

import { siteConfig } from "@/data/site";

export const runtime = "edge";
export const alt = "Jamshaid Amjad personal brand";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#09090b",
          color: "white",
          padding: 72,
          fontFamily: "Arial",
        }}
      >
        <div style={{ fontSize: 28, letterSpacing: 8, textTransform: "uppercase", color: "#a1a1aa" }}>
          AI student / founder / operator
        </div>
        <div>
          <div style={{ fontSize: 82, fontWeight: 700, letterSpacing: -2 }}>{siteConfig.name}</div>
          <div style={{ marginTop: 24, fontSize: 34, color: "#d4d4d8" }}>
            Practical AI learning, Codexier AB, Forare, and software systems.
          </div>
        </div>
        <div style={{ display: "flex", gap: 18, fontSize: 24, color: "#a1a1aa" }}>
          <span>Jimzzz</span>
          <span>Codexier AB</span>
          <span>Forare</span>
        </div>
      </div>
    ),
    size,
  );
}
