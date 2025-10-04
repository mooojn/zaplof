// projects
const images = import.meta.glob('../assets/projects/*.png', { eager: true });
const projectImages = Object.values(images).map((img) => img.default);

// services
const serviceIcons = import.meta.glob('../assets/services/*.svg', { eager: true });
const serviceImages = Object.values(serviceIcons).map((icon) => icon.default);

export const projects = [
    {
        category: 'Construction',
        title: 'Bids Estimating – Construction Estimation Company',
        description: 'A professional construction cost estimation and consultancy website designed and developed fully in WordPress with a focus on user experience and service clarity.',
        features: [
            'Designed modern, trust-focused UI showcasing construction estimating services for contractors and builders',
            'Developed a fully responsive and SEO-optimized WordPress site for better reach and engagement',
            'Integrated service inquiry forms, project showcases, and blog sections for client interaction and marketing'
        ],
        technologies: [
            'WordPress',
            'Elementor',
            'PHP',
            'HTML5',
            'CSS3',
            'JavaScript'
        ],
        actions: [
            {
                name: 'Live Site',
                link: 'https://bidsestimating.com'
            }
        ],
        image: projectImages[0]
    },
    {
        category: 'Web Development',
        title: 'AMW – Fire Management in UAE',
        description: 'Converted a static HTML website into a fully dynamic WordPress site with reusable components and centralized management.',
        features: [
            'Rebuilt site architecture in WordPress using a single header and footer for global consistency',
            'Migrated all static .html files to dynamic WordPress templates ensuring easy content updates',
            'Optimized performance and SEO while maintaining original design and responsiveness'
        ],
        technologies: [
            'WordPress',
            'PHP',
            'HTML5',
            'CSS3',
            'JavaScript'
        ],
        actions: [
            {
                name: 'Live Site',
                link: 'https://amw-fm.com'
            }
        ],
        image: projectImages[1]
    },
    {
        category: 'FinTech',
        title: 'Loan Expert – UK Loan Providing Platform',
        description: 'A UK-based business loan platform featuring an engaging landing page and an advanced dynamic form for loan application submissions.',
        features: [
            'Developed a responsive landing page optimized for high conversion and lead generation',
            'Built a dynamic, multi-step loan application form with conditional logic and backend integration',
            'Implemented validation, data storage, and email notifications for seamless loan application processing'
        ],
        technologies: [
            'WordPress',
            'PHP',
            'JavaScript',
            'HTML5',
            'CSS3'
        ],
        actions: [
            {
                name: 'Live Site',
                link: 'https://ukbusinessloanexpert.com'
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
