import { ArticleCard } from "@/components/sections/article-card";
import { BookingCTA } from "@/components/sections/booking-cta";
import { HeroSection } from "@/components/sections/hero-section";
import { ProjectCard } from "@/components/sections/project-card";
import { ServiceCard } from "@/components/sections/service-card";
import { NewsletterSignup } from "@/components/forms/newsletter-signup";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { projects, services } from "@/data/site";
import { getAllArticles } from "@/lib/articles";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Jamshaid Amjad | Jimzzz",
  description:
    "AI learning, entrepreneurship, Codexier AB, Forare, articles, services, booking, newsletter, and contact.",
  path: "/",
});

export default function HomePage() {
  const articles = getAllArticles().slice(0, 3);

  return (
    <main>
      <HeroSection />
      <section className="py-16">
        <Container>
          <SectionHeading
            eyebrow="Projects"
            title="The operating system around the personal brand."
            description="Codexier AB, Forare, and the AI Learning Hub give visitors clear paths into Jamshaid's work."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </Container>
      </section>
      <section className="py-16">
        <Container>
          <SectionHeading
            eyebrow="Services"
            title="Work with Jamshaid on strategy, AI, software, and systems."
            description="Simple offer paths for people who want clarity, consultation, or delivery through Codexier."
          />
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.title} service={service} />
            ))}
          </div>
        </Container>
      </section>
      <section className="py-16">
        <Container>
          <SectionHeading
            eyebrow="Articles"
            title="Latest AI learning notes."
            description="Starter articles for the learning hub, written to make AI ideas practical and clear."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {articles.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        </Container>
      </section>
      <Container className="py-16">
        <BookingCTA />
      </Container>
      <section className="py-16">
        <Container>
          <SectionHeading
            eyebrow="Newsletter"
            title="Follow the build notes."
            description="Get practical AI learning, founder notes, and Codexier/Forare updates."
          />
          <div className="mt-8">
            <NewsletterSignup />
          </div>
        </Container>
      </section>
    </main>
  );
}
