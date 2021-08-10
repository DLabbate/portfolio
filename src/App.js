import "./App.css";
import Experience from "./components/Experience";
import Section from "./components/wrappers/Section";
import Sidebar from "./components/navigation/Sidebar";
import Terminal from "./components/Terminal";
import cae from "./assets/logos/cae.jpg";
import genetec from "./assets/logos/genetec.png";
import concordia from "./assets/logos/concordia.jpg";
import Project from "./components/Project";
import acasa from "./assets/projects/acasa.gif";
import moodAI from "./assets/projects/moodai.jpg";
import bikebuddy from "./assets/projects/bikebuddy.jpg";
import fastkeys from "./assets/projects/fastkeys.PNG";
import bumpercars from "./assets/projects/bumpercars.png";
import hovercraft from "./assets/projects/hovercraft.mp4";

function App() {
  const sidebarItems = [
    { label: "About Me", icon: "FiUser" },
    { label: "Education", icon: "FiBook" },
    { label: "Experience", icon: "FiCode" },
    { label: "Projects", icon: "FiGithub" },
    { label: "Accomplishments", icon: "FiAward" },
  ];

  const education = [
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

  const workExperience = [
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

  const projects = [
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
      link: "/projects/hovercraft",
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
      skills: ["Unity API", "C#"],
    },
  ];
  return (
    <div className="App">
      <Sidebar sidebarItems={sidebarItems} />
      <div className="content">
        <Section title={"About Me"}>
          <Terminal />
        </Section>
        <Section title={"Education"}>
          {education.map((item) => {
            return <Experience {...item} />;
          })}
        </Section>
        <Section title={"Experience"}>
          {workExperience.map((item) => {
            return <Experience {...item} />;
          })}
        </Section>
        <Section title={"Projects"}>
          <div className="projects-container">
            {projects.map((item) => {
              return <Project {...item} />;
            })}
          </div>
        </Section>
        <Section title={"Accomplishments"}>
          <p>Hello</p>
        </Section>
      </div>
    </div>
  );
}

export default App;
