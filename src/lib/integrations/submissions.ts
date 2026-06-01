import type { BookingInput, ContactInput, NewsletterInput } from "@/lib/schemas";

type SubmissionKind = "newsletter" | "contact" | "booking";

async function submit(kind: SubmissionKind, payload: unknown) {
  const provider = process.env.SUBMISSION_PROVIDER ?? "development";

  if (provider === "development") {
    console.info(`[submission:${kind}]`, payload);
    return { provider, stored: false };
  }

  return { provider, stored: false };
}

export function submitNewsletter(payload: NewsletterInput) {
  return submit("newsletter", payload);
}

export function submitContact(payload: ContactInput) {
  return submit("contact", payload);
}

export function submitBooking(payload: BookingInput) {
  return submit("booking", payload);
}
