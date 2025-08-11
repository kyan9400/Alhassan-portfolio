import React from 'react'

import {
	FaPhoneAlt,
	FaEnvelope,
	FaMapMarkerAlt,
	FaHtml5,
	FaCss3,
	FaJs,
	FaReact,
	FaNodeJs,
	FaFigma,
	FaGitSquare,
	FaAngular,
	FaSass,
	FaWordpress,
	FaPhp,
	FaInvision,
	FaSketch,
	FaBootstrap,
} from 'react-icons/fa'
import {
	SiTypescript,
	SiTailwindcss,
	SiStyledcomponents,
	SiNextdotjs,
	SiJest,
	SiLodash,
	SiCypress,
	SiJira,
	SiRedux,
	SiMongodb,
	SiGraphql,
	SiExpress,
	SiApollographql,
	SiReactquery,
} from 'react-icons/si'
import { TbBrandFramerMotion, TbBrandBackbone } from 'react-icons/tb'
import { IoLogoJavascript } from 'react-icons/io5'

export const links = [
	{
        name: 'Home',
		path: '/',
	},
	{
        name: 'Resume',
		path: '/resume',
	},
	{
        name: 'Projects',
		path: '/projects',
	},
	{
        name: 'Contact',
		path: '/contact',
	},
] as const

export const info = [
	{
		icon: React.createElement(FaPhoneAlt),
		title: 'Contact Number',
		description: '+7 919 399 749',
	},
	{
		icon: React.createElement(FaEnvelope),
		title: 'Email Address',
		description: 'kyan775909@gmail.com',
	},
	{
		icon: React.createElement(FaMapMarkerAlt),
		title: 'Address',
		description: 'Russia, Moscow',
	},
] as const

// About
export const aboutData = {
	title: 'About Me',
	description:
        'With over 5 years of experience in frontend development, I bring a strong foundation in creating dynamic and responsive web applications. My expertise spans across HTML, CSS, JavaScript, and modern frameworks like Vue.js and React. I have a proven track record of delivering high-quality, user-centric interfaces and am proficient in utilizing tools such as Git, Webpack, and Vite to streamline development processes. In addition to frontend development, I have extensive experience in blockchain development, including smart contract development, DeFi protocols, and NFTs. I have worked on various blockchain projects, integrating with DeFi platforms and creating NFT marketplaces.',
	info: [
		{
			fieldName: 'Name',
			fieldValue: 'Alhassan Alfarran',
		},
		{
			fieldName: 'Job Role',
			fieldValue: 'Fullstack Developer',
		},
		{
			fieldName: 'Experience',
			fieldValue: '5 Years 5 Months',
		},
		{
			fieldName: 'Address',
			fieldValue: 'Russia, Moscow',
		},
		{
			fieldName: 'Profile',
			fieldValue: 'Programmer',
		},
		{
			fieldName: 'Domain',
			fieldValue: 'Web Development, E-commerce & Digital Marketing',
		},
		{
			fieldName: 'Education',
			fieldValue: 'Bachelor of Computer Science',
		},
		{
			fieldName: 'Language',
			fieldValue: 'English, Russian, Arabic',
		},
		{
			fieldName: 'Technologies',
			fieldValue: 'React, HTML, CSS, JavaScript, Node.js, Express.js, Next.js, Web3, Vue.js & TypeScript',
		},
		{
			fieldName: 'Tools',
			fieldValue: 'Git, Webpack, Vite, Figma, Tailwind CSS, PostgreSQL, Redis, Excel, JIRA, Google Analytics & SEO',
		},
		{
			fieldName: 'Blockchain Tools',
			fieldValue: 'Hardhat, Truffle, MetaMask, Infura, & Alchemy',
		},
		{
			fieldName: 'Other Skills',
			fieldValue: 'Responsive Design, Cross-Browser Compatibility, State Management & API Integration',
		},
		{
			fieldName: 'Interest',
			fieldValue: 'Traveling, Travel Photography, Learning New Technologies',
		},
	],
} as const

