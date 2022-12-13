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
    
    const handleDeleteChange = event => {
        setDelete(event.target.value);
    }
    const handleNoChange = event => {
        setNo(event.target.value);
    }
    const handleNameChange = event => {
        setName(event.target.value);
    }
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

  return (
    <div className='pixel'>
        <h1 className='center title'>Manage pokemons</h1>
        <nav>
            <ul>
                <li><Link to="/" className='nav'>Homepage</Link></li>
                <li><Link to="/pokedex" className='nav'>Pokedex</Link></li>
                <li><Link to="/unlocked" className='nav'>Unlocked</Link></li>
                <li><Link to="/manage" className='nav'>Manage pokemons</Link></li>
            </ul>
        </nav>
        
        Delete a pokemon<br></br>
        <form onSubmit={handleDelete}>
            <label htmlFor='no'>Enter the pokemon 3-digit number:<br></br></label>
            <input type="number" name="no" minLength={3} maxLength={3} required onChange={handleDeleteChange}></input>
            <input type="submit" id="delete" name="delete" value="Delete pokemon" class="poke-button"></input>
        </form>
        <br></br>
        Add a pokemon<br></br>
        <form onSubmit={handleCreate}>
            No:<input type="number" name="no" minLength={3} maxLength={3} required onChange={handleNoChange}></input><br></br>
            Name:<input type="text" name="name" required onChange={handleNameChange}></input><br></br>
            <input type="submit" id="new" name="new" value="Create pokemon" class="poke-button"></input>
        </form>
        Image is automatically filled
        
        
        <br></br>
        qfqfhsqfqpisfpqsdqsdqdqdqsdqsdqsdqsdqsdqsdqs <br></br>
        qfqfhsqfqpisfpqsdqsdqdqdqsdqsdqsdqsdqsdqsdqs <br></br>
        qfqfhsqfqpisfpqsdqsdqdqdqsdqsdqsdqsdqsdqsdqs <br></br>
        qfqfhsqfqpisfpqsdqsdqdqdqsdqsdqsdqsdqsdqsdqs <br></br>
        qfqfhsqfqpisfpqsdqsdqdqdqsdqsdqsdqsdqsdqsdqs <br></br>
        qfqfhsqfqpisfpqsdqsdqdqdqsdqsdqsdqsdqsdqsdqs <br></br>
        qfqfhsqfqpisfpqsdqsdqdqdqsdqsdqsdqsdqsdqsdqs <br></br>
        qfqfhsqfqpisfpqsdqsdqdqdqsdqsdqsdqsdqsdqsdqs <br></br>
        qfqfhsqfqpisfpqsdqsdqdqdqsdqsdqsdqsdqsdqsdqs <br></br>
        qfqfhsqfqpisfpqsdqsdqdqdqsdqsdqsdqsdqsdqsdqs <br></br>
        qfqfhsqfqpisfpqsdqsdqdqdqsdqsdqsdqsdqsdqsdqs <br></br>
        qfqfhsqfqpisfpqsdqsdqdqdqsdqsdqsdqsdqsdqsdqs <br></br>
        qfqfhsqfqpisfpqsdqsdqdqdqsdqsdqsdqsdqsdqsdqs <br></br>
        qfqfhsqfqpisfpqsdqsdqdqdqsdqsdqsdqsdqsdqsdqs <br></br>
        qfqfhsqfqpisfpqsdqsdqdqdqsdqsdqsdqsdqsdqsdqs <br></br>
        qfqfhsqfqpisfpqsdqsdqdqdqsdqsdqsdqsdqsdqsdqs <br></br>
        qfqfhsqfqpisfpqsdqsdqdqdqsdqsdqsdqsdqsdqsdqs <br></br>
        qfqfhsqfqpisfpqsdqsdqdqdqsdqsdqsdqsdqsdqsdqs <br></br>
        qfqfhsqfqpisfpqsdqsdqdqdqsdqsdqsdqsdqsdqsdqs <br></br>
        qfqfhsqfqpisfpqsdqsdqdqdqsdqsdqsdqsdqsdqsdqs <br></br>
        qfqfhsqfqpisfpqsdqsdqdqdqsdqsdqsdqsdqsdqsdqs <br></br>
        qfqfhsqfqpisfpqsdqsdqdqdqsdqsdqsdqsdqsdqsdqs <br></br>
        v
        qfqfhsqfqpisfpqsdqsdqdqdqsdqsdqsdqsdqsdqsdqs <br></br>
        qfqfhsqfqpisfpqsdqsdqdqdqsdqsdqsdqsdqsdqsdqs <br></br>
        qfqfhsqfqpisfpqsdqsdqdqdqsdqsdqsdqsdqsdqsdqs <br></br>
        qfqfhsqfqpisfpqsdqsdqdqdqsdqsdqsdqsdqsdqsdqs <br></br>
        qfqfhsqfqpisfpqsdqsdqdqdqsdqsdqsdqsdqsdqsdqs <br></br>
        qfqfhsqfqpisfpqsdqsdqdqdqsdqsdqsdqsdqsdqsdqs <br></br>
        qfqfhsqfqpisfpqsdqsdqdqdqsdqsdqsdqsdqsdqsdqs <br></br>
        qfqfhsqfqpisfpqsdqsdqdqdqsdqsdqsdqsdqsdqsdqs <br></br>
        qfqfhsqfqpisfpqsdqsdqdqdqsdqsdqsdqsdqsdqsdqs <br></br>
        qfqfhsqfqpisfpqsdqsdqdqdqsdqsdqsdqsdqsdqsdqs <br></br>
        qfqfhsqfqpisfpqsdqsdqdqdqsdqsdqsdqsdqsdqsdqs <br></br>
        qfqfhsqfqpisfpqsdqsdqdqdqsdqsdqsdqsdqsdqsdqs <br></br>
        qfqfhsqfqpisfpqsdqsdqdqdqsdqsdqsdqsdqsdqsdqs <br></br>
        qfqfhsqfqpisfpqsdqsdqdqdqsdqsdqsdqsdqsdqsdqs <br></br>
        qfqfhsqfqpisfpqsdqsdqdqdqsdqsdqsdqsdqsdqsdqs <br></br>
        qfqfhsqfqpisfpqsdqsdqdqdqsdqsdqsdqsdqsdqsdqs <br></br>
        qfqfhsqfqpisfpqsdqsdqdqdqsdqsdqsdqsdqsdqsdqs <br></br>
        qfqfhsqfqpisfpqsdqsdqdqdqsdqsdqsdqsdqsdqsdqs <br></br>
        qfqfhsqfqpisfpqsdqsdqdqdqsdqsdqsdqsdqsdqsdqs <br></br>
        qfqfhsqfqpisfpqsdqsdqdqdqsdqsdqsdqsdqsdqsdqs <br></br>
        qfqfhsqfqpisfpqsdqsdqdqdqsdqsdqsdqsdqsdqsdqs <br></br>
        qfqfhsqfqpisfpqsdqsdqdqdqsdqsdqsdqsdqsdqsdqs <br></br>
        qfqfhsqfqpisfpqsdqsdqdqdqsdqsdqsdqsdqsdqsdqs <br></br>
        qfqfhsqfqpisfpqsdqsdqdqdqsdqsdqsdqsdqsdqsdqs <br></br>
        qfqfhsqfqpisfpqsdqsdqdqdqsdqsdqsdqsdqsdqsdqs <br></br>
        qfqfhsqfqpisfpqsdqsdqdqdqsdqsdqsdqsdqsdqsdqs <br></br>
        qfqfhsqfqpisfpqsdqsdqdqdqsdqsdqsdqsdqsdqsdqs <br></br>
        qfqfhsqfqpisfpqsdqsdqdqdqsdqsdqsdqsdqsdqsdqs <br></br>
        qfqfhsqfqpisfpqsdqsdqdqdqsdqsdqsdqsdqsdqsdqs <br></br>
        qfqfhsqfqpisfpqsdqsdqdqdqsdqsdqsdqsdqsdqsdqs <br></br>
        qfqfhsqfqpisfpqsdqsdqdqdqsdqsdqsdqsdqsdqsdqs <br></br>
        qfqfhsqfqpisfpqsdqsdqdqdqsdqsdqsdqsdqsdqsdqs <br></br>
        qfqfhsqfqpisfpqsdqsdqdqdqsdqsdqsdqsdqsdqsdqs <br></br>
        qfqfhsqfqpisfpqsdqsdqdqdqsdqsdqsdqsdqsdqsdqs <br></br>
        qfqfhsqfqpisfpqsdqsdqdqdqsdqsdqsdqsdqsdqsdqs <br></br>
        qfqfhsqfqpisfpqsdqsdqdqdqsdqsdqsdqsdqsdqsdqs <br></br>
        qfqfhsqfqpisfpqsdqsdqdqdqsdqsdqsdqsdqsdqsdqs <br></br>
        qfqfhsqfqpisfpqsdqsdqdqdqsdqsdqsdqsdqsdqsdqs <br></br>
        qfqfhsqfqpisfpqsdqsdqdqdqsdqsdqsdqsdqsdqsdqs <br></br>
        qfqfhsqfqpisfpqsdqsdqdqdqsdqsdqsdqsdqsdqsdqs <br></br>
        qfqfhsqfqpisfpqsdqsdqdqdqsdqsdqsdqsdqsdqsdqs <br></br>
        qfqfhsqfqpisfpqsdqsdqdqdqsdqsdqsdqsdqsdqsdqs <br></br>
        qfqfhsqfqpisfpqsdqsdqdqdqsdqsdqsdqsdqsdqsdqs <br></br>
    </div>
  );
}

export { Manage };