

export class Maquina {

    nombre
    precio
    img
    static maquinasCarrito = []

    constructor (nombre = '', precio = 0, img = '', ){
        this.nombre = nombre
        this.precio = precio
        this.img = img
    }
}

