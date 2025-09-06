import img from '../assets/proj.png'

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
