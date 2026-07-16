import {
  Code2,
  Globe,
  Smartphone,
  Bot,
  Workflow,
  Layers,
  Plug,
  CloudUpload,
  PenTool,
  Wrench,
  Rocket,
  RefreshCcw,
  ShieldCheck,
  Gauge,
  GitBranch,
  Handshake,
  MessageSquare,
  Boxes,
  Sparkles,
  FileCode2,
  Scaling,
  type LucideIcon,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/* Services                                                            */
/* ------------------------------------------------------------------ */

export type Service = {
  slug: string;
  title: string;
  icon: LucideIcon;
  description: string;
  benefits: string[];
};

export const services: Service[] = [
  {
    slug: "custom-software",
    title: "Custom Software Development",
    icon: Code2,
    description:
      "Software engineered from the ground up around your workflows, data, and goals — never adapted from a template.",
    benefits: [
      "Built around your exact business logic",
      "Full ownership of source code and IP",
      "Architecture that grows with your company",
    ],
  },
  {
    slug: "web-applications",
    title: "Web Application Development",
    icon: Globe,
    description:
      "Fast, secure, modern web applications — from internal tools to customer-facing platforms serving thousands of users.",
    benefits: [
      "Responsive across every device",
      "Server-rendered performance and SEO",
      "Real-time features where they matter",
    ],
  },
  {
    slug: "mobile-applications",
    title: "Mobile Application Development",
    icon: Smartphone,
    description:
      "Native-quality iOS and Android apps that put your product in your customers' pockets, backed by robust APIs.",
    benefits: [
      "Single codebase, native feel",
      "Offline-first architecture options",
      "App Store and Play Store delivery",
    ],
  },
  {
    slug: "ai-agents",
    title: "AI Agent Development",
    icon: Bot,
    description:
      "Intelligent agents and LLM-powered systems that automate reasoning-heavy work: support, research, operations, and more.",
    benefits: [
      "Grounded in your own data",
      "Human-in-the-loop guardrails",
      "Measurable time savings from day one",
    ],
  },
  {
    slug: "process-automation",
    title: "Business Process Automation",
    icon: Workflow,
    description:
      "We map your manual processes and replace them with reliable automated pipelines that never miss a step.",
    benefits: [
      "Eliminate repetitive manual work",
      "Fewer errors, complete audit trails",
      "Systems that talk to each other",
    ],
  },
  {
    slug: "saas-products",
    title: "SaaS Product Development",
    icon: Layers,
    description:
      "End-to-end SaaS builds: multi-tenant architecture, billing, onboarding, analytics — everything a product company needs.",
    benefits: [
      "Multi-tenant from the first commit",
      "Subscription billing built in",
      "Designed for scale and iteration speed",
    ],
  },
  {
    slug: "api-integration",
    title: "API Development & Integration",
    icon: Plug,
    description:
      "Clean, documented APIs and integrations that connect your product to payment providers, CRMs, ERPs, and third-party services.",
    benefits: [
      "Well-documented, versioned endpoints",
      "Secure authentication and rate limiting",
      "Legacy and modern systems connected",
    ],
  },
  {
    slug: "cloud-deployment",
    title: "Cloud Deployment",
    icon: CloudUpload,
    description:
      "Production-grade infrastructure on AWS, Azure, GCP, or Vercel — provisioned as code, monitored, and cost-optimized.",
    benefits: [
      "Zero-downtime CI/CD pipelines",
      "Infrastructure as code",
      "Monitoring and alerting included",
    ],
  },
  {
    slug: "ui-ux-design",
    title: "UI/UX Design",
    icon: PenTool,
    description:
      "Interfaces designed around real user journeys — researched, prototyped, and tested before a line of code is written.",
    benefits: [
      "Design systems, not one-off screens",
      "Prototypes validated with real users",
      "Accessible and conversion-focused",
    ],
  },
  {
    slug: "maintenance-support",
    title: "Software Maintenance & Support",
    icon: Wrench,
    description:
      "Long-term care for your systems: monitoring, security patches, performance tuning, and a team that already knows your code.",
    benefits: [
      "Guaranteed response times",
      "Proactive monitoring, not firefighting",
      "Continuous small improvements",
    ],
  },
  {
    slug: "mvp-development",
    title: "MVP Development",
    icon: Rocket,
    description:
      "Validate your idea fast. We scope the smallest product that proves the concept and ship it in weeks, not months.",
    benefits: [
      "Launch-ready in weeks",
      "Built to evolve, not throw away",
      "Investor-demo quality from day one",
    ],
  },
  {
    slug: "legacy-modernization",
    title: "Legacy System Modernization",
    icon: RefreshCcw,
    description:
      "We migrate aging systems to modern stacks incrementally — preserving your data and operations while removing the risk.",
    benefits: [
      "Zero-disruption phased migration",
      "Complete data integrity",
      "Modern stack, lower running costs",
    ],
  },
];

/* ------------------------------------------------------------------ */
/* Why choose us                                                       */
/* ------------------------------------------------------------------ */

export type Reason = {
  title: string;
  icon: LucideIcon;
  description: string;
};

export const reasons: Reason[] = [
  {
    title: "Custom-built Solutions",
    icon: Sparkles,
    description:
      "No templates, no off-the-shelf shortcuts. Every system is designed around your specific requirements.",
  },
  {
    title: "Modern Technologies",
    icon: Boxes,
    description:
      "We build with the current generation of proven tools — the stacks powering today's best software companies.",
  },
  {
    title: "Scalable Architecture",
    icon: Scaling,
    description:
      "Systems designed to handle ten users or ten million — without rewrites when you grow.",
  },
  {
    title: "Clean Code",
    icon: FileCode2,
    description:
      "Readable, tested, documented code that any engineer can pick up. Your codebase is an asset, not a liability.",
  },
  {
    title: "Security First",
    icon: ShieldCheck,
    description:
      "Security reviewed at every layer — authentication, data handling, infrastructure, and dependencies.",
  },
  {
    title: "Performance",
    icon: Gauge,
    description:
      "Fast software is a feature. We measure and optimize load times, queries, and rendering from the start.",
  },
  {
    title: "Long-term Partnership",
    icon: Handshake,
    description:
      "We stay after launch. Most of our clients have worked with us across multiple products and years.",
  },
  {
    title: "Transparent Communication",
    icon: MessageSquare,
    description:
      "Weekly demos, honest estimates, and direct access to the engineers building your product.",
  },
  {
    title: "Agile Development",
    icon: GitBranch,
    description:
      "Short iterations, continuous delivery, and the flexibility to adjust course as your business learns.",
  },
];

/* ------------------------------------------------------------------ */
/* Process                                                             */
/* ------------------------------------------------------------------ */

export type ProcessStep = {
  step: string;
  title: string;
  description: string;
};

export const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: "Discovery",
    description:
      "We learn your business, users, and constraints — then define what success actually looks like.",
  },
  {
    step: "02",
    title: "Planning",
    description:
      "Scope, architecture, timeline, and budget locked into a clear roadmap you can hold us to.",
  },
  {
    step: "03",
    title: "UI/UX Design",
    description:
      "Wireframes to polished prototypes, validated with you before development begins.",
  },
  {
    step: "04",
    title: "Development",
    description:
      "Agile sprints with weekly demos. You watch the product come together, feature by feature.",
  },
  {
    step: "05",
    title: "Testing",
    description:
      "Automated and manual QA across devices, browsers, and edge cases before anything ships.",
  },
  {
    step: "06",
    title: "Deployment",
    description:
      "Zero-downtime launch on production-grade cloud infrastructure with CI/CD in place.",
  },
  {
    step: "07",
    title: "Maintenance",
    description:
      "Monitoring, support, and continuous improvement — a partnership that outlives the launch.",
  },
];

