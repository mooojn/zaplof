import img from '../assets/proj.png'

// skills
import {
  SiReact,
  SiNextdotjs,
  SiSass,
  SiTailwindcss,
  SiRedux,
  SiTypescript,
  SiJavascript,
  SiExpress,
  SiNodedotjs,
  SiMongodb,
  SiGit,
} from "react-icons/si";
import { FaRegCircle } from "react-icons/fa"; // fallback


export const projects = [
    {
        category: 'web app',
        title: 'FormCraft',
        description: 'FormCraft is an AI-powered no-code form builder that allows you to create responsive forms with ease. It features a drag-and-drop interface, file upload option, AI form creation, analytics dashboard and a wide range of customizations.',
        features: [
            'AI Form Builder',
            'Drag-and-Drop Interface',
            'Wide variety of Form Templates',
            'Real-Time Analytics Dashboard',
            'Wide Range of Field Types including File Uploads',
            'Conditional Logic & Validation',
            'Multi-Page Forms'
        ],
        technologies: [
            'Next.js',
            'TypeScript',
            'Tailwind CSS',
            'Airtable',
            'Google APIs',
            'Webhooks',
            'ShadCN UI',
            'Gemini AI',
            'MongoDB'
        ],
        actions: [
            {
                name: 'Live',
                link: 'https://www.youtube.com'
            },
            {
                name: 'Github',
                link: 'https://github.com/mooojn/'
            }
        ],
        image: img
    },
    {
        category: 'PWA',
        title: 'VI Messenger',
        description: 'Feature rich chat app with personal and group chats, AI chat with realtime streaming responses powered by LLAMA 3, multimedia support, typing indicators, online stats, message reactions, message replies, limited time message updating and so much more...',
        features: [
            'High quality file sharing',
            'Real time read-receipts',
            'AI assistant',
            'Install as PWA in any device - Fully responsive'
        ],
        technologies: [
            'TypeScript',
            'React',
            'Tailwind CSS',
            'Zustand',
            'Socket.io',
            'Express JS',
            'Mongo DB',
            'PWA',
            'Service Workers'
        ],
        actions: [
            {
                name: 'Github',
                link: 'https://github.com/mooojn/'
            }
        ],
        image: img
    }
]

export const experiences = [
    {
        company: "Genpro Research",
        period: "Jul 2023 – Present",
        role: "Frontend Engineer",
        points: [
            "Built the MAIA product suite, reducing authoring time and costs by up to 50%.",
            "Developed advanced semantic search AI with features like chat, follow-up, and citation navigation.",
            "Built an Admin Panel with Next.js 13 featuring dashboards, role-based access, and visualizations.",
            "Contributed to rich text editor with SlateJS, supporting multi-tab editing and text formatting.",
            "Published a UI component library with Rollup.js, Storybook, and Jest for scalable UI consistency.",
        ],
    },
    {
        company: "Infosys Ltd.",
        period: "Dec 2021 – Jul 2023",
        role: "CyberSecurity Engineer",
        points: [
            "Worked on SOAR team as a CyberSecurity Engineer.",
            "Automated processes and playbooks to improve incident response efficiency.",
            "Developed Incident Response Workbench in Cortex XSOAR, integrated with IBM QRadar and ServiceNow.",
        ],
    },
    {
        company: "Tech RSR",
        period: "May 2021 – Dec 2021",
        role: "Full-stack Engineer",
        points: [
            "Contributed to Handy Project Management (HPM) and Handy Meeting Minutes (HMM).",
            "Enhanced performance by optimizing both frontend and backend code.",
            "Integrated RESTful APIs with Redux, applied responsive design principles.",
            "Automated testing with Cypress, optimized search performance with caching and debouncing.",
        ],
    },
];


export const skills = [
  { name: "React", percent: "99%", icon: <SiReact />, color: "#61DAFB" },
  { name: "Next JS", percent: "93%", icon: <SiNextdotjs />, color: "#000000" },
  { name: "Tailwind CSS", percent: "95%", icon: <SiTailwindcss />, color: "#06B6D4" },
  { name: "TypeScript", percent: "92%", icon: <SiTypescript />, color: "#3178C6" },
  { name: "JavaScript", percent: "98%", icon: <SiJavascript />, color: "#F7DF1E" },
  { name: "Express", percent: "90%", icon: <SiExpress />, color: "#000000" },
  { name: "Node JS", percent: "85%", icon: <SiNodedotjs />, color: "#339933" },
  { name: "MongoDB", percent: "92%", icon: <SiMongodb />, color: "#47A248" },
  { name: "Git", percent: "85%", icon: <SiGit />, color: "#F05032" },
];
