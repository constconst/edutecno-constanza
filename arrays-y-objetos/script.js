// ******** MÉTODOS INTEGRADOS CON ELEMENTOS

// PUSH : añade un elemento al final

let perros = [{ raza: "Yorkshire Terrier", color: "marrón, negro y gris" }, { raza: "Shar Pei", color: "marrón" }, { raza: "Schnauzer gigante", color: "negro" }];
perros.push = [{ raza: "quiltro hermoso", color: "marrón, negro y gris" }];
console.log(perros)


// POP : quita el último elemento

let librosJRRT = ["La comunidad del anillo", "Las dos torres", "El regreso del rey", "El prisionero de azkaban"]
librosJRRT.pop()
console.log(librosJRRT)

// SHIFT : quita el primer elemento

let instrumentos = [{ cuerda: "Guitarra", cantidad: 7 }, { viento: "Flauta", cantidad: 20 }, { cuerda: "Violín", cantidad: 5 }]
instrumentos.shift()
console.log(instrumentos)


// ******* MÉTODOS TRANSFORMADORES PARA MODIFICAR ELEMENTOS
// SPLIT : separa las cosas según un separador. recibe dos argumentos, el segundo es opcional.

var incognita = 'mesa*silla*comedor'
var incognita = incognita.split('*')
console.log(incognita)

// JOIN = imprimir separando con un formato.
var pokemones = ["pikachu", "bulbasaur", "ditto"]
document.body.innerHTML = pokemones.join('-')

// MAP = El método map() crea un nuevo array con los resultados de la llamada a la 
// función indicada aplicados a cada uno de sus elementos.
var numeros = [1, 2, 3, 5, 8, 13, 21];
numeros_new = numeros.map(function(num) {
    num = Math.pow(num, 2)
    return num
})
document.body.innerHTML = numeros_new

// REDUCE = transformar elementos de un array en un valor único.
// accumulator is the same as saying sum = 0 (initializing)
// current
var notas = [6, 7, 7, 5, 4]
let count = notas.length
var promedio = notas.reduce((accumulator, currentvalue) => accumulator += currentvalue)
    // 0 stands for the initial value of accumulator. en este caso no es necesario; accumulator
    // toma el valor del primer elemento del array.
console.log(promedio /= count)

// FILTER = 
var pokemones = [
    { nombre: 'Pikachu', level: 28 },
    { nombre: 'Charmander', level: 22 },
    { nombre: 'Dito', level: 37 },
];

var level = pokemones.filter(pokemon => pokemon.level > 30)
console.log(level)

// CONCAT = podemos fusionar los elementos de dos o más arrays dentro de un solo resultado.
// no modifica los arrays existentes, sino que arma un nuevo resultado.
var animalesA = ["perro", "gato"];
var animalesB = ["ratón", "iguana"];
var animales = animalesA.concat(animalesB)
console.log(animales)


// ****** MÉTODOS PARA ACCEDER A ELEMENTOS
// SORT = nos permite ordenar por orden alfabético los elementos en un array.
// o por su valor en estándar unicode.
var lista = ["Pepe", 5, 2, "Diego", "1"]
console.log(lista.sort())


// REVERSE = invertir el orden de los elementos dentro de un array.
var pokemon = ["Charizard", "Charmeleon", "Charmander"];
console.log(pokemon.reverse())

// forEach = recorrer elementos de un array y realizar alguna acción con respecto a cada uno de estos.
var Pokemon = new Array("Bulbasaur", "Ivysaur", "Venusaur", "Charmander", "Charmeleon", "Charizard", "Squirtle", "Wartortle", "Blastoise", "Caterpie", "Metapod", "Butterfree", "Weedle", "Kakuna", "Beedrill", "Pidgey", "Pidgeotto", "Pidgeot", "Rattata", "Raticate", "Spearow", "Fearow", "Ekans", "Arbok", "Pikachu", "Raichu", "Sandshrew", "Sandslash", "Nidoran", "Nidorina", "Nidoqueen", "Nidoran", "Nidorino", "Nidoking", "Clefairy", "Clefable", "Vulpix", "Ninetales", "Jigglypuff", "Wigglytuff", "Zubat", "Golbat", "Oddish", "Gloom", "Vileplume", "Paras", "Parasect", "Venonat", "Venomoth", "Diglett", "Dugtrio", "Meowth", "Persian", "Psyduck", "Golduck", "Mankey", "Primeape", "Growlithe", "Arcanine", "Poliwag", "Poliwhirl", "Poliwrath", "Abra", "Kadabra", "Alakazam", "Machop", "Machoke", "Machamp", "Bellsprout", "Weepinbell", "Victreebel", "Tentacool", "Tentacruel", "Geodude", "Graveler", "Golem", "Ponyta", "Rapidash", "Slowpoke", "Slowbro", "Magnemite", "Magneton", "Farfetch'd", "Doduo", "Dodrio", "Seel", "Dewgong", "Grimer", "Muk", "Shellder", "Cloyster", "Gastly", "Haunter", "Gengar", "Onix", "Drowzee", "Hypno", "Krabby", "Kingler", "Voltorb", "Electrode", "Exeggcute", "Exeggutor", "Cubone", "Marowak", "Hitmonlee", "Hitmonchan", "Lickitung", "Koffing", "Weezing", "Rhyhorn", "Rhydon", "Chansey", "Tangela", "Kangaskhan", "Horsea", "Seadra", "Goldeen", "Seaking", "Staryu", "Starmie", "Mr. Mime", "Scyther", "Jynx", "Electabuzz", "Magmar", "Pinsir", "Tauros", "Magikarp", "Gyarados", "Lapras", "Ditto", "Eevee", "Vaporeon", "Jolteon", "Flareon", "Porygon", "Omanyte", "Omastar", "Kabuto", "Kabutops", "Aerodactyl", "Snorlax", "Articuno", "Zapdos", "Moltres", "Dratini", "Dragonair", "Dragonite", "Mewtwo", "Mew")
Pokemon.forEach(pokemon => console.log(pokemon))

var clientes = [
    { nombre: 'Juan', edad: 28 },
    { nombre: 'Carlos', edad: 22 },
    { nombre: 'Karla', edad: 27 },
];
clientes.forEach(cliente => console.log(cliente.edad))

// FIND() 
// = nos permite encontrar un objeto que cumpla alguna condición que especifiquemos. 
//retorna el valor del primer elemento que cumpla
var pokemones = [
    { nombre: 'Charmander', level: 22 },
    { nombre: 'Pikachu', level: 28 },
    { nombre: 'Dito', level: 37 },
];
var pikachu = pokemones.find(pokemon => pokemon.nombre == 'Pikachu')
console.log(pikachu)

// findIndex
// obtiene el índice del objeto que cumpla con lo que pedimos
var experiencias = [{
        titulo: "Practica",
        anos: 1,
    },
    {
        titulo: "Programador Junior",
        anos: 2,
    },
    {
        titulo: "Programador Senior",
        anos: 4,
    },
    {
        titulo: "Jefe de proyecto",
        anos: 5,
    }
];

var Experiencia = experiencias.findIndex(experiencia => experiencia.anos >= 5)
console.log(Experiencia)


// SOME
var pokemones2 = [
    { nombre: 'Charmander', tipo: "Fuego" },
    { nombre: 'Pikachu', tipo: "Electricidad" },
    { nombre: 'Dito', tipo: "normal" },
];
var pokemonAgua = pokemones2.some(pokemon => pokemon.tipo == 'agua')
console.log(pokemonAgua)



// ... para sumar todos los arrays