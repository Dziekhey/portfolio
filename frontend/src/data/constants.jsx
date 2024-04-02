import css from '../assets/tech/CSS3.png';
import github from '../assets/tech/GitHub.png';
import html from '../assets/tech/HTML5.png';
import javascript from '../assets/tech/JavaScript.png';
import jira from '../assets/tech/Jira.png';
import material from '../assets/tech/Material UI.png';
import node from '../assets/tech/Node.js.png'
import react from '../assets/tech/React.png';
import tailwind from '../assets/tech/Tailwind CSS.png';
import vercel from '../assets/tech/Vercel.png';
import vsc from '../assets/tech/Visual Studio Code (VS Code).png';
import vite from '../assets/tech/Vite.js.png';

const technologies = [
    {
        name: "CSS3",
        src: css,
        style: "shadow-blue-500"
    },
    {
        name: "HTML 5",
        src: html,
        style: "shadow-orange-500"
    },
    {
        name: "Javascript",
        src: javascript,
        style: "shadow-yellow-500"
    },
    {
        name: "Tailwind CSS",
        src: tailwind,
        style: "shadow-sky-400"
    },
    {
        name: "Material UI",
        src: material,
        style: "shadow-blue-600"
    },
    {
        name: "Node.js",
        src: node,
        style: "shadow-green-400"
    },
    {
        name: "React.js",
        src: react,
        style: "shadow-sky-600"
    },
    {
        name: "Vite.js",
        src: vite,
        style: "shadow-pink-400"
    },
    {
        name: "GitHub",
        src: github,
        style: "shadow-gray-400"
    },
    {
        name: "VS Code",
        src: vsc,
        style: "shadow-blue-500"
    },
    {
        name: "Vercel",
        src: vercel,
        style: "shadow-gray-300"
    },
    {
        name: "Jira",
        src: jira,
        style: "shadow-sky-800"
    }
]


const experiences = [
  {
    title: "National Service Personnel",
    organisation: "Accra Brewery PLC",
    location: "Graphic road, Accra",
    subtitle: "Fermentation Operator",
    points: [
      "Running Cleaning in Place (CIP) for unitanks",
      "Propagating yeast for production",
      "Harvesting yeast for beer production",
      "Monitoring of temperatures",
      "Ensuring Good Manufacturing Practices (GMP) and Good Operating Practices (GOP)",
      "Preparing beer or malt for filtration on-time",
      "Ensuring quality and efficient plant performance",
      "Performing autonomous maintenance",
      "Conducting problem solving",
    ],
    date: "Nov-2022 - Oct-2023",
  },
  {
    title: "National Service Personnel",
    organisation: "Accra Brewery PLC",
    location: "Graphic road, Accra",
    subtitle: "Brewing Area Manager Support",
    points: [
      "Preparing FIFO for cellars tank farm",
      "Updating of cellars daily performance",
    ],
    date: "Nov-2022 - Oct-2023",
  },
  {
    title: "Web Developer",
    organisation: "MEST Africa",
    location: "East Legon, Accra",
    subtitle: "Trainee",
    points: [
      "Participated in code-along sessions with instructors to build a website using HTML and CSS.",
      "Engaged in code-along sessions to develop a Todo app with React.",
      "Collaborated in a team of 4 to build an agro product marketplace website using React.",
    ],
    date: "02-2024 - present",
  },
];


const projects = [
    {
        title: "TODO APP",
        description: "A web-based todo platform for saving tasks with database storage, facilitating efficient task management and organization for users.",
        github: "https://github.com/Dziekhey/Todo-app",
        website: ""
    },
    {
        title: "RECIPE APP",
        description: "Web-based recipe platform enables users to browse recipes, stored in a database, with admin capability to add new recipes. Efficient culinary exploration.",
        github: "https://github.com/Dziekhey/recipe-app",
        website: ""
    },
    {
        title: "E-COMMERCE WEBSITE",
        description: "An agromarketplace where users can explore products, add to cart, and checkout. Simplifying agricultural shopping with seamless online transactions.",
        github: "https://github.com/Dziekhey/recipe-app",
        website: ""
    },
    {
        title: "MOVIE WEBSITE",
        description: "Cinemate: Browse movies, search titles. Enhancing movie discovery and user experience with intuitive navigation and comprehensive search functionality",
        github: "https://github.com/mrkabby/CineMate",
        website: ""
    }
]

export { experiences, technologies, projects };
