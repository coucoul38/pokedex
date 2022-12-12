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
export function addToPokedex(no){
    fetch(
        'http://10.1.2.35:4444/unlocked/insert?no='+no, {
            method: 'POST'/*, 
            headers: {
                'Accept': 'application/json', 
                'Content-Type':'application/json'
            }*/
        }
    )
};