export function findById(array, id) {
    for (let item of array) {
        if (item.id === id) {
            return item;
        }    
    }
}

export function getPokedex() {
    const pokedexString = localStorage.getItem('POKEDEX') || '[]';
    const localPokedex = JSON.parse(pokedexString);
    return localPokedex;
}

export function setPokedexGlobal(results) {
    const pokedexString = localStorage.getItem('GLOBAL-DEX') || '[]';
    const globalPokedex = JSON.parse(pokedexString);
    
    globalPokedex.push(results);
    localStorage.setItem('GLOBAL-DEX', JSON.stringify(globalPokedex));
}

export function encountered(id) {
    let localPokedex = getPokedex();
    let pokemon = findById(localPokedex, id);

    if (pokemon) {
        pokemon.seen++;  
    } else {
        const newPokemon = { id: id, seen: 1, caught: 0 };
        localPokedex.push(newPokemon);
    }

    localStorage.setItem('POKEDEX', JSON.stringify(localPokedex));
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
