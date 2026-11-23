import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Sergio Alejandro",
  initials: "SA",
  url: "https://nextjs-minimalist-portfolio-two.vercel.app",
  location: "La Paz, BO",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  role: "Technical Lead · AI & Data Platforms",
  description:
    "I lead the team building AI and data platforms at HANSA Bolivia, putting ML and LLM features into production SaaS that enterprises run on every day.",
  summary:
    "I'm a technical lead at **HANSA Bolivia**, where I lead a team of 6 engineers building data applications with ML and LLM features. Over 6+ years and three promotions I went from building a CRM used daily by 400 sales reps to architecting a multi-tenant SaaS platform where each of 10+ enterprise tenants processes over $100K a day.\n\nThese days my focus is putting AI to work in production: an agentic harness that turns hours-long incident investigations into five-minute ones, a basket-prediction model at 91%, and a RAG assistant that builds dashboards on demand. What I care about most is how useful software is for the people using it, and I like building the tooling that helps a whole team ship faster and more safely.",
  stats: [
    { value: 6, suffix: "+", label: "years shipping production SaaS" },
    { value: 10, suffix: "+", label: "enterprise tenants, each over $100K/day" },
    { value: 91, suffix: "%", label: "basket-prediction accuracy" },
    { value: 5, prefix: "~", suffix: " min", label: "incident diagnosis, down from 2+ hours" },
  ],
  avatarUrl: "/me.png",
  skills: [
    // Frontend Frameworks & Libraries
    "React",
    "Vue",
    "Svelte",
    "Next.js",
    "Nuxt.js",

    // Programming Languages
    "Typescript",
    "JavaScript",
    "Go",
    "Java",
    "C++",

    // Backend & APIs
    "Node.js",
    "NestJS",
    "Express",
    "REST",
    "GraphQL",

    // Databases
    "Postgres",
    "MySQL",
    "SQL Server",

    // DevOps & Infrastructure
    "Docker",
    "Docker Swarm",
    "Kubernetes",
    "Portainer",
    "Kong",

    // AI & Automation
    "Artificial Intelligence",
    "Natural Language Processing",
    "N8N",
  ],
  skillGroups: [
    { label: "Frontend", items: ["React", "Vue", "Svelte", "Next.js", "Nuxt.js"] },
    { label: "Languages", items: ["TypeScript", "JavaScript", "Go", "Java", "C++"] },
    { label: "Backend & APIs", items: ["Node.js", "NestJS", "Express", "REST", "GraphQL"] },
    { label: "Databases", items: ["Postgres", "MySQL", "SQL Server"] },
    { label: "DevOps & Infra", items: ["Docker", "Docker Swarm", "Kubernetes", "Portainer", "Kong"] },
    { label: "AI & Automation", items: ["Artificial Intelligence", "Natural Language Processing", "n8n"] },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "sergio.alejandro.ml900@gmail.com",
    tel: "+123456789",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Sergio-Al",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/sergioml900/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/sergio_ml900",
        icon: Icons.x,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  // Newest first. Consecutive entries sharing a `group` render as one company
  // on the career timeline.
  work: [
    {
      company: "HANSA Bolivia",
      group: "HANSA Bolivia",
      href: "https://www.hansa.com.bo/",
      badges: [],
      location: "La Paz, BO",
      title: "Technical Lead, Data & AI Platforms",
      logoUrl: "/hansa-crm.png",
      start: "Feb 2026",
      end: "Present",
      description:
        "Leading a team of 6 engineers building data applications with ML and LLM features. Built an agentic incident-diagnosis harness that cut investigations from 2+ hours to about 5 minutes, shipped a basket-prediction model with 91% accuracy on an AWS medallion architecture, and I'm piloting a RAG chat assistant with generative UI and MCP. I also designed streaming architectures with CDC and Redis-backed high-concurrency write paths.",
    },
    {
      company: "Hansa CRM SaaS",
      group: "HANSA Bolivia",
      href: "https://hansacrm.com/",
      badges: [],
      location: "La Paz, BO",
      title: "Technical Lead, SaaS Area",
      logoUrl: "/hansa-crm.png",
      start: "Feb 2025",
      end: "Feb 2026",
      description:
        "Owned architecture and delivery of the HansaCRM platform across backend, web, mobile and data, leading the SaaS engineering team. Re-architected core business processes onto an event-driven Kafka backbone with centralized observability on ELK and distributed tracing, and delivered real-time SAP Business One / SAP HANA integrations on Kafka Connect, NiFi and Spark.",
    },
    {
      company: "Hansa CRM SaaS",
      group: "HANSA Bolivia",
      href: "https://hansacrm.com/",
      badges: [],
      location: "La Paz, BO",
      title: "Full-Stack SaaS Engineer",
      logoUrl: "/hansa-crm.png",
      start: "Sep 2023",
      end: "Jan 2025",
      description:
        "After the success of the CRM system, I was promoted to work on the company's main product, a CRM system for medium-sized and large businesses as a Software as a Service SAAS. I used Vue.js, PHP, SQL Server, NestJS, Kong, Portainer, Firebase, Microservices and Docker.",
    },
    {
      company: "Hansa Automotive",
      group: "HANSA Bolivia",
      href: "https://www.hansa.com.bo/automotriz/",
      badges: [],
      location: "La Paz, BO",
      title: "CRM Engineer",
      logoUrl: "/hansa-automotriz.png",
      start: "Apr 2022",
      end: "May 2023",
      description:
        "Architected and wrote the entire CRM system for the company's clients to manage their data, generate quotes, reports and invoices. I used Vue.js, PHP, SQL Server, NestJS, Microservices and Docker.",
    },
    {
      company: "GroupCisc",
      href: "https://groupcisc.com/home",
      badges: [],
      location: "Remote",
      title: "Web Frontend Developer",
      logoUrl: "/groupcisc.png",
      start: "Feb 2021",
      end: "Nov 2021",
      description:
        "I created a web application for the company's clients to manage their data and generate reports. I also worked on the company's website and other internal tools.",
    },
    {
      company: "AGETIC Bolivia",
      badges: [],
      href: "https://www.agetic.gob.bo/",
      location: "La Paz, BO",
      title: "Backend Engineering Intern",
      logoUrl: "/agetic-bolivia.png",
      start: "Aug 2019",
      end: "Jan 2020",
      description:
        "I created a web application for the company's clients to manage their human resources data as an internal tool. I used Vue.js, Node.js, MySQL and LDAP for authentication.",
    },
  ],
  education: [
    {
      school: "Udemy",
      href: "https://www.udemy.com/",
      degree: "Online courses",
      logoUrl: "/udemy.png",
      start: "2016",
      end: "Today",
    },
    {
      school: "CETI Bolivia",
      href: "https://cetifhce.umsa.bo/",
      degree: "English Language",
      logoUrl: "/ceti.png",
      start: "2022",
      end: "2023",
    },
    {
      school: "Infocal",
      href: "https://fundacioninfocal.edu.bo/",
      degree: "Mobile Development and Hardware",
      logoUrl: "/infocal.png",
      start: "2022",
      end: "2023",
    },
    {
      school: "Salesian University of Bolivia",
      href: "https://www.usalesiana.edu.bo/principal/es",
      degree: "Bachelor's Degree of Computer Science (BCS)",
      logoUrl: "/university.png",
      start: "2015",
      end: "2019",
    },
    {
      school: "Puerto de Rosario High School",
      href: "https://www.facebook.com/p/UE-T%C3%A9cnico-Human%C3%ADstico-Puerto-de-Rosario-100076142356609/",
      degree: "Humanities",
      logoUrl: "/school.png",
      start: "2003",
      end: "2014",
    },
  ],
  // `featured: true` renders the project as the large card at the top.
  projects: [
    {
      title: "FleetTrack",
      href: "https://github.com/Sergio-Al/nest-react-cdc-map-tracking",
      dates: "Feb 2026 - Today",
      active: true,
      featured: true,
      description:
        "Real-time fleet tracking for delivery drivers. GPS positions flow from Traccar through Kafka into a NestJS service that matches each driver to planned visits, calculates ETAs and detects arrivals, then pushes live updates to a React + Leaflet map over WebSockets. Debezium CDC keeps it in sync with the MySQL source of truth, TimescaleDB stores route history, and an OR-Tools service optimizes routes.",
      // From the k6 GPS-ingestion load test (load-tests/evidence, Nov 2026).
      metrics: [
        { value: "1,000", label: "simulated drivers" },
        { value: "8.7 ms", label: "p95 ingestion latency" },
        { value: "0%", label: "failed requests" },
      ],
      technologies: [
        "NestJS",
        "Kafka",
        "Debezium",
        "TimescaleDB",
        "Redis",
        "Socket.IO",
        "React",
        "Leaflet",
        "OSRM",
        "OR-Tools",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/Sergio-Al/nest-react-cdc-map-tracking",
          icon: <Icons.github className="size-3" />,
        },
      ],
      // 2.5 min of the live dashboard (simulate-route.mts, 3 drivers) at 10x speed.
      image: "/project-fleettrack.jpg",
      video: "/project-fleettrack.mp4",
    },
    {
      title: "Hybrid Decisions",
      href: "https://hybrid-decisions.vercel.app",
      dates: "Sep 2026 - Today",
      active: true,
      featured: true,
      description:
        "A decision engine that pairs fixed business rules with AI judgment. GoRules ZEN derives hard facts from CRM data, Jev (TypeSafe's AI model) scores what the data can't state for sure, like a customer's switching risk, and a policy table turns both into an action that a BPMN process carries out. The app runs the same customer with rules only and with Jev, explains why the answers differ, and draws the executed path on the diagram.",
      technologies: [
        "React",
        "Ant Design",
        "bpmn-js",
        "bpmn-engine",
        "GoRules ZEN",
        "Fastify",
        "TypeScript",
        "Jev",
      ],
      links: [
        {
          type: "Live demo",
          href: "https://hybrid-decisions.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Sergio-Al/react-bpmn-dmn-demo",
          icon: <Icons.github className="size-3" />,
        },
      ],
      // Guided tour of the CRM showcase in dark mode (Jev in mock mode), 1.2x speed.
      image: "/project-hybrid-decisions.jpg",
      video: "/project-hybrid-decisions.mp4",
    },
    {
      title: "ARCH/IO",
      href: "https://arch-io-xi.vercel.app",
      dates: "2025 - Today",
      active: true,
      featured: true,
      description:
        "A visual editor for software architecture diagrams. Drag infrastructure and service nodes onto an infinite canvas, wire them with typed, animated edges (HTTP, gRPC, AMQP, SQL), and export. Built on React Flow with a live properties panel and auto-layout.",
      technologies: [
        "React",
        "React Flow",
        "TypeScript",
        "Next.js",
        "Canvas",
      ],
      links: [
        {
          type: "Website",
          href: "https://arch-io-xi.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Sergio-Al/react-architecture-diagram",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/project-arch-io.png",
      video: "",
    },
    {
      title: "CRM Agent Platform",
      href: "https://github.com/Sergio-Al/next-crm-ai-agents",
      dates: "Mar 2026 - Apr 2026",
      active: true,
      description:
        "A conversational CRM where AI agents create contacts, move deals and run follow-up sessions from chat. A distributed system with a Next.js dashboard, a BullMQ agent worker, a WebSocket gateway, and a Kafka + Debezium CDC service that keeps it in sync with SuiteCRM. Ships with a React Native companion app that confirms every write through native forms.",
      technologies: [
        "Next.js",
        "AI SDK",
        "TimescaleDB",
        "pgvector",
        "BullMQ",
        "Kafka",
        "Debezium",
        "React Native",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/Sergio-Al/next-crm-ai-agents",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Mobile app",
          href: "https://github.com/Sergio-Al/react-native-crm-ai-agents",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "GraphQL Backend",
      href: "https://github.com/Sergio-Al/nest-graphql-library",
      dates: "Jan 2025 - Feb 2025",
      active: true,
      description:
        "I created a GraphQL API for a library management system. It includes user authentication, book management, and borrowing books.",
      technologies: [
        "NestJS",
        "GraphQL",
        "TypeORM",
        "PostgreSQL",
        "Docker",
        "Docker Compose",
        "JWT",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/Sergio-Al/nest-graphql-library",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-72acd541d99f4d32b35ac387f462301e.r2.dev/graph-ql-demo.mov",
    },
    // {
    //   title: "Magic UI",
    //   href: "https://magicui.design",
    //   dates: "June 2023 - Present",
    //   active: true,
    //   description:
    //     "Designed, developed and sold animated UI components for developers.",
    //   technologies: [
    //     "Next.js",
    //     "Typescript",
    //     "PostgreSQL",
    //     "Prisma",
    //     "TailwindCSS",
    //     "Stripe",
    //     "Shadcn UI",
    //     "Magic UI",
    //   ],
    //   links: [
    //     {
    //       type: "Website",
    //       href: "https://magicui.design",
    //       icon: <Icons.globe className="size-3" />,
    //     },
    //     {
    //       type: "Source",
    //       href: "https://github.com/magicuidesign/magicui",
    //       icon: <Icons.github className="size-3" />,
    //     },
    //   ],
    //   image: "",
    //   video: "https://cdn.magicui.design/bento-grid.mp4",
    // },
    // {
    //   title: "llm.report",
    //   href: "https://llm.report",
    //   dates: "April 2023 - September 2023",
    //   active: true,
    //   description:
    //     "Developed an open-source logging and analytics platform for OpenAI: Log your ChatGPT API requests, analyze costs, and improve your prompts.",
    //   technologies: [
    //     "Next.js",
    //     "Typescript",
    //     "PostgreSQL",
    //     "Prisma",
    //     "TailwindCSS",
    //     "Shadcn UI",
    //     "Magic UI",
    //     "Stripe",
    //     "Cloudflare Workers",
    //   ],
    //   links: [
    //     {
    //       type: "Website",
    //       href: "https://llm.report",
    //       icon: <Icons.globe className="size-3" />,
    //     },
    //     {
    //       type: "Source",
    //       href: "https://github.com/dillionverma/llm.report",
    //       icon: <Icons.github className="size-3" />,
    //     },
    //   ],
    //   image: "",
    //   video: "https://cdn.llm.report/openai-demo.mp4",
    // },
    // {
    //   title: "Automatic Chat",
    //   href: "https://automatic.chat",
    //   dates: "April 2023 - March 2024",
    //   active: true,
    //   description:
    //     "Developed an AI Customer Support Chatbot which automatically responds to customer support tickets using the latest GPT models.",
    //   technologies: [
    //     "Next.js",
    //     "Typescript",
    //     "PostgreSQL",
    //     "Prisma",
    //     "TailwindCSS",
    //     "Shadcn UI",
    //     "Magic UI",
    //     "Stripe",
    //     "Cloudflare Workers",
    //   ],
    //   links: [
    //     {
    //       type: "Website",
    //       href: "https://automatic.chat",
    //       icon: <Icons.globe className="size-3" />,
    //     },
    //   ],
    //   image: "",
    //   video:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
    // },
  ],
};
