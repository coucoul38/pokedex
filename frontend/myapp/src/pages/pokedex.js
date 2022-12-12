import { Route } from 'react-router';
import {Link} from 'react-router-dom';
import './css.css';
import {getAll, addToPokedex} from '../api/api';
import {useState,useEffect} from 'react';


<Route path="pokedex/pokedex" />

function Pokedex(){
  console.log("Pokedex function");
  const [ pokemons, setPokemons ] = useState([]);
  useEffect(() => {
    // Get the list of pokemons when loading the page
    const pokemonsFetched = getAll();
    pokemonsFetched
      .then(result => setPokemons(result))
      .catch(error=>console.error("Erreur avec notre API :",error.message));
  },[]);
  console.log(pokemons);

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
        {
          
          pokemons.map((pokemon,key) =>{
            return (<div key={key} className="bloc-pokemon">
              <img className="avatar" src={pokemon.img} alt="Pokemon" />
              <h2>{pokemon.name}</h2>
              {pokemon.no}
              {<button onClick={()=>addToPokedex(pokemon.no)}>Capturer !</button>}
            </div>)
          })
        }
    </div>
  );
}

export { Pokedex };