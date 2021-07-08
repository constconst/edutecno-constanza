function Consultorio() {
    // Las variables con guion abajo son "privadas".
    // La gracia de que algo sea privado es que no puedo acceder a él a instanciar.
    // var _consultorio = consultorio;
    var _paciente = undefined;
    Object.defineProperty(this, "_consultorio", {
        /* El get es una función para tomar una variable */
        get: function() {
            console.log('este es un get');
            return _consultorio;
        },
        /* El set es una función para settear una variable */

        set: function(nuevoPaciente) {
            console.log('este es un mimi');
            this._paciente = nuevoPaciente;
        }
    });
};

function Paciente(nombre, edad, rut, diagnostico) {
    var _nombre = nombre;
    var _edad = edad;
    var _rut = rut;
    var _diagnostico = diagnostico;
};

var consultorio1 = new Consultorio();
var paciente1 = new Paciente('FRANCISCA ROJAS', '110', '9878782-1', 'HISTERIA SENIL');
var paciente2 = new Paciente('JUN SEOK', '22', '15345241-3', 'PESTE BUBÓNICA');
var paciente3 = new Paciente('SOL LUNA', '30', '16445345-9', 'ESTRÉS ANSIOSO CRÓNICO');
var paciente4 = new Paciente('BRUMA TEZUKA', '6', '17666419-0', 'MALHUMOR HUMÓREO');
var paciente5 = new Paciente('SIMÓN PERRO', '12', '14989389-K', 'GRIS BRILLANTINA')