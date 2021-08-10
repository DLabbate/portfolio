import "./App.css";
import Experience from "./components/Experience";
import Section from "./components/Section";
import Sidebar from "./components/Sidebar";
import Terminal from "./components/Terminal";
import cae from "./assets/logos/cae.jpg";
import genetec from "./assets/logos/genetec.png";
import concordia from "./assets/logos/concordia.jpg";

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
          <p>Hello</p>
        </Section>
        <Section title={"Accomplishments"}>
          <p>Hello</p>
        </Section>
      </div>
    </div>
  );
}

export default App;
