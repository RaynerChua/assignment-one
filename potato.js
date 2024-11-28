/*Cart data storage */
// Select all "Add to Cart" buttons
const addToCartButtons = document.querySelectorAll('.add-to-cart');

// Function to add product to the cart
function addToCart(event) {
  event.preventDefault(); // Prevent default link behavior

  // Get product details from data attributes
  const productName = this.getAttribute('data-name');
  const productPrice = this.getAttribute('data-price');
  const productImage = this.getAttribute('data-image');

  // Create a product object
  const product = {
    name: productName,
    price: productPrice,
    image: productImage,
    quantity: 1, // Default quantity
  };

  // Retrieve the current cart from localStorage
  let cart = JSON.parse(localStorage.getItem('cart')) || [];

  // Check if the product already exists in the cart
  const existingProduct = cart.find(item => item.name === product.name);
  if (existingProduct) {
    existingProduct.quantity += 1; // Increase quantity if already in cart
  } else {
    cart.push(product); // Add new product to cart
  }

  // Save updated cart to localStorage
  localStorage.setItem('cart', JSON.stringify(cart));

  alert(`${productName} has been added to your cart!`);
}

// Attach event listeners to all "Add to Cart" buttons
addToCartButtons.forEach(button => {
  button.addEventListener('click', addToCart);
});



/*Cart page settings*/
const cartContainer = document.getElementById('cart-items');

// Retrieve the cart from localStorage
const cart = JSON.parse(localStorage.getItem('cart')) || [];

// Function to render the cart
function renderCart() {
  cartContainer.innerHTML = ''; // Clear previous items

  if (cart.length === 0) {
    cartContainer.innerHTML = '<p>Your cart is empty.</p>';
    return;
  }

  cart.forEach(product => {
    const productCard = document.createElement('div');
    productCard.classList.add('cart-card');
    productCard.innerHTML = `
      <img src="${product.image}" alt="${product.name}" class="cart-image">
      <div class="cart-details">
        <h3>${product.name}</h3>
        <p>Price: $${product.price}</p>
        <div class="quantity">
          <button class="decrease-qty">-</button>
          <span>${product.quantity}</span>
          <button class="increase-qty">+</button>
        </div>
        <button class="remove-item">Remove</button>
      </div>
    `;

    // Add event listeners for quantity and remove buttons
    productCard.querySelector('.increase-qty').addEventListener('click', () => {
      product.quantity += 1;
      localStorage.setItem('cart', JSON.stringify(cart));
      renderCart();
    });

    productCard.querySelector('.decrease-qty').addEventListener('click', () => {
      if (product.quantity > 1) {
        product.quantity -= 1;
        localStorage.setItem('cart', JSON.stringify(cart));
        renderCart();
      }
    });

    productCard.querySelector('.remove-item').addEventListener('click', () => {
      const index = cart.indexOf(product);
      cart.splice(index, 1); // Remove item from cart
      localStorage.setItem('cart', JSON.stringify(cart));
      renderCart();
    });

    cartContainer.appendChild(productCard);
  });
}

// Render the cart on page load
renderCart();
