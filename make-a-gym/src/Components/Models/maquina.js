

export class Maquina {

    nombre
    precio
    img
    static maquinasCarrito = []

    static removeMaquinaFromCart(maquina = new Maquina()) {
        for(let i = 0; i < this.maquinasCarrito.length; i++){
            if(maquina.name === this.maquinasCarrito[i].name){
                this.maquinasCarrito.splice(i, 1);
                return;
            }
        }
      }

    constructor (nombre = '', precio = 0, img = '', ){
        this.nombre = nombre
        this.precio = precio
        this.img = img
    }
}

