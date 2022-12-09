import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import { Home } from "./pages/home";
import { Pokedex } from "./pages/pokedex";
import { Pokemons } from "./pages/pokemons";


function App(props) {
  return (
        <Router>
              <Route exact path="/">
                <Home /> 
              </Route>
              <Route path="/pokedex">
                <Pokedex />
              </Route>
              <Route path="/unlocked">
                <Pokemons />
              </Route>
        </Router>
  );
}

export default App;