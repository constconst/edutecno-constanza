// HERENCIAS

class Dog {
    constructor(name, color) {
        this.name = name
        this.color = color
    }
    sayGuau() {
        return "Guau guau"
    }
    static sayMiau() {
        return "Miau miau"
    }
}

class Popi extends Dog {
    constructor(name, color, age) {
        // super() debe ser llamado para utilizar .this
        // Si no utilizamos super(), generaríamos un error de referencia
        super(name, color)
        this.name = "popi"
        this.color = color
        this.age = age
    }
    sayInformation() {
            return `Hola, mi nombre es ${this.name} y tengo ${this.age} años.`
        }
        // podemos crear métodos que utilicen métodos de la clase padre.
    sayGuauGuau() {
        // herencia en interpolación.
        return `${super.sayGuau()} Guauuuu!`
    }
}

var popi = new Popi("Golden", 2)
console.log(popi.sayGuau())
    // 
    // 
    // 
    // 
    // 
    //  HERENCIA CON PROTOTIPOS
    //  implícitamente, todos los objetos poseen un __proto__

// por ejemplo: 
// var point= {
//     x: 10,
//     y: 5
// }

// console.log(point.__proto__)

var Animal = {
    type: 'Dog',
    color: 'White',
    age: 2
}
Animal.__proto__.sayHello = function() {
    console.log('Hello from animal.__proto__')
}

/* Ejercicio guiado */

function FiguraGeometrica(lado) {
    this.lado = lado
}

function Poligono(lado) {
    // método call
    FiguraGeometrica.call(this, lado)
}

function Poligono(lado) {
    FiguraGeometrica.call
}