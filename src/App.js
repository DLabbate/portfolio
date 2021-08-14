import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import MoodAi from "./components/pages/MoodAi";

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
      </Router>
    </div>
  );
}

export default App;
