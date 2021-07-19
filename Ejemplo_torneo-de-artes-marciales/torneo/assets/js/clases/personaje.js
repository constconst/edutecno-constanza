// Creación de la superclase
class Personaje {
    constructor(nombre, img, poder, raza) {
            let Nombre = nombre
            let Img = img
            let Poder = poder
            let Raza = raza

            // getters

            this.getNombre = () => Nombre
            this.getImg = () => Img
            this.getPoder = () => Poder
            this.getRaza = () => Raza

            this.setPoder = (poder) => (Poder = poder)
        }
        // Creación de los métodos
    get Nombre() {
        return this.getNombre()
    }
    get Img() {
        return this.getImg()
    }
    get Poder() {
        return this.getPoder()
    }
    get Raza() {
        return this.getRaza()
    }
    set Poder(poder) {
        return this.getPoder(poder)
    }
}

console.log(new Personaje("goku", "...", 1234, "aye"))
export default Personaje