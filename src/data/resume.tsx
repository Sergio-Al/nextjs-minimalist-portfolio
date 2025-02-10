import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Sergio Alejandro",
  initials: "SA",
  url: "https://google.com",
  location: "La Paz, BO",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "AI and Software Engineer with a passion for building products that help people. I'm currently working with automation to take my skills to another level.",
  summary:
    "Hello there, I’m Sergio Alejandro Machaca Lamas, and I’m from La Paz, Bolivia. Currently, I’m residing in El Alto, Bolivia. I have had a passion for technology for as long as I can remember, and working with it is what I enjoy the most. My primary focus when working with technology is on its usefulness for the end user. Additionally, I have a keen interest in working with UI and UX, as well as optimizing processes to create the best possible systems. In order to develop superior software, effective teamwork is essential, and that’s where I aim to contribute as a dedicated team player.",
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

    // AI & Automation
    "Artificial Intelligence",
    "Natural Language Processing",
    "N8N",
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

  work: [
    {
      company: "AGETIC Bolivia",
      badges: [],
      href: "https://www.agetic.gob.bo/",
      location: "La Paz, BO",
      title: "Software Engineer",
      logoUrl: "/agetic-bolivia.png",
      start: "Aug 2019",
      end: "Jan 2020",
      description:
        "I created a web application for the company's clients to manage their human resources data as an internal tool. I used Vue.js, Node.js, MySQL and LDAP for authentication.",
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
      company: "Hansa Automotive",
      href: "https://www.hansa.com.bo/automotriz/",
      badges: [],
      location: "La Paz, Bo",
      title: "Software Engineer",
      logoUrl: "/hansa-automotriz.png",
      start: "March 2022",
      end: "May 2023",
      description:
        "Architected and wrote the entire CRM system for the company's clients to manage their data, generate quotes, reports and invoices. I used Vue.js, PHP, SQL Server, NestJS, Microservices and Docker.",
    },
    {
      company: "Hansa CRM SAAS",
      href: "https://hansacrm.com/",
      badges: [],
      location: "La Paz, Bo",
      title: "Software Engineer, Lead Developer",
      logoUrl: "/hansa-crm.png",
      start: "Aug 2023",
      end: "Nov 2024",
      description:
        "After the success of the CRM system, I was promoted to work on the company's main product, a CRM system for medium-sized and large bussinesses as a Software as a Service SAAS. I used Vue.js, PHP, SQL Server, NestJS, Kong, Portainer, Firebase, Microservices and Docker.",
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
  //TODO add more projects, those are just examples
  projects: [
    // {
    //   title: "Chat Collect",
    //   href: "https://chatcollect.com",
    //   dates: "Jan 2024 - Feb 2024",
    //   active: true,
    //   description:
    //     "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
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
    //       href: "https://chatcollect.com",
    //       icon: <Icons.globe className="size-3" />,
    //     },
    //   ],
    //   image: "",
    //   video:
    //     "https://pub-72acd541d99f4d32b35ac387f462301e.r2.dev/portfolio-test.mov",
    // },
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
