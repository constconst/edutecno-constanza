import { Leon, Lobo, Oso, Serpiente, Aguila } from "./clases/especies.js"
// Array para añadir animales
let animales = []
document.getElementById("btnRegistrar").addEventListener("click", () => {
    let nombre = document.getElementById("animal").value
    let edad = document.getElementById("edad").value
    let comentario = document.getElementById("comentarios").value
    let img = document.getElementById("preview").innerHTML
        // src = img.getElementsByTagName('img').src;

    if ((nombre == '') || (edad == '') || (comentario == '') || (img == '')) {
        alert('Por favor, ingrese todos los datos.')
    } else {
        let addAnimal
        if (nombre == 'Leon') {
            addAnimal = new Leon(nombre, edad, img, comentario, 'Rugido')
        } else if (nombre == 'Lobo') {
            addAnimal = new Lobo(nombre, edad, img, comentario, 'Aullido')

        } else if (nombre == 'Oso') {
            addAnimal = new Oso(nombre, edad, img, comentario, 'Grunido')
        } else if (nombre == 'Serpiente') {
            addAnimal = new Serpiente(nombre, edad, img, comentario, 'Siseo')

        } else if (nombre == 'Aguila') {
            addAnimal = new Aguila(nombre, edad, img, comentario, 'Chillido')
        }
        animales.push(addAnimal)
        console.log(addAnimal)
        reloadTable();
        // Devolver formulario al estado inicial
        document.getElementById('animal').value = '';
        document.getElementById('edad').value = '';
        document.getElementById('preview').innerHTML = '';
        document.getElementById('comentarios').value = '';
    }
})

const reloadTable = () => {
    const animalesTemplate = document.getElementById("animales-tabla")
        // Limpiar el espacio
    animalesTemplate.innerHTML = "";
    animales.forEach((animal) => {
        let sonido;
        if (animal.getSonido() === 'Rugido') {
            sonido = animal.Rugido();
        } else if (animal.getSonido() === 'Aullido') {
            sonido = animal.Aullido();
        } else if (animal.getSonido() === 'Grunido') {
            sonido = animal.Grunido();
        } else if (animal.getSonido() === 'Siseo') {
            sonido = animal.Siseo();
        } else if (animal.getSonido() === 'Chillido') {
            sonido = animal.Chillido();
        }
        // concatenar tabla con el template
        animalesTemplate.innerHTML += `
        <div class='card m-1' style="max-width:200px;" id="image-click"> 
            ${animal.getImg()}
            <div class='card-body'>
                ${sonido}
            </div>
        </div>`

        console.log(animal.getImg())
    })
}

// let imageClick = document.getElementById("image-click")
// imageClick.addEventListener('click', () => {

//     let modalBody = document.getElementById("modal-body")

//     modalBody.innerHTML = ''
//         // // concatenar tabla con el modal
//     modalBody.innerHTML += `
//         <div class='card m-1'>
//         ${animal.getImg()}
//             <div class='card-body'>
//                 <h4 class='cart-title'>${animal.getNombre()}</h4>
//                 <hr class='w-50 mx-auto'>
//                 <h6 class='card-text'>Edad: ${animal.getEdad()}</h6>
//                 <h6 class='card-text'>Comentarios: ${animal.getComentario()}</h6>
//                 ${sonido}
//             </div>
//         </div>`
// })