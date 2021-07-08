// APUNTES
// *** Programación orientada a objetos
// Es una serie de normas. Tiene el objetivo de ser reutilizables y más fácil
// de utilizar por otros desarrolladorxs.

// ***** CLASES 
// // Son funciones llamadas «Funciones constructoras» y se escriben iniciando con Mayúscula.
// // ya estamos creando clases al utilizar variables.
// // CLASES DE JAVASCRIPT -> las trae por defecto.
// // Primitive value
// var texto = new String('hola, soy un texto')
// var numero = new Number(5)
// var buleano = new Boolean(true)
//     // Clases de javascript compuestas
// var arreglo = new Array('Alejandro', 'María')
// var objeto = new Object({ color: 'verde', tamaño: 'grande' })

// // CLASES PERSONALIZADAS
// //  (porque las clases son funciones)
// function Persona() {
//     this.nombre
//     this.edad
// }
// // Creando esta clase personalizada se puede reutilizar para hacer más personas.
// // Con new podemos instanciar (crear un nuevo objeto a partir de otro).

// var persona1 = new Persona()
// persona1.nombre = 'Alejo'
// persona1.edad = 18
//     // También se puede llamar con parámetros:
// function Persona(nombre, edad) {
//     this.nombre
//     this.edad
// }
// var persona3 = new Persona('Pedro', 16)

// // 
// // *** OBJETOS
// // 
// // Es una colección de propiedades y métodos.
// // Un método es una función dentro de un objeto.
// var planta = {
//     color: 'rosado',
//     tamaño: 'chiquita',
//     // a la función de abajo no le colocamos nombre porque está dentro de la propiedad de abajo,
//     // entonces se transforma en un método.
//     escribeInformacion: function() {
//         console.log('El color de la planta es ' + planta.color + ' y su tamaño es ' + planta.tamaño)

//     }
// }
// planta.escribeInformacion()

// // Se puede hacer una clase para poder hacer varias plantas
// function Planta(color, tamaño) {
//     this.color = color
//     this.tamaño = tamaño
// }
// var planta1 = new Planta('azul', 'mediano')

// // Se puede aplicar un parámetro dentro de los métodos
// var planta = {
//     color: 'rosado',
//     tamaño: 'chiquita',
//     // parámetro
//     escribeInformacion: function(precio) {
//         console.log('El color de la planta es ' + planta.color + ' y su tamaño es ' + planta.tamaño + ' , y su precio es ' + precio)

//     }
// }

// planta.escribeInformacion('$1500')


// /* ***
// *****
// ****
// APUNTES ES6  
// ******
// *********
// ***********/

// // 1. Funciones arrow
// (argumento1, argumento2, ...) => { cuerpo de la función }
// // 2. Módulos
// // 3. Valores por defecto en parámetros
// /* En ES5 se hubiera escrito así:
// ****function foo (a, b, c) {
//     a = a || 1;
//     b = b || 2;
//     c = c || 3;
//     return a + b + c;
// }
// */
// let foo = (a = 1, b = 2, c = 3) => a + b + c;
// console.log(foo());

// // Ejercicio (1) https://codepen.io/ccconst/pen/zYwvprO
// let restar = document.getElementById('restar')
// let resultado = document.getElementById('resultado')
// restar.addEventListener('click', () => {
//     let num1 = document.getElementById('num1').value
//     let num2 = document.getElementById('num2').value
//     let num3 = document.getElementById('num3').value
//     resultado.innerHTML = restando(parseInt(num1) || undefined, parseInt(num2) || undefined, parseInt(num3) || undefined)
// })
// restando = (a = 1000, b = 1000, c = 1000) => a - b - c

// // 4. Interpolación
// var persona = { nombre: "Jos " };
// var direccion = { calle: "Avenida Santiago 123", comuna: "Santiago" };
// var mensaje = `Hola ${persona.nombre},
// tu dirección es ${direccion.calle}, ${direccion.comuna}`;


// /***
//  ***  CLASES
//  ***/

// class Cuadrado {
//     constructor(lado) {
//         this.lado = lado
//     }
// }
// let c1 = new Cuadrado(10)

// // Ejercicio guiado
// class Estudiante {
//     constructor(nombre, edad) {
//         this.nombre = nombre
//         this.edad = edad
//     }
// }

// let e1 = new Estudiante('Juan', 35)
// console.log(e1)
//     // Ejercicio (4)
// function Carta(numero, pinta) {
//     this.numero = numero;
//     this.pinta = pinta;
// }
// var corazones = new Carta(10, 'Corazones');

// class Carta {
//     constructor(numero, pinta) {
//         this.numero = numero;
//         this.pinta = pinta;
//     }
// }

// let corazones = new Carta(10, 'Corazones')
// console.log(corazones)

// Ejercicio guiado
// class Cuadrado {
//     constructor(lado) {
//         this.lado = lado
//     }
//     calcularArea() {
//         return this.lado * this.lado
//     }
// }
// let c1 = new Cuadrado(5);
// console.log(c1.calcularArea());

// Ejercicio (5)
// function Usuario(nombre, rut) {
//     this.nombre = nombre;
//     this.rut = rut;
//     }
//     Usuario.prototype.saludar = function(){
//     console.log(`Hola soy ${this.nombre} y mi rut es: ${this.rut}`);
//     }
//     var u1 = new Usuario('Jocelyn','17.123.456-7');
//     u1.saludar();

// class Usuario {
//     constructor(nombre, rut) {
//         this.nombre = nombre
//         this.rut = rut
//     }
//     saludar() {
//         console.log(`Hola soy ${this.nombre} y mi rut es: ${this.rut}`)
//     }
// }

// let u1 = new Usuario('Jocelyn', '17.123.456-7')
// u1.saludar()

// /***
//  ***  Clases a partir de un diagrama UML
//  ***/

// class Rectangulo {
//     constructor(x, y) {
//         this.x = x
//         this.y = y
//     }
//     calcularArea() {
//         return this.x * this.y
//     }
//     calcularPerimetro() {
//         return (this.x + this.y) * 2
//     }
// }

// class Circulo {
//     constructor(r) {
//         this.r = r
//     }
//     calcularArea() {
//         return this.r * this.r * Math.PI
//     }
//     calcularPerimetro() {
//         return this.r * Math.PI * 2
//     }
// }

// let rectangulo1 = new Rectangulo(3, 4)
// console.log(rectangulo1.calcularArea())
// console.log(rectangulo1.calcularPerimetro())

// let circulo1 = new Circulo(3)
// console.log(circulo1.calcularArea())
// console.log(circulo1.calcularPerimetro())


// Ejercicio guiado: getters and setters
// class Perro {
//     constructor(raza, nombre) {
//         this._raza = raza
//         this.nombre = nombre
//     }
//     get raza() {
//         return this._raza
//     }
//     set raza(nueva_raza) {
//         this._raza = nueva_raza
//     }
// }

// let perroLindo = new Perro('Quiltro', 'Brumito')
// console.log(perroLindo)
// let perroFeo = new Perro('Weimaraner', 'Helguito')
// console.log(perroFeo)

// Ejercicio (7)
// class Vehiculos {
//     constructor(marca) {
//         this._marca = marca
//     }
//     get marca() {
//         return this._marca
//     }
//     set marca(nuevaMarca) {
//         return this._marca = nuevaMarca
//     }
// }

// let v1 = new Vehiculos('Ford')
// console.log(v1.marca)
// let v2 = new Vehiculos('Bui')
// console.log(v2.marca)