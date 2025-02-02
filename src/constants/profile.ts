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

export const TECHNOLOGIES: ReadonlyArray<string> = [
  "react",
  "reactnative",
  "reactquery",
  "nextjs",
  "jest",
  "rtl",
  "cypress",
  "typescript",
  "javascript",
  "html",
  "css",
  "tailwind",
  "nodejs",
  "express",
  "mongodb",
  "firebase",
  "csharp",
  "dotnet",
  "azure",
  "aws",
  "docker",
  "kubernetes",
  "camunda",
  "python",
  "cpp",
  "arduino",
  "raspberrypi",
  "bluetooth",
  "java",
  "androidstudio",
  "googlemaps",
  "opengl",
  "unity",
  "jira",
  "confluence",
  "opsgenie",
];

export type Technology = (typeof TECHNOLOGIES)[number];

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
  from: string; // ISO date string for the start date
  to: string | "Present"; // ISO date string or "Present" for ongoing events
}>;

export type TimelineEntry = Readonly<{
  title: string;
  organization: Organization;
  timeframe: TimeFrame;
  content: string[];
  technologies: Technology[];
}>;

export const NAME: string = "Domenic Labbate";

export const ABOUT: string = `Hello World!

My name is Domenic.

Here are some things you should know about me.

🤓 I am a Computer Engineer.
📚 I have a passion for learning & self improvement.
📝 I enjoy writing documentation to clarify complex technical concepts.`;

export const SOCIAL_PLATFORMS: ReadonlyArray<string> = [
  "github",
  "youtube",
  "linkedin",
];

export type SocialPlatform = (typeof SOCIAL_PLATFORMS)[number];

export type SocialMedia = {
  platform: SocialPlatform;
  link: string;
};

export const SOCIAL_MEDIA: ReadonlyArray<SocialMedia> = [
  {
    platform: "linkedin",
    link: "https://www.linkedin.com/in/domenic-labbate",
  },
  {
    platform: "youtube",
    link: "https://www.youtube.com/@domtheengineer",
  },
  {
    platform: "github",
    link: "https://github.com/DLabbate",
  },
];

export const EXPERIENCE: ReadonlyArray<TimelineEntry> = [
  {
    title: "Software Developer II",
    organization: {
      name: "Genetec",
      logo: genetec,
      link: "https://www.genetec.com",
    },
    timeframe: {
      from: "2023-01",
      to: "Present",
    },
    content: [
      "Architected distributed systems, improving maintainability through smaller, focused microservices",
      "Reduced latency of a critical microservice by 70% using Redis distributed caching",
      "Leveraged event-driven communication between microservices for scalability and reliability",
      "Increased resilience of complex workflows with retry mechanisms and idempotency strategies",
      "Designed REST APIs with adherence to standards such as versioning, ensuring backwards compatibility",
      "Enhanced code quality and readability by implementing a state machine for predictable state management",
      "Mentored junior engineers, providing guidance on design patterns and architectural principles",
    ],
    technologies: [
      "csharp",
      "dotnet",
      "azure",
      "docker",
      "kubernetes",
      "mongodb",
      "typescript",
      "react",
      "reactquery",
      "jest",
      "rtl",
      "confluence",
      "opsgenie",
    ],
  },
  {
    title: "Software Developer I",
    organization: {
      name: "Genetec",
      logo: genetec,
      link: "https://www.genetec.com",
    },
    timeframe: {
      from: "2022-02",
      to: "2023-01",
    },
    content: [
      "Refactored frontend codebase in React to utilize compound components, enhancing code modularity and reusability",
      "Migrated to React Query for improved data fetching strategies, optimizing performance and reducing network requests",
      "Implemented resource-based authorization middlewares using .NET, ensuring secure access control and enforcing fine-grained permissions",
      "Contributed frequently to written documentation artefacts, fostering collaboration and knowledge sharing",
    ],
    technologies: [
      "csharp",
      "dotnet",
      "azure",
      "docker",
      "kubernetes",
      "mongodb",
      "typescript",
      "react",
      "reactquery",
      "jest",
      "rtl",
      "confluence",
      "opsgenie",
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
      from: "2021-05",
      to: "2021-08",
    },
    content: [
      "Worked on the backend codebase of a Cloud-based video surveillance system",
      "Increased system robustness by ensuring compatibility with new camera states",
      "Maintained alignment with current industry standards by migrating to a newer supported version of .NET",
      "Implemented coding best practices and design patterns such as publisher-subscriber, dependency injection, mediator",
    ],
    technologies: ["csharp", "dotnet", "azure"],
  },
  {
    title: "Research Assistant",
    organization: {
      name: "Concordia University",
      logo: concordia,
      link: "https://www.concordia.ca",
    },
    timeframe: {
      from: "2020-06",
      to: "2020-09",
    },
    content: [
      "Participated in the research of algorithmic solutions to ensure 5G networks adhere to Service Level Agreements",
      "Engaged in reading various academic papers and research materials, discussing key insights with Professor and colleagues",
      "Orchestrated complex business workflows in Java using Camunda BPM, integrating multiple systems to streamline and automate processes",
    ],
    technologies: ["java", "camunda"],
  },
  {
    title: "Quality Assurance Intern",
    organization: {
      name: "CAE Healthcare",
      logo: cae,
      link: "https://www.cae.com",
    },
    timeframe: {
      from: "2018-09",
      to: "2018-12",
    },
    content: [
      "Executed test runs on medical simulation systems, ensuring comprehensive test coverage",
      "Routinely monitored quality assurance progress by tracking issues and communicating with developers for prompt issue resolution",
      "Generated detailed test reports and documentation for each release, providing valuable insights for improvements",
      "Prepared thorough test plans and test cases, verifying compliance with requirements",
    ],
    technologies: ["jira"],
  },
];

export const EDUCATION: ReadonlyArray<TimelineEntry> = [
  {
    title: "Computer Engineering",
    organization: {
      name: "Concordia University",
      logo: concordia,
      link: "https://www.concordia.ca",
    },
    timeframe: {
      from: "2017-09",
      to: "2021-12",
    },
    content: [
      "GPA: 4.27/4.30",
      "Member of the Institute for Co-operative Education",
    ],
    technologies: [
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
    technologies: ["react", "javascript", "tailwind", "jest", "rtl"],
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
      "jest",
      "html",
      "css",
      "nodejs",
      "express",
      "mongodb",
      "aws",
    ],
    link: "https://github.com/DLabbate/real-estate-website",
  },
  {
    image: moodai,
    title: "Mood.AI",
    description:
      "is a mental health application for a modern age. In a team of 5 students, we developed a Cross-Platform mobile app that allows patients with mental health difficulties the ability to enter mood logs, gain insights on how they feel, and share data with psychologists.",
    technologies: [
      "reactnative",
      "javascript",
      "python",
      "bluetooth",
      "raspberrypi",
    ],
    link: "/portfolio/projects/moodai",
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
    technologies: ["cpp", "opengl"],
    link: "https://github.com/DLabbate/OpenGL_CarProject",
  },
  {
    image: hovercraft,
    title: "Autonomous Hovercraft",
    description:
      "received 1st place for a design project in a team of 3 students. Each team was tasked with building a fully autonomous hovercraft capable of navigating a specified track and surpassing obstacles of height 1mm to 3mm.",
    technologies: ["arduino"],
    link: "/portfolio/projects/hovercraft",
  },
  {
    image: fastkeys,
    title: "FastKeys",
    description:
      "is a 2D typing game built using the Unity Game Engine. Implemented basic concepts such as Rigidbody physics, collision detection, and user input.",
    technologies: ["unity", "csharp"],
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
