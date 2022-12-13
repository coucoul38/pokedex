import { Route } from 'react-router';
import {Link} from 'react-router-dom';
import {deletePokemon, addPokemon} from '../api/api';
import {useState} from 'react';

<Route path="pokedex/manage" />

// function addToPokedex(props){

// }

function Manage(){
    const [ deleteNo, setDelete ] = useState('');

    const [ newPokeNo, setNo ] = useState('');
    const [ newPokeName, setName ] = useState('');

    const handleDelete = event => {
        alert('Deleting a pokemon: '+deleteNo);
        deletePokemon(deleteNo);
        event.preventDefault();
    }
    const handleCreate = event => {
        alert('Created a new pokemon');
        addPokemon(newPokeName, newPokeNo);
        event.preventDefault();
    }
    
    const handleDeleteChange = event => {
        setDelete(event.target.value);
    }
    const handleNoChange = event => {
        setNo(event.target.value);
    }
    const handleNameChange = event => {
        setName(event.target.value);
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
        Delete a pokemon<br></br>
        <form onSubmit={handleDelete}>
            <label htmlFor='no'>Enter the pokemon 3-digit number:<br></br></label>
            <input type="number" name="no" minLength={3} maxLength={3} required onChange={handleDeleteChange}></input>
            <input type="submit" id="delete" name="delete" value="Delete pokemon"></input>
        </form>
        Trying to delete pkmn {deleteNo}<br></br>
        <br></br>
        Add a pokemon<br></br>
        <form onSubmit={handleCreate}>
            <input type="number" name="no" minLength={3} maxLength={3} required onChange={handleNoChange}></input>
            <input type="text" name="name" required onChange={handleNameChange}></input>
            <input type="submit" id="new" name="new" value="Create pokemon"></input>
        </form>
        New pokemon :<br></br>
        No: {newPokeNo}<br></br>
        Name: {newPokeName}<br></br>
        Image is automatically filled
        
    </div>
  );
}

export { Manage };