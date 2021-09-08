// Armar las clases y herencias.
// Clase propietario
class Propietario {
    constructor(nombre, direccion, telefono) {
        this.nombre = nombre
        this.direccion = direccion
        this.telefono = telefono
    }

    datosPropietario() {
        return `Le propietarie es: ${this.nombre}, dirección: ${this.direccion} y teléfono: ${this.telefono}`
    }
}
// Herencia animal
class Animal extends Propietario {
    constructor(nombre, direccion, telefono, tipo) {
        super(nombre, direccion, telefono)
        this._tipo = tipo
    }
    get tipo() {
        return `El animal es: ${this._tipo}`;
    }
}

// Herencia mascota
class Mascota extends Animal {
    constructor(nombre, direccion, telefono, tipo, nombreAnimal, enfermedad) {
        super(nombre, direccion, telefono, tipo)
        this._nombreAnimal = nombreAnimal
        this._enfermedad = enfermedad
    }
    get nombreAnimal() {
        return this._nombreAnimal
    }
    set nombreAnimal(nuevoNombreAnimal) {
        this._nombreAnimal = nuevoNombreAnimal
    }
    get enfermedad() {
        return this._enfermedad
    }
    set enfermedad(nuevaEnfermedad) {
        this._enfermedad = nuevaEnfermedad
    }
}



// Interacción con el DOM
// Guardar el formulario en una variable
var formulario = document.querySelector('form');

var datos = (event) => {
    event.preventDefault()
        // Guardar labels del formulario como variables locales
    let propietario = document.getElementById('propietario').value
    let telefono = document.getElementById('telefono').value
    let direccion = document.getElementById('direccion').value
    let nombreAnimal = document.getElementById('nombreMascota').value
    let tipo = document.getElementById('tipo').value
    let enfermedad = document.getElementById('enfermedad').value;

    let bicho = new Mascota(propietario, direccion, telefono, tipo, nombreAnimal, enfermedad);
    resultado(bicho)
    console.log(bicho)
}

var resultado = (valor) => {
    let resultadoLista = document.querySelector('#resultado ul')
    resultadoLista.innerHTML = `
    <li>${valor.datosPropietario()}</li>
    <li> ${valor.tipo} </li>
    <li> El nombre de la mascota es: ${valor.nombreAnimal}</li> 
    <li> El motivo de la consulta es: ${valor.enfermedad}</li> 
    `


}

formulario.addEventListener('submit', datos);