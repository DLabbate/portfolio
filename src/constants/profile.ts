import acasa from "public/projects/acasa.png";
import moodai from "public/projects/moodai.jpg";
import bikebuddy from "public/projects/bikebuddy.png";
import bumpercars from "public/projects/bumpercars.png";
import hovercraft from "public/projects/hovercraft.jpg";
import fastkeys from "public/projects/fastkeys.png";
import stockdasboard from "public/projects/stockdashboard.png";
import spacestagram from "public/projects/spacestagram.png";
import genetec from "public/organizations/genetec.png";
import concordia from "public/organizations/concordia.png";
import cae from "public/organizations/cae.png";
import { type StaticImageData } from "next/image";
import { Technology } from "@/components/technology-badge";

export type Project = Readonly<{
  title: string;
  description: string;
  technologies: Technology[];
  image: StaticImageData;
  link: string;
}>;

export type Accomplishment = Readonly<{
  title: string;
  organization: string;
  description: string;
  years: number[];
  link: string;
}>;

export type Organization = Readonly<{
  name: string;
  logo: StaticImageData;
  link: string;
}>;

export type TimeFrame = Readonly<{
  from: Date;
  to: Date | "Present";
}>;

export type TimelineEntry = Readonly<{
  title: string;
  organization: Organization;
  timeframe: TimeFrame;
  content: string[];
  technologies: Technology[];
}>;

export const EXPERIENCE: ReadonlyArray<TimelineEntry> = [
  {
    title: "Software Developer II",
    organization: {
      name: "Genetec",
      logo: genetec,
      link: "https://www.genetec.com",
    },
    timeframe: {
      from: new Date(2022, 1),
      to: "Present",
    },
    content: [
      "Refactored frontend codebase in React to utilize compound components, enhancing code modularity and reusability",
      "Migrated codebase to React Query, improving data fetching and caching mechanisms, resulting in enhanced performance and reduced network requests",
      "Developed software applications utilizing microservices and implemented an event-driven architecture using a service bus for seamless communication and scalability",
      "Implemented resource-based authorization middlewares using .NET, ensuring secure access control and enforcing fine-grained permissions",
    ],
    technologies: [
      "react",
      "reactquery",
      "jest",
      "rtl",
      "csharp",
      "dotnet",
      //"ASP.NET",
      //"Design Patterns",
      "azure",
      "mongodb",
      //"Microservice Architecture",
      //"Git",
      //"Agile",
      //"Scrum",
    ],
  },
  {
    title: "Software Developer Intern",
    organization: {
      name: "Genetec",
      logo: genetec,
      link: "https://www.genetec.com",
    },
    timeframe: {
      from: new Date(2021, 4),
      to: new Date(2021, 7),
    },
    content: [
      "Worked on the backend codebase of a Cloud based video surveillance system",
      "Increased robustness of a push notification service by implementing logic to handle unmanaged camera states",
      "Improved codebase by migrating to a newer supported version of ASP.NET",
      "Implemented coding best practices and design patterns such as publisher-subscriber, dependency injection, mediator, MVC",
    ],
    technologies: [
      "csharp",
      "dotnet",
      //"ASP.NET",
      //"Design Patterns",
      "azure",
      //"Microservice Architecture",
      //"Git",
      //"Agile",
      //"Scrum",
    ],
  },
  {
    title: "Research Assistant",
    organization: {
      name: "Concordia University",
      logo: concordia,
      link: "https://www.concordia.com",
    },
    timeframe: {
      from: new Date(2020, 5),
      to: new Date(2020, 8),
    },
    content: [
      "Participated as a research assistant for a project between Concordia University and Ciena",
      "Scope of project included research into 5G Adaptive Network Slicing under supervision of a Professor",
      "Participated in the research of algorithmic solutions to ensure 5G networks adhere to Service Level Agreements",
    ],
    technologies: ["java"],
  },
  {
    title: "Quality Assurance Intern",
    organization: {
      name: "CAE Healthcare",
      logo: cae,
      link: "https://www.cae.com",
    },
    // year: "September 2018 — December 2018",
    timeframe: {
      from: new Date(2018, 8),
      to: new Date(2018, 11),
    },
    content: [
      "Executed test runs on medical simulation systems including patient simulation software and augmented reality applications",
      "Routinely followed up with QA progress by testing and closing resolved bugs in Jira. When necessary, informed developers to ensure the issues were corrected",
      "Generated test reports for each release version",
      "Documented test plans and prepared test cases",
      "When writing test cases, performed requirements traceability by ensuring the implementation satisfies all requirements",
      "Participated in the continuous improvement of the quality assurance process",
    ],
    technologies: [
      // "Quality Assurance",
      // "System Testing",
      // "Test Cases",
      // "Test Plans",
      "jira",
    ],
  },
];

