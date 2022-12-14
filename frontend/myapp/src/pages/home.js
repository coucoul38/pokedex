import { Route } from 'react-router';
import {Link} from 'react-router-dom';
<Route path="pokedex/" />

function Home(){
  return (
    <div className='pixel'>
        <h1 className='center title'>Home</h1>
        <nav>
            <ul className="ul-nav">
                <li><Link to="/">Homepage</Link></li>
                <li><Link to="/pokedex">Pokedex</Link></li>
                <li><Link to="/unlocked">Unlocked</Link></li>
                <li><Link to="/manage">Manage pokemons</Link></li>
            </ul>
        </nav>
        <div className='center row'>
          <h2>Hi, i'm prof Oak</h2>
          <img src='./img/profChech.png' alt='Prof. Oak'></img>
          <p>Welcome to the pokedex.<br></br>
            In the <Link to='/pokedex'>Pokedex page</Link>, you can view all pokemons and catch them.<br></br>
            Once you've catched a pokemon, it will appear in the <Link to='/unlocked'>Unlocked page</Link> where you can release them if you feel like it.<br></br>
          </p>
        </div>
    </div>
  );
}
export { Home };