/* ------------------------------------------------------------------ */
/* Featured projects                                                   */
/* ------------------------------------------------------------------ */

export type Project = {
  slug: string;
  title: string;
  category: string;
  summary: string;
  stack: string[];
  outcome: string;
  accent: string; // tailwind gradient classes for the card visual
};

export const projects: Project[] = [
  {
    slug: "enterprise-dashboard",
    title: "Enterprise Dashboard",
    category: "Analytics Platform",
    summary:
      "A real-time operations dashboard unifying data from 12 internal systems for a 400-person enterprise.",
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Redis"],
    outcome: "Reporting time cut from 3 days to real-time",
    accent: "from-sky-500/25 via-blue-600/10",
  },
  {
    slug: "inventory-platform",
    title: "Inventory Management Platform",
    category: "Supply Chain",
    summary:
      "Multi-warehouse inventory tracking with barcode scanning, forecasting, and automated reordering.",
    stack: ["React", "Node.js", "MongoDB", "AWS"],
    outcome: "Stock discrepancies reduced by 94%",
    accent: "from-violet-500/25 via-purple-600/10",
  },
  {
    slug: "healthcare-portal",
    title: "Healthcare Portal",
    category: "Patient Experience",
    summary:
      "A secure patient portal for appointments, records, and telehealth serving 50,000+ registered patients.",
    stack: ["Next.js", "tRPC", "PostgreSQL", "Azure"],
    outcome: "No-show rate down 38% via smart reminders",
    accent: "from-teal-500/25 via-emerald-600/10",
  },
  {
    slug: "ecommerce-platform",
    title: "E-commerce Platform",
    category: "Retail",
    summary:
      "A headless commerce build with custom checkout, loyalty engine, and sub-second page loads.",
    stack: ["Next.js", "Stripe", "Sanity", "Vercel"],
    outcome: "Conversion rate up 27% after relaunch",
    accent: "from-amber-500/25 via-orange-600/10",
  },
  {
    slug: "crm-system",
    title: "CRM System",
    category: "Sales Operations",
    summary:
      "A custom CRM shaped around a non-standard sales cycle that no off-the-shelf product could model.",
    stack: ["React", "NestJS", "PostgreSQL", "GCP"],
    outcome: "Sales admin time cut by 11 hours/week per rep",
    accent: "from-blue-500/25 via-indigo-600/10",
  },
  {
    slug: "booking-platform",
    title: "Booking Platform",
    category: "Scheduling",
    summary:
      "High-volume booking system with dynamic pricing, calendar sync, and automated payment flows.",
    stack: ["Next.js", "Prisma", "Stripe", "Redis"],
    outcome: "Handles 10k+ concurrent booking sessions",
    accent: "from-rose-500/25 via-pink-600/10",
  },
  {
    slug: "ai-research-platform",
    title: "AI Research Platform",
    category: "Machine Learning",
    summary:
      "A research workbench with LLM-assisted literature analysis, semantic search, and team knowledge graphs.",
    stack: ["Next.js", "Python", "pgvector", "OpenAI"],
    outcome: "Literature review time reduced by 70%",
    accent: "from-fuchsia-500/25 via-purple-600/10",
  },
  {
    slug: "customer-portal",
    title: "Customer Portal",
    category: "Self-Service",
    summary:
      "A branded self-service portal for orders, invoices, and support — replacing hundreds of weekly emails.",
    stack: ["React", "GraphQL", "Node.js", "AWS"],
    outcome: "Support ticket volume down 45%",
    accent: "from-cyan-500/25 via-sky-600/10",
  },
  {
    slug: "project-management",
    title: "Project Management System",
    category: "Internal Tools",
    summary:
      "A tailored PM tool matching an engineering firm's exact workflow: stages, approvals, and resource planning.",
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Docker"],
    outcome: "Project delivery predictability up 60%",
    accent: "from-indigo-500/25 via-blue-600/10",
  },
];

/* ------------------------------------------------------------------ */
/* Company constants                                                   */
/* ------------------------------------------------------------------ */

export const company = {
  name: "Solution Wings",
  email: "info@solutionwings.com",
  phone: "+94 722 436 712",
  phoneHref: "+94722436712",
  whatsapp: "https://wa.me/94722436712",
  address: "136 Kandy Road, Madawala Bazar, Sri Lanka",
};
