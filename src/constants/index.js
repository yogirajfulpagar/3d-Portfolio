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
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  ok,
  no,
  bolt,
  babu,
  muth,
  barnit,
  resu,
  ethos,
  signalx,
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
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Android Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Competitive Programming",
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
];

const experiences = [
  {
    title: "Software Developer Intern",
    company_name: "Bolt IOT",
    icon: bolt,
    iconBg: "#383E56",
    date: "May 2023 - June 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Software Developer Intern",
    company_name: "SignalX.ai",
    icon: signalx,
    iconBg: "#E6DEDD",
    date: "Jan 2024 - May 2024",
    points: [
      "Engineered MicroChecks backend (GST Check, MSME Check, Struck Oﬀ Check), leading to a 30% revenue increase.",
      "Designed APIs for eﬃcient data retrieval, optimizing the common data pipeline and reducing retrieval time by 40%.",
      "Devised continuous monitoring for third-party risk management, mitigating risks by 50% through evaluation of key data points",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "Ethos",
    icon: ethos,
    iconBg: "#383E56",
    date: "July 2024 - Present",
    points: [
      "Spearheaded Loyalty Program Phase 3, enhancing backend and frontend features to increase agent engagement by 30%.",
      "Architected and deployed Gamification Project Phase 3, delivering scalable backend solutions for cash-reward games, increasing agent retention by 50%.",
      "Enhanced RDS performance, cutting CPU utilization by 20% through strategic scheduling and autovacuum management.",
      "Integrated NIPR ACH Authorization Modal with DocuSign, streamlining digital signing and reducing agent dues by 25%.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Yogiraj proved me wrong.",
    name: "Sanidhya Srivastava",
    designation: "CFO",
    company: "Milk Co",
    image: babu,
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Yogiraj does.",
    name: "Pratyush Praneet",
    designation: "COO",
    company: "Muthuth Finance",
    image: muth,
  },
  {
    testimonial:
      "After Yogiraj optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Varnit Singh",
    designation: "CTO",
    company: "Chor Enterprises",
    image: barnit,
  },
];

const projects = [
  {
    name: "Music Player",
    description:
      "This music player have all the features found in a typical music player. You will be able to add, play, pause and seek songs that have been added.",
    tags: [
      {
        name: "Html",
        color: "blue-text-gradient",
      },
      {
        name: "Css",
        color: "green-text-gradient",
      },
      {
        name: "Javascript",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://yogirajfulpagar.github.io/Spotify-Clone/",
  },
  {
    name: "CoronaVirus Cases on World Map",
    description:
      "Plotting CoronaVirus Cases On World Map - Interactive Dashboard Using JavaScript & MapBox.",
    tags: [
      {
        name: "MapBox",
        color: "blue-text-gradient",
      },
      {
        name: "Html",
        color: "green-text-gradient",
      },
      {
        name: "Javasript",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://yogirajfulpagar.github.io/Corona-Map/",
  },
  {
    name: "Pokemon Game",
    description:
      "A clone on Pokemon Game with the help of Tiled for Game Map and Html, CSS, Javascript",
    tags: [
      {
        name: "Javascript",
        color: "blue-text-gradient",
      },
      {
        name: "html",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://yogirajfulpagar.github.io/Pokemon/",
  },
  {
    name: "Dog E",
    description:
      "Full Stack MERN AI Image Generation App MidJourney & DALL E Clone",
    tags: [
      {
        name: "OpenAi",
        color: "blue-text-gradient",
      },
      {
        name: "Reactjs",
        color: "green-text-gradient",
      },
      {
        name: "Mern-Stack",
        color: "pink-text-gradient",
      },
    ],
    image: ok,
    source_code_link: "https://dog-e-one.vercel.app/",
  },
  {
    name: "DogeGPT",
    description: "ChatGPT AI Application That Will Help You Code",
    tags: [
      {
        name: "OpenAi",
        color: "blue-text-gradient",
      },
      {
        name: "Reactjs",
        color: "green-text-gradient",
      },
      {
        name: "Mern-Stack",
        color: "pink-text-gradient",
      },
    ],
    image: no,
    source_code_link: "https://dogimon-yogirajfulpagar.vercel.app/",
  },
  {
    name: "Resume Analyzer",
    description: "Analyzes your resume and suggest changes",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "Streamlit",
        color: "green-text-gradient",
      },
      {
        name: "KNN-Algorithm",
        color: "pink-text-gradient",
      },
    ],
    image: resu,
    source_code_link: "https://github.com/yogirajfulpagar/Resume-Analyzer",
  },
];

export { services, technologies, experiences, testimonials, projects };
