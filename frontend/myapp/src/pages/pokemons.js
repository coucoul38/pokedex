import { Route } from 'react-router';
import {Link} from 'react-router-dom';
import {getCatched, release} from '../api/api';
import {useState,useEffect} from 'react';

<Route path="pokedex/pokemons" />

// function addToPokedex(props){

// }

function Pokemons(){
  const [ pokemons, setPokemons ] = useState([]);
  useEffect(() => {
    // Get the list of pokemons when loading the page
    const pokemonsFetched = getCatched();
    pokemonsFetched
      .then(result => setPokemons(result))
      .catch(error=>console.error("Erreur avec notre API :",error.message));
  });

  return (
    <div className='pixel'>
        <h1 className='center title'>Unlocked pokemons</h1>
        <nav>
            <ul>
                <li><Link to="/" className='nav'>Homepage</Link></li>
                <li><Link to="/pokedex" className='nav'>Pokedex</Link></li>
                <li><Link to="/unlocked" className='nav'>Unlocked</Link></li>
                <li><Link to="/manage" className='nav'>Manage pokemons</Link></li>
            </ul>
        </nav>
        {
          
          pokemons.map((pokemon,key) =>{
            return (<div key={key} className="bloc-pokemon pixel">
              <img className='avatar' src={'https://img.pokemondb.net/sprites/sword-shield/icon/'+pokemon.name.toLowerCase()+'.png'} /*{pokemon.img}*/ alt="Pokemon" />
              <h2>{pokemon.name}</h2>
              {<button onClick={()=>release(pokemon.no)} class="poke-button">Release</button>}
            </div>)
          })
        }
    </div>
  );
}

export { Pokemons };