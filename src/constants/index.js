import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    gsap,
    html,
    javascript,
    leetcode,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    scolar,
    sih,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    three,
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: motion,
        name: "Motion",
        type: "Animation",
    },
    {
        imageUrl: gsap,
        name: "GreenSock",
        type: "Frontend",
    },
    {
        imageUrl: three,
        name: "Three.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },

];

export const experiences = [
    {
        title: "Reliance Foundation UG Scholar (2022)",
        company_name: "Reliance",
        icon: scolar,
        iconBg: "#accbe1",
        date: "March 2022 - April 2026",
        points: [
            "Awarded for academic excellence and leadership potential.",
            "Selected from thousands of applicants through a competitive process.",
            "Received financial support for tuition and living expenses.",
            "Participated in exclusive leadership and development programs.",
            "Access to a network of scholars, professionals, and mentors.",
        ],
    },
    {
        title: "Semi Finalist SIH (2023)",
        company_name: "Smart India Hackathon",
        icon: sih,
        iconBg: "#fbc3bc",
        date: "Nov 2023 - Dec 2023",
        points: [
            "Led a team of 6 members to participate in the internal hackathon for Smart India Hackathon (SIH) 2023.",
            "Coordinated project planning, task delegation, and progress tracking to ensure efficient teamwork and timely completion of tasks.",
            "Demonstrated strong analytical skills and innovative thinking in designing and implementing the project.",
            "Selected as semi-finalists in the prestigious Smart India Hackathon 2023, out of 26 competing teams.",
        ],
    },
    {
        title: "Active LeetCoder",
        company_name: "LeetCode",
        icon: leetcode,
        iconBg: "#b7e4c7",
        date: "Oct 2023 - Present",
        points: [
            "Solved over 200 algorithm and data structure problems on LeetCode, demonstrating strong problem-solving skills and a deep understanding of core computer science concepts.",
            "Maintained a 100-day streak of consistent problem-solving since October 2023, showcasing dedication, discipline, and a continuous learning mindset.",
            "Developed efficient solutions with a focus on time and space complexity, improving my ability to write optimal code under constraints.",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/YourGitHubUsername',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/YourLinkedInUsername',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Obys Agency UI',
        description: 'Developed using HTML, Tailwind CSS, JavaScript, Locomotive Scroll, GSAP, ScrollTrigger, and Three.js. Features smooth scrolling and a unique gooey effect for an engaging and visually appealing experience.',
        link: 'https://obys-agency-ui.vercel.app/',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'ReFokus UI',
        description: 'A React and Tailwind-based website with Locomotive and Framer Motion for smooth scrolling and animations. Unique sliding window animation in the project section. Creativity meets technology.',
        link: 'https://refokus-ui-beta.vercel.app/',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-blue',
        name: 'Ochi UI',
        description: ' React and Tailwind-based website featuring Locomotive Scroll, Framer Motion, and Gasp for animation. Unique rolling eye animation in project section enhances visual appeal.',
        link: 'https://ochi-ui-ritesh-das-projects.vercel.app/',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'Tourism Plan',
        description: 'React and Tailwind website showcasing React Hooks (useState, useEffect), filter, map functions. Simplifies trip planning with interactive features for travelers',
        link: 'https://tourismplan-r9uveyird-ritesh-das-projects.vercel.app/',
    },
    // {
    //     iconUrl: estate,
    //     theme: 'btn-back-black',
    //     name: 'Real-Estate Application',
    //     description: 'Developed a web application for real estate listings, facilitating property searches and connecting buyers with sellers.',
    //     link: 'https://github.com/adrianhajdin/projects_realestate',
    // },
    // {
    //     iconUrl: car,
    //     theme: 'btn-back-yellow',
    //     name: 'AI Summarizer Application',
    //     description: 'App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.',
    //     link: 'https://github.com/adrianhajdin/project_ai_summarizer',
    // }
];