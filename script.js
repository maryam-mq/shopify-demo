let cart = JSON.parse(localStorage.getItem('cart')) || [];
let cartCount = document.getElementById('cart-count');
if(cartCount) cartCount.textContent = cart.length;

function addToCart(product, price){
    cart.push({product, price});
    localStorage.setItem('cart', JSON.stringify(cart));
    if(cartCount) cartCount.textContent = cart.length;
    alert(product + ' added to cart!');
}

function displayCart(){
    let cartItemsContainer = document.getElementById('cart-items');
    let cartTotal = document.getElementById('cart-total');
    if(!cartItemsContainer) return;
    cartItemsContainer.innerHTML='';
    let total=0;
    if(cart.length===0){
        cartItemsContainer.innerHTML="<p>Your cart is empty.</p>";
        cartTotal.textContent="Total: $0";
        return;
    }
    cart.forEach((item,index)=>{
        total+=item.price;
        cartItemsContainer.innerHTML+=`
            <div class="cart-item">
                <p>${item.product} - $${item.price}</p>
                <button onclick="removeFromCart(${index})">Remove</button>
            </div>
        `;
    });
    cartTotal.textContent="Total: $" + total;
}

function removeFromCart(index){
    cart.splice(index,1);
    localStorage.setItem('cart',JSON.stringify(cart));
    displayCart();
}
