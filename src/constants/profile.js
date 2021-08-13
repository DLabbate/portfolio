import cae from "../assets/logos/cae.jpg";
import genetec from "../assets/logos/genetec.png";
import concordia from "../assets/logos/concordia.jpg";
import pdc from "../assets/logos/pdc.png";
import youtube from "../assets/logos/youtube.png";
import acasa from "../assets/projects/thumbnails/acasa.gif";
import moodAI from "../assets/projects/thumbnails/moodai.jpg";
import bikebuddy from "../assets/projects/thumbnails/bikebuddy2.PNG";
import fastkeys from "../assets/projects/thumbnails/fastkeys.PNG";
import bumpercars from "../assets/projects/thumbnails/bumpercars.png";
import hovercraft from "../assets/projects/thumbnails/hovercraft.mp4";

export const sidebarItems = [
  { label: "About Me", icon: "FiUser" },
  { label: "Education", icon: "FiBook" },
  { label: "Experience", icon: "FiCode" },
  { label: "Projects", icon: "FiGithub" },
  { label: "Accomplishments", icon: "FiAward" },
];

export const education = [
  {
    logoSrc: concordia,
    title: "Bachelor of Engineering — Computer Engineering",
    company: "Concordia University (Montreal, Canada)",
    year: "September 2017 — Present",
    content: [
      "GPA: 4.27/4.30",
      "Member of the Institute for Co-operative Education",
    ],
    skills: [
      "Object Oriented Programming",
      "Data Structures and Algorithms",
      "Operating Systems",
    ],
  },
];

export const workExperience = [
  {
    logoSrc: genetec,
    title: "Software Developer Intern",
    company: "Genetec",
    year: "May 2021 — Present",
    content: [
      "Worked on the backend codebase of a Cloud based video surveillance system",
      "Increased robustness of a push notification service by implementing logic to handle unmanaged camera states",
      "Improved codebase by migrating to a newer supported version of ASP.NET",
      "Implemented coding best practices and design patterns such as publisher—subscriber, dependency injection, mediator, MVC",
    ],
    skills: [
      "C#",
      "ASP.NET",
      "Design Patterns",
      "Microsoft Azure",
      "Microservice Architecture",
      "Git",
      "Agile",
      "Scrum",
    ],
  },
  {
    logoSrc: concordia,
    title: "Research Assistant",
    company: "Concordia University",
    year: "June 2020 — September 2020",
    content: [
      "Participated as a research assistant for a project between Concordia University and Ciena",
      "Scope of project included research into 5G Adaptive Network Slicing under supervision of a Professor",
      "Participated in the research of algorithmic solutions to ensure 5G networks adhere to Service Level Agreements",
    ],
    skills: ["Java", "Git", "Communication Networks and Protocols"],
  },
  {
    logoSrc: cae,
    title: "Software Quality Assurance Intern",
    company: "CAE Healthcare",
    year: "September 2018 — December 2018",
    content: [
      "Executed test runs on medical simulation systems including patient simulation software and augmented reality applications",
      "Routinely followed up with QA progress by testing and closing resolved bugs in Jira. When necessary, informed developers to ensure the issues were corrected",
      "Generated test reports for each release version",
      "Documented test plans and prepared test cases",
      "When writing test cases, performed requirements traceability by ensuring the implementation satisfies all requirements",
      "Participated in the continuous improvement of the quality assurance process",
    ],
    skills: [
      "Quality Assurance",
      "System Testing",
      "Test Cases",
      "Test Plans",
      "Jira",
    ],
  },
];

