import { Route } from 'react-router';
import {Link} from 'react-router-dom';
<Route path="pokedex/" />

function Home(){
  return (
    <div>
        <h1>Home</h1>
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
export { Home };