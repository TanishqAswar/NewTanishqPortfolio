import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
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
        title: "Experience",
    },
    {
        id: "por",
        title: "Responsibility",
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
        title: "Full Stack Developer",
        icon: "web",
    },
    {
        title: "Competitive Programmer",
        icon: "mobile",
    },
    {
        title: "InfoSec Enthusiast",
        icon: "backend",
    },
    {
        title: "UI/UX Designer",
        icon: "creator",
    },
];

// Using CDN links for tech logos on spheres
const technologies = [
    {
        name: "HTML 5",
        icon: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg",
    },
    {
        name: "CSS 3",
        icon: "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg",
    },
    {
        name: "JavaScript",
        icon: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
    },
    {
        name: "React JS",
        icon: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
    },
    {
        name: "Tailwind",
        icon: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
    },
    {
        name: "Node JS",
        icon: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
    },
    {
        name: "MongoDB",
        icon: "https://upload.wikimedia.org/wikipedia/commons/9/93/MongoDB_Logo.svg",
    },
    {
        name: "Three JS",
        icon: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Three.js_Icon.svg",
    },
    {
        name: "Git",
        icon: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Git-logo.svg",
    },
    {
        name: "C++",
        icon: "https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg",
    },
    {
        name: "Unity",
        icon: "https://upload.wikimedia.org/wikipedia/commons/c/c4/Unity_2021.svg",
    },
    {
        name: "Python",
        icon: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg",
    },
];

const experiences = [
    {
        title: "B.Tech - Information Technology",
        company_name: "Indian Institute of Information Technology, Lucknow",
        icon: "starbucks",
        iconBg: "#E6DEDD",
        date: "July 2023 - Present",
        points: [
            "CGPA: 8.61",
            "Coursework: Operating Systems, DBMS, OOPs, Data Structures and Algorithms, Computer Networks, Cloud Computing.",
        ],
    },
    {
        title: "Intermediate (JEE)",
        company_name: "Narayana Institute of Science",
        icon: "school",
        iconBg: "#383E56",
        date: "2021 - 2022",
        points: [
            "Percentile: 98.32%",
        ],
    },
    {
        title: "Matriculation",
        company_name: "Gurukul Olympiad School",
        icon: "school",
        iconBg: "#E6DEDD",
        date: "2019 - 2020",
        points: [
            "Percentage: 96.2%",
        ],
    },
];

const achievements = [
    {
        title: "Codeforces Specialist",
        subtitle: "Max Rating: 1455",
        icon: "💻",
        points: [],
        link: "https://codeforces.com/profile/prashantsinghwebdev" // Assuming this link from resume content trace
    },
    {
        title: "SecuriQuest Winner",
        subtitle: "1st Place 2024",
        icon: "🥇",
        points: ["Organized by AXIOS Infosec Wing (May 2024)"],
    },
    {
        title: "Hacktoberfest 2024",
        subtitle: "Open Source Contributor",
        icon: "🌟",
        points: ["Contributed to 'Foodie' delivery system & other repos."],
    },
    {
        title: "500+ Problems Solved",
        subtitle: "Across Multiple Platforms",
        icon: "🧠",
        points: ["LeetCode rating: 1,611", "CodeChef: 3 Star (Max 1620)"],
    },
    {
        title: "Reliance Foundation Scholar",
        subtitle: "Merit-based Scholarship",
        icon: "🎓",
        points: [],
    },
    {
        title: "OWASP Badge",
        subtitle: "TryHackMe Certified",
        icon: "🛡️",
        points: ["Cybersecurity expertise badge on TryHackMe."],
    },
];

const projects = [
    {
        name: "CrowdInfra",
        description:
            "Crowdsourced Infrastructure Demand-Mapping Platform. Democratizes planning via Google Maps, upvoting, and discussion. Features geospatial queries for nearby demands.",
        tags: [
            {
                name: "nextjs",
                color: "blue-text-gradient",
            },
            {
                name: "mongodb",
                color: "green-text-gradient",
            },
            {
                name: "gemini-api",
                color: "pink-text-gradient",
            },
        ],
        image: crowdinfra,
        source_code_link: "https://github.com/TanishqAswar/CrowdInfra",
        live_link: "https://infra-crowd.vercel.app/landing",
    },
    {
        name: "LeetVSCode",
        description:
            "Premium Chrome Extension linking LeetCode/Codeforces to local VS Code. Auto-generates driver code via Gemini API. Subscription model via Razorpay.",
        tags: [
            {
                name: "chrome-extension",
                color: "blue-text-gradient",
            },
            {
                name: "node",
                color: "green-text-gradient",
            },
            {
                name: "razorpay",
                color: "pink-text-gradient",
            },
        ],
        image: leetvscode,
        source_code_link: "https://github.com/TanishqAswar/LeetVSCode",
        live_link: "",
    },
    {
        name: "Block Penguin",
        description:
            "Web3-Integrated 2D Arcade Game (Unity). Players explore, interact with bots, and convert scores to blockchain tokens/NFTs via Thirdweb SDK.",
        tags: [
            {
                name: "unity",
                color: "blue-text-gradient",
            },
            {
                name: "web3",
                color: "green-text-gradient",
            },
            {
                name: "c#",
                color: "pink-text-gradient",
            },
        ],
        image: blockpenguin,
        source_code_link: "https://github.com/TanishqAswar/Block-Penguin-mySpace",
        live_link: "",
    },
];

export { services, technologies, experiences, achievements, projects };
