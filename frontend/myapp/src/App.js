import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import { Home } from "./pages/home";
import { Pokedex } from "./pages/pokedex";
import { Pokemons } from "./pages/pokemons";
import { Manage } from "./pages/manage";


function App(props) {
  return (
    <Router>
        <Switch>
          <Route exact path="/">
            <Home /> 
          </Route>
          <Route path="/pokedex">
            <Pokedex />
          </Route>
          <Route path="/unlocked">
            <Pokemons />
          </Route>
          <Route path="/manage">
            <Manage />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;