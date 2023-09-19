import espalda1 from '../../multimedia/espalda1.jpg'
import espalda3 from '../../multimedia/espalda3.jpg'
import espalda4 from '../../multimedia/espalda4.jpg'
import pecho1 from '../../multimedia/pecho1.jpg'
import pecho4 from '../../multimedia/pecho4.jpg'
import pecho5 from '../../multimedia/pecho5.jpg'
import pierna1 from '../../multimedia/pierna1.jpg'
import pierna4 from '../../multimedia/pierna4.jpg'
import pierna5 from '../../multimedia/pierna5.jpg'
import { Maquina } from '../Models/maquina'
import './body.css';

export default function Body() {


    return (
        <body>
            <br /><br />
            <h1 class="MaPecho">Maquinas de Pecho, Espalda y Piernas</h1>

            <br /><br /><br />
            <div class="Container-Items">

                {buildMachineCard(new Maquina('Press de banca stronger', 440, pecho1))}
                {buildMachineCard(new Maquina('Press de banca ', 180, pecho4))}
                {buildMachineCard(new Maquina('Press de banca inclinado', 320, pecho5))}
                {buildMachineCard(new Maquina('Multifuncion espalda', 640, espalda1))}
                {buildMachineCard(new Maquina('Dorsalera', 315, espalda3))}
                {buildMachineCard(new Maquina('Espalda Inferior-Hombros', 455, espalda4))}
                {buildMachineCard(new Maquina('Prensa 45°', 440, pierna1))}
                {buildMachineCard(new Maquina('Sillon Cuadriceps', 120, pierna4))}
                {buildMachineCard(new Maquina('Camilla inclinable', 200, pierna5))}

            </div>
            
            <script src="index.js">
            </script>
        </body>
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
                    console.log(machine)
                }}>Añadir al Carrito</button>
            </div>
        </div>
    )
}
