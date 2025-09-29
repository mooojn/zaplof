// projects
const images = import.meta.glob('../assets/projects/*.png', { eager: true });
const projectImages = Object.values(images).map((img) => img.default);

// services
const serviceIcons = import.meta.glob('../assets/services/*.svg', { eager: true });
const serviceImages = Object.values(serviceIcons).map((icon) => icon.default);


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

export const services = [
    { title: "SEO", img: serviceImages[0] },
    { title: "Social Media Marketing", img: serviceImages[1] },
    { title: "WordPress", img: serviceImages[2] },
    { title: "Shopify", img: serviceImages[3] },
    { title: "Mobile App", img: serviceImages[4] },
    { title: "Custom Full Stack App", img: serviceImages[5] },
    { title: "Desktop App", img: serviceImages[6] },
];
