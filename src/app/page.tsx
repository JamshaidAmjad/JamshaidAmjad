import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { ArticleCard } from "@/components/sections/article-card";
import { BookingCTA } from "@/components/sections/booking-cta";
import { HeroSection } from "@/components/sections/hero-section";
import { HomeIntro } from "@/components/sections/home-intro";
import { ProjectCard } from "@/components/sections/project-card";
import { ServiceCard } from "@/components/sections/service-card";
import { NewsletterSignup } from "@/components/forms/newsletter-signup";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
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

function ViewAllLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="group inline-flex shrink-0 items-center gap-1.5 text-sm font-semibold text-zinc-950 dark:text-white"
    >
      {label}
      <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
    </Link>
  );
}

export default function HomePage() {
  const articles = getAllArticles().slice(0, 3);

  return (
    <main>
      <HeroSection />
      <HomeIntro />
      <section className="py-20 sm:py-24">
        <Container>
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-6">
              <SectionHeading
                eyebrow="Projects"
                title={
                  <>
                    What I&apos;m{" "}
                    <span className="font-display font-normal italic">building</span>.
                  </>
                }
                description="Codexier AB, Forare, and the AI Learning Hub — three clear paths into my work as a founder and builder."
              />
              <ViewAllLink href="/projects" label="View all projects" />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {projects.map((project, index) => (
                <ProjectCard key={project.slug} project={project} index={index} />
              ))}
            </div>
          </Reveal>
        </Container>
      </section>
      <section className="py-20 sm:py-24">
        <Container>
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-6">
              <SectionHeading
                eyebrow="Services"
                title={
                  <>
                    How we can{" "}
                    <span className="font-display font-normal italic">work together</span>.
                  </>
                }
                description="Simple offer paths if you want clarity, consultation, or full delivery through Codexier."
              />
              <ViewAllLink href="/work-with-me" label="All services" />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {services.map((service, index) => (
                <ServiceCard key={service.title} service={service} featured={index === 0} />
              ))}
            </div>
          </Reveal>
        </Container>
      </section>
      <section className="py-20 sm:py-24">
        <Container>
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-6">
              <SectionHeading
                eyebrow="Writing"
                title={
                  <>
                    Notes from my{" "}
                    <span className="font-display font-normal italic">AI journey</span>.
                  </>
                }
                description="I write as I learn — practical explainers that turn AI study into clear, usable ideas."
              />
              <ViewAllLink href="/ai-articles" label="Read all articles" />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {articles.map((article) => (
                <ArticleCard key={article.slug} article={article} />
              ))}
            </div>
          </Reveal>
        </Container>
      </section>
      <Container className="py-20 sm:py-24">
        <Reveal>
          <BookingCTA />
        </Reveal>
      </Container>
      <section className="pb-24 pt-4">
        <Container>
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <SectionHeading
                className="mx-auto max-w-3xl"
                eyebrow="Newsletter"
                title={
                  <>
                    Follow the{" "}
                    <span className="font-display font-normal italic">build notes</span>.
                  </>
                }
                description="Practical AI learning, founder notes, and Codexier/Forare updates — straight to your inbox. No noise."
              />
              <div className="mt-8 text-left">
                <NewsletterSignup />
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </main>
  );
}
