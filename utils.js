export function findById(id, array) {
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

export function encountered() {
    getPokedex();

}