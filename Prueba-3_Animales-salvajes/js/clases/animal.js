// Creación de la superclase
class Animal {
    constructor(nombre, edad, img, comentario, sonido) {
            let Nombre = nombre
            let Edad = edad
            let Img = img
            let Comentario = comentario
            let Sonido = sonido

            // getters
            this.getNombre = () => Nombre
            this.getEdad = () => Edad
            this.getImg = () => Img
            this.getComentario = () => Comentario
            this.getSonido = () => Sonido


            // Setter
            this.setComentario = (comentario) => (Comentario = comentario)
        }
        // Creación de los métodos
    get Nombre() {
        return this.getNombre()
    }
    get Img() {
        return this.getImg()
    }
    get Sonido() {
        return this.getSonido()
    }

    get Comentario() {
        return this.getComentarios(comentario)
    }
}
export default Animal