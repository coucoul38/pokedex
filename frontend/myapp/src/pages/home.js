import { Route } from 'react-router';
import {Link} from 'react-router-dom';
<Route path="pokedex/" />

function Home(){
  return (
    <div className='pixel'>
        <h1 className='center title'>Home</h1>
        <nav>
            <ul>
                <li><Link to="/" className='nav'>Homepage</Link></li>
                <li><Link to="/pokedex" className='nav'>Pokedex</Link></li>
                <li><Link to="/unlocked" className='nav'>Unlocked</Link></li>
                <li><Link to="/manage" className='nav'>Manage pokemons</Link></li>
            </ul>
        </nav>
    </div>
  );
}
export { Home };