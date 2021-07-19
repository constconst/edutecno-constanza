import Personaje from "./personaje.js"
// subclases
class Saiyajin extends Personaje {
    constructor(nombre, img, poder, raza) {
            // hay que activar el método super para heredar estos atributos
            super(nombre, img, poder, raza)
        }
        // Tiene la particularidad de tener un método 
    Transformacion() {
        let poder = this.getPoder()
        this.setPoder(parseInt(poder * 1.8))
    }
}

class Humano extends Personaje {
    constructor(nombre, img, poder, raza) {
            // hay que activar el método super para heredar estos atributos
            super(nombre, img, poder, raza)
        }
        // Tiene la particularidad de tener un método 
    Coraje() {
        let poder = this.getPoder()
        this.setPoder(parseInt(poder * 1.2))
    }
}

export { Saiyajin, Humano }