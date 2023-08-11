const btnCart = document.querySelector('.container-cart-icon')
const containerCartProducts = document.querySelector('.container-cart-products')
btnCart.addEventListener('click', () => {
    containerCartProducts.classList.toggle('hidden-cart')
})

const cartInfo = document.querySelector('.carrito-producto')
const rowProducts =document.querySelector('.row-products')

//productos
const productList =document.querySelector('.Container-Items')

let allProducts = []
const valorTotal = document.querySelector('.total-pagar')
const countProducts = document.querySelector('#contador')

const cartempty = document.querySelector('.cart-empty');
const cartTotal = document.querySelector('.cart-total');


productList.addEventListener('click', e => {

if(e.target.classList.contains('btn-add-cart')){
    const product = e.target.parentElement
    const infoProducto ={
        quantity: 1,
        title: product.querySelector('h2').textContent,
        price: product.querySelector('p').textContent,
    };

    const exits = allProducts.some(product =>  product.title === infoProducto.title)
    if(exits){
        const product = allProducts.map(product => {
            if(product.title === infoProducto.title){
                product.quantity++;
                return product
            } else{
                return product
            }
        });
        allProducts =[... allProducts];
    }else{
        allProducts = [...allProducts,infoProducto];
    }

    

    showHTML();
}

})
//Eliminar cosas del carrito

// rowProduct.addEventListener('click', e => {
// 	if (e.target.classList.contains('icon-close')) {
// 		const product = e.target.parentElement;
// 		const title = product.querySelector('p').textContent;

// 		allProducts = allProducts.filter(
// 			product => product.title !== title
// 		);

// 		console.log(allProducts);

// 		showHTML();
// 	}
// });


//HTML
const showHTML = () => {

    //Hacer que muestre mensaje

    // if (!allProducts.length) {
	// 	cartempty.classList.remove('hidden');
	// 	rowProduct.classList.add('hidden');
	// 	cartTotal.classList.add('hidden');
	// } else {
	// 	cartempty.classList.add('hidden');
	// 	rowProduct.classList.remove('hidden');
	// 	cartTotal.classList.remove('hidden');
	// }

    rowProducts.innerHTML= '';

    let total =0;
    let totalOfProducts =0;

    allProducts.forEach(product => {
        const containerProduct = document.createElement ('div')
        containerProduct.classList.add('carrito-producto')

        containerProduct.innerHTML = `
        
        <div class="info-carrito-producto">                        
            <span class="cantidad-del-carrito">${product.quantity}</span>
            <p class="titulo-producto-carrito">${product.title}</p>
            <span class="precio-producto-carrito">${product.price}</span>
        </div>

        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="icon-close">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        
        `;






        rowProducts.append(containerProduct);

        total= 
            total + parseInt(product.quantity * product.price.slice(1))
        totalOfProducts = totalOfProducts + product.quantity


    })

    valorTotal.innerText =`$${total}`;
    countProducts.innerText = totalOfProducts;
}