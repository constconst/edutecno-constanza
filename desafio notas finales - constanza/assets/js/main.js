// Pedir datos personales
var nombre = prompt("Ingresa tu nombre", "")
var carrera = prompt("Ingresa tu carrera", "")

var ramoA = prompt("Ingresa el primer ramo", "Por ejemplo: Matemáticas")
var nota1a = prompt("Ingresa la primera nota del ramo " + ramoA, "notación: 0.0")
var nota2a = prompt("Ingresa la segunda nota del ramo " + ramoA, "notación: 0.0")
var nota3a = prompt("Ingresa la tercera nota del ramo " + ramoA, "notación: 0.0")


var ramoB = prompt("Ingresa el segundo ramo", "")
var nota1b = prompt("Ingresa la primera nota del ramo " + ramoB, "notación: 0.0")
var nota2b = prompt("Ingresa la segunda nota del ramo " + ramoB, "notación: 0.0")
var nota3b = prompt("Ingresa la tercera nota del ramo " + ramoB, "notación: 0.0")


var ramoC = prompt("Ingresa el tercer ramo", "")
var nota1c = prompt("Ingresa la primera nota del ramo " + ramoC, "notación: 0.0")
var nota2c = prompt("Ingresa la segunda nota del ramo " + ramoC, "notación: 0.0")
var nota3c

// transformar las notas a números y guardarlos en una variable para hacer el cálculo

nota1a = parseFloat(nota1a)
nota2a = parseFloat(nota2a)
nota3a = parseInt(nota3a)

nota1b = parseFloat(nota1b)
nota2b = parseFloat(nota2b)
nota3b = parseFloat(nota3b)

nota1c = parseFloat(nota1c)
nota2c = parseFloat(nota2c)

// declaro la variable de la nota incógnita
var notaIncognita


// sacar promedios. dejarlos con dos decimales

var promedioA = ((nota1a + nota2a + nota3a) / 3).toFixed(2)
var promedioB = ((nota1b + nota2b + nota3b) / 3).toFixed(2)
var promedioC = 4

// calcular nota incógnita
notaIncognita = ((promedioC * 3) - nota1c - nota2c).toFixed(2)

// Título
document.write("<div class='container mt-5'>")
document.write("<h1>Notas finales</h1>")
document.write("</div>")

// Datos personales
document.write("<section class='container mt-3'>")
document.write("<div class='row'>")
document.write("<div class='col-md-3'>")
document.write("<table class='table table-borderless table-sm'>")
document.write("<tbody>")
document.write("<tr>")
document.write("<th scope='row'> Nombre</th>")
document.write("<td>" + nombre + "</td>")
document.write("</tr>")
document.write("<tr>")
document.write("<th scope='row'>Carrera</th>")
document.write("<td>" + carrera + "</td>")
document.write("</tr>")
document.write("</tbody>")
document.write("</table>")
document.write("</div>")
document.write("</div>")
document.write("</section>")



// Tabla
document.write("<section class='container mt-3'>")
document.write("<table class='table table-hover'>")
document.write("<thead class='thead-dark'>")
document.write("<tr>")
document.write("<th scope='col'>Ramo</th>")
document.write("<th scope='col'>Nota 1</th>")
document.write("<th scope='col'>Nota 2</th>")
document.write("<th scope='col'>Nota 3</th>")
document.write("<th scope='col'>Promedio</th>")
document.write("</tr>")
document.write("<tbody>")
document.write("<tr>")
document.write("<th scope='row'>" + ramoA + "</th>")
document.write("<td>" + nota1a + "</td>")
document.write("<td>" + nota2a + "</td>")
document.write("<td>" + nota3a + "</td>")
document.write("<td>" + promedioA + "</td>")
document.write("</tr>")

document.write("<tr>")
document.write("<th scope='row'>" + ramoB + "</th>")
document.write("<td>" + nota1b + "</td>")
document.write("<td>" + nota2b + "</td>")
document.write("<td>" + nota3b + "</td>")
document.write("<td>" + promedioB + "</td>")
document.write("</tr>")

document.write("<tr>")
document.write("<th scope='row'>" + ramoC + "</th>")
document.write("<td>" + nota1c + "</td>")
document.write("<td>" + nota2c + "</td>")
document.write("<td> - </td>")
document.write("<td> - </td>")
document.write("</tr>")
document.write("</tbody>")
document.write("</thead>")
document.write("</table>")
document.write("<p>Para aprobar el ramo <strong>" + ramoC + "</strong> con nota 4.0, necesitas obtener un <strong>" + notaIncognita + "</strong> en la nota 3. </p>")
document.write("</section>")