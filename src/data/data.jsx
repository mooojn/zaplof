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
import { FaRegCircle } from "react-icons/fa";

// project-images
const images = import.meta.glob('../assets/projects/*.png', { eager: true });
const projectImages = Object.values(images).map((img) => img.default);


export const projects = [
    {
        category: 'FinTech',
        title: 'Crypto Yard – Crypto Trading Website',
        description: 'A real-time crypto trading platform with secure authentication and seamless frontend-backend integration.',
        features: [
            'Developed full backend in C# integrating third-party trading APIs, reducing response latency by 25%',
            'Implemented secure user authentication with 100% login success rate during testing',
            'Led a 6-member team, achieving on-time delivery with zero critical bugs'
        ],
        technologies: [
            'C#',
            'ASP.NET',
            'React JS',
            'REST APIs',
            'SQL Server'
        ],
        actions: [
            {
                name: 'Github',
                link: 'https://github.com/mooojn/Crypto-Yard'
            }
        ],
        image: projectImages[0]
    },
    {
        category: 'Banking',
        title: 'Azure Bank – Bank Management System',
        description: 'A complete banking management system built with modular C# architecture and SQL Server backend.',
        features: [
            'Developed banking app in C# with DLL-based architecture, improving modularity by 40%',
            'Designed Windows Forms GUI for account, deposit, and withdrawal operations',
            'Integrated SQL Server backend with 99.9% query success rate during testing'
        ],
        technologies: [
            'C#',
            'Windows Forms',
            'OOP',
            'SQL Server'
        ],
        actions: [
            {
                name: 'Github',
                link: 'https://github.com/mooojn/Azure-Bank'
            }
        ],
        image: projectImages[1]
    },
    {
        category: 'Database Systems',
        title: 'Database Management System',
        description: 'A custom DBMS built in C# with SQL-like query parsing, ACID compliance, and efficient data handling.',
        features: [
            'Led 4-member team to implement SQL-like query parsing with ACID-compliant transactions',
            'Implemented file indexing, backup/restore, improving query execution efficiency by 35%',
            'Built C# Windows Forms UI integrated with backend for smooth database operations'
        ],
        technologies: [
            'C#',
            'Windows Forms',
            'SQL-like Engine',
            'File Indexing'
        ],
        actions: [
            {
                name: 'Github',
                link: 'https://github.com/mooojn/ADBMS-c-sharp'
            }
        ],
        image: projectImages[2]
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
