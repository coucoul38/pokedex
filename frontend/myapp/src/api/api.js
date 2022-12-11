export const getAll = async () => {
    const response = await fetch(
        'localhost:4444/pokemons/list', {
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

export const getCatched = async () => {
    const response = await fetch(
        'localhost:4444/unlocked/list', {
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