// servicesData.js
export const services = [
  {
    id: "software",
    title: "Software Solutions",
    subtitle: "Innovative technology for SMEs",
    description:
      "Custom web and mobile apps, shop management systems, and ERP‑lite solutions built for real business needs.",
    points: [
      "Custom web and mobile applications",
      "Shop management and POS systems",
      "ERP‑lite for inventory, sales, and procurement",
      "Workflow automation and third‑party integrations",
      "Secure, scalable cloud architecture",
    ],
    icon: "Laptop",
  },
  {
    id: "accounting",
    title: "Accounting & Audit",
    subtitle: "Professional financial solutions",
    description:
      "Accurate bookkeeping, compliant reporting, and audit‑ready processes that keep your business financially healthy.",
    points: [
      "Professional bookkeeping and ledger management",
      "Financial reporting and dashboards",
      "Tax compliance and filing support",
      "Audit preparation and external audit support",
      "Strategic financial planning and cashflow forecasting",
    ],
    icon: "Calculator",
  },

  {
    id: "advisory",
    title: "Business Advisory",
    subtitle: "Strategic guidance for growth",
    description:
      "Process optimization, digital transformation consulting, and training to help you scale with confidence.",
    points: [
      "Process mapping and optimization",
      "Digital transformation roadmaps",
      "Training and capacity building",
      "Growth strategy and financial modelling",
      "End‑to‑end business enhancement programs",
    ],
    icon: "Lightbulb",
  },
];

export const examplePackages = [
  {
    id: "starter",
    name: "Starter",
    price: "From LKR 25,000 / month",
    tag: "For small shops and early stage SMEs",
    bullets: [
      "Basic bookkeeping (monthly)",
      "Quarterly financial reports",
      "Standard tax filing support",
      "Email support",
    ],
  },
  {
    id: "growth",
    name: "Growth",
    price: "From LKR 150,000 / month",
    tag: "For growing businesses",
    bullets: [
      "Full bookkeeping & payroll",
      "Monthly dashboards and KPIs",
      "Small scope workflow automation",
      "Quarterly advisory call",
    ],
  },
  {
    id: "enterprise",
    name: "Enterprise",
    price: "Custom pricing",
    tag: "For complex operations and large datasets",
    bullets: [
      "Tailored accounting + software stack",
      "Data migration and integrations",
      "Dedicated project manager",
      "SLA and ongoing support",
    ],
  },
];

export const addOns = [
  {
    id: "etl",
    title: "Data Migration and ETL",
    desc: "Migrate legacy data with validation and rollback plans.",
  },
  {
    id: "api",
    title: "API Integrations",
    desc: "Connect POS, eCommerce, payroll, and banking systems.",
  },
  {
    id: "security",
    title: "Security Hardening",
    desc: "Penetration testing, backups, and access controls.",
  },
  {
    id: "support",
    title: "Priority Support",
    desc: "Faster SLAs, dedicated support hours, and monitoring.",
  },
];

export const commonQuestions = [
  {
    q: "How do you price custom work?",
    a: "We provide a scoped proposal and time‑boxed SOW. For large data or integrations we include a discovery phase to estimate effort.",
  },
  {
    q: "Can you migrate our existing data?",
    a: "Yes we handle data migration with validation steps and a rollback plan for safety.",
  },
  {
    q: "Do you offer ongoing support?",
    a: "We offer monthly support packages and SLA options for enterprise clients.",
  },
];

export const commonAddOns = [
  {
    title: "Integrations",
    desc: "POS, eCommerce, payroll, banks, and CRM systems.",
  },
  {
    title: "Reporting",
    desc: "Custom dashboards, KPIs, and scheduled reports.",
  },
  {
    title: "Security",
    desc: "Backups, role based access, and encryption.",
  },
  {
    title: "Support",
    desc: "Monthly support plans, priority SLAs, and monitoring.",
  },
  {
    title: "Training",
    desc: "Onsite or remote training and documentation for your team.",
  },
];
