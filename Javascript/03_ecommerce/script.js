document.addEventListener("DOMContentLoaded", () => {

    const products = [
        { id: 1, name: "product 1", price: 29.99},
        { id: 2, name: "product 2", price: 19.99},
        { id: 3, name: "product 3", price: 59.9999},
    ]

    const cart =  JSON.parse(localStorage.getItem('cartItem')) ||[];
    const productList = document.getElementById("product-list");
    const cartItems = document.getElementById("cart-items");
    const emptyCartMessage = document.getElementById("empty-cart");
    const cartTotalMessage = document.getElementById("cart-total");
    const totalPriceDisplay = document.getElementById("total-price");
    const checkoutButton = document.getElementById("checkout-btn");

    renderCart();

    products.forEach( product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product')
        productDiv.innerHTML = `
        <span> ${product.name} - $${product.price.toFixed(2)}</span>
        <button data-id= "${product.id}" > Add to cart </button>
        `;
        productList.appendChild(productDiv);
    });

    productList.addEventListener('click', (e) => {
            if(e.target.tagName === 'BUTTON'){
                const productId = parseInt(e.target.getAttribute("data-id"));
                const product = products.find(e => e.id === productId);      
                console.log(product);
                addToCart(product);
            }
                
    });

    function addToCart(product){
        cart.push(product);
        renderCart();
    }

    function renderCart() {
        cartItems.innerHTML = "";
        let totalPrice = 0;
        if(cart.length){
                    emptyCartMessage.classList.add('hidden');
                    cartTotalMessage.classList.remove("hidden");
                    cart.forEach((item, index) => {
                         totalPrice += item.price;
                        const cartItem =  document.createElement('div');
                        cartItem.innerHTML = `
                        <span> 
                        ${item.name} - $${item.price.toFixed(2)}
                            <button> Delete </button>
                        </span>
                        `;

                        cartItem.querySelector('button').addEventListener('click', () => {
                            cart.splice(index, 1);
                            renderCart();
                        });

                        cartItems.appendChild(cartItem);
                        totalPriceDisplay.textContent = `$${totalPrice.toFixed(2)}`;
                        saveCart();
                    });
        }else{
            totalPriceDisplay.textContent = `$0.00`;
            saveCart();
            emptyCartMessage.classList.remove("hidden");
        }
    }

    function saveCart(){
        localStorage.setItem("cartItem",JSON.stringify(cart));
    }


        checkoutButton.addEventListener('click',() => {
            cart.length=0; 
            alert("Checkout successfully");
            totalPriceDisplay.textContent = `$0.00`;
            renderCart();
        });

    });