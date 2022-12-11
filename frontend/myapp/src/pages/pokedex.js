import { Route } from 'react-router';
import {Link} from 'react-router-dom';
import {getAll} from '../api/api';
import {useState,useEffect} from 'react';

<Route path="pokedex/pokedex" />

function Pokedex(){
  console.log("Pokedex function");
  const [ pokemons, setPokemons ] = useState([]);
  //va s'executer seulement au lancement du composant (dep: [])
  useEffect(() => {
    console.log("Sending pokedex request");
    // récupérer la liste des users seulement au chargement du composant ! 
    const pokemonsFetched = getAll();
    pokemonsFetched
      .then(result => setPokemons(result))
      .catch(error=>console.error("Erreur avec notre API :",error.message));
  },[]);
  //console.log(pokemons);

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
          return <div key={pokemon.no} className="bloc-pokemon">
            <img className="avatar" src={pokemon.img} alt="Pokemon" />
            <h2>{pokemon.name}</h2>
            {/*<button onClick={()=>addToPokedex(pokemon._id)}>Capturer !</button>*/}
          </div>
        })
      }
    </div>
  );
}

export { Pokedex };