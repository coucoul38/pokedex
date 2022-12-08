import { Route } from 'react-router';
import {Link} from 'react-router-dom';
import {getAll} from '../api/api.js';
import {useState,useEffect} from 'react';

<Route path="pokedex/pokemons" />

function Pokemons(props){
  const [ pokemons, setPokemons ] = useState([]);

  //va s'executer seulement au lancement du composant (dep: [])
  useEffect(() => {
    // récupérer la liste des users seulement au chargement du composant ! 
    const pokemonsFetched = getAll();
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
    </div>
  );
}
export { Pokemons };