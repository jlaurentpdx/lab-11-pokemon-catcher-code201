import * as u from '../utils.js';
import pokedex from '../src/pokemon.js';

const localPokedex = u.getPokedex();
const main = document.getElementById('results-main');

for (let pokemon of localPokedex) {
    const pokemonCaught = u.findById(pokedex, pokemon.id);
    
    const container = document.createElement('div');
    container.classList.add('results-container');
    
    const img = document.createElement('img');
    img.src = pokemonCaught.url_image;
    
    const header = document.createElement('h2');
    header.textContent = String(pokemonCaught.pokemon).toUpperCase();
    
    const div = document.createElement('div');
    div.classList.add('results-body');
    
    const p = document.createElement('p');
    
    const seenSpan = document.createElement('span');
    seenSpan.textContent = `Seen: ${pokemon.seen}`;
    const caughtSpan = document.createElement('span');
    caughtSpan.textContent = `Caught: ${pokemon.caught}`;

    p.append(seenSpan, caughtSpan);
    p.classList.add('results-text');

    div.append(img, p);
    container.append(header, div);
    main.append(container);
}

const namePokemon = localPokedex.map((pokemon) => {
    const idPokemon = u.findById(pokedex, pokemon.pokemon);
    return idPokemon;
});

const caughtPokemon = localPokedex.map(pokemon => pokemon.caught);

var ctx = document.getElementById('displayChart').getContext('2d');
// eslint-disable-next-line no-undef
new Chart(ctx, {
    type: 'bar',
    data: {
        labels: namePokemon,
        datasets: [{
            label: '# of Times Picked',
            data: caughtPokemon,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
