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
                    {buildTotalMachinesCards()}
                </div>
                <script src="index.js">
                </script>
            </body>
        )
    }
}

const buildTotalMachinesCards = () => {
    return (
        Maquina.maquinasCarrito.map(maquina => buildMachineCard(maquina))
    )
}


const buildMachineCard = (machine = new Maquina()) => {
    return (
        <div class="item">
            <figure>
                <img src={machine.img} alt="producto" />
            </figure>
            <div class="info-producto">
                <h2>{machine.nombre}</h2>
                <p class="Precio">${machine.precio}</p>
                <button class="btn-add-cart" onClick={() => {
                    //TODO Eliminar del carrito
                    console.table(Maquina.maquinasCarrito)
                }}>Eliminar del Carrito</button>
            </div>
        </div>
    )
}