import "./App.css";
import Experience from "./components/Experience";
import Section from "./components/Section";
import Sidebar from "./components/Sidebar";
import Terminal from "./components/Terminal";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <div className="content">
        <Section title={"About Me"}>
          <Terminal />
        </Section>
        <Section title={"Experience"}>
          <Experience />
          <Experience />
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
