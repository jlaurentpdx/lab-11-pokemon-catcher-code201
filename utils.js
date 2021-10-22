export function findById(array, id) {
    for (let index of array) {
        if (index.id === id) {
            return index;
        }    
    }
}

export function getPokedex() {
    const pokedexString = localStorage.getItem('POKEDEX') || '[]';
    const pokedex = JSON.parse(pokedexString);
    return pokedex;
}

export function encountered(id) {
    let pokedex = getPokedex();
    let pokemon = findById(pokedex, id);

    if (pokemon) {
        pokemon.seen++;  
    } else {
        const newPokemon = { pokemon: pokemon.name, seen: 1, caught: 1 };
        pokedex.push(newPokemon);
    }

    localStorage.setItem('POKEDEX', JSON.stringify(pokedex));
}

export function chosen(id) {
    let pokedex = getPokedex();
    let pokemon = findById(pokedex, id);

    pokemon.caught++;

    localStorage.setItem('POKEDEX', JSON.stringify(pokedex));
}

export function clearPokedex() {
    return localStorage.removeItem('POKEDEX');
}