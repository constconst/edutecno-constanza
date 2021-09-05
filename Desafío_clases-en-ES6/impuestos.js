class Impuestos {
    constructor(montoBrutoAnual, deducciones) {
            this._montoBrutoAnual = montoBrutoAnual
            this._deducciones = deducciones
        }
        // Get y set de monto bruto anual
    get montoBrutoAnual() {
        return this._montoBrutoAnual
    }
    set montoBrutoAnual(newMontoBrutoAnual) {
            this._montoBrutoAnual = newMontoBrutoAnual
        }
        // Get y set de deducciones
    get deducciones() {
        return this._deducciones
    }
    set deducciones(newDeducciones) {
        this._deducciones = newDeducciones
    }
}

export default Impuestos