// Experience
// Experience
export const experiencesData = {
	title: 'My Experience',
	description:
	  'Seasoned Fullstack Developer with 5+ years of experience crafting dynamic and responsive web applications. Proven expertise in frontend development, with a strong command of HTML, CSS, JavaScript, and modern frameworks like Vue.js and React. Skilled in creating user-centric interfaces and optimizing performance for seamless user experiences.',
	items: [
	  {
		duration: 'April 2025 - Present',
		position: 'Chief Full Stack Developer',
		company: 'Avenue Group, Moscow, Russia (On-site)',
		icon: [
		  React.createElement(FaReact),
		  React.createElement(SiTypescript),
		  React.createElement(FaNodeJs),
		  React.createElement(SiExpress),
		  React.createElement(SiMongodb),
		  React.createElement(SiTailwindcss),
		],
		name: [
		  'React',
		  'TypeScript',
		  'Node.js',
		  'Express',
		  'MongoDB',
		  'Cloudinary',
		  'Tailwind CSS',
		],
	  },
	  {
		duration: 'October 2024 - July 2025',
		position: 'Full-stack Web Developer',
		company: 'Junzi Tech Solutions (Full-time)',
		icon: [
		  React.createElement(SiMongodb),
		  React.createElement(FaNodeJs),
		  React.createElement(FaReact),
		],
		name: ['MongoDB', 'Node.js', 'React'],
	  },
	  {
		duration: 'January 2024 - Present',
		position: 'Frontend Web Developer',
		company: 'Freelancer.com (Remote) — Sana‘a, Yemen',
		icon: [
		  React.createElement(IoLogoJavascript),
		  React.createElement(FaHtml5),
		  React.createElement(FaCss3),
		],
		name: ['JavaScript', 'HTML5', 'CSS3'],
	  },
	],
  } as const
  
  

// Education
export const educationData = {
	title: 'My Education',
	description:
		'Academic foundation in Computer Science with both Bachelor and Master degrees, providing comprehensive knowledge in software development, algorithms, and modern computing technologies.',
	items: [
		{
			institution: 'University of Science and Technology MISIS — Moscow, Russia',
			degree: 'Master in Computer Science',
			duration: '2024–2026',
		},
		{
			institution: 'Ural Federal University — Yekaterinburg, Sverdlovsk Oblast',
			degree: 'Bachelor in Computer Science',
			duration: '2020–2024',
		},
	],
} as const

// Skills
export const skillsData = {
	title: 'My Skills',
	description:
        'React.js, JavaScript, Python, Node.js (Express & MongoDB), HTML5, CSS, Git, TypeScript, PostgreSQL, MongoDB, Machine Learning, Data Visualization, Vue.js, Next.js, Tailwind CSS, Webpack, Figma, Bootstrap, AngularJS, Solidity, Web3, Truffle, Hardhat, MetaMask, Infura, Alchemy, C++, C, Vite, Redis, Excel, JIRA, Google Analytics & SEO.',
	skillList: [
		{
			icon: React.createElement(FaHtml5),
			name: 'HTML5',
		},
		{
			icon: React.createElement(FaCss3),
			name: 'CSS3',
		},
		{
			icon: React.createElement(FaJs),
			name: 'JavaScript',
		},
		{
			icon: React.createElement(SiTypescript),
			name: 'TypeScript',
		},
		{
			icon: React.createElement(FaReact),
			name: 'ReactJS and React Native',
		},
		{
			icon: React.createElement(SiNextdotjs),
			name: 'NextJS',
		},
		{
			icon: React.createElement(SiRedux),
			name: 'Redux',
		},
		{
			icon: React.createElement(SiReactquery),
			name: 'React Query',
		},
		{
			icon: React.createElement(SiStyledcomponents),
			name: 'Styled Components',
		},
		{
			icon: React.createElement(SiTailwindcss),
			name: 'TailwindCSS',
		},
		{
			icon: React.createElement(TbBrandFramerMotion),
			name: 'Framer Motion',
		},
		{
			icon: React.createElement(FaNodeJs),
			name: 'NodeJS',
		},
		{
			icon: React.createElement(SiMongodb),
			name: 'MongoDB',
		},
		{
			icon: React.createElement(SiExpress),
			name: 'Express',
		},
		{
			icon: React.createElement(SiGraphql),
			name: 'GraphQL',
		},
		{
			icon: React.createElement(SiApollographql),
			name: 'Apollo',
		},
	],
} as const

