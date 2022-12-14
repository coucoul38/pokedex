import { Route } from 'react-router';
import {Link} from 'react-router-dom';
import './css.css';
import {getAll, addToPokedex, getAllByType} from '../api/api';
import {useState,useEffect} from 'react';


<Route path="pokedex/pokedex" />

function Pokedex(){
  const [ pokemons, setPokemons ] = useState([]);
  const [ typeSearch, setTypeSearch] = useState([]);

  useEffect(() => {
    // Get the list of pokemons when loading the page
    if(typeSearch==="none"){
      const pokemonsFetched = getAll();
      pokemonsFetched
      .then(result => setPokemons(result))
      .catch(error=>console.error("Erreur avec notre API :",error.message));
    } else {
      //Mmh bonus puntos
      const pokemonsFetched = getAllByType(typeSearch);
      pokemonsFetched
      .then(result => setPokemons(result))
      .catch(error=>console.error("Erreur avec notre API :",error.message));
    }
    
  });

  return (
    <div className='pixel'>
      <div className='navbar'>
        <h1 className='center title'>Pokedex</h1>
        <nav>
            <ul className="ul-nav">
                <li><Link to="/">Homepage</Link></li>
                <li><Link to="/pokedex">Pokedex</Link></li>
                <li><Link to="/unlocked">Unlocked</Link></li>
                <li><Link to="/manage">Manage pokemons</Link></li>
            </ul>
        </nav>
      </div>
        <nav>
            <ul>
              <div className='orderType'>
                <li><button onClick={()=>setTypeSearch("normal")}>     <img src='./img/normal.png' alt='type'></img></button></li>
                <li><button onClick={()=>setTypeSearch("fire")}>         <img src='./img/fire.png' alt='type'></img></button></li>
                <li><button onClick={()=>setTypeSearch("fighting")}>     <img src='./img/fighting.png' alt='type'></img></button></li>
                <li><button onClick={()=>setTypeSearch("water")}>       <img src='./img/water.png' alt='type'></img></button></li>
                <li><button onClick={()=>setTypeSearch("flying")}>     <img src='./img/flying.png' alt='type'></img></button></li>
                <li><button onClick={()=>setTypeSearch("grass")}>      <img src='./img/grass.png' alt='type'></img></button></li>
                <li><button onClick={()=>setTypeSearch("poison")}>     <img src='./img/poison.png' alt='type'></img></button></li>
                <li><button onClick={()=>setTypeSearch("electric")}>   <img src='./img/electric.png' alt='type'></img></button></li>
                <li><button onClick={()=>setTypeSearch("ground")}>     <img src='./img/ground.png' alt='type'></img></button></li>
                <li><button onClick={()=>setTypeSearch("psychic")}>    <img src='./img/psychic.png' alt='type'></img></button></li>
                <li><button onClick={()=>setTypeSearch("rock")}>       <img src='./img/rock.png' alt='type'></img></button></li>
                <li><button onClick={()=>setTypeSearch("ice")}>        <img src='./img/ice.png' alt='type'></img></button></li>
                <li><button onClick={()=>setTypeSearch("bug")}>        <img src='./img/bug.png' alt='type'></img></button></li>
                <li><button onClick={()=>setTypeSearch("ghost")}>      <img src='./img/ghost.png' alt='type'></img></button></li>
                <li><button onClick={()=>setTypeSearch("dark")}>       <img src='./img/dark.png' alt='type'></img></button></li>
                <li><button onClick={()=>setTypeSearch("steel")}>      <img src='./img/steel.png' alt='type'></img></button></li>
                <li><button onClick={()=>setTypeSearch("fairy")}>      <img src='./img/fairy.png' alt='type'></img></button></li>
                <li><button onClick={()=>setTypeSearch("none")} className='poke-button'> Clear</button></li>
              </div>
            </ul>
        </nav>
        <h2 className='center'>Type selected: {typeSearch}</h2>
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