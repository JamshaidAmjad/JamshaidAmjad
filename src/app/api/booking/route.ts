import { NextResponse } from "next/server";

import { submitBooking } from "@/lib/integrations/submissions";
import { bookingSchema, type ApiResponse } from "@/lib/schemas";

export async function POST(request: Request) {
  const payload = await request.json().catch(() => null);
  const result = bookingSchema.safeParse(payload);

  if (!result.success) {
    return NextResponse.json<ApiResponse>(
      {
        ok: false,
        error: "Please check the booking form.",
        issues: result.error.issues.map((issue) => issue.message),
      },
      { status: 400 },
    );
  }

  await submitBooking(result.data);
  return NextResponse.json<ApiResponse>({
    ok: true,
    message: "Booking request received. Jamshaid will reply with next steps.",
  });
}
