// Guardo en una variable el número de jugadas
alert("ESTÁS A PUNTO DE JUGAR AL CACHIPÚN CIBERNÉTICO. SI ESTÁS LISTO PRESIONA OK")
var numeroJugadas = parseInt(prompt("wena wacho, ¿cuántas veces quieres jugar contra mí?"))
console.log(numeroJugadas)


var monitos = (opcionJugador, opcionMachina) => {
    return `${getMonito(opcionJugador)} vs ${getMonito(opcionMachina)}`
}

// darle un monito a cada número

var getMonito = (numero) => {
        switch (parseInt(numero)) {
            case 0:
                return "👊"
                break;
            case 1:
                return "🖐"
                break;

            case 2:
                return "✌"
                break;
        }
    }
    // For para hacer una jugada por el número de jugadas que me dieron

for (i = 0; i < numeroJugadas; i++) {
    var opcionJugador = prompt("¡jamás me ganarás! escoge: 0 (👊), 1 (🖐) o 2 (✌)")
    var opcionMachina = Math.floor(Math.random() * 3)

    console.log(opcionJugador, opcionMachina)
    alert(monitos(opcionJugador, opcionMachina))
    if (opcionMachina == opcionJugador) {
        alert("UFFF PAPÁ, EMPATE")
    } else if ((opcionJugador == 0 && opcionMachina == 1) || (opcionJugador == 1 && opcionMachina == 2) || (opcionJugador == 2 && opcionMachina == 0)) {
        alert("HÍJOLE, LA INTELIGENCIA SUPERIOR HA GANADO")
    } else if (opcionJugador > 2) {
        alert("TE DIJE QUE ESCOGIERAS DE 0 A 2")
    } else {
        alert("chingad*s, es que no me programaron muy clever")
    }
}