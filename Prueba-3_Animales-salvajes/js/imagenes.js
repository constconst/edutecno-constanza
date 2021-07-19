import Animales from "./consulta.js"
// Select para los animales
const selectA = document.getElementById("animal")
    // Constante del div donde va el preview de las imágenes
const previewImg = document.getElementById("preview")

selectA.addEventListener("change", async() => {
    const { animales } = await Animales.getData()
        // Valor que entrega el elemento select
    const animalValor = selectA.value
        // Recorre cada animal dentro de la constante animales;
        // cuando es igual a animalValor (animal del select),
        // reemplaza el background-image por la imagen del json.
    animales.forEach(animal => {
        if (animal.name == animalValor) {
            // previewImg.style.backgroundImage = `url(assets/imgs/${animal.imagen})`
            previewImg.innerHTML = `<img height='auto' width='100%' src='assets/imgs/${animal.imagen}'>`

        }
    })
})

// Notas
// evento change se dispara para elementos input, select y textarea