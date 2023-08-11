import espalda1 from '../../multimedia/espalda1.jpg'
import espalda3 from '../../multimedia/espalda3.jpg'
import espalda4 from '../../multimedia/espalda4.jpg'
import pecho1 from '../../multimedia/pecho1.jpg'
import pecho4 from '../../multimedia/pecho4.jpg'
import pecho5 from '../../multimedia/pecho5.jpg'
import pierna1 from '../../multimedia/pierna1.jpg'
import pierna4 from '../../multimedia/pierna4.jpg'
import pierna5 from '../../multimedia/pierna5.jpg'






import './body.css';

export default function Body() {

    
  return (

    <body>
        <h1 class="MaPecho">Maquinas de Pecho, Espalda y Piernas</h1>


        <div class="Container-Items">
            <div class="item">
                <figure>
                    <img src={pecho1} alt="producto"/>
                </figure>

                <div class="info-producto">
                    <h2>Press de Banca stronger</h2>
                    <p class="Precio">$440</p>
                    <button class ="btn-add-cart">Añadir al Carrito</button>
                </div>
            </div>
            <div class="item">
                <figure>
                    <img src={pecho4} alt="producto"/>
                </figure>
                <div class="info-producto">
                    <h2>Press de Banca</h2>
                    <p class="Precio">$180</p>
                    <button class ="btn-add-cart">Añadir al Carrito</button>
                </div>
                </div> <div class="item">
                    <figure>
                        <img src={pecho5} alt="producto"/>
                    </figure>
                    <div class="info-producto">
                        <h2>Press de Banca inclinado</h2>
                        <p class="Precio">$320</p>
                        <button class ="btn-add-cart">Añadir al Carrito</button>
                    </div>
                </div>  
        


                <div class="item">
                    <figure>
                        <img src={espalda1} alt="producto" />
                    </figure>
                    <div class="info-producto">
                        <h2>Multifuncion Espalda</h2>
                        <p class="Precio">$640</p>
                        <button class ="btn-add-cart">Añadir al Carrito</button>
                </div>
            </div> 
                <div class="item">
                    <figure>
                        <img src={espalda3} alt="producto"/>
                    </figure>
                    <div class="info-producto">
                        <h2>Dorsalera</h2>
                        <p class="Precio">$315</p>
                        <button class ="btn-add-cart">Añadir al Carrito</button>
                </div>
            </div> 
                <div class="item">
                    <figure>
                        <img src={espalda4} alt="producto" />
                    </figure>
                    <div class="info-producto">
                        <h2>Espalda Inferior-Hombros</h2>
                        <p class="Precio">$455</p>
                        <button class ="btn-add-cart">Añadir al Carrito</button>
                </div>
            </div> 
        



            <div class="item">
                <figure>
                    <img src={pierna1} alt="producto" />
                </figure>
                <div class="info-producto">
                    <h2>Prensa 45°</h2>
                    <p class="Precio">$660</p>
                    <button class ="btn-add-cart">Añadir al Carrito</button>
                </div>
            </div> 
            <div class="item">
                <figure>
                    <img src={pierna4} alt="producto" />
                </figure>
                <div class="info-producto">
                    <h2>Sillon Cuadriceps</h2>
                    <p class="Precio">$120</p>
                    <button class ="btn-add-cart">Añadir al Carrito</button>
                </div>
            </div> 
            <div class="item">
                <figure>
                    <img src={pierna5} alt="producto" />
                </figure>
                <div class="info-producto">
                    <h2>Camilla inclinable</h2>
                    <p class="Precio">$200</p>
                    <button class ="btn-add-cart">Añadir al Carrito</button>
                </div>
            </div> 
        </div>
    
        <script src="index.js">

        </script>
        
    </body>
    )
}