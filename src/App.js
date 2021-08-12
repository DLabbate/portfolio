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
  accomplishments,
  volunter,
} from "./constants/profile";
import Accomplishment from "./components/Accomplishment";

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
          <div className="accomplishments-container">
            {accomplishments.map((item) => {
              return <Accomplishment {...item} />;
            })}
          </div>
        </Section>
        <Section title={"Volunteer"}>
          <div className="accomplishments-container">
            {volunter.map((item) => {
              return <Experience {...item} />;
            })}
          </div>
        </Section>
      </div>
    </div>
  );
}

export default App;
