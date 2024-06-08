import {
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  mysql,
  ahaSolar,
  photoshop,
  illustrator,
  davinci,
  sharenest,
  quizfy,
  api,
  pmt,
  pmsg
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  }
];

const services = [
  {
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Graphics Designer",
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
    name: "React JS",
    icon: reactjs,
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
    name: "MySql",
    icon: mysql,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "photoshop",
    icon: photoshop,
  },
  {
    name: "illustrator",
    icon: illustrator,
  },
  {
    name: "davinci",
    icon: davinci,
  },
];

const experiences = [
  {
    title: "SDE Intern",
    company_name: "AhaSolar",
    icon: ahaSolar,
    iconBg: "#383E56",
    date: "September 2023 - Ongoing",
    points: [
      "Developing and maintaining web applications using ReactJS, NodeJS & MySql",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const personalProjects = [
  {
    name: "ShareNest",
    description:
      "Web-based social media platform where we can post images, like them, can comment on that post and also save posts.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "sanity",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: sharenest,
    url: "https://sharenest.netlify.app/"
  },
  {
    name: "Quizfy",
    description:
      "Quizfy is an innovative web application designed specifically for interview preparation for aspiring engineers.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "appwrite",
        color: "pink-text-gradient",
      },
    ],
    image: quizfy,
    source_code_link: "https://github.com/FallenCap/Quiz_APP",
    url: "https://quiz-app-jzgq.vercel.app/"
  },
  {
    name: "Yaadein",
    description:
      "Yaadein is a REST API. This API is all about old Hindi songs and their details.Anybody can use this API.",
    tags: [
      {
        name: "express",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "restapi",
        color: "pink-text-gradient",
      },
    ],
    image: api,
    source_code_link: "https://github.com/FallenCap/Yaadein-Api",
    url: " https://yaadein.onrender.com/api/v1/songs"
  },
];

const professionalProjects = [
    {
      name: "PMT-REVAMP",
      description:
        "Web-based All-in-one solution for Solar EPC Organizations. Which helps them to Simplify their work-functions by digitalizing them.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "node",
          color: "green-text-gradient",
        },
        {
          name: "mysql",
          color: "blue-text-gradient",
        },
      ],
      image: pmt,
      url: "#"
    },
    {
      name: "PM-Suryaghar",
      description:
        "Worlds Biggest Solar Roof-top project Initiated by Indian Government For Green & Renewable energy for all households in India.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "node",
          color: "green-text-gradient",
        },
        {
          name: "mysql",
          color: "blue-text-gradient",
        },
      ],
      image: pmsg,
      url: "https://www.pmsuryaghar.gov.in"
    }
  ];

export { services, technologies, experiences, testimonials, personalProjects, professionalProjects };
