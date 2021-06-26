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


                    // Hermoso gráfico
                    var data = [];
                    var i = 0;
                    $.each(pokemon.abilities, (index, value) => {
                        console.log('poderes ' + index + '-' + value);


                        data.push({
                            y: value,
                            label: index
                        });


                        i++;


                    });

                    console.log(data);
                    window.onload = function() {
                        var chart = new CanvasJS.Chart("chartContainer", {
                            theme: "light2",
                            title: {
                                text: "Gaming Consoles Sold in 2012"
                            },
                            data: [{
                                type: "pie",
                                startAngle: 240,
                                yValueFormatString: "##0.00\"%\"",
                                indexLabel: "{label} {y}",
                                dataPoints: data
                            }]
                        });
                        chart.render();

                        $("#chart").CanvasJSChart(options);
                    }





                },
                error: function(error) {
                    alert('diablos')
                },
            });
        } else {
            $('#poke-name').text('ERROR, inténtalo de nuevo.');
            $('#poke-image')
                .append(`<img src="assets/img/lapras.gif" style="width:100%;">`)
        }

    });
});