let pokemonList = [
    {name: 'Bulbasaur', height: '0.7', type: ['grass', 'poison']},
    {name: 'Charizard', height: '1.7', type: ['fire', 'air']},
    {name: 'Squirtle', height: '0.5', type: ['water']},
];

for (let i = 0; i < pokemonList.length; i++) {
    let pokemon = pokemonList[i];
    console.log('name:', pokemon.name);
    console.log('height:', pokemon.height);
    document.write('<p>' + pokemon.name + ' (height: ' + pokemon.height + ')');
    if (pokemon.height <= 0.5) {
        document.write(" - Aww, that is tiny!");
    }else if (pokemon.height >= 1) {
        document.write(" - Wow, that is big!");
    }else {
        document.write(" - Hmm, kind of average.");
    }
}