import { DiBootstrap, DiReact, DiSass } from "react-icons/di";
import { BiLogoTrello, BiLogoTypescript, BiLogoVisualStudio  } from "react-icons/bi";
import {SiJavascript, SiHtml5, SiCss3, SiGit, SiGithub, SiTailwindcss, SiMui, SiPostgresql, SiJirasoftware, SiBitbucket} from "react-icons/si"

const stackItem = [
  {
    "name": "React",
    "icon": <DiReact size={50}/>,
    "color": "bg-blue-500"
  },
  {
    "name": "JavaScript",
    "icon": <SiJavascript size={50}/>,
    "color": "bg-yellow-400"
  },
  {
    "name": "HTML",
    "icon": <SiHtml5 size={50}/>,
    "color": "bg-orange-400"
  },
  {
    "name": "CSS",
    "icon": <SiCss3 size={50}/>,
    "color": "bg-blue-400"
  },
  {
    "name": "Sass",
    "icon": <DiSass size={50}/>,
    "color": "bg-pink-500"
  },
  {
    "name": "Git",
    "icon": <SiGit size={50}/>,
    "color": "bg-red-500"
  },
  {
    "name": "GitHub",
    "icon": <SiGithub size={50}/>,
    "color": "bg-black"
  },
  {
    "name": "Tailwind",
    "icon": <SiTailwindcss size={50}/>,
    "color": "bg-blue-300"
  },
  {
    "name": "Bootstrap",
    "icon": <DiBootstrap size={50}/>,
    "color": "bg-indigo-500"
  },
  {
    "name": "Material UI",
    "icon": <SiMui size={50}/>,
    "color": "bg-purple-500"
  },
  {
    "name": "TypeScript",
    "icon": <BiLogoTypescript size={50}/>,
    "color": "bg-blue-600"
  },
  {
    "name": "PostgreSQL",
    "icon": <SiPostgresql size={50}/>,
    "color": "bg-blue-800"
  },
  {
    "name": "Visual Studio Code",
    "icon": <BiLogoVisualStudio size={50}/>,
    "color": "bg-blue-900"
  },
  {
    "name": "Jira",
    "icon": <SiJirasoftware size={50}/>,
    "color": "bg-green-500"
  },
  {
    "name": "Trello",
    "icon": <BiLogoTrello size={50}/>,
    "color": "bg-green-600"
  },
  {
    "name": "Bitbucket",
    "icon": <SiBitbucket size={50}/>,
    "color": "bg-blue-400"
  }
];

export default stackItem;
  