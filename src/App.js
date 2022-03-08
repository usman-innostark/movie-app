import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Movies from "./pages/Movies";
import Home from "./pages/Home";
import MainNav from "./components/MainNav";
import Form from './pages/Form'
import OfflineMovies from "./pages/OfflineMovies";

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
        <Route path="/add-movies" exact>
          <Form />
        </Route>
        <Router path="/offline-movies">
          <OfflineMovies/>
        </Router>
      </Switch>
    </Router>
  );
}

export default App;
