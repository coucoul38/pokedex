import { Route } from 'react-router';
import {Link} from 'react-router-dom';
import {deletePokemon} from '../api/api';
import {useState} from 'react';

<Route path="pokedex/manage" />

// function addToPokedex(props){

// }

function Manage(){
    const [ deleteNo, setDelete ] = useState('');
    
    const handleChange = event => {
        setDelete(event.target.value);
    }

  return (
    <div className='pixel'>
        <h1 className='center title'>Manage pokemons</h1>
        <nav>
            <ul>
                <li><Link to="/">Homepage</Link></li>
                <li><Link to="/pokedex">Pokedex</Link></li>
                <li><Link to="/unlocked">Catched pokemons</Link></li>
            </ul>
        </nav>
        <form action={deletePokemon(deleteNo)}>
            <label htmlFor='no'>Enter the pokemon 3-digit number</label>
            <input type="text" name="no" minLength={3} maxLength={3} required onChange={handleChange}></input>
            <input type="submit" id="delete" name="delete" value="Delete pokemon"></input>
        </form>
        Trying to delete pkmn {deleteNo}
        
    </div>
  );
}

export { Manage };