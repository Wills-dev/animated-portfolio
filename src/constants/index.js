import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  threejs,
  linkedIn,
  x,
  email,
  github,
  nextjs,
  buyershub,
  buzzconnect,
  emilist,
  marketplace,
  pearlAsset,
  qlh,
  smartAI,
  tofapay,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Experience",
  },
  {
    id: "project",
    title: "Project",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Next  JS",
    icon: nextjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "Frontend Developer",
    company_name: "Traders of Africa",
    iconBg: "#3c3350",
    date: "August 2022 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Onboard partner on the product.",
      "Oversee and maintain codebases, actively implementing novel features and enhancements.",
    ],
  },
  {
    title: "React Developer",
    company_name: "KellyX Global",
    iconBg: "#3c3350",
    date: "May 2021 - August 2022",
    points: [
      "Developed responsive landing pages using JavaScript/ES6+, React, Typescript, Redux and Next.Js",
      "Collaborated with design, product management and backend teams to create responsive web products.",
      "Refactored poorly written codes for clients, increasing the overall quality.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Frontend Developer | Program Lead",
    company_name: "Agrohive",
    iconBg: "#3c3350",
    date: "Nov 2019 - April 2021",
    points: [
      "Evaluated the structure and design of web pages.",
      "Debug errors, troubleshoot issues, and perform routine performance optimization.",
      "Attract and secure partnerships for third party programs.",
    ],
  },
];

const projects = [
  {
    name: "Buyer's Hub",
    description:
      "Traders of Africa company's web base and e-commerce platform specializing in bulk agricultural produce purchases for aggregators",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Socket.io",
        color: "green-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "pink-text-gradient",
      },
      {
        name: "MySQL",
        color: "blue-text-gradient",
      },
    ],
    image: buyershub,
    source_code_link: "https://www.tradersofafrica.com/",
  },
  {
    name: "Emilist",
    description:
      "A platform where artisans, handymen, and experts seamlessly find projects and are closely monitored until completion and they get paid. Still in development",
    tags: [
      {
        name: "Next",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "Typescript",
        color: "blue-text-gradient",
      },
    ],
    image: emilist,
    source_code_link: "https://emilist-webapp.vercel.app/",
  },
  {
    name: "TOFA PAY",
    description:
      "Web-based platform that allows users to search, manage payment, and track schedule from various partners and suppliers, providing a convenient and efficient solution to tracking list and schedules.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Typescript",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "Context API",
        color: "pink-text-gradient",
      },
    ],
    image: tofapay,
    source_code_link: "https://tofapay.tradersofafrica.com/",
  },
  {
    name: "TOFA Marketplace",
    description:
      "A digital market place platform bridging the gap between buyers and sellers seamlessly online. Still in development",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Express",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "Typescript",
        color: "green-text-gradient",
      },
    ],
    image: marketplace,
    source_code_link: "https://marketplase.tradersofafrica.com/",
  },
  {
    name: "Quick Logistic Hub",
    description:
      "A digital logistic as a service platform where different logistic providers register and users have access to them.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "redux",
        color: "pink-text-gradient",
      },
      {
        name: "typescript",
        color: "pink-text-gradient",
      },
    ],
    image: qlh,
    source_code_link: "https://www.quicklogisticshub.com/",
  },
  {
    name: "Smart AI",
    description:
      "An OpenAI Article Summarizer Crafting Clear and Concise Summaries from Lengthy Articles.",
    tags: [
      {
        name: "redux",
        color: "blue-text-gradient",
      },
      {
        name: "openAI",
        color: "green-text-gradient",
      },
      {
        name: "Rapid API",
        color: "pink-text-gradient",
      },
      {
        name: "react",
        color: "blue-text-gradient",
      },
    ],
    image: smartAI,
    source_code_link: "https://smart-brief-ai.netlify.app/",
  },
  {
    name: "Pearl Assets",
    description:
      "A  fine quality gemstone traders showcasing and selling the best of gemstones all over the world.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Javascript",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
      {
        name: "bootstrap",
        color: "blue-text-gradient",
      },
    ],
    image: pearlAsset,
    source_code_link: "https://webbsgem.netlify.app/",
  },
  {
    name: "BUZZCONNECT",
    description:
      "A real time messaging app designed to connect everyone registered. Right now it's not responsive for mobile users",
    tags: [
      {
        name: "Zustand",
        color: "blue-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
      {
        name: "Socket.io",
        color: "blue-text-gradient",
      },
      {
        name: "react",
        color: "blue-text-gradient",
      },
    ],
    image: buzzconnect,
    source_code_link: "https://smart-brief-ai.netlify.app/",
  },
];

const socialHandles = [
  {
    url: "mailto:ejioguvictor6@gmail.com",
    icon: email,
  },
  {
    url: "https://www.linkedin.com/in/victor-ejiogu-4b594916a/",
    icon: linkedIn,
  },
  {
    url: "https://github.com/Wills-dev",
    icon: github,
  },
  {
    url: "https://twitter.com/Willsssss_",
    icon: x,
  },
];

export { services, technologies, experiences, projects, socialHandles };
