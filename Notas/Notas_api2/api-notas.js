/* Callbacks y APIs */

// Async await -> 
// si no colocamos el await, no espera
// al ejecutar la acción.
/* 

FETCH ->
Fetch es como la palabra más primitiva para hacer la descarga de api

    try {
            ejecuta opciones
        } catch (err){
            ejecuta si las opciones no funcionan
            console.error(err)
    }


*/

// const getDogPhoto = async() => {
//     const url = 'https://dog.ceo/api/breeds/image/random';
//     try {
//         const response = await fetch(url);
//         const photo = await response.json();
//         console.log(photo.message);
//     } catch (err) {
//         console.error(err);
//     }
// }
// getDogPhoto();

// REST
// Es buena práctica declarar una constante con la Base URL

// bloque 1
const baseUrl = 'https://jsonplaceholder.typicode.com';
// bloque 2
const request = async() => {}
    // bloque 3
const getPosts = async() => {}
    // bloque 4
const getUser = async() => {}
    // bloque 5
getPosts().then(() => {})

// Operador sprit [...]
// Los códigos muy bien hechos se preocupan de Throw / Reject
/* URIError: errores de ruta en el navegador. */