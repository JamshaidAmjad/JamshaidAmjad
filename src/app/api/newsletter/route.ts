import { NextResponse } from "next/server";

import { submitNewsletter } from "@/lib/integrations/submissions";
import { newsletterSchema, type ApiResponse } from "@/lib/schemas";

export async function POST(request: Request) {
  const payload = await request.json().catch(() => null);
  const result = newsletterSchema.safeParse(payload);

  if (!result.success) {
    return NextResponse.json<ApiResponse>(
      {
        ok: false,
        error: "Please check the newsletter form.",
        issues: result.error.issues.map((issue) => issue.message),
      },
      { status: 400 },
    );
  }

  await submitNewsletter(result.data);
  return NextResponse.json<ApiResponse>({
    ok: true,
    message: "You are on the list. Thanks for joining.",
  });
}