export const EDUCATION: ReadonlyArray<TimelineEntry> = [
  {
    title: "Computer Engineering",
    organization: {
      name: "Concordia University",
      logo: concordia,
      link: "https://www.concordia.com",
    },
    timeframe: {
      from: new Date(2017, 8),
      to: new Date(2021, 11),
    },
    content: [
      "GPA: 4.27/4.30",
      "Member of the Institute for Co-operative Education",
    ],
    technologies: [
      // "Object Oriented Programming",
      // "Data Structures & Algorithms",
      // "Operating Systems",
      "cpp",
      "java",
      "python",
      "javascript",
      "reactnative",
      "arduino",
      "raspberrypi",
      "androidstudio",
      "mongodb",
      "firebase",
    ],
  },
];

export const PROJECTS: ReadonlyArray<Project> = [
  {
    image: stockdasboard,
    title: "Stock Dashboard",
    description:
      "is a platform where users can search for a stock, get details of a stock, and view historical data.",
    technologies: ["react", "javascript", "tailwind"],
    link: "https://github.com/DLabbate/stock-dashboard",
  },
  {
    image: spacestagram,
    title: "Spacestagram",
    description:
      "is a platform where users can view images from NASA's Astronomy API, and “like” and “unlike” their favourite images.",
    technologies: ["react", "javascript", "jest", "rtl", "tailwind"],
    link: "https://github.com/DLabbate/spacestagram",
  },
  {
    image: acasa,
    title: "Acasa",
    description:
      "is a simple real estate platform that offers the ability to search for homes, organize favorites into different categories, and even create your own listing!",
    technologies: [
      "react",
      "javascript",
      "html",
      "css",
      "nodejs",
      "express",
      "mongodb",
      "aws",
      "jest",
    ],
    link: "https://github.com/DLabbate/real-estate-website",
  },
  {
    image: moodai,
    title: "Mood.AI",
    description:
      "is a mental health application for a modern age.  In a team of 5 students, we developed a Cross-Platform mobile app that allows patients with mental health difficulties the ability to enter mood logs, gain insights on how they feel, and share data with psychologists.",
    technologies: [
      "reactnative",
      "javascript",
      "python",
      "bluetooth",
      "raspberrypi",
    ],
    link: "https://labbgames.itch.io/fastkeys",
  },
  {
    image: bikebuddy,
    title: "BikeBuddy",
    description:
      "is a personal biking assistant. In a team of 4 students, we received 1st place for a mobile design project. Our platform is intended for cyclists to track and improve performance.",
    technologies: ["androidstudio", "java", "bluetooth", "googlemaps"],
    link: "https://github.com/DLabbate/BikeBuddy",
  },
  {
    image: bumpercars,
    title: "BumperCars",
    description:
      "is a 3D computer game built using OpenGL API. The application includes a user-controlled car that can collide with other cars on the track.",
    technologies: [
      "cpp",
      "opengl",
      //   "Computer Graphics",
      //   "Modeling",
      //   "Illumination",
      //   "Shading",
      //   "Texturing",
      //   "Shadow Mapping",
    ],
    link: "https://github.com/DLabbate/OpenGL_CarProject",
  },
  {
    image: hovercraft,
    title: "Autonomous Hovercraft",
    description:
      "received 1st place for a design project in a team of 3 students. Each team was tasked with building a fully autonomous hovercraft capable of navigating a specified track and surpassing obstacles of height 1mm to 3mm.",
    technologies: [
      "arduino",
      //   "Fans",
      //   "Servos",
      //   "Ultrasonic Sensors",
      //   "Infrared Sensors",
    ],
    link: "https://labbgames.itch.io/fastkeys",
  },
  {
    image: fastkeys,
    title: "FastKeys",
    description:
      "is a 2D typing game built using the Unity Game Engine. Implemented basic concepts such as Rigidbody physics, collision detection, user input, and so forth.",
    technologies: [
      "unity",
      "csharp",
      //   "Rigidbody physics",
      //   "Collision Detection",
      //   "User Input",
    ],
    link: "https://labbgames.itch.io/fastkeys",
  },
];

export const ACCOMPLISHMENTS: ReadonlyArray<Accomplishment> = [
  {
    title: "Top Performing Student",
    organization: "Concordia University",
    description:
      "Featured as one of Concordia University's top performing students!",
    years: [2021],
    link: "https://www.concordia.ca/content/shared/en/profiles/ginacody/domenic-labbate.html",
  },
  {
    title: "Dean's List (Tier 1)",
    organization: "Concordia University",
    description:
      "$1000 awarded to students with an annual GPA of at least 4.2/4.3",
    years: [2019, 2020, 2021, 2022],
    link: "https://www.concordia.ca/content/shared/en/profiles/ginacody/domenic-labbate.html",
  },
  {
    title: "Knowledge First Scholarship",
    organization: "Concordia University",
    description:
      "Renewable scholarship of $2500 per semester (total of 8 semesters) in recognition of high academic entrance qualifications",
    years: [2017],
    link: "https://www.concordia.ca/content/shared/en/profiles/ginacody/domenic-labbate.html",
  },
];
