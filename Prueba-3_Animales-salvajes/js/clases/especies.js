import Animal from "./animal.js"
// Subclases. León
class Leon extends Animal {
    constructor(nombre, edad, img, comentario, sonido) {
        // activar el método super para llamar estos atributos.
        super(nombre, edad, img, comentario, sonido)
    }
    Rugido() {
        return `<audio src="./assets/sounds/Rugido.mp3" style="max-width:150px;" controls></audio>`
    }

}
// Subclase Lobo

class Lobo extends Animal {
    constructor(nombre, edad, img, comentario, sonido) {
        // activar el método super para llamar estos atributos.
        super(nombre, edad, img, comentario, sonido)
    }
    Aullido() {
        return `<audio src="./assets/sounds/Aullido.mp3" style="max-width:150px;" controls></audio>`
    }

}
// Subclase oso
class Oso extends Animal {
    constructor(nombre, edad, img, comentario, sonido) {
        // activar el método super para llamar estos atributos.
        super(nombre, edad, img, comentario, sonido)
    }
    Grunido() {
        return `<audio src="./assets/sounds/Gruñido.mp3" style="max-width:150px;" controls></audio>`
    }

}
// Subclase serpiente
class Serpiente extends Animal {
    constructor(nombre, edad, img, comentario, sonido) {
        // activar el método super para llamar estos atributos.
        super(nombre, edad, img, comentario, sonido)
    }
    Siseo() {
        return `<audio src="./assets/sounds/Siseo.mp3" style="max-width:150px;" controls></audio>`
    }

}
// Subclase águila
class Aguila extends Animal {
    constructor(nombre, edad, img, comentario, sonido) {
        // activar el método super para llamar estos atributos.
        super(nombre, edad, img, comentario, sonido)
    }
    Chillido() {
        return `<audio src="./assets/sounds/Chillido.mp3" style="max-width:150px;" controls></audio>`
    }

}

export { Leon, Lobo, Oso, Serpiente, Aguila }