import { Route } from 'react-router';
import {Link} from 'react-router-dom';
<Route path="pokedex/pokedex" />

function Pokedex(){
  return (
    <div>
        <h1>Pokedex</h1>
        <nav>
            <ul>
                <li><Link to="/">Homepage</Link></li>
                <li><Link to="/pokedex">Pokedex</Link></li>
                <li><Link to="/unlocked">Unlocked pokemons</Link></li>
            </ul>
        </nav>
    </div>
  );
}
export { Pokedex };