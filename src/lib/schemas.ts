import { z } from "zod";

const emailSchema = z.string().trim().email("Enter a valid email address.");
const textSchema = z.string().trim().min(2, "This field is required.");

export const newsletterSchema = z.object({
  email: emailSchema,
  name: z.string().trim().max(80).optional().or(z.literal("")),
  source: z.string().trim().max(80).optional().or(z.literal("")),
});

export const contactSchema = z.object({
  name: textSchema.max(100),
  email: emailSchema,
  reason: textSchema.max(120),
  message: textSchema.min(10, "Please add a little more detail.").max(2000),
  company: z.string().trim().max(120).optional().or(z.literal("")),
});

export const bookingSchema = z.object({
  name: textSchema.max(100),
  email: emailSchema,
  sessionType: textSchema.max(120),
  goals: textSchema.min(10, "Please describe what you want help with.").max(2000),
  timezone: z.string().trim().max(80).optional().or(z.literal("")),
});

export type NewsletterInput = z.infer<typeof newsletterSchema>;
export type ContactInput = z.infer<typeof contactSchema>;
export type BookingInput = z.infer<typeof bookingSchema>;

export type ApiResponse =
  | { ok: true; message: string }
  | { ok: false; error: string; issues?: string[] };
