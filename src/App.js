import "./App.css";
import Experience from "./components/Experience";
import Section from "./components/Section";
import Sidebar from "./components/Sidebar";
import Terminal from "./components/Terminal";

function App() {
  const sidebarItems = [
    { label: "About Me", icon: "FiUser" },
    { label: "Education", icon: "FiBook" },
    { label: "Experience", icon: "FiCode" },
    { label: "Projects", icon: "FiGithub" },
    { label: "Accomplishments", icon: "FiAward" },
  ];

  const workExperience = [
    {
      logoSrc:
        "data:image/jpeg;base64,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",
      title: "Software Developer Intern",
      company: "Genetec",
      year: "May 2021 - Present",
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
      logoSrc:
        "data:image/png;base64,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",
      title: "Research Assistant",
      company: "Concordia University",
      year: "June 2020 - September 2020",
      content: [
        "Participated as a research assistant for a project between Concordia University and Ciena",
        "Scope of project included research into 5G Adaptive Network Slicing under supervision of a Professor",
        "Participated in the research of algorithmic solutions to ensure 5G networks adhere to Service Level Agreements",
      ],
      skills: ["Java", "Git", "Communication Networks and Protocols"],
    },
    {
      logoSrc:
        "https://cdn.theorg.com/98409e55-4f9c-4f73-b36a-1fa8b26bc056_medium.jpg",
      title: "Software Quality Assurance Intern",
      company: "CAE Healthcare",
      year: "September 2018 - December 2018",
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
