class Cliente {
    constructor(nombre, impuesto) {
            this._nombre = nombre
            this._impuesto = impuesto
        }
        // Getters de nombre
    get nombre() {
        return this._nombre
    }
    set nombre(newNombre) {
            this._nombre = newNombre
        }
        // Setters de impuesto
    get impuesto() {
        return this._impuesto
    }
    set impuesto(newImpuesto) {
        this._impuesto = newImpuesto
    }

    calcularImpuesto() {
        return ((this.impuesto.montoBrutoAnual - this.impuesto.deducciones) * 1.21)
    }
    retornoMontoBrutoAnual() {
        return this.impuesto.montoBrutoAnual
    }
}

export default Cliente