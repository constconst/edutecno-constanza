// APUNTES
// *** Programación orientada a objetos
// Es una serie de normas. Tiene el objetivo de ser reutilizables y más fácil
// de utilizar por otros desarrolladorxs.

// ***** CLASES 
// Son funciones llamadas «Funciones constructoras» y se escriben iniciando con Mayúscula.
// ya estamos creando clases al utilizar variables.
// CLASES DE JAVASCRIPT -> las trae por defecto.
// Primitive value
var texto = new String('hola, soy un texto')
var numero = new Number(5)
var buleano = new Boolean(true)
    // Clases de javascript compuestas
var arreglo = new Array('Alejandro', 'María')
var objeto = new Object({ color: 'verde', tamaño: 'grande' })

// CLASES PERSONALIZADAS
//  (porque las clases son funciones)
function Persona() {
    this.nombre
    this.edad
}
// Creando esta clase personalizada se puede reutilizar para hacer más personas.

var persona1 = new Persona()
persona1.nombre = 'Alejo'
persona1.edad = 18
    // También se puede llamar con parámetros:
function Persona(nombre, edad) {
    this.nombre
    this.edad
}
var persona3 = new Persona('Pedro', 16)

// 
// *** OBJETOS
// 
// Es una colección de propiedades y métodos.
// Un método es una función dentro de un objeto.
var planta = {
    color: 'rosado',
    tamaño: 'chiquita',
    // a la función de abajo no le colocamos nombre porque está dentro de la propiedad de abajo,
    // entonces se transforma en un método.
    escribeInformacion: function() {
        console.log('El color de la planta es ' + planta.color + ' y su tamaño es ' + planta.tamaño)

    }
}
planta.escribeInformacion()

// Se puede hacer una clase para poder hacer varias plantas
function Planta(color, tamaño) {
    this.color = color
    this.tamaño = tamaño
}
var planta1 = new Planta('azul', 'mediano')

// Se puede aplicar un parámetro dentro de los métodos
var planta = {
    color: 'rosado',
    tamaño: 'chiquita',
    // parámetro
    escribeInformacion: function(precio) {
        console.log('El color de la planta es ' + planta.color + ' y su tamaño es ' + planta.tamaño + ' , y su precio es ' + precio)

    }
}

planta.escribeInformacion('$1500')