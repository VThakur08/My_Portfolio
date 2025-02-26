export const navLinks = [
    {
        id: 1,
        name: 'Home',
        href: '#home',
    },
    {
        id: 2,
        name: 'About',
        href: '#about',
    },
    {
        id: 3,
        name: 'Work',
        href: '#work',
    },
    {
        id: 4,
        name: 'Contact',
        href: '#contact',
    },
];

// export const clientReviews = [
//     {
//         id: 1,
//         name: 'Emily Johnson',
//         position: 'Marketing Director at GreenLeaf',
//         img: 'assets/review1.png',
//         review:
//             'Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.',
//     },
//     {
//         id: 2,
//         name: 'Mark Rogers',
//         position: 'Founder of TechGear Shop',
//         img: 'assets/review2.png',
//         review:
//             'Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.',
//     },
//     {
//         id: 3,
//         name: 'John Dohsas',
//         position: 'Project Manager at UrbanTech ',
//         img: 'assets/review3.png',
//         review:
//             'I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.',
//     },
//     {
//         id: 4,
//         name: 'Ether Smith',
//         position: 'CEO of BrightStar Enterprises',
//         img: 'assets/review4.png',
//         review:
//             'Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.',
//     },
// ];

export const myProjects = [
    {
        title: 'Figma Model for an E-commerce Website',
        desc: 'This e-commerce UI/UX design prototype offers a seamless and visually engaging shopping experience. With intuitive navigation, interactive wireframes, and optimized user flows, it enhances product discovery, checkout efficiency, and overall user engagement.',
        subdesc:
            'Built as a modern e-commerce prototype using Figma, this design focuses on intuitive navigation, engaging UI elements, and seamless user interactions to enhance the shopping experience and streamline conversions.',
        href: 'https://www.figma.com/file/RqibeArc9uSKK5TucGBNo8/E-Commerce-Design',
        texture: '/textures/project/project1.mp4',
        logo: '/assets/project-logo1.png',
        logoStyle: {
            backgroundColor: '#2A1816',
            border: '0.2px solid #36201D',
            boxShadow: '0px 0px 60px 0px #AA3C304D',
        },
        spotlight: '/assets/spotlight1.png',
        tags: [
            {
                id: 1,
                name: 'Figma',
                path: '/assets/figma.svg',
            },
            // {
            //     id: 2,
            //     name: 'TailwindCSS',
            //     path: 'assets/tailwindcss.png',
            // },
            // {
            //     id: 3,
            //     name: 'TypeScript',
            //     path: '/assets/typescript.png',
            // },
            // {
            //     id: 4,
            //     name: 'Framer Motion',
            //     path: '/assets/framer.png',
            // },
        ],
    },
    {
        title: 'VocalInk',
        desc: 'VocalInk is an advanced sentiment analysis and text-to-speech application that enhances user interaction. With real-time text processing and voice synthesis, it transforms written content into expressive speech while analyzing sentiment for deeper insights..',
        subdesc:
            'With VocalInk, users can experience seamless text-to-speech conversion and sentiment analysis in real time, enabling efficient communication and deeper emotional insights through an intuitive interface.',
        href: 'https://github.com/VThakur08/Sentiment-Anylysis-based-on-speech',
        texture: '/textures/project/project2.mp4',
        logo: '/assets/project-logo2.png',
        logoStyle: {
            backgroundColor: '#13202F',
            border: '0.2px solid #17293E',
            boxShadow: '0px 0px 60px 0px #2F6DB54D',
        },
        spotlight: '/assets/spotlight2.png',
        tags: [
            {
                id: 1,
                name: 'python',
                path: '/assets/python.svg',
            },
            // {
            //     id: 2,
            //     name: 'TailwindCSS',
            //     path: 'assets/tailwindcss.png',
            // },
            // {
            //     id: 3,
            //     name: 'TypeScript',
            //     path: '/assets/typescript.png',
            // },
            // {
            //     id: 4,
            //     name: 'Framer Motion',
            //     path: '/assets/framer.png',
            // },
        ],
    },
    {
        title: 'Beat Blender',
        desc: 'Beat Blender is an innovative music platform designed to curate mood-based playlists. It intelligently analyzes user preferences to generate personalized music experiences, ensuring a seamless and enjoyable listening journey.',
        subdesc:
            'With a focus on personalization, Beat Blender integrates HTML, CSS, and JavaScript to analyze user preferences and generate mood-based playlists, ensuring an engaging and seamless music experience.',
        href: 'https://vthakur08.github.io/music.github.io/',
        texture: '/textures/project/project3.mp4',
        logo: '/assets/project-logo3.png',
        logoStyle: {
            backgroundColor: '#60f5a1',
            background:
                'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
            border: '0.2px solid rgba(208, 213, 221, 1)',
            boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
        },
        spotlight: '/assets/spotlight3.png',
        tags: [
            {
                id: 1,
                name: 'React.js',
                path: '/assets/html.svg',
            },
            {
                id: 2,
                name: 'TailwindCSS',
                path: 'assets/css.svg',
            },
            {
                id: 3,
                name: 'TypeScript',
                path: '/assets/javascript.svg',
            },
            // {
            //     id: 4,
            //     name: 'Framer Motion',
            //     path: '/assets/framer.png',
            // },
        ],
    },
    {
        title: 'Alert-X',
        desc: 'AlertX is a proof-of-concept women\'s safety device that integrates Raspberry Pi 3B+, a tactile switch, and a camera. It enables real-time location sharing, image capture, and emergency alerts via an Android app, ensuring quick response during critical situations',
        subdesc:
            'Built with Raspberry Pi 3B+, Android Studio (Java), Google Firebase, and Twilio API, AlertX ensures a reliable and efficient emergency response system, providing real-time alerts and location tracking for enhanced safety.',
        href: 'https://drive.google.com/file/d/1mlk2iTThROYyZRiGVIY3SoW4-EdPrlU4/view?usp=sharing',
        texture: '/textures/project/project4.mp4',
        logo: '/assets/project-logo4.png',
        logoStyle: {
            backgroundColor: '#0E1F38',
            border: '0.2px solid #0E2D58',
            boxShadow: '0px 0px 60px 0px #2F67B64D',
        },
        spotlight: '/assets/spotlight4.png',
        tags: [
            {
                id: 1,
                name: 'React.js',
                path: '/assets/raspberry.svg',
            },
            {
                id: 2,
                name: 'TailwindCSS',
                path: '/assets/python.svg',
            },
            {
                id: 3,
                name: 'TypeScript',
                path: '/assets/java.svg',
            },
            {
                id: 4,
                name: 'Framer Motion',
                path: '/assets/firebase.svg',
            },
            {
                id: 5,
                name: 'Framer Motion',
                path: '/assets/twilio.svg',
            },

        ],
    },
    // {
    //     title: 'Imaginify - AI Photo Manipulation App',
    //     desc: 'Imaginify is a groundbreaking Software-as-a-Service application that empowers users to create stunning photo manipulations using AI technology. With features like AI-driven image editing, a payments system, and a credits-based model.',
    //     subdesc:
    //         'Built with Next.js 14, Cloudinary AI, Clerk, and Stripe, Imaginify combines cutting-edge technology with a user-centric approach. It can be turned into a side income or even a full-fledged business.',
    //     href: 'https://www.youtube.com/watch?v=Ahwoks_dawU',
    //     texture: '/textures/project/project5.mp4',
    //     logo: '/assets/project-logo5.png',
    //     logoStyle: {
    //         backgroundColor: '#1C1A43',
    //         border: '0.2px solid #252262',
    //         boxShadow: '0px 0px 60px 0px #635BFF4D',
    //     },
    //     spotlight: '/assets/spotlight5.png',
    //     tags: [
    //         {
    //             id: 1,
    //             name: 'React.js',
    //             path: '/assets/react.svg',
    //         },
    //         {
    //             id: 2,
    //             name: 'TailwindCSS',
    //             path: 'assets/tailwindcss.png',
    //         },
    //         {
    //             id: 3,
    //             name: 'TypeScript',
    //             path: '/assets/typescript.png',
    //         },
    //         {
    //             id: 4,
    //             name: 'Framer Motion',
    //             path: '/assets/framer.png',
    //         },
    //     ],
    // },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
    return {
        deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
        deskPosition: isMobile ? [0.5, -4.5, 0] : [0.6, -5.8, 0],
        cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5.5, -5, 0] : isTablet ? [8, -5, 0] : [9, -5.5, 0],
        reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [10, 4, 0] : [12, 3, 0],
        ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 8, 0] : isTablet ? [-17, 10, 0] : [-24, 10, 0],
        targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-8.5, -10, -12] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
    };
};

export const workExperiences = [
    {
        id: 1,
        name: 'Varcons Technology ',
        pos: 'UX Designer',
        duration: 'Oct 2023 - Dec 2023',
        title: "During my UI/UX design internship, I used Figma to create interactive prototypes, design intuitive user flows, and refine interfaces for a better user experience. This helped in visualizing and improving designs before development.",
        icon: '/assets/vt.png',
        animation: 'victory',
    },
    {
        id: 2,
        name: 'Ethnotech',
        pos: 'Web Developer',
        duration: ' Nov 2022 - Dec 2022',
        title: "During my web development internship, I used HTML, CSS, and JavaScript to build and improve responsive web pages, ensuring a smooth and visually appealing user experience.",
        icon: '/assets/et.png',
        animation: 'clapping',
    },
    // {
    //     id: 3,
    //     name: 'Notion',
    //     pos: 'Junior Web Developer',
    //     duration: '2019 - 2020',
    //     title: "Notion helps me keep my projects organized. I use it for project management, task tracking, and as a central hub for documentation, ensuring that everything from design notes to.",
    //     icon: '/assets/notion.svg',
    //     animation: 'salute',
    // },
];