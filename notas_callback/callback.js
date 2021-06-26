// CALLBACKS
// construir con una constante.
// el mayor beneficio es cuando estamos viendo procesos asíncronos.
// en procesos asíncronos es necesario el callback. 
// Con callbacks no se llama con return, sino que con funciones.
const getSquare = (number4, calcularViajar) => {
    console.log('iniciando getSquare')
    const r = number4 * number4
    calcularViajar(r)
}

const getLog = resultFinal => {
    console.log('Última llamada')
    console.log(resultFinal)
}

getSquare(4, getLog)

// Timer
var globalVar = 0
const randomNumber = (min, max) => {
    return parseInt(Math.random() * (max - min) + min)
}
const runner = (time) => {
    console.log("1")
    setTimeout(() => console.log(`Hola, soy el timer de ${time}ms`), 1032)
    setTimeout(() => console.log(`Hola, soy el timer de ${time}ms`), 1676)
    setTimeout(() => console.log(`Hola, soy el timer de ${time}ms`), 3616)
    setTimeout(() => console.log(`Hola, soy el timer de ${time}ms`), 4883)
}

console.log("2")
runner(randomNumber(500, 5000))
runner(randomNumber(500, 5000))
runner(randomNumber(500, 5000))
runner(randomNumber(500, 5000))