import { Route } from 'react-router';
import {Link} from 'react-router-dom';
import {getCatched} from '../api/api';
import {useState,useEffect} from 'react';

<Route path="pokedex/pokemons" />

// function addToPokedex(props){

// }

function Pokemons(){
  console.log("Pokedex function");
  const [ pokemons, setPokemons ] = useState([]);
  useEffect(() => {
    // Get the list of pokemons when loading the page
    const pokemonsFetched = getCatched();
    pokemonsFetched
      .then(result => setPokemons(result))
      .catch(error=>console.error("Erreur avec notre API :",error.message));
  },[]);
  console.log(pokemons);

  return (
    <div className='pixel'>
        <h1 className='center title'>Unlocked pokemons</h1>
        <nav>
            <ul>
                <li><Link to="/">Homepage</Link></li>
                <li><Link to="/pokedex">Pokedex</Link></li>
            </ul>
        </nav>
        {
          
          pokemons.map((pokemon,key) =>{
            return (<div key={key} className="bloc-pokemon pixel">
              <img className="avatar" src={pokemon.img} alt="Pokemon" />
              <h2>{pokemon.name}</h2>
              {/*<button onClick={()=>addToPokedex(pokemon._id)}>Capturer !</button>*/}
            </div>)
          })
        }
    </div>
  );
}

export { Pokemons };