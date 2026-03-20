import {
    mobile,
    backend,
    creator,
    web,
    crowdinfra,
    leetvscode,
    blockpenguin
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Education",
    },
    {
        id: "skills",
        title: "Skills",
    },
    {
        id: "por",
        title: "Leadership",
    },
    {
        id: "achievements",
        title: "Achievements",
    },
    {
        id: "projects",
        title: "Projects",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "Full-Stack Developer",
        icon: "web",
    },
    {
        title: "Information Security",
        icon: "backend",
    },
    {
        title: "Data Structures & Algorithms",
        icon: "mobile",
    },
];

const technologies = [
    { name: "C++", icon: "https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg" },
    { name: "C", icon: "https://upload.wikimedia.org/wikipedia/commons/1/19/C_Logo.png" },
    { name: "JavaScript", icon: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" },
    { name: "Python", icon: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg" },
    { name: "Java", icon: "https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg" },
    { name: "Dart", icon: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Dart-logo.png" },
    { name: "Bash", icon: "https://upload.wikimedia.org/wikipedia/commons/8/82/Gnu-bash-logo.svg" },
    { name: "React.js", icon: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" },
    { name: "Node.js", icon: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg" },
    { name: "Express", icon: "https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png" },
    { name: "Next.js", icon: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg" },
    { name: "Tailwind CSS", icon: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" },
    { name: "Material UI", icon: "https://upload.wikimedia.org/wikipedia/commons/d/d4/MUI_logo.svg" },
    { name: "MongoDB", icon: "https://upload.wikimedia.org/wikipedia/commons/9/93/MongoDB_Logo.svg" },
    { name: "MySQL", icon: "https://upload.wikimedia.org/wikipedia/en/d/dd/MySQL_logo.svg" },
    { name: "Git & GitHub", icon: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Git-logo.svg" },
    { name: "Docker", icon: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Docker_%28container_engine%29_logo.svg" },
    { name: "Vercel", icon: "https://upload.wikimedia.org/wikipedia/commons/5/5e/Vercel_logo_black.svg" },
];

const experiences = [
    {
        title: "B.Tech - Information Technology",
        company_name: "Indian Institute of Information Technology, Lucknow",
        icon: "starbucks",
        iconBg: "#1d1836",
        date: "Jul 2023 - Present",
        points: [
            "CGPA: 8.61/10",
            "Coursework: Operating System, Database Management System, Object-Oriented Programming, Data Structures and Algorithms, Computer Networks, Cloud Computing, Cryptography, Artificial Intelligence.",
            "Domain Knowledge: GenAI Integration, Container & VM Architecture, Artificial Neural Networks, Reinforcement Learning.",
        ],
    },
    {
        title: "Intermediate (JEE Percentile - 98.32%)",
        company_name: "Narayana Institute of Science, Ch. Sambhajinagar, India",
        icon: "school",
        iconBg: "#383E56",
        date: "2021 - 2022",
        points: [
            "Completed Intermediate education.",
            "Attained a JEE Percentile of 98.32%."
        ],
    },
    {
        title: "Matriculation - 96.2%",
        company_name: "Gurukul Olympiad School, Ch. Sambhajinagar, India",
        icon: "starbucks",
        iconBg: "#1d1836",
        date: "2016 - 2020",
        points: [
            "Completed Matriculation with an outstanding 96.2% score."
        ],
    }
];

const achievements = [
    {
        title: "Codeforces Specialist",
        subtitle: "Peak Rating: 1455",
        icon: "💻",
        points: ["Global ranks 2354, 2818, and 3375.", "Solved 1,000+ coding problems across Codeforces, CodeChef, and LeetCode."],
        link: "https://codeforces.com/profile/prashantsinghwebdev"
    },
    {
        title: "CodeChef 4★",
        subtitle: "Peak Rating: 1974",
        icon: "👨‍💻",
        points: ["Achieved top global ranks of 64 and 78."],
        link: "https://www.codechef.com/users/hmt1"
    },
    {
        title: "LeetCode Elite",
        subtitle: "Rating: 1,611",
        icon: "🚀",
        points: ["Ranked 1,611 on LeetCode."],
        link: "https://leetcode.com/u/Tanishq__/"
    },
    {
        title: "DSA Certificates",
        subtitle: "Data Structures & Algorithms",
        icon: "🎓",
        points: ["Completed comprehensive DSA certifications."],
        link: "https://drive.google.com/drive/folders/1pbpOCNVVp4lNtfJ7FQ872HJnk-E6g0iY"
    },
    {
        title: "SecuriQuest Winner",
        subtitle: "1st Prize (May 2024)",
        icon: "🏆",
        points: ["Won 1st prize at SecuriQuest, organized by AXIOS Infosec Wing."],
    },
    {
        title: "TryHackMe OWASP Badge",
        subtitle: "Cybersecurity Certified",
        icon: "🛡️",
        points: ["Earned the OWASP Badge on TryHackMe."],
        link: "https://tryhackme.com/p/tanishqaswar2005"
    },
    {
        title: "Hacktoberfest 2024",
        subtitle: "Open Source Contributor",
        icon: "🌟",
        points: ["Contributed to the Foodie delivery system and collaborated on real-world codebases."],
        link: "https://github.com/M-ayank2005/Foodie"
    },
];

const projects = [
    {
        name: "LeetVSCode",
        description:
            "Premium Browser Extension for DSA and CP Workflow. Engineered a Chrome extension synchronizing 3+ coding platforms (LeetCode, Codeforces, HackerRank) with local VS Code. Reduced setup time by 70% using Gemini API for AI-assisted code scaffolding. Integrated Razorpay SDK for subscription payments.",
        tags: [
            { name: "Chrome APIs", color: "blue-text-gradient" },
            { name: "Node.js", color: "green-text-gradient" },
            { name: "Gemini API", color: "pink-text-gradient" },
            { name: "Razorpay SDK", color: "orange-text-gradient" },
            { name: "React & MongoDB", color: "blue-text-gradient" },
        ],
        image: leetvscode,
        source_code_link: "https://github.com/TanishqAswar/LeetVSCode",
        live_link: "",
    },
    {
        name: "CrowdInfra",
        description:
            "Crowdsourced Infrastructure Demand-Mapping Platform. Architected scalable edge network for 5,000+ DAU. Developed high-performance backend with MongoDB geospatial indexing enabling sub-second demand discovery. Integrated Google Gemini AI for feasibility analysis and demand trend detection.",
        tags: [
            { name: "Next.js & Node.js", color: "blue-text-gradient" },
            { name: "Express & MongoDB", color: "green-text-gradient" },
            { name: "JWT", color: "pink-text-gradient" },
            { name: "Google Maps & Gemini API", color: "orange-text-gradient" },
        ],
        image: crowdinfra,
        source_code_link: "https://github.com/TanishqAswar/CrowdInfra",
        live_link: "https://infra-crowd.vercel.app/landing",
    },
    {
        name: "Block Penguin",
        description:
            "Web3-Integrated 2D Arcade Game. Developed a Unity-based 2D arcade game featuring multi-level exploration. Orchestrated a Web3 game economy converting scores into blockchain tokens and ERC-721 NFTs. Integrated Thirdweb SDK for wallet connectivity and on-chain token minting.",
        tags: [
            { name: "Unity & C#", color: "blue-text-gradient" },
            { name: "Thirdweb SDK", color: "green-text-gradient" },
            { name: "Blockchain", color: "pink-text-gradient" },
        ],
        image: blockpenguin,
        source_code_link: "https://github.com/TanishqAswar/Block-Penguin-mySpace",
        live_link: "",
    },
];

export { services, technologies, experiences, achievements, projects };
