// Perdón, me cargan los superhéroes.
// regex que solo acepte números

$(function() {

    $('button').on('click', function() {
        var pokePattern = /^[0-9]+$/gm;
        var pokeNum = document.getElementById('pokemon-number');
        var pokeNumber = pokeNum.value
        var pokeButton = document.getElementById('pokemon-button');
        if (pokeNumber.match(pokePattern) && pokeNumber <= 890) {
            $.ajax({
                // GET es el default, así que no es necesario añadirlo.
                type: "GET",
                url: `https://pokeapi.co/api/v2/pokemon/${pokeNumber}`,
                dataType: "json",
                success: function(pokemon) {
                    console.log('success', pokemon);
                    $('#poke-name').text(pokemon.name);
                    $('#poke-moves').text(pokemon.abilities[0].ability.name);
                    $('#poke-type').text(pokemon.types[0].type.name);
                    $('#poke-weight').text(`${pokemon.weight} lb`);

                    $('#poke-image')
                        .append(`<img src="${pokemon.sprites['front_default']}" class="pokemon-pixel">
                        <img src="${pokemon.sprites['back_default']}" class="pokemon-pixel">
                        <img src="${pokemon.sprites['front_shiny']}" class="pokemon-pixel">`)



                },
                error: function(error) {
                    alert('chingados')
                },
            });
        } else {
            console.log('debes escoger un número igual o menor a 1118')
        }

    });
});