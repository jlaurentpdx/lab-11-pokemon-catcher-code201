import * as u from '../utils.js';

const pokedex = u.getPokedex();
const main = document.getElementById('results-main');

for (let pokemon of pokedex) {
    const pokemonCaught = u.findById(pokedex, pokemon.id);
    
    const container = document.createElement('div');
    container.classList.add('results-container');
    
    const img = document.createElement('img');
    img.src = pokemonCaught.url_image;
    
    const header = document.createElement('h2');
    header.textContent = pokemonCaught.name;
    
    const div = document.createElement('div');
    div.classList.add('results-body');
    
    const p = document.createElement('p');
    
    const seenSpan = document.createElement('span');
    seenSpan.textContent = `Seen: ${pokemonCaught.seen}`;
    const caughtSpan = document.createElement('span');
    caughtSpan.textContent = `Seen: ${pokemonCaught.caught}`;

    p.append(seenSpan, caughtSpan);
    p.classList.add('results-text');

    div.append(img, p);
    container.append(header, div);
    main.append(container);
}