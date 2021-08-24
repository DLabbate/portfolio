import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import MoodAi from "./components/pages/MoodAi";
import Hovercraft from "./components/pages/Hovercraft";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/projects/moodai" exact>
            <MoodAi />
          </Route>
        </Switch>
        <Route path="/projects/hovercraft" exact>
          <Hovercraft />
        </Route>
      </Router>
    </div>
  );
}

export default App;
