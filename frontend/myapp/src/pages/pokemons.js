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
      <div className='navbar'>
        <h1 className='center title'>Unlocked pokemons</h1>
        <nav>
            <ul>
                <li><Link to="/">Homepage</Link></li>
                <li><Link to="/pokedex">Pokedex</Link></li>
                <li><Link to="/unlocked">Unlocked</Link></li>
                <li><Link to="/manage">Manage pokemons</Link></li>
            </ul>
        </nav>
      </div>
      <div className='row'>
        {
          
          pokemons.map((pokemon,key) =>{
            return (<div key={key} className="bloc-pokemon pixel">
              <img className='avatar aliasing' src={'https://img.pokemondb.net/sprites/sword-shield/icon/'+pokemon.name.toLowerCase()+'.png'} /*{pokemon.img}*/ alt="Pokemon" />
              <h2>{pokemon.name}</h2>
              No:{pokemon.no}<br></br>
              <img className='type' src={'./img/'+pokemon.type1+'.png'} alt={pokemon.type1}></img>
              {
                pokemon.type2==="none"?null:<img className='type' src={'./img/'+pokemon.type2+'.png'} alt={pokemon.type2}></img>
              }
              <br></br>
              {<button onClick={()=>release(pokemon.no)} className="poke-button">
                <div className="release-btn">Release</div>
              </button>}
            </div>)
          })
        }
    </div>
  </div>
  );
}

export { Pokemons };