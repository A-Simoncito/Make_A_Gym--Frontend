
export class Maquina {
    nombre;
    precio;
    img;
    static maquinasCarrito = [];
  
    constructor(nombre = '', precio = 0, img = '') {
      this.nombre = nombre;
      this.precio = precio;
      this.img = img;
    }
  
    
    addMaquinaToCart() {
      Maquina.maquinasCarrito.push(this);
    }
  
   
    removeMaquinaFromCart() {
      const index = Maquina.maquinasCarrito.findIndex(machine => machine.nombre === this.nombre);
      if (index !== -1) {
        Maquina.maquinasCarrito.splice(index, 1);
      }
    }
  
    
    static calculateTotalPrice() {
      let total = 0;
      Maquina.maquinasCarrito.forEach((machine) => {
        total += machine.precio;
      });
      return total;
    }
  }

