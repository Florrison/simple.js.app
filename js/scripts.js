let pokemonRepository = (function () {

    let pokemonList = [
     {name: 'Bulbasaur', height: '0.7', type: ['grass', 'poison']},
     {name: 'Charizard', height: '1.7', type: ['fire', 'air']},
     {name: 'Squirtle', height: '0.5', type: ['water']},
 ];
 
 function add(pokemon) {
     pokemonList.push(pokemon);
 }
 
 function getAll() {
     return pokemonList;
 }
 
 return {
     add: add,
     getAll: getAll
 };
 })();
 
 let pokemons = pokemonRepository.getAll();
 
 pokemons.forEach(pokemon => { 
 
     document.write('<p>' + pokemon.name + ' | height: ' + pokemon.height + '</p>');
     if (pokemon.height <= 0.5) {
         document.write(" - Aww, that is tiny!");
     }else if (pokemon.height >= 1) {
         document.write(" - Wow, that is big!");
     }else {
         document.write(" - Hmm, kind of average.");
     }
 });
 