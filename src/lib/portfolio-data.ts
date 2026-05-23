import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";
import project5 from "@/assets/project-5.jpg";
import project6 from "@/assets/project-6.jpg";

export const SITE = {
  name: "Alex Carter",
  role: "Full Stack Developer",
  email: "hello@alexcarter.dev",
  phone: "+1 (555) 010-2024",
  location: "Remote · Worldwide",
  bio: "I craft fast, accessible, scalable web and mobile products with a focus on clean architecture and delightful UX.",
  socials: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    telegram: "https://t.me",
    twitter: "https://x.com",
  },
};

export const ROLES = [
  "Full Stack Developer",
  "MERN Stack Developer",
  "Mobile App Developer",
  "UI/UX Enthusiast",
];

export const STATS = [
  { label: "Projects completed", value: 80 },
  { label: "Technologies mastered", value: 25 },
  { label: "Happy clients", value: 40 },
  { label: "Years experience", value: 5 },
];

export const SKILL_GROUPS = [
  {
    category: "Frontend",
    skills: [
      { name: "React", level: 95 },
      { name: "Next.js", level: 92 },
      { name: "TypeScript", level: 90 },
      { name: "Tailwind CSS", level: 95 },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", level: 90 },
      { name: "Express.js", level: 88 },
      { name: "NestJS", level: 80 },
      { name: "Laravel / PHP", level: 75 },
    ],
  },
  {
    category: "Mobile",
    skills: [
      { name: "React Native", level: 85 },
      { name: "Expo", level: 82 },
    ],
  },
  {
    category: "Database",
    skills: [
      { name: "MongoDB", level: 88 },
      { name: "PostgreSQL", level: 85 },
      { name: "MySQL", level: 80 },
    ],
  },
  {
    category: "DevOps & Tools",
    skills: [
      { name: "Git", level: 95 },
      { name: "Docker", level: 80 },
      { name: "Firebase", level: 85 },
      { name: "Supabase", level: 85 },
    ],
  },
];

export const TECH_MARQUEE = [
  "React", "Next.js", "TypeScript", "Node.js", "NestJS", "Laravel",
  "PostgreSQL", "MongoDB", "Tailwind", "React Native", "Docker",
  "Firebase", "Supabase", "GraphQL", "Redis", "AWS",
];

export type Project = {
  id: string;
  title: string;
  description: string;
  long: string;
  image: string;
  tech: string[];
  features: string[];
  category: "Full Stack" | "Frontend" | "Mobile App" | "Backend" | "UI/UX";
  github: string;
  demo: string;
  status: "Live" | "In Progress" | "Concept";
};

export const PROJECTS: Project[] = [
  {
    id: "nimbus-analytics",
    title: "Nimbus Analytics",
    description: "Realtime SaaS analytics dashboard with multi-tenant support.",
    long: "A production analytics platform powering 200+ teams. Built with a streaming data pipeline, role-based access, and a polished dashboard with custom charting.",
    image: project1,
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Redis", "tRPC"],
    features: ["Realtime metrics", "Multi-tenant auth", "Custom dashboards", "Stripe billing"],
    category: "Full Stack",
    github: "https://github.com",
    demo: "https://example.com",
    status: "Live",
  },
  {
    id: "harbor-commerce",
    title: "Harbor Commerce",
    description: "Headless e-commerce storefront with subscriptions.",
    long: "Modern storefront with edge-rendered product pages, cart persistence, and Stripe subscriptions. Sub-second TTFB worldwide.",
    image: project2,
    tech: ["Next.js", "Stripe", "Sanity", "Tailwind"],
    features: ["Headless CMS", "Subscriptions", "Edge SSR", "i18n"],
    category: "Frontend",
    github: "https://github.com",
    demo: "https://example.com",
    status: "Live",
  },
  {
    id: "pulse-fitness",
    title: "Pulse Fitness",
    description: "Cross-platform fitness tracker with wearable sync.",
    long: "React Native app syncing with Apple Health & Google Fit. Offline-first with background sync and live workout coaching.",
    image: project3,
    tech: ["React Native", "Expo", "TypeScript", "Supabase"],
    features: ["Wearable sync", "Offline mode", "Live coaching", "Social feed"],
    category: "Mobile App",
    github: "https://github.com",
    demo: "https://example.com",
    status: "Live",
  },
  {
    id: "estate-atlas",
    title: "Estate Atlas",
    description: "Real estate platform with map-based property search.",
    long: "Interactive map search, saved alerts, agent dashboards, and AI-generated listing summaries.",
    image: project4,
    tech: ["React", "NestJS", "PostgreSQL", "Mapbox"],
    features: ["Map search", "AI summaries", "Agent CRM", "Alerts"],
    category: "Full Stack",
    github: "https://github.com",
    demo: "https://example.com",
    status: "Live",
  },
  {
    id: "lumen-chat",
    title: "Lumen Chat",
    description: "AI-powered customer support assistant.",
    long: "Streaming LLM chat with tool use, embeddings-based knowledge base, and full audit logs for compliance.",
    image: project5,
    tech: ["Next.js", "OpenAI", "pgvector", "WebSockets"],
    features: ["Streaming responses", "Tool use", "Knowledge base", "Audit logs"],
    category: "Full Stack",
    github: "https://github.com",
    demo: "https://example.com",
    status: "In Progress",
  },
  {
    id: "orbit-board",
    title: "Orbit Board",
    description: "Collaborative kanban for distributed teams.",
    long: "Realtime kanban with CRDT-backed editing, presence cursors, and a powerful keyboard-first command palette.",
    image: project6,
    tech: ["React", "Yjs", "Node.js", "MongoDB"],
    features: ["Realtime CRDT", "Presence", "Command palette", "Offline"],
    category: "UI/UX",
    github: "https://github.com",
    demo: "https://example.com",
    status: "Live",
  },
];

