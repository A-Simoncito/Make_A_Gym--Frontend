import { Component } from "react";
import { Maquina } from "../Models/maquina";
import './cart.css'

export default class CartContent extends Component {
    constructor(props) {
      super(props);
      this.state = {
        maquinasCarrito: Maquina.maquinasCarrito,
      };
    }
  
    handleDeleteFromCart = (maquina) => {
      Maquina.removeMaquinaFromCart(maquina);
      this.setState({
        maquinasCarrito: Maquina.maquinasCarrito,
      });
    };
  
    render() {
      return (
        <body>
          <h1 className="nombrecarrito">Contenido del carrito</h1>
          <br />
          <div className="Container-Items">
            {this.state.maquinasCarrito.map((maquina) =>
              buildMachineCard(maquina, () =>
                this.handleDeleteFromCart(maquina)
              )
            )}
          </div>
          <h1>Total: ${Maquina.calculateTotalPrice()}</h1>
          <script src="index.js"></script>
        </body>
      );
    }
  }
  
  export const buildMachineCard = (machine = new Maquina(), onDelete = () => {}) => {
    return (
      <div className="item">
        <figure>
          <img src={machine.img} alt="producto" />
        </figure>
        <div className="info-producto">
          <h2>{machine.nombre}</h2>
          <p className="Precio">${machine.price}</p>
          <button className="btn-add-cart" onClick={onDelete}>
            Eliminar del Carrito
          </button>
        </div>
      </div>
    );
  };
  
