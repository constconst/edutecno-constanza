import Personajes from "./consulta.js"
// Vamos a generar la interacción del botón Ver imágenes.
document.getElementById("buttonImages").addEventListener("click", async() => {
    const { personajes } = await Personajes.getData()
    console.log(personajes)
        // necesitamos obtener todas las imágenes correspondientes al peleador que el usuario seleccione.
    const pj = document.getElementById("nombre").value
    const imagenesPjTemplate = personajes
        .find((p) => p.name == pj)
        .imagenes.map((i) =>
            // El template prepara un variable de strings
            `<img width="200" src="/assets/imgs/${pj}/${i}" />`)
        .join("")

    document.getElementsByClassName("personajes")[0].innerHTML = imagenesPjTemplate
        // Queremos agregarle a todas las imágenes un evento click para poder manipular esa interacción
    document.querySelectorAll(".personajes img").forEach((i) => {
        i.addEventListener("click", (e) => {
            // cerrar la ventana modal
            $("#imagenesModal").modal("toggle")
            const imagenSrc = e.target.src
            document.getElementById("preview").style.backgroundImage = `url(${imagenSrc})`
        })
    })
})