import { Route } from 'react-router';
import {Link} from 'react-router-dom';
<Route path="pokedex/" />

function Home(){
  return (
    <div className='pixel'>
        <h1 className='center title'>Home</h1>
        <nav>
            <ul>
                <li><Link to="/pokedex">Pokedex</Link></li>
                <li><Link to="/unlocked">Unlocked pokemons</Link></li>
            </ul>
        </nav>
    </div>
  );
}
export { Home };