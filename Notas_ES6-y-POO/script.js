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

// ES5
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