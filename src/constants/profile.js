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
import hovercraft from "../assets/projects/thumbnails/hovercraft-trimmed.mp4";

export const sidebarItems = [
  { label: "About Me", icon: "FiUser", to: "about-me" },
  { label: "Education", icon: "FiBook", to: "education" },
  { label: "Experience", icon: "FiCode", to: "experience" },
  { label: "Projects", icon: "FiGithub", to: "projects" },
  { label: "Accomplishments", icon: "FiAward", to: "accomplishments" },
  { label: "Volunteer", icon: "FiHeart", to: "volunteer" },
  { label: "Contact", icon: "FiLink", to: "contact" },
];

// Links are relative to the root
export const sidebarItemsRootLinks = [
  { label: "About Me", icon: "FiUser", link: "/#about-me" },
  { label: "Education", icon: "FiBook", link: "/#education" },
  { label: "Experience", icon: "FiCode", link: "/#experience" },
  { label: "Projects", icon: "FiGithub", link: "/#projects" },
  { label: "Accomplishments", icon: "FiAward", link: "/#accomplishments" },
  { label: "Volunteer", icon: "FiHeart", link: "/#volunteer" },
  { label: "Contact", icon: "FiLink", link: "/#contact" },
];

export const education = [
  {
    logoSrc: concordia,
    title: "Computer Engineering",
    company: "Concordia University",
    url: "https://www.concordia.ca/",
    year: "September 2017 — Present",
    content: [
      "GPA: 4.27/4.30",
      "Member of the Institute for Co-operative Education",
    ],
    skills: [
      "Object Oriented Programming",
      "Data Structures & Algorithms",
      "Operating Systems",
    ],
  },
];

export const workExperience = [
  {
    logoSrc: genetec,
    title: "Software Developer Intern",
    company: "Genetec",
    url: "https://www.genetec.com/",
    year: "May 2021 — August 2021",
    content: [
      "Worked on the backend codebase of a Cloud based video surveillance system",
      "Increased robustness of a push notification service by implementing logic to handle unmanaged camera states",
      "Improved codebase by migrating to a newer supported version of ASP.NET",
      "Implemented coding best practices and design patterns such as publisher-subscriber, dependency injection, mediator, MVC",
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
    url: "https://www.concordia.ca/",
    year: "June 2020 — September 2020",
    content: [
      "Participated as a research assistant for a project between Concordia University and Ciena",
      "Scope of project included research into 5G Adaptive Network Slicing under supervision of a Professor",
      "Participated in the research of algorithmic solutions to ensure 5G networks adhere to Service Level Agreements",
    ],
    skills: ["Java", "Git", "Communication Networks & Protocols"],
  },
  {
    logoSrc: cae,
    title: "Quality Assurance Intern",
    company: "CAE Healthcare",
    year: "September 2018 — December 2018",
    url: "https://www.cae.com/",
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
      "is a simple real estate platform that offers the ability to search for homes, organize favorites into different categories, and even create your own listing!",
    link: "https://github.com/DLabbate/real-estate-website",
    skills: [
      "JavaScript",
      "HTML",
      "CSS",
      "React",
      "NodeJS",
      "Express",
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
      "is a mental health application for a modern age.  In a team of 5 students, we developed a Cross-Platform mobile app that allows patients with mental health difficulties the ability to enter mood logs, gain insights on how they feel, and share data with psychologists.",
    link: "/projects/moodai",
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
      "is a personal biking assistant. In a team of 4 students, we received 1st place for a mobile design project. Our platform is intended for cyclists to track and improve performance.",
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
      "is a 3D computer game built using OpenGL API. The application includes a user-controlled car that can collide with other cars on the track.",
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
    ],
  },
  {
    title: "Autonomous Hovercraft",
    videoSrc: hovercraft,
    description:
      "received 1st place for a design project in a team of 3 students. Each team was tasked with building a fully autonomous hovercraft capable of navigating a specified track and surpassing obstacles of height 1mm to 3mm.",
    link: "/",
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
      "is a 2D typing game built using the Unity Game Engine. Implemented basic concepts such as Rigidbody physics, collision detection, user input, and so forth.",
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
      "Renewable scholarship of $2500 per semester (total of 8 semesters) in recognition of high academic entrance qualifications",
    year: "2017",
  },
];

export const volunter = [
  {
    logoSrc: youtube,
    title: "Dom the Engineer",
    company: "YouTube",
    url: "https://www.youtube.com/channel/UCPoHCHX-RCL8MzlOIJ7l9Nw",
    year: "August 2021 — Present",
    content: [
      "Started a YouTube channel with the goal of sharing educational videos",
      "Content includes beginner coding projects with an emphasis on Web and Mobile technologies",
    ],
    skills: ["Education", "Web", "Mobile"],
  },
  {
    logoSrc: pdc,
    title: "Tutoring",
    company: "Pierre de Coubertin",
    url: "https://pierredecoubertin.emsb.qc.ca/pdc",
    year: "2014",
    content: [
      "Volunteered to aid grade 1 students with homework for an hour and a half per week",
      "Offered help in English, French, and Mathematics",
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
  "azure",
];

export const contact = [
  {
    icon: "FiGithub",
    url: "https://github.com/DLabbate",
  },
  {
    icon: "FiLinkedin",
    url: "https://www.linkedin.com/in/domenic-labbate",
  },
  {
    icon: "FiYoutube",
    url: "https://www.youtube.com/channel/UCPoHCHX-RCL8MzlOIJ7l9Nw",
  },
];
