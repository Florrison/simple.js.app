let pokemonRepository = (function () {

    let repository = [  {name: 'Bulbasaur', height: '0.7', type: ['grass', 'poison']},
    {name: 'Charizard', height: '1.7', type: ['fire', 'air']},
    {name: 'Squirtle', height: '0.5', type: ['water']},
];

function add(pokemon) {
    if (
        typeof pokemon === 'object' &&
        'name' in pokemon &&
        'height' in pokemon &&
        'types' in pokemon
    ) {
        repository.push(pokemon);
    } else {
        console.log('pokemon is not correct');
    }
}

function getAll() {
    return repository;
}
function addListItem(pokemon) {
    let pokemonList = document.querySelector('.pokemon-list');
    let listpokemon = document.createElement('li');
    let button = document.createElement('button');
    button.innerText = pokemon.name;
    button.classList.add('button-class');
    button.addEventListener('click', function () {
        showDetails(pokemon);
    });
    listpokemon.appendChild(button);
    pokemonList.appendChild(listpokemon);
}

function showDetails(pokemon) {
    console.log(pokemon.name);
}

return {
    add: add,
    getAll: getAll,
    addListItem: addListItem
  };
})();

pokemonRepository.add({ name: "Pikachu", height: 0.3, types: ["electric"] });

console.log(pokemonRepository.getAll());

pokemonRepository.getAll().forEach(function (pokemon) { 
    pokemonRepository.addListItem(pokemon);
});
