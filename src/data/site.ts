export const siteConfig = {
  name: "Jamshaid Amjad",
  shortName: "Jimzzz",
  title: "Jamshaid Amjad | Entrepreneur, AI Student, and Software Builder",
  description:
    "Jamshaid Amjad is an entrepreneur, AI student, and software builder creating practical digital systems, AI-powered tools, and business platforms from Sweden.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://jamshaidamjad.com",
  email: "hello@jamshaidamjad.com",
  location: "Sweden",
  author: {
    name: "Jamshaid Amjad",
    role: "Founder/operator, AI student, and software builder",
    bio: "Jamshaid writes as he learns and builds: Applied AI, Codexier AB, Forare, automation, and practical digital systems.",
  },
  keywords: [
    "Jamshaid Amjad",
    "Jimzzz",
    "Codexier AB",
    "Forare",
    "AI learning",
    "Applied AI",
    "software builder",
    "AI entrepreneurship",
  ],
};

export const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "AI Articles", href: "/ai-articles" },
  { label: "Work With Me", href: "/work-with-me" },
  { label: "Book", href: "/book" },
  { label: "Contact", href: "/contact" },
];

export const projects = [
  {
    title: "Codexier AB",
    slug: "codexier",
    icon: "terminal",
    description:
      "A Sweden-based software and AI services company for websites, automations, AI systems, dashboards, APIs, and digital product delivery.",
    tags: ["Software", "AI systems", "Automation"],
    href: "/work-with-me",
    cta: "Build with Codexier",
  },
  {
    title: "Forare",
    slug: "forare",
    icon: "route",
    description:
      "A mobility platform concept for drivers, ride-hailing, logistics, onboarding, dispatch, and AI-assisted transport operations.",
    tags: ["Mobility", "Platform", "Dispatch"],
    href: "/projects#forare",
    cta: "Explore the vision",
  },
  {
    title: "AI Learning Hub",
    slug: "ai-learning-hub",
    icon: "network",
    description:
      "A public knowledge base turning Applied AI study into notes, articles, explainers, experiments, and product ideas.",
    tags: ["AI", "Learning", "Research"],
    href: "/ai-articles",
    cta: "Read the notes",
  },
];

export const services = [
  {
    title: "1:1 AI & Business Strategy Session",
    icon: "user",
    price: "From EUR 149",
    description:
      "Focused clarity on AI, tools, systems, and the right next moves for your business, career, or product idea.",
    bestFor:
      "Entrepreneurs, students, freelancers, and business owners who need practical direction.",
    href: "/book",
    cta: "Book a session",
  },
  {
    title: "Software & AI Consultation",
    icon: "message",
    price: "Custom",
    description:
      "Technical clarity across software strategy, architecture, automation, AI integrations, MVP planning, and implementation risk.",
    bestFor:
      "Businesses that need confident technical decisions before committing budget.",
    href: "/contact",
    cta: "Request consultation",
  },
  {
    title: "Build With Codexier",
    icon: "code",
    price: "Custom Quote",
    description:
      "End-to-end delivery for websites, web apps, dashboards, APIs, integrations, automations, and AI-assisted workflows.",
    bestFor:
      "Companies that want execution from idea to production through Codexier AB.",
    href: "/contact",
    cta: "Start a project",
  },
];

export const articleCategories = [
  "AI Learning Notes",
  "Deep Learning",
  "Neural Networks",
  "Transformers",
  "AI in Healthcare",
  "Data Science Programming",
  "Business with AI",
  "Founder Notes",
];

export const nowSections = [
  {
    title: "Currently studying",
    icon: "book",
    items: [
      "Master's in Applied AI",
      "Deep learning and neural networks",
      "Data science programming",
      "AI in healthcare",
      "Transformers and practical AI systems",
    ],
  },
  {
    title: "Currently building",
    icon: "terminal",
    items: [
      "Codexier AB",
      "Forare",
      "Personal brand website",
      "AI learning hub",
      "Automation systems",
    ],
  },
  {
    title: "Current focus",
    icon: "target",
    items: [
      "Turning AI study into public articles",
      "Building practical digital products",
      "Creating business systems",
      "Growing a durable personal brand",
    ],
  },
];

export const contactReasons = [
  "Project inquiry",
  "Collaboration",
  "AI/business consultation",
  "Speaking or podcast request",
  "General message",
];

export const sessionTypes = [
  "AI learning clarity session",
  "Business and software strategy session",
  "Founder/product session",
];
