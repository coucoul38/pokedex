import { Route } from 'react-router';
import {Link} from 'react-router-dom';
import {getCatched} from '../api/api.js';
import {useState,useEffect} from 'react';

<Route path="pokedex/pokemons" />

// function addToPokedex(props){

// }

function Pokemons(){
  const [ pokemons, setPokemons ] = useState([]);

  //va s'executer seulement au lancement du composant (dep: [])
  useEffect(() => {
    // récupérer la liste des users seulement au chargement du composant ! 
    const pokemonsFetched = getCatched();
    pokemonsFetched
      .then(result => setPokemons(result))
      .catch(error=>console.error("Erreur avec notre API :",error.message));
  },[]);

  return (
    <div>
        <h1>Pokemons</h1>
        <nav>
            <ul>
                <li><Link to="/">Homepage</Link></li>
                <li><Link to="/pokedex">Pokedex</Link></li>
                <li><Link to="/unlocked">Unlocked pokemons</Link></li>
            </ul>
        </nav>
        {
        pokemons.map((pokemon,key) =>{
          return <div key={key} className="bloc-pokemon">
            <img className="avatar" src={pokemon.img} alt="Pokemon" />
            <h2>{pokemon.name}</h2>
            {/* <button onClick={()=>addToPokedex(pokemon._id)}>Capturer !</button> */}
          </div>
        })
      }
    </div>
  );
}

export { Pokemons };