export const projects = [
  {
    title: "Acasa",
    imageSrc: acasa,
    description:
      "is a simple to use real estate platform that offers the ability to search for homes, organize favorites into different categories, and even create your own listing!",
    link: "https://github.com/DLabbate/real-estate-website",
    skills: [
      "JavaScript",
      "HTML",
      "CSS",
      "React",
      "NodeJS",
      "ExpressJS",
      "MongoDB",
      "AWS",
      "Jest",
      "React Testing Library",
    ],
  },
  {
    title: "Mood.AI",
    imageSrc: moodAI,
    description:
      "is a mental health application for a modern age.  In a team of 4 students, we developed a Cross-Platform app that allows patients with mental health difficulties to enter mood logs, gain insights on how they feel, and share data with psychologists",
    link: "/projects/thumbnails/moodai",
    skills: [
      "JavaScript",
      "React Native",
      "Python",
      "Bluetooth",
      "Raspberry Pi",
    ],
  },
  {
    title: "BikeBuddy",
    imageSrc: bikebuddy,
    description:
      "your personal biking assistant. In a team of 4 students, received 1st place for a design project intended for cyclists seeking to track and improve performance",
    link: "https://github.com/DLabbate/BikeBuddy",
    skills: [
      "Java",
      "Android Studio",
      "Bluetooth",
      "Google Maps API",
      "Software Architecture (MVC)",
    ],
  },
  {
    title: "BumperCars",
    imageSrc: bumpercars,
    description:
      "is a 3D computer game built using OpenGL API. Application includes a user-controlled car that can collide with other cars on the track.",
    link: "https://github.com/DLabbate/OpenGL_CarProject",
    skills: [
      "OpenGL",
      "C++",
      "Computer Graphics",
      "Modeling",
      "Illumination",
      "Shading",
      "Texturing",
      "Shadow Mapping",
      "Fragment Shader",
      "Vertex Shader",
    ],
  },
  {
    title: "Autonomous Hovercraft",
    videoSrc: hovercraft,
    description:
      "Received 1st place for a design project in a team of 3 students. Each team tasked with developing a fully autonomous hovercraft capable of navigating a specified track and surpassing obstacles of height 1 mm to 3 mm",
    link: "/projects/thumbnails/hovercraft",
    skills: [
      "Arduino",
      "Fans",
      "Servos",
      "Ultrasonic Sensors",
      "Infrared Sensors",
    ],
  },
  {
    title: "FastKeys",
    imageSrc: fastkeys,
    description:
      "is a 2D typing game built using the Unity Game Engine. Implemented basic concepts such as using Rigidbody physics, collision detection, user input, and so forth.",
    link: "https://labbgames.itch.io/fastkeys",
    skills: [
      "Unity Game Engine",
      "C#",
      "Rigidbody physics",
      "Collision Detection",
      "User Input",
    ],
  },
];

export const accomplishments = [
  {
    title: "Top Performing Student",
    organization: "Concordia University",
    description:
      "Featured as one of Concordia University's top performing students!",
    year: "2021",
    link: "https://www.concordia.ca/content/shared/en/profiles/ginacody/domenic-labbate.html",
  },
  {
    title: "Dean's List (Tier 1)",
    organization: "Concordia University",
    description:
      "$1000 awarded to students with an annual GPA of at least 4.2/4.3",
    year: "2019, 2020, 2021",
  },
  {
    title: "Knowledge First Scholarship",
    organization: "Concordia University",
    description:
      "Renewable scholarship of $2500 per semester (for a maximum of 8 semesters) in recognition of high academic entrance qualifications for the Fall 2017 semester",
    year: "2017",
  },
];

export const volunter = [
  {
    logoSrc: youtube,
    title: "YouTube Channel",
    company: "YouTube",
    year: "August 2021 — Present",
    content: [
      "Started a YouTube channel with the goal of sharing educational videos",
      "Content includes beginner coding projects with an emphasis on Web and Mobile Technologies",
    ],
    skills: ["Education", "Web", "Mobile"],
  },
  {
    logoSrc: pdc,
    title: "Tutoring",
    company: "Pierre de Coubertin Elementary School",
    year: "2014",
    content: [
      "Volunteered to aid grade 1 students with homework for an hour and a half weekly",
      "Offered help in English, French and Mathematics",
    ],
    skills: ["Education", "English", "French", "Mathematics"],
  },
];

export const technologies = [
  "javascript",
  "html",
  "css",
  "react",
  "nodejs",
  "express",
  "mongodb",
  "csharp",
  "dotnetcore",
  "cplusplus",
  "python",
  "java",
];
