alert("Bienvenide a la tabla de multiplicación más incompleta de la historia de la programación.")
    // Pedir qué número se va a multiplicar
let numeroUser = parseInt(prompt("Escoge el número que vamos a multiplicar. Tiene que estar entre 0 y 20."))

if (numeroUser >= 0 && numeroUser <= 20) {
    alert(`Tu número ${numeroUser} está dentro del rango. ¡Perfectirijillo! Podemos continuar. Revisa tus resultados por consola`)
} else {
    alert(`Too bad amigue, tienes que escoger un número válido. ${numeroUser} no está dentro del rango.`)
    location.reload();
}

// Hacer un ciclo for para hacer la tabla

for (let i = 1; i <= numeroUser; i++) {
    let multiplicacion = numeroUser * i
    console.log(`🦖 ${numeroUser} x ${i} = ${multiplicacion}`)

}

for (let i = 1; i <= numeroUser; i++) {
    let respuesta = 1
    for (let x = 1; x <= i; x++) {
        respuesta = respuesta * x
    }
    console.log(`Factorial de ${i} es: ${respuesta}`)
}