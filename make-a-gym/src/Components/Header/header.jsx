import './header.css';

export default function Header() {
  return (
    <header>
      <h1 class="TittleP">Make a Gym</h1>
  

      <div class="Container-Icon">
          <div class="container-cart-icon">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="icon-carrito">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                </svg>
                <div class="contar">
                    <span id="contador">0</span>
                </div> 
          </div>
          
          
              <div class="container-cart-products hidden-cart">
                  <div class="row-products ">
                      <div class="carrito-producto">
                          <div class="info-carrito-producto">                        
                            <span class="cantidad-del-carrito">1</span>
                            <p class="titulo-producto-carrito">Maquinas de Pecho</p>
                            <span class="precio-producto-carrito">$00</span>
                          </div>
    
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="icon-close">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                  </div>

                </div>
                <div class="cart-total ">
                    <h3>Total:</h3>
                    <span class="total-pagar">$00 </span>
                  
              </div>
          </div>
      </div>
    </header>
  )
}