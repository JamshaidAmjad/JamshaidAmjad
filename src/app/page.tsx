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
import { credibilityStats, profileProofPoints, projects, services } from "@/data/site";
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
      <section className="py-16 sm:py-20">
        <Container>
          <Reveal>
            <div className="grid gap-8 rounded-2xl border border-zinc-200 bg-white p-7 dark:border-white/10 dark:bg-white/[0.03] lg:grid-cols-[0.9fr_1.1fr] lg:p-9">
              <div>
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">
                  Profile proof
                </span>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl dark:text-white">
                  Built from real delivery, not just a personal brand story.
                </h2>
                <p className="mt-4 text-sm leading-7 text-zinc-600 dark:text-zinc-400">
                  The work behind this site spans MVPs, websites, SEO, automations, data
                  interfaces, and product support for organizations across multiple markets.
                </p>
              </div>
              <div>
                <div className="grid gap-3 sm:grid-cols-3">
                  {credibilityStats.map((stat) => (
                    <div
                      key={stat.label}
                      className="rounded-xl border border-zinc-200 bg-zinc-50 p-4 dark:border-white/10 dark:bg-zinc-950/60"
                    >
                      <p className="font-display text-4xl italic text-zinc-950 dark:text-white">
                        {stat.value}
                      </p>
                      <p className="mt-2 text-xs font-semibold uppercase tracking-[0.14em] text-zinc-500">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
                <ul className="mt-6 grid gap-3 text-sm leading-7 text-zinc-600 dark:text-zinc-400">
                  {profileProofPoints.slice(0, 3).map((point) => (
                    <li key={point} className="flex gap-3">
                      <span className="mt-3 size-1.5 shrink-0 rounded-full bg-zinc-950 dark:bg-white" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
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