// Projects
export const projects = [

	{
		num: '01',
		category: 'Music',
		title: 'Musicax',
		description:
		  'Music discovery and listening app to explore tracks, artists, and genres with a simple and friendly interface.',
		stack: [
		  { name: 'NextJS' },
		  { name: 'ReactJS' },
		  { name: 'TailwindCSS' },
		],
		image: '/assets/proj_musicax.png', // from images/Capture4.PNG
		live: 'https://music-app-eight-liart.vercel.app/',
		github: 'https://music-app-eight-liart.vercel.app/',
	  },

	  {
		num: '02',
		category: 'E-commerce',
		title: 'Simple E-commerce Website',
		description:
		  'A basic e-commerce website built using modern web technologies to browse products and explore a simple purchase flow.',
		stack: [
		  { name: 'NextJS' },
		  { name: 'ReactJS' },
		  { name: 'TailwindCSS' },
		],
		image: '/assets/proj_shop.png', // from images/Capture.PNG in your HTML
		live: 'https://shop-website-sable.vercel.app/',
		github: 'https://shop-website-sable.vercel.app/',
	  },
	  {
		num: '03',
		category: 'Real Estate',
		title: 'RentHouse Website',
		description:
		  'Find new and featured properties in your local city with a user-friendly interface to search, explore, and connect with listings that suit your needs.',
		stack: [
		  { name: 'NextJS' },
		  { name: 'ReactJS' },
		  { name: 'TailwindCSS' },
		],
		image: '/assets/proj_renthouse.png', // from images/Capture2.PNG
		live: 'https://real-estate-website-ten-lyart.vercel.app/',
		github: 'https://real-estate-website-ten-lyart.vercel.app/',
	  },
	  {
		num: '04',
		category: 'EdTech',
		title: 'Educal - Online Learning Platform',
		description:
		  'Educal is a starter for launching an online learning platform with clean UI and structured course pages.',
		stack: [
		  { name: 'NextJS' },
		  { name: 'ReactJS' },
		  { name: 'TailwindCSS' },
		],
		image: '/assets/proj_educal.png', // from images/Capture3.PNG
		live: 'https://ak-edu-pearl.vercel.app/',
		github: 'https://ak-edu-pearl.vercel.app/',
	  },
	  {
		num: '05',
		category: 'To-do App',
		title: 'To-do App',
		description:
			'A to-do app is a digital tool that helps users manage tasks and boost productivity by allowing them to create, organize, and track tasks with features like reminders, due dates, and progress tracking, all within an intuitive interface.',
		stack: [
			{ name: 'NextJS' },
			{ name: 'ReactJS' },
			{ name: 'Typescript' },
			{ name: 'TailwindCSS' },
			{ name: 'ShadcnUI' },
			{ name: 'OpenAI' },
			{ name: 'Convex' },
			{ name: 'Clerk' },
		],
		image: '/assets/project1.png',
		live: 'https://github.com/kyan9400/todo-app',
		github: 'https://github.com/kyan9400/todo-app',
	},
	  {
		num: '06',
		category: 'Courseware',
		title: 'naumen.scala.course',
		description:
		  'The "naumen.scala.course.2023.spring" course is structured with lectures as HTML presentations in the /lectures/ directory (downloadable for offline viewing). Homework lives in /homeworks/ and was uploaded progressively during the course.',
		stack: [
		  { name: 'Scala' },
		  { name: 'SBT' },
		  { name: 'HTML' },
		  { name: 'CSS' },
		],
		image: '/assets/proj_scala.png',
		live: 'https://github.com/kyan9400/naumen.scala.course.2023.spring',
		github: 'https://github.com/kyan9400/naumen.scala.course.2023.spring',
	  },
	  {
		num: '07',
		category: 'Marketing',
		title: 'Responsive Pricing Page',
		description:
		  'A responsive pricing page for purchasing video-generation credits. Includes multiple plans and a promo-code section, designed to be intuitive on both desktop and mobile.',
		stack: [
		  { name: 'HTML' },
		  { name: 'CSS' },
		  { name: 'JavaScript' },
		  { name: 'Responsive Design' },
		],
		image: '/assets/proj_pricing.png',
		live: 'https://github.com/kyan9400/pricing_page',
		github: 'https://github.com/kyan9400/pricing_page',
	  },
]

