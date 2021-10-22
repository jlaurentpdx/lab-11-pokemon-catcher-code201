# Poke-catcher

## Getting Started
- [x] Use the `alchemy-bootstrap-template` on GitHub to create a new repo
- [x] `git clone` your new repo as `lab-11-pokemon-catcher` 
- [x] `cd` into the repo directory and `code .`
- [x] Create and checkout a new `dev` branch
- [x] Download [pokemon.js](https://github.com/alchemycodelab/september-2021-foundations-i/blob/main/curriculum/labs/LAB-11-POKECATCHER/pokemon.js) and copy it into your project

## HTML Elements
### `~/index.html` should include:
- [x] 3 radio buttons with selectable images (`<input>` and `<img>` wrapped in a `<label>`)
    - [x] For images, select 3 photos from the available Pokémon in `pokemon.js`
- [x] Submit button
- [x] Clear button
### `results/index.html` should include:
- [x] Create `results.html` to display results
- [ ] Render results to a chart using `<chart>` and `charts.js`

## JavaScript Interactions: app.js
- *pokemonAppear* array should generate three Pokemon as radio buttons/images
- User should be able to click on images
- User should be able to submit their chosen pokemon (*pokemonChosen*)
- Once user reaches 10 or more plays, tracked by *pokemonCaught*, redirect user to `results/index.html`
- User should be able to view results generated as a chart via `charts.js` 

## Functions
### Utilities
- [x] _findById(x, y)_ - pass parameters `id` and `array`
- [x] _getPokedex()_ - checks for 'POKEDEX' in localStorage or returns '[]'

```js 
'POKEDEX' = [
  {
      id: '',
      appeared: #,
      chosen: #
  },
  {
      id: '',
      appeared: #,
      chosen: #
  },
  ...
```

### Set 'POKEDEX' using two functions
- [ ] _encountered(id)_ should:
    - [ ] Call _getPokedex()_
    - [ ] Increment _pokemonAppear_ by ID
    - [ ] Stringify to `encounterString`
    - [ ] `localStorage.setItem('POKEDEX', encounterString)`
- [ ] _selected_ should:
    - [ ] Call _getPokedex()_ 
    - [ ] Increment _pokemonChosen_ by ID
    - [ ] Stringify to `selectedString`
    - [ ] `localStorage.setItem('POKEDEX', selectedString)`

### app.js Functions
- [ ] _pokemonAppear_ function:
    - [ ] Set 3 index values using `Math.floor(Math.random() * array.length)` 
    - [ ] Ensure above indices are unique using a `while` loop where condition is that no two numbers are identical
    - [ ] Call _encountered()_
    - [ ] Render image using `url_img`
- [ ] Increment _pokemonCaught_

## State Tracking: 
- [ ] let _pokemonCaught_ be number of plays
- [ ] let _pokemonChosen_ be which radio button is selected at **Submit** press
- [ ] let _pokemonAppear_ be three random Pokemon

## User Events
### On Page Load:
- [ ] State _pokemonCaught_ = 0
- [ ] Generate 3 Pokemon
- [ ] State _pokemonAppear_ = [{id: x}, {id: y}, {id: z}]

### State changes when the **Submit** button or **Clear** button are clicked
- [ ] On **Submit**: 
    - [ ] If _pokemonCaught_ is < 10 then
        - [ ] Increment _pokemonCaught_
        - [ ] Store result of _pokemonChosen_
        - [ ] Generate three new Pokemon using _pokemonAppear_
    - [ ] else
        - [ ] Direct user to `results.html`
- [ ] On **Clear**:
    - [ ] Reset _pokemonCaught_ to 0
    - [ ] Clear results
    - [ ] Generate three new Pokemon using _pokemonAppear_  

## Acknowledgement
This plan was adapted from the collaborative efforts of [@fora-heims](https://github.com/fora-heims), [@Gcrowder93](https://github.com/Gcrowder93), [@ckaynatividad](https://github.com/ckaynatividad), [@Libbi-Dunham](https://github.com/Libbi-Dunham), and [@michellerenehey](https://github.com/michellerenehey). Thanks to Fora for sending me this tremendously helpful resource!