export const siteConfig = {
  name: "Jamshaid Amjad",
  shortName: "Jimzzz",
  title: "Jamshaid Amjad | Entrepreneur, AI Student, and Software Builder",
  description:
    "Jamshaid Amjad is an entrepreneur, AI student, and software builder creating practical digital systems, AI-powered tools, and business platforms from Sweden.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://jamshaidamjad.com",
  email: "hello@jamshaidamjad.com",
  location: "Stockholm, Sweden",
  author: {
    name: "Jamshaid Amjad",
    role: "Founder/operator, AI student, and software builder",
    bio: "Jamshaid writes as he learns and builds: Applied AI, Codexier, AI Receptionist, Bordly, Förare, automation, and practical digital systems.",
  },
  keywords: [
    "Jamshaid Amjad",
    "Jimzzz",
    "Codexier",
    "Förare",
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
    title: "Codexier",
    slug: "codexier",
    icon: "terminal",
    status: "Services available",
    description:
      "My software studio: websites, web apps, mobile apps, integrations and AI automation for businesses. Scope is agreed before delivery begins.",
    tags: ["Software delivery", "Web & mobile", "Automation"],
    href: "https://codexier.com",
    cta: "Explore Codexier services",
  },
  {
    title: "AI Receptionist",
    slug: "ai-receptionist",
    icon: "message",
    status: "Product · demo available",
    description:
      "A Codexier product for service businesses: AI phone answering in Swedish and English, with booking integrations and call summaries. Explore the product and discuss your setup.",
    tags: ["Voice AI", "Service businesses", "Bookings"],
    href: "https://codexier.com/ai-receptionist",
    cta: "Explore AI Receptionist",
  },
  {
    title: "Bordly",
    slug: "bordly",
    icon: "network",
    status: "Product · free trial available",
    description:
      "Digital stamp cards, menus, Wi-Fi information and guest feedback for cafés and restaurants. Guests open the venue page through an NFC or QR tag, without downloading an app.",
    tags: ["Hospitality", "Loyalty", "NFC & QR"],
    href: "https://bordly.codexier.com",
    cta: "Explore Bordly",
  },
  {
    title: "Förare",
    slug: "forare",
    icon: "route",
    status: "Platform · public booking site",
    description:
      "A transport platform focused on Stockholm Arlanda airport transfers, with a public booking website and ongoing web and mobile product development.",
    tags: ["Airport transfers", "Mobility", "Web & mobile"],
    href: "https://forare.eu",
    cta: "Visit Förare",
  },
];

export const credibilityStats = [
  { value: "Build", label: "Web & mobile", detail: "Websites, apps and practical business software through Codexier." },
  { value: "Connect", label: "AI & automation", detail: "Voice interfaces, integrations and workflows built around business needs." },
  { value: "Learn", label: "Applied AI", detail: "Master’s study at Luleå University of Technology, alongside product development." },
];

export const profileProofPoints = [
  "Founder of Codexier, operating as Jamshaid Amjad, sole trader (enskild firma) in Stockholm, Sweden.",
  "Building AI Receptionist, Bordly and Förare alongside client software and automation work.",
  "Full-stack development across TypeScript, React, Next.js, Supabase and mobile apps.",
  "Studying a master’s in Applied AI at Luleå University of Technology.",
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
      "Companies that want execution from idea to production through Codexier.",
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
      "Codexier",
      "Förare",
      "AI Receptionist",
      "Bordly",
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
