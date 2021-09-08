var global = (() => {
    let = contenidos = (url, id) {

    }
})

// Armar las clases y herencias.
class Multimedia {
    constructor(url) {
        // Atriburo url que necesitará iframe para mostrar el video.
        let _url = url // closure para proteger el atributo.
        this.getUrl = () => _url;
    }
    setInicio() {
        return `holi`
    }
}
// Recibir la propiedad id, la cual será el elemento del DOM que se necesita 
// para poder agregar la URL en la etiqueta iframe que corresponda. 
class Reproductor extends Multimedia {
    constructor(url, id) {
        super(url)
        let _id = id
        this.getId = () => _id;
    }
    playMultimedia() {
        return `multimedia`
    }
    setInicio() {
        return `Inicio`
    }
}