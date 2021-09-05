// Objetos parten con mayúscula
function Consultorio(nombre, pacientes) {
    // Las variables con guion abajo son "privadas".
    // La gracia de que algo sea privado es que no puedo acceder a él a instanciar.
    var _nombre = nombre;
    // uno o un array
    var _pacientes = pacientes || [];
    // Al objeto le estoy definiendo una propiedad dentro del entorno this; es decir,
    // dentro del objeto Consultorio.
    Object.defineProperty(this, "_Nombre", {
        /* El get es una función para tomar una variable */
        get: function() {
            // se retorna el parámetro
            return _nombre;
        },
        /* El set es una función para settear una variable */
        set: function(nuevoNombre) {
            // Se le asigna un nuevo parámetro a _paciente
            this._pacientes = nuevoNombre;
        }
    });
    Object.defineProperty(this, "_pacientes", {
        get: function() {
            return _pacientes;
        }
    })
};

// Métodos para acceder al objeto Consultorio
Consultorio.prototype.getNombre = function() {
    return this._Nombre;
}
Consultorio.prototype.setNombre = function(otronombre) {
    this._Nombre = otronombre;
}


// Agregar paciente
Consultorio.prototype.agregarPaciente = function(paciente) {
    this.paciente.push(paciente);
}

Consultorio.prototype.getPacientes = function() {
    this._pacientes.forEach(function(element, index) {
        console.log('--------------------------------------');
        console.log("Paciente número " + index);
        console.log("Nombre: " + element._nombre());
        console.log("Edad: " + element._edad());
        console.log("Rut: " + element._rut());
        console.log("Diagnóstico: " + element._diagnostico());
    });
}
Consultorio.prototype.searchPacientes = function(busqueda) {
    this._pacientes.forEach(function(element, index) {
        if (element._nombre() == busqueda) {
            console.log('Resultado de la búsqueda: ' + busqueda);
            console.log("Paciente número " + index);
            console.log("Nombre: " + element._nombre());
            console.log("Edad: " + element._edad());
            console.log("Rut: " + element._rut());
            console.log("Diagnóstico: " + element._diagnostico());
        }
    });
}

function Paciente(nombre, edad, rut, diagnostico) {
    this._nombre = function() {
        return nombre;
    }
    this._edad = function() {
        return edad;
    }
    this._rut = function() {
        return rut;
    }
    this._diagnostico = function() {
        return diagnostico;
    }
}

// Métodos para acceder al objeto paciente.
Paciente.prototype.getName = function() {
    return this._nombre();
}

Paciente.prototype.getAge = function() {
    return this._edad();
}

Paciente.prototype.getRut = function() {
    return this._rut();
}

Paciente.prototype.getDiagnostico = function() {
    return this._diagnostico();
}

// Setters.
Paciente.prototype.setName = function(newName) {
    this._nombre = function() {
        return newName;
    }
}
Paciente.prototype.setEdad = function(newAge) {
    this._edad = function() {
        return newAge;
    }
}
Paciente.prototype.setRut = function(newRut) {
    this._rut = function() {
        return newRut;
    }
}
Paciente.prototype.setDiagnostico = function(newDiagnostico) {
    this._diagnostico = function() {
        return newDiagnostico;
    }
}


var paciente1 = new Paciente('FRANCISCA ROJAS', '110', '9878782-1', 'HISTERIA SENIL');
var paciente2 = new Paciente('JUN SEOK', '22', '15345241-3', 'PESTE BUBÓNICA');
var paciente3 = new Paciente('SOL LUNA', '30', '16445345-9', 'ESTRÉS ANSIOSO CRÓNICO');
var paciente4 = new Paciente('BRUMA TEZUKA', '6', '17666419-0', 'MALHUMOR HUMÓREO');
var paciente5 = new Paciente('SIMÓN PERRO', '12', '14989389-K', 'GRIS BRILLANTINA');
var consultorio1 = new Consultorio('La Cobra Consultorio', [paciente1, paciente2, paciente3, paciente4, paciente5]);

console.log(consultorio1.getNombre());
console.log('***************************');
console.log('Lista de pacientes');
consultorio1.getPacientes();
console.log('***************************');
consultorio1.searchPacientes('BRUMA TEZUKA');