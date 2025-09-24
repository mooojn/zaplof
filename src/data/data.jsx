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
        "company": "UET Lahore",
        "period": "3 months",
        "role": "Odoo Intern",
        "points": [
            "Streamlined Odoo component development within a 4-member team, reducing module integration time by 25%.",
            "Built responsive UI and social media integration modules, increasing platform usability by 30%.",
            "Deployed end-to-end features in agile sprints, improving release efficiency by 20%."
        ]
    },
    {
        "company": "UK Business Loan Expert",
        "period": "Project-based",
        "role": "WordPress Developer",
        "points": [
            "Delivered a WordPress website that boosted loan application conversion rates by 35%.",
            "Optimized page speed and responsiveness, reducing bounce rate by 28%.",
            "Improved SEO rankings, moving 10+ target keywords into the top 5 positions on Google UK."
        ]
    },
    {
        "company": "UAE Construction Company",
        "period": "Project-based",
        "role": "WordPress Developer",
        "points": [
            "Developed a corporate site that increased client inquiries by 40% within the first quarter.",
            "Implemented scalable navigation and mobile-first design, enhancing mobile traffic share by 32%.",
            "Reduced site maintenance overhead by 25% through modular WordPress architecture."
        ]
    },
    {
        "company": "UAE Fire Management Company",
        "period": "Project-based",
        "role": "WordPress Developer",
        "points": [
            "Migrated 100+ static HTML/CSS pages to WordPress with 0% downtime during transition.",
            "Enhanced SEO performance by 80%, driving a 2.5x increase in organic traffic within 6 months.",
            "Optimized hosting and caching, reducing average page load time from 4.2s to 1.6s."
        ]
    }
]



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
