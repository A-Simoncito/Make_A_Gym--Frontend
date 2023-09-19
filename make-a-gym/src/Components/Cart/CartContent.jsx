import { Component } from "react";
import { Maquina } from "../Models/maquina";
import './cart.css'

export class CartContent extends Component {
    render() {
        return (
            <body>
                <h1 className="nombrecarrito">Contenido del carrito</h1>
                <br />
                <div class="Container-Items">
                    {Maquina.maquinasCarrito.map(e => buildMachineCard(e, () => {
                        Maquina.removeMaquinaFromCart(e)
                        this.setState({})
                    }))}
                </div>
                <script src="index.js">
                </script>
            </body>
        )
    }
}

const buildMachineCard = (machine = new Maquina(), onDelete = () => {}) => {

    return (
        <div class="item">
            <figure>
                <img src={machine.img} alt="producto" />
            </figure>
            <div class="info-producto">
                <h2>{machine.nombre}</h2>
                <p class="Precio">${machine.precio}</p>
                <button class="btn-add-cart" onClick={onDelete}>Eliminar del Carrito</button>
            </div>
        </div>
    )
}