export const PROJECT_CATEGORIES = ["All", "Full Stack", "Frontend", "Mobile App", "Backend", "UI/UX"] as const;

export const EXPERIENCE = [
  {
    role: "Senior Full Stack Engineer",
    company: "Northwind Labs",
    period: "2023 — Present",
    description: "Leading platform engineering for a B2B SaaS analytics product. Architected the multi-tenant data layer and shipped the v2 dashboard.",
  },
  {
    role: "Freelance Developer",
    company: "Self-employed",
    period: "2021 — 2023",
    description: "Delivered 30+ web & mobile products for startups across fintech, health, and e-commerce.",
  },
  {
    role: "Software Engineer",
    company: "Cascade Studio",
    period: "2020 — 2021",
    description: "Built design-led marketing sites and internal tools using React, Node.js, and Headless CMS.",
  },
  {
    role: "Engineering Intern",
    company: "Bluebird Tech",
    period: "2019 — 2020",
    description: "Contributed to the mobile team shipping the v1 React Native app reaching 50k MAU.",
  },
];

export const TESTIMONIALS = [
  {
    name: "Sarah Chen",
    title: "CTO, Northwind Labs",
    avatar: "https://i.pravatar.cc/120?img=47",
    quote: "Alex consistently ships polished, production-grade work. Rare combination of design taste and engineering depth.",
    rating: 5,
  },
  {
    name: "Marcus Lee",
    title: "Founder, Harbor Commerce",
    avatar: "https://i.pravatar.cc/120?img=12",
    quote: "Our storefront's load time dropped by 60% after Alex rebuilt the frontend. Best collaborator I've worked with.",
    rating: 5,
  },
  {
    name: "Priya Raman",
    title: "Product Lead, Pulse",
    avatar: "https://i.pravatar.cc/120?img=32",
    quote: "Thoughtful communicator, fast delivery, and obsessed with the details. Would hire again instantly.",
    rating: 5,
  },
  {
    name: "Daniel Ortiz",
    title: "CEO, Estate Atlas",
    avatar: "https://i.pravatar.cc/120?img=15",
    quote: "Took our messy prototype and turned it into a real product in a quarter. Strong opinions, great execution.",
    rating: 5,
  },
];

export const SERVICES = [
  { icon: "Layers", title: "Full Stack Web Development", desc: "End-to-end web apps with modern stacks.", features: ["Architecture", "API design", "Auth & billing"], price: "from $2,500" },
  { icon: "Monitor", title: "Frontend Development", desc: "Pixel-perfect, accessible interfaces.", features: ["React / Next.js", "Design systems", "A11y"], price: "from $1,500" },
  { icon: "Server", title: "Backend & APIs", desc: "Robust, scalable APIs and services.", features: ["REST & GraphQL", "Database design", "Caching"], price: "from $1,800" },
  { icon: "Smartphone", title: "Mobile App Development", desc: "Cross-platform iOS & Android apps.", features: ["React Native", "Native modules", "Offline"], price: "from $3,000" },
  { icon: "Palette", title: "UI / UX Design", desc: "Modern interfaces that convert.", features: ["Wireframes", "Prototypes", "Design tokens"], price: "from $1,200" },
  { icon: "Database", title: "Database Design", desc: "Schemas that scale with your product.", features: ["PostgreSQL", "MongoDB", "Migrations"], price: "from $800" },
  { icon: "Network", title: "System Architecture", desc: "Plans for systems built to last.", features: ["Diagrams", "Tech selection", "Reviews"], price: "from $1,000" },
  { icon: "Zap", title: "Performance Optimization", desc: "Faster sites, happier users.", features: ["Core Web Vitals", "Bundle audits", "Caching"], price: "from $900" },
  { icon: "LifeBuoy", title: "Maintenance & Support", desc: "Long-term retainers for your product.", features: ["Monitoring", "Bug fixes", "Feature work"], price: "from $600/mo" },
];

export const PROCESS = [
  { step: "01", title: "Discover", desc: "Understand goals, users, and constraints." },
  { step: "02", title: "Plan", desc: "Scope, milestones, and architecture." },
  { step: "03", title: "Design", desc: "Flows, wireframes, and UI." },
  { step: "04", title: "Build", desc: "Iterative development with reviews." },
  { step: "05", title: "Test", desc: "Automated and manual QA." },
  { step: "06", title: "Launch", desc: "Deploy with monitoring." },
  { step: "07", title: "Iterate", desc: "Measure, improve, support." },
];

export const FAQS = [
  { q: "How do projects start?", a: "We start with a discovery call to scope your goals, timeline, and budget — then I send a written proposal." },
  { q: "What's the typical timeline?", a: "Most projects ship in 4–10 weeks depending on scope. I share weekly demos throughout." },
  { q: "Do you work with existing teams?", a: "Yes — I regularly embed with in-house teams as a senior engineer or technical lead." },
  { q: "What about post-launch?", a: "I offer monthly retainers for monitoring, bug fixes, and feature work." },
  { q: "What's your tech stack?", a: "React / Next.js, TypeScript, Node, Postgres, and React Native — but I pick what's right for the problem." },
];
