export function findById(array, id) {
    for (let index of array) {
        if (index.id === id) {
            return index;
        }    
    }
}

export function getPokedex() {
    const pokedex = localStorage.getItem('POKEDEX') || '[]';
    return pokedex;
}

export function encountered(id) {
    let pokedex = getPokedex();
    let pokemon = findById(pokedex, id);

    if (pokemon) {
        pokemon.encountered++;  
    } else {
        const newPokemon = { pokemon: pokemon.name, encountered: 1, chosen: 1 };
        pokedex.push(newPokemon);
    }

    localStorage.setItem('POKEDEX', JSON.stringify(pokedex));
}

export function chosen(id) {
    let pokedex = getPokedex();
    let pokemon = findById(pokedex, id);

    pokemon.chosen++;

    localStorage.setItem('POKEDEX', JSON.stringify(pokedex));
}