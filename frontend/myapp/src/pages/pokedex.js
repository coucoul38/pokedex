import { Route } from 'react-router';
import {Link} from 'react-router-dom';
import './css.css';
import {getAll, addToPokedex} from '../api/api';
import {useState,useEffect} from 'react';


<Route path="pokedex/pokedex" />

function Pokedex(){
  const [ pokemons, setPokemons ] = useState([]);
  useEffect(() => {
    // Get the list of pokemons when loading the page
    const pokemonsFetched = getAll();
    pokemonsFetched
      .then(result => setPokemons(result))
      .catch(error=>console.error("Erreur avec notre API :",error.message));
  },[]);

  return (
    <div className='pixel'>
      <div className='navbar'>
        <h1 className='center title'>Pokedex</h1>
        <nav>
            <ul>
                <li><Link to="/">Homepage</Link></li>
                <li><Link to="/pokedex">Pokedex</Link></li>
                <li><Link to="/unlocked">Unlocked</Link></li>
                <li><Link to="/manage">Manage pokemons</Link></li>
            </ul>
        </nav>
      </div>
        <nav>
            <ul>
                <li><Link to="/"><img src='./img/normal.png'></img></Link></li>
                <li><Link to="/"><img src='./img/fire.png'></img></Link></li>
                <li><Link to="/"><img src='./img/fighting.png'></img></Link></li>
                <li><Link to="/"><img src='./img/water.png'></img></Link></li>
                <li><Link to="/"><img src='./img/flying.png'></img></Link></li>
                <li><Link to="/"><img src='./img/grass.png'></img></Link></li>
                <li><Link to="/"><img src='./img/poison.png'></img></Link></li>
                <li><Link to="/"><img src='./img/electric.png'></img></Link></li>
                <li><Link to="/"><img src='./img/ground.png'></img></Link></li>
                <li><Link to="/"><img src='./img/psychic.png'></img></Link></li>
                <li><Link to="/"><img src='./img/rock.png'></img></Link></li>
                <li><Link to="/"><img src='./img/ice.png'></img></Link></li>
                <li><Link to="/"><img src='./img/bug.png'></img></Link></li>
                <li><Link to="/"><img src='./img/ghost.png'></img></Link></li>
                <li><Link to="/"><img src='./img/dark.png'></img></Link></li>
                <li><Link to="/"><img src='./img/steel.png'></img></Link></li>
                <li><Link to="/"><img src='./img/fairy.png'></img></Link></li>

            </ul>
        </nav>
      <div className='row'>
        {
          pokemons.map((pokemon,key) =>{
            return (
                <div key={key} className="bloc-pokemon pixel">
                  <img className='avatar aliasing' src={'https://img.pokemondb.net/sprites/sword-shield/icon/'+pokemon.name.toLowerCase()+'.png'} /*{pokemon.img}*/ alt="Pokemon" />
                  <h2>{pokemon.name}</h2>
                  No:{pokemon.no}<br></br>
                  <img className='type' src={'./img/'+pokemon.type1+'.png'} alt={pokemon.type1}></img>
                  {
                    pokemon.type2==="none"?null:<img className='type' src={'./img/'+pokemon.type2+'.png'} alt={pokemon.type2}></img>
                  }
                  <br></br>
                  {<button onClick={()=>addToPokedex(pokemon.no)} className="poke-button catch"><img src="https://img.pokemondb.net/sprites/items/master-ball.png" alt="Capturer !"className='balls aliasing'/></button>}
              </div>)
          })
        }
      </div>
    </div>
  );
}

export { Pokedex };