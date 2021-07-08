// Forma de crear objectos #1
var rectangulo = new Object()
rectangulo.ancho = 10
rectangulo.alto = 5
    // 2da forma de crear objectos. notación literal.
cuadrado = { acho: 5, alto: 5 }
    // Podemos modificar o mostrar el valor de estas propiedades así:
console.log(cuadrado.ancho)
cuadrado.ancho = 7
cuadrado['ancho'] = 8

// Ejercicios
// var notebook = new Object()
notebook = { make: 'Dell', processor: 'I7' }
notebook.make = 'Dell'
notebook.processor = 'I7'
notebook.processor = 'I9'
notebook['make'] = 'HP'
console.log(notebook)
var estudiante = new Object()
estudiante.nombre = 'Juan'
estudiante.edad = '35'
console.log(estudiante)

// Ejercicio guiado: creando objetos con métodos.
var vaca = new Object()
vaca.sonido = () => {
    console.log('moo')
}
vaca.sonido()

// se puede crear un método con notación literal
perro = {
    hablar: () => {
        console.log('woof')
    }
}
perro.hablar()

// traspasar el siguiente obj a su notación literal
// var gato = new Object();
// gato.sonido = function() {
//     console.log("miau");
// };
// gato.sonido();
gato = {
    sonido: () => {
        console.log('miau')
    }
}
gato.sonido()

// ejercicio guiado
var persona = new Object()
persona.nombre = "Camila"
persona.edad = "30"

// **** POR QUÉ NO ME RESULTA CON ()=>
persona.saludar = function() {
    console.log("Hola, soy " + this.nombre + ", y tengo " +
        this.edad + " años.")
};
// persona.saludar = function() {
//     console.log("Hola soy " + this.nombre);
// };
persona.saludar()

// ejercicio 8
var notebook = new Object();
notebook.marca = "Dell";
notebook.obtener_informacion = function() {
    console.log("Computador marca " + notebook.marca);
}
notebook.obtener_informacion();

// ******************************************

// ES5
// En ES5 tb se trabaja con POO pero mediante la estructura base en la cual se basa javascript,
// que son los prototipos.
// Crear objetos a partir de una función constructora
function Estudiante(nombre) {
    this.nombre = nombre;
};
var c1 = new Estudiante('Javiera');
var c2 = new Estudiante('Francisco');
var c3 = new Estudiante('Diana');
console.log(c1);
console.log(c2);
console.log(c3);
c1.saludar = function() {
    console.log("Hola soy " + this.nombre);
};
c1.saludar();

// **** ¿Por qué utilizar .this?
// En las funciones constructoras, .this referencia al nuevo objeto en construcción.
var persona = new Object()
persona.nombre = "Camila"
persona.saludar = function() {
    console.log("Hola soy " + this.nombre);
};

var persona.saludar()

// ----
function Rectanguloide(ancho, alto) {
    console.log("antes: ", this)
    this.ancho = ancho
    this.alto = alto
    console.log("después: ", this)
}
var r1 = new Rectanguloide(4, 6)
    // Ejercicio propuesto (9). Reescribe el siguiente c digo utilizando una función constructora.
var persona = new Object();
persona.nombre = "Camila";
persona.saludar = function() {
    console.log("Hola soy " + this.nombre);
}
persona.saludar();
// resultado
function Persona(nombre) {
    this.saludar = function() {
        console.log("Hola soy " + this.nombre);
    }
}

var p1 = new Persona('Camila')
p1.saludar()


/* DIFERENCIAS ENTRE ES6 Y ES5
1. No class keywords in ES5:
To implement class-like functionalities, we use functions.
PROTOTYPE -> son un mecanismo mediante el cual los objetos en Javascript
heredan características entre sí.
Los métodos y propiedades para un objeto son definidos en la propiedad prototype,
la cual reside en la función constructora del objeto, no en la instancia misma
del objeto cuando se crea o inicializa. */

// Ejercicio guiado
function Usuario(nombre) {
    // Se tiene que inicializar el parámetro
    this.nombre = nombre
}

Usuario.prototype.saludar = function() {
    console.log('soy ' + this.nombre)
}

var usuario1 = new Usuario('Juan')
var usuario2 = new Usuario('Jocely')
usuario1.saludar()
usuario2.saludar()

// Con Prototype tb se pueden hacer atributos globales.
Usuario.prototype.edad = 30;

// *** Ejercicio 10
// Reescribe el siguiente código utilizando prototipos para evitar definir múltiples veces el método agregarPuntos.
function Jugador(nombre) {
    this.nombre = nombre;
    this.puntos = 0;
}
Jugador.prototype.agregarPuntos = function() {
    this.puntos = this.puntos + 100
}
var jugador1 = new Jugador('Francisca');

var jugador2 = new Jugador('Camilo');

jugador1.agregarPuntos();
jugador2.agregarPuntos();
console.log(jugador1);
console.log(jugador2);


// Ejercicio 11
function Rectangulo(ancho, alto) { // Función constructora
    this.ancho = ancho; // Asignamos ancho inicial
    this.alto = alto; // Asignamos alto inicial
}

Rectangulo.prototype.calcularArea = function() {
    return this.ancho * this.alto;

}

Rectangulo.prototype.calcularPerimetro = function() {
    return (this.ancho + this.alto) * 2;

}

r1 = new Rectangulo(3, 5); // Creamos una instancia

r2 = new Rectangulo(4, 8); // Creamos una instancia

console.log(r1.calcularArea() + r2.calcularArea()); // La suma del área de los rectángulos es:
console.log(r1.calcularPerimetro() + r2.calcularPerimetro());

// CONCEPTOS
// 1. ABSTRACCIÓN
/* 2. ENCAPSULAMIENTO -> debemos proteger los estados internos, es decir, las propiedades de los objetos.
Este aislamiento hace que los datos (propiedades) del objeto solo puedan gestionarse con las operaciones
(métodos) definidos en ese objeto. 
Formas de aplicar el encapsulamiento:
Object.defineProperty()
Object.freeze()
WeakMap
Closures
IIFE

*/

function Estudiante(nombre) {
    this.nombre = nombre;
}
var estudiante1 = new Estudiante('Juan');
console.log(estudiante1.nombre); // Juan
estudiante1.nombre = "Javier";
/*El código está sobreescribiendo la propiedad sin estar encapsulada desde fuera del objeto sin utilizar métodos*/
console.log(estudiante1.nombre); // Javier

// REHECHO
function Estudiante(nombre) {
    var getNombre = nombre;
}

function Estudiante(nombre) {
    var getNombre = nombre;
    Object.defineProperty(this, "getNombre", { value: getNombre });
}