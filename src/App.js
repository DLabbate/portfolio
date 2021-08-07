import "./App.css";
import Sidebar from "./components/Sidebar";
import Terminal from "./components/Terminal";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <div className="content">
        <h1> About Me </h1>
        <Terminal />
      </div>
    </div>
  );
}

export default App;
