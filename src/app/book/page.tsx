import { BookingForm } from "@/components/forms/booking-form";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Book a Session",
  description: "Request a 1:1 AI, business, software, or founder strategy session with Jamshaid Amjad.",
  path: "/book",
});

export default function BookPage() {
  return (
    <main className="py-16 sm:py-20">
      <Container className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <SectionHeading
          eyebrow="Booking"
          title="Request a focused strategy session."
          description="Use this for AI learning clarity, business/software strategy, or founder/product direction."
        />
        <BookingForm />
      </Container>
    </main>
  );
}
