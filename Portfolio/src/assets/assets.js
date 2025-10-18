import { FaLightbulb, FaPaintBrush, FaCode, FaReact, FaServer, FaMobileAlt, FaTools, FaNodeJs, FaStripe, FaVuejs, FaFire, FaDatabase, FaCloud, FaRobot } from 'react-icons/fa';

import profileImg from '../assets/profile.jpg';
import projectImg1 from '../assets/amrr.png';
import projectImg2 from '../assets/MakePost.png';
import projectImg3 from '../assets/marble.png';
import projectImg4 from '../assets/bankit.png';
import projectImg5 from '../assets/SPS.png';
import projectImg6 from '../assets/Tic_tac.png';
import projectImg7 from '../assets/GMN.png';
import LogoImg from '../assets/Main_logo.jpg'

import cv from "../assets/cv.pdf";

export const assets = {
    profileImg,
    cv,
    LogoImg
}




export const skills = [
  {
    title: 'Frontend Development',
    icon: FaReact,
    description: 'Building responsive and interactive user interfaces with modern frameworks.',
    tags: ["HTML",'TELWIND CSS', 'JAVASCRIPT','BOOTSTRAP','REACT']
  },
  {
    title: 'Backend Development',
    icon: FaServer,
    description: 'Creating robust server-side applications and RESTful APIs.',
    tags: ['Node.js', 'Express','Php']
  },
  {
    title: 'Database Management',
    icon: FaDatabase,
    description: 'Designing and optimizing databases for performance and scalability.',
    tags: ['MongoDB','MySQL', ]
  },
  // {
  //   title: 'Tools & Technologies',
  //   icon: FaTools,
  //   description: 'Essential tools and technologies I use in my development workflow.',
  //   tags: ['Git & GitHub', 'Figma',]
  // }
];



export const projects = [
  {
    title: "Mango selling Website",
    description: "A simple, efficient website for mango harvesting and direct sales",
    image: projectImg1,
    tech: ["html", "Css", "Javascript", "Php" ,"MySQL"],
    icons: [FaReact, FaNodeJs, FaDatabase , FaStripe],
    demo: "#",
    code: "#",
  },
  {
    title: "SPS Game",
    description: "A playful web version of the iconic Stone Paper Scissors game",
    image: projectImg5,
    tech: ["Vue.js", "Firebase", "Tailwind CSS", "WebSockets"],
    icons: [FaVuejs, FaFire, FaCloud , FaDatabase],
    demo: "#",
    code: "#",
  },
  {
    title: "MakePost",
    description: "MakePOST is a simple web application that allows users to create, edit, like, and delete posts. It includes user authentication, secure password handling, and a clean, responsive interface.",
    image: projectImg2,
    tech: ["Html", "Tailwind CSS", "Node.js", "Express","MongoDB"],
    icons: [FaReact, FaDatabase],
    demo: "#",
    code: "#",
  },
  {
    title: "Marble Supply website",
    description: "website designed for a marble supply company in India. It highlights premium marble collections, showcases services, and features elegant layouts with smooth navigation for an authentic and luxurious user experience.",
    image: projectImg3,
    tech: ["Next.js", "Tailwind CSS", "Framer Motion", "Markdown"],
    icons: [FaReact, FaCloud],
    demo: "#",
    code: "#",
  },
  {
    title: "Bankit",
    description: "Building a seamless online banking experience with HTML, CSS, and JavaScript",
    image: projectImg4,
    tech: ["Socket.IO", "React", "Node.js", "MongoDB"],
    icons: [FaReact, FaNodeJs, FaDatabase ],
    demo: "#",
    code: "#",
  },
  {
    title: "🎯 Guess My Number Game",
    description: "A fun interactive number guessing game built with HTML, CSS, and JavaScript where players try to guess a random number between 1 and 20.",
    image: projectImg7,
    tech: ["Html", "Css", "JavaScript",],
    icons: [FaRobot, FaReact, FaCloud],
    demo: "#",
    code: "#",
  },
   {
    title: "🎮 Tic Tac Toe Game",
    description: "A simple and interactive Tic Tac Toe game . Players can enjoy a smooth two-player experience with dynamic win detection, reset, and new game features.",
    image: projectImg6,
    tech: ["Html", "Css", "JavaScript",],
    icons: [FaRobot, FaReact, FaCloud],
    demo: "#",
    code: "#",
  },
    

];


export const Educationdata= [
  {
    study: "Secondary Education",
    duration: "2018-2019",
    organization:"Azamgarh,Uttar Pradesh",
    grad: "percentage 80%"
  },
  {
 study: "Diploma in Computer Science & engineering",
    duration: "2019-2022",
    organization:"Government Polytechnic College , Kota",
    grad: "percentage 80%"
    },
  {
 study: "Bachelor of Technology in Computer Science & engineering",
    duration: "2022-2025",
    organization:"Rajasthan Technical University Kota , Rajasthan",
    grad: "CGPA : 8.4"
  }
];
