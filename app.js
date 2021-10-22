import pokedex from './src/pokemon.js';

const poke1Radio = document.getElementById('poke-1-radio');
const poke2Radio = document.getElementById('poke-2-radio');
const poke3Radio = document.getElementById('poke-3-radio');
const poke1Img = document.getElementById('poke-1-img');
const poke2Img = document.getElementById('poke-2-img');
const poke3Img = document.getElementById('poke-3-img');

// const submitButton = document.getElementById('submit-button');
// const resetButton = document.getElementById('reset-button');

const generatePokemon = () => {
    let randNum1 = Math.floor(Math.random() * pokedex.length);
    let randNum2 = Math.floor(Math.random() * pokedex.length);
    let randNum3 = Math.floor(Math.random() * pokedex.length);

    while (randNum1 === randNum2 || randNum1 === randNum3 || randNum2 === randNum3) {
        randNum1 = Math.floor(Math.random() * pokedex.length);
        randNum2 = Math.floor(Math.random() * pokedex.length);
        randNum3 = Math.floor(Math.random() * pokedex.length);
    }

    let poke1 = pokedex[randNum1];
    // encountered(poke1.id);
    poke1Img.src = poke1.url_image;
    poke1Radio.value = poke1.id;

    let poke2 = pokedex[randNum2];
    // encountered(poke2.id);
    poke2Img.src = poke2.url_image;
    poke2Radio.value = poke2.id;

    let poke3 = pokedex[randNum3];
    // encountered(poke3.id);
    poke3Img.src = poke3.url_image;
    poke3Radio.value = poke3.id;
};

// let pokemonCaught = 0;
generatePokemon();

// submitButton.addEventListener('click', () => {
//     const chosenPokemon = document.querySelector('input[type=radio]:checked');

//     if (pokemonCaught >= 10 ) {
//         pokemonCaught++;

//     }
// });