import { Route } from 'react-router';
import {Link} from 'react-router-dom';
import './css.css';
import {deletePokemon, addPokemon, modifyPokemon} from '../api/api';
import {useState} from 'react';

<Route path="pokedex/manage" />

// function addToPokedex(props){

// }

function Manage(){
    const [ deleteNo, setDelete ] = useState('');

    const [ newPokeNo, setNewNo ] = useState('');
    const [ newPokeName, setNewName ] = useState('');
    const [ newPokeType1, setNewType1 ] = useState('');
    const [ newPokeType2, setNewType2 ] = useState('');

    const [ pokemonToModify, setPokemonToModify ] = useState('');
    const [ changePokeNo, setNo ] = useState('');
    const [ changePokeName, setName ] = useState('');
    const [ changePokeType1, setType1 ] = useState('');
    const [ changePokeType2, setType2 ] = useState('');
    
    const handleDeleteChange = event => {
        setDelete(event.target.value);
    }

    const handleNewNoChange = event => {
        setNewNo(event.target.value);
    }
    const handleNewNameChange = event => {
        setNewName(event.target.value);
    }
    const handleNewType1Change = event => {
        setNewType1(event.target.value);
    }
    const handleNewType2Change = event => {
        setNewType2(event.target.value);
    }

    const handleModifyNoChange = event => {
        setPokemonToModify(event.target.value);
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
        addPokemon(newPokeName, newPokeNo, newPokeType1, newPokeType2);
        event.preventDefault();
    }
    const handleUpdate = event => {
        alert('Modified a pokemon');
        modifyPokemon(pokemonToModify, changePokeName, changePokeNo, changePokeType1, changePokeType2);
        event.preventDefault();
    }

  return (
    <div>
        <div className='navbar'>
            <h1 className='center title'>Manage pokemons</h1>
            <nav>
                <ul className="ul-nav">
                    <li><Link to="/">Homepage</Link></li>
                    <li><Link to="/pokedex">Pokedex</Link></li>
                    <li><Link to="/unlocked">Unlocked</Link></li>
                    <li><Link to="/manage">Manage pokemons</Link></li>
                </ul>
            </nav>
        </div>
        <div className="center">
            <div className="underline">
                Delete a pokemon<br></br>
            </div>
            <form onSubmit={handleDelete}>
                <label htmlFor='no'>Enter the pokemon 3-digit number:<br></br></label>
                <input type="number" name="no" minLength={3} maxLength={3} required onChange={handleDeleteChange}></input>
                <input type="submit" id="delete" name="delete" value="Delete pokemon" className="poke-button"></input>
            </form>
            <br></br>
            <div className="underline">
                Add a pokemon<br></br>
            </div>
            <form onSubmit={handleCreate}>
                No:<input type="number" name="no" minLength={3} maxLength={3} required onChange={handleNewNoChange}></input><br></br>
                Name:<input type="text" name="name" required onChange={handleNewNameChange}></input><br></br>

                Type 1:<select id="type" name="type" required onChange={handleNewType1Change}>
                <option value="none" selected disabled hidden>Select an Option</option>
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

                Type 2:<select id="type" name="type" required onChange={handleNewType2Change}>
                <option value="none" selected disabled hidden>Select an option</option>
                    <option value="none">None</option>
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
            Image is automatically filled<br></br>
            <br></br>
            <div className="underline">
                Update a pokemon<br></br>
            </div>
            <form onSubmit={handleUpdate}>
                No:<input type="number" name="no" minLength={3} maxLength={3} required onChange={handleModifyNoChange}></input><br></br>
                New No:<input type="number" name="no" minLength={3} maxLength={3} required onChange={handleNoChange}></input><br></br>
                Name:<input type="text" name="name" required onChange={handleNameChange}></input><br></br>

                Type 1:<select id="type" name="type" required onChange={handleType1Change}>
                <option value="none" selected disabled hidden>Select an Option</option>
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
                <option value="none" selected disabled hidden>Select an option</option>
                    <option value="none">None</option>
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
                <input type="submit" id="update" name="update" value="Update pokemon" className="poke-button"></input>
            </form>
        </div>
    </div>
  );
}

export { Manage };