import { NextResponse } from "next/server";

import { submitContact } from "@/lib/integrations/submissions";
import { contactSchema, type ApiResponse } from "@/lib/schemas";

export async function POST(request: Request) {
  const payload = await request.json().catch(() => null);
  const result = contactSchema.safeParse(payload);

  if (!result.success) {
    return NextResponse.json<ApiResponse>(
      {
        ok: false,
        error: "Please check the contact form.",
        issues: result.error.issues.map((issue) => issue.message),
      },
      { status: 400 },
    );
  }

  await submitContact(result.data);
  return NextResponse.json<ApiResponse>({
    ok: true,
    message: "Message received. Jamshaid will follow up soon.",
  });
}
