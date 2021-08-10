import "./App.css";
import Experience from "./components/Experience";
import Section from "./components/wrappers/Section";
import Sidebar from "./components/navigation/Sidebar";
import Terminal from "./components/Terminal";
import Project from "./components/Project";
import {
  sidebarItems,
  education,
  workExperience,
  projects,
} from "./constants/profile";

function App() {
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
