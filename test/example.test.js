import pokedex from '../src/pokemon.js';
import * as u from '../utils.js';

const test = QUnit.test;

test('findById should access a pokemon by its .id from pokedex', (expect) => {
    u.clearPokedex();

    const expected = u.findById(pokedex, 1);
    const actual =     
    {
        '_id':'5cef3501ef6005a77cd4fd17',
        'pokemon':'bulbasaur',
        'id':1,
        'species_id':1,
        'height':7,
        'weight':69,
        'base_experience':64,
        'type_1':'grass',
        'type_2':'poison',
        'attack':49,
        'defense':49,
        'hp':45,
        'special_attack':65,
        'special_defense':65,
        'speed':45,
        'ability_1':'overgrow',
        'ability_2':'NA',
        'ability_hidden':'chlorophyll',
        'color_1':'#78C850',
        'color_2':'#A040A0',
        'color_f':'#81A763',
        'egg_group_1':'monster',
        'egg_group_2':'plant',
        'url_image':'https://img.pokemondb.net/sprites/firered-leafgreen/normal/bulbasaur.png',
        'generation_id':1,
        'evolves_from_species_id':'NA',
        'evolution_chain_id':1,
        'shape_id':8,
        'shape':'quadruped',
        'pokebase':'bulbasaur',
        'pokedex':'http://www.pokemon.com/us/pokedex/bulbasaur'
    };

    expect.deepEqual(actual, expected);
});

test('getPokedex should return an empty array when POKEDEX is not found in localStorage', (expect) => {
    u.clearPokedex();

    const expected = [];

    const actual = u.getPokedex();

    expect.deepEqual(actual, expected);
});

test('getPokedex should return an array called POKEDEX from localStorage', (expect) => {
    u.clearPokedex();

    const newPokemon = { id: 1, seen: 1, caught: 1 };

    localStorage.setItem('POKEDEX', JSON.stringify(newPokemon));
    
    const expected = { id: 1, seen: 1, caught: 1 };

    const actual = u.getPokedex();

    expect.deepEqual(actual, expected);
});

test('encountered should increment the seen key for a Pokemon that exists in localStorage', (expect) => {   
    u.clearPokedex();
    
    const newPokemon = [{ id: 1, seen: 1, caught: 0 }];
    localStorage.setItem('POKEDEX', JSON.stringify(newPokemon));

    const expected = [{ id: 1, seen: 2, caught: 0 }];

    u.encountered(1);
    const actual = u.getPokedex();

    expect.deepEqual(actual, expected);
});

test('encountered should add a new Pokemon to localStorage if not encountered yet', (expect) => {   
    u.clearPokedex();

    const expected = [{ id: 1, seen: 1, caught: 0 }];

    u.encountered(1);
    const actual = u.getPokedex();

    expect.deepEqual(actual, expected);
});

test('chosen should increment the caught key when a Pokemon is found in localStorage', (expect) => {   
    u.clearPokedex();

    const newPokemon = [{ id: 1, seen: 2, caught: 1 }];
    localStorage.setItem('POKEDEX', JSON.stringify(newPokemon));

    const expected = [{ id: 1, seen: 2, caught: 2 }];

    u.chosen(1);
    const actual = u.getPokedex();

    expect.deepEqual(actual, expected);
});