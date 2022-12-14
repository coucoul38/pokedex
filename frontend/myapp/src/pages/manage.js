import { Route } from 'react-router';
import {Link} from 'react-router-dom';
import './css.css';
import {deletePokemon, addPokemon} from '../api/api';
import {useState} from 'react';

<Route path="pokedex/manage" />

// function addToPokedex(props){

// }

function Manage(){
    const [ deleteNo, setDelete ] = useState('');

    const [ newPokeNo, setNo ] = useState('');
    const [ newPokeName, setName ] = useState('');
    const [ type1, setType1 ] = useState('');
    const [ type2, setType2 ] = useState('');
    
    const handleDeleteChange = event => {
        setDelete(event.target.value);
    }
    const handleNoChange = event => {
        setNo(event.target.value);
    }
    const handleNameChange = event => {
        setName(event.target.value);
    }
    const handleType1Change = event => {
        setType1(event.target.value);
    }
    const handleType2Change = event => {
        setType2(event.target.value);
    }
    const handleDelete = event => {
        alert('Deleted pokemon no '+deleteNo);
        deletePokemon(deleteNo);
        event.preventDefault();
    }
    const handleCreate = event => {
        alert('Created a new pokemon');
        addPokemon(newPokeName, newPokeNo, type1, type2);
        event.preventDefault();
    }

  return (
    <div className='pixel'>
        <div className='navbar'>
            <h1 className='center title'>Manage pokemons</h1>
            <nav>
                <ul>
                    <li><Link to="/">Homepage</Link></li>
                    <li><Link to="/pokedex">Pokedex</Link></li>
                    <li><Link to="/unlocked">Unlocked</Link></li>
                    <li><Link to="/manage">Manage pokemons</Link></li>
                </ul>
            </nav>
        </div>
        Delete a pokemon<br></br>
        <form onSubmit={handleDelete}>
            <label htmlFor='no'>Enter the pokemon 3-digit number:<br></br></label>
            <input type="number" name="no" minLength={3} maxLength={3} required onChange={handleDeleteChange}></input>
            <input type="submit" id="delete" name="delete" value="Delete pokemon" className="poke-button"></input>
        </form>
        <br></br>
        Add a pokemon<br></br>

        <form onSubmit={handleCreate}>
            No:<input type="number" name="no" minLength={3} maxLength={3} required onChange={handleNoChange}></input><br></br>
            Name:<input type="text" name="name" required onChange={handleNameChange}></input><br></br>

            Type 1:<select id="type" name="type" required onChange={handleType1Change}>
                <option value="normal">Normal</option>
                <option value="fire">Fire</option>
                <option value="fighting">Fighting</option>
                <option value="water">Water</option>
                <option value="flying">Flying</option>
                <option value="grass">Grass</option>
                <option value="poison">Poison</option>
                <option value="electric">Electric</option>
                <option value="ground">Ground</option>
                <option value="psychic">Psychic</option>
                <option value="rock">Rock</option>
                <option value="ice">Ice</option>
                <option value="bug">Bug</option>
                <option value="dragon">Dragon</option>
                <option value="ghost">Ghost</option>
                <option value="dark">Dark</option>
                <option value="steel">Steel</option>
                <option value="fairy">Fairy</option>
            </select>


            Type 2:<select id="type" name="type" required onChange={handleType2Change}>
                <option value="">None</option>
                <option value="normal">Normal</option>
                <option value="fire">Fire</option>
                <option value="fighting">Fighting</option>
                <option value="water">Water</option>
                <option value="flying">Flying</option>
                <option value="grass">Grass</option>
                <option value="poison">Poison</option>
                <option value="electric">Electric</option>
                <option value="ground">Ground</option>
                <option value="psychic">Psychic</option>
                <option value="rock">Rock</option>
                <option value="ice">Ice</option>
                <option value="bug">Bug</option>
                <option value="dragon">Dragon</option>
                <option value="ghost">Ghost</option>
                <option value="dark">Dark</option>
                <option value="steel">Steel</option>
                <option value="fairy">Fairy</option>
            </select>
            <input type="submit" id="new" name="new" value="Create pokemon" className="poke-button"></input>
        </form>
        Image is automatically filled
        Type1: {type1}<br></br>
        Type2: {type2}
        
    </div>
  );
}

export { Manage };