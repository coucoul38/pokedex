export const getAll = async () => {
    const response = await fetch(
        'http://localhost:4444/pokemons/list', {
            method: 'GET', 
            headers: {
                'Accept': 'application/json', 
                'Content-Type':'application/json'
            }
        }
    )
    const pokemons = await response.json()
    return pokemons
};

export const getAllByType = async (type) => {
    const response = await fetch(
        'http://localhost:4444/pokemons/list/type?type='+type, {
            method: 'POST', 
            headers: {
                'Accept': 'application/json', 
                'Content-Type':'application/json'
            }
        }
    )
    const pokemons = await response.json()
    return pokemons
};


export const getCatched = async () => {
    const response = await fetch(
        'http://localhost:4444/unlocked/list', {
            method: 'GET', 
            headers: {
                'Accept': 'application/json', 
                'Content-Type':'application/json'
            }
        }
    )
    const catched = await response.json()
    return catched
};
export const getCatchedByType = async (type) => {
    const response = await fetch(
        'http://localhost:4444/unlocked/list/type?type='+type, {
            method: 'POST', 
            headers: {
                'Accept': 'application/json', 
                'Content-Type':'application/json'
            }
        }
    )
    const pokemons = await response.json()
    return pokemons
};

export function addToPokedex(no){
    fetch(
        'http://localhost:4444/unlocked/insert?no='+no, {
            method: 'POST'
        }
    )
};
export function release(no){
    fetch(
        'http://localhost:4444/unlocked/release?no='+no, {
            method: 'POST'
        }
    )
};

export function deletePokemon(no){
    fetch(
        'http://localhost:4444/pokedex/delete?no='+no, {
            method: 'DELETE'
        }
    );
    console.log("Tried to delete pkmn no:");
    console.log(no)
};

export function addPokemon(name, no, type1, type2){
    fetch(
        'http://localhost:4444/pokedex/insert?name='+name+'&no='+no+'&type1='+type1+'&type2='+type2, {
            method: 'POST'
        }
    )
    console.log("Tried to add a new pokemon")
};