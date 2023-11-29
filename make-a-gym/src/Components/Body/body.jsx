
import { useEffect, useState } from "react";
import { Maquina } from '../Models/maquina'
import axios from 'axios'
import './body.css';
import CartContent from "../Cart/CartContent"


export default function Body() {
  const [data1, setData] = useState([]);
  const [maquinasCarrito, setMaquinasCarrito] = useState([]);
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/products');
        setData(response.data);
      } catch (error) {
        console.error('Error interno del servidor:', error);
      }
    };

    fetchData();
  }, []);

  const handleAddToCart = (product) => {
    
    const maquina = new Maquina(product.id, product.nombre, product.precio, product.imageurl);
    maquina.addMaquinaToCart();
    
    
    setMaquinasCarrito([...maquinasCarrito, maquina]);
  };
  
    return (
      <body>
        <br /><br />
        <h1 className="MaPecho">Máquinas de Pecho, Espalda y Piernas</h1>
        <br /><br /><br />
  
        <div className="Container-Items">
          {data1 && data1["products"] ? (
            data1["products"].map((product) => (
              <div className="item" key={product.id}>
                <figure>
                  <img src={product.imageurl} alt="item"/>
                </figure>
                <div className="info-producto">
                  <h2>{product.name}</h2>
                  <p className="Precio">${product.price}</p>
                  <button className="btn-add-cart" onClick={() => handleAddToCart(product)}>
                    Añadir al Carrito
                    
                  </button>
                </div>
              </div>
            ))
            
          ) : (
            <p>No hay productos disponibles.</p>
          )}
        </div>
  
        <script src="index.js"></script>
      </body>
    );
  }

  