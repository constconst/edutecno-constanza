import carousel from './carousel.js'
import Cliente from './cliente.js'
import Impuestos from './impuestos.js'

var impuestos = new Impuestos(1000, 500)
var impuestos1 = new Impuestos(329042000, 1000)

var cliente = new Cliente('Ramira Ramos', impuestos)
var cliente1 = new Cliente('Rodomira Rozas', impuestos1)

console.log('Clientes e impuestos')
console.log('------------')
console.log('Nombre: ' + cliente.nombre)
console.log('Impuesto: ' + cliente.calcularImpuesto())
console.log('Nombre: ' + cliente1.nombre)
console.log('Impuesto: ' + cliente1.calcularImpuesto())