import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import { Home } from "../pages";

function App(props) {
  return (
        <Router>
            <Switch>
              <Route exact path="/"> //ici on met l'URL dans le navigateur
                <Home /> //ici on donne la page à afficher en fonction de cette URL
              </Route>
              <Route path="/pokedex">
                <About />
              </Route>
              <Route path="/pokemon">
                <Dashboard />
              </Route>
            </Switch>
        </Router>
  );
}

export default App;