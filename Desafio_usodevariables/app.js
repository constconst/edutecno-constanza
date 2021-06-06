// pedir al usuarie que ingrese dos números diferentes y mayores a cero. 
var primerNumero = parseInt(prompt("Ingresa dos números diferentes y mayores a cero. Primer número:"))
var segundoNumero = parseInt(prompt("Ingresa dos números diferentes y mayores a cero. Segundo número:"))
    // imprimir en consola la aritmética de los números
console.log(`${primerNumero} + ${segundoNumero} = ${primerNumero + segundoNumero}`)
console.log(`${primerNumero} - ${segundoNumero} = ${primerNumero - segundoNumero}`)
console.log(`${primerNumero} / ${segundoNumero} = ${primerNumero / segundoNumero}`)
console.log(`${primerNumero} * ${segundoNumero} = ${primerNumero * segundoNumero}`)
console.log(`${primerNumero} % ${segundoNumero} = ${primerNumero % segundoNumero}`)

// pedir grados celsius
var celsius = parseInt(prompt("Ingresa temperatura en grados celsius a convertir en farenheit y kelvin"))
var kelvin = celsius + 273.15
console.log(`${celsius} grados celsius es igual a ${kelvin} k`)
var farenheit = (celsius * 9 / 5) + 32
console.log(`${celsius}ºC es igual a ${farenheit} ºF`)
alert("ve los resultados por consola")