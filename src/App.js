import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Movies from "./pages/Movies";
import Home from "./pages/Home";
import MainNav from "./components/MainNav";
function App() {
  return (
    <Router>
      <MainNav />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/movies" exact>
          <Movies />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
