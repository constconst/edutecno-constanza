import { Saiyajin, Humano } from "./clases/razas.js"
let participantes = []
document.getElementById("btnRegistrar").addEventListener("click", () => {
    let nombre = document.getElementById("nombre")
    let raza = document.getElementById("raza")

    let previewElement = document.getElementById("preview")
    let imgSrc = imagenSrcBg.slice(5, imagenSrcBg.length - 2)
    let ki = document.getElementById("poderPelea")
    let nuevoParticipante
    if (raza.value == "Saiyajin") {
        nuevoParticipante = new Saiyajin(nombre.value, imgSrc.value, ki.value, raza.valueI)
    } else if (raza.value == "Humano") {
        nuevoParticipante = new Humano(nombre.value, imgSrc.value, ki.value, raza.valueI)

    }
    participantes.push(nuevoParticipante)
    console.log(participantes)

})