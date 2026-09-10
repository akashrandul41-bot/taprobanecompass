// LAVIXAR Javascript - Premium Dark Luxury

// State
let cart = JSON.parse(localStorage.getItem('lavixar_cart')) || [];

// Currency
const CURRENCY = 'Rs.';

// Products Data (Prices in LKR)
const products = [
  {
    id: 1,
    name: 'LAVIXAR Dragon Backprint Oversized Tee',
    price: 2200,
    image: 'assets/dragon-tee.png',
    category: 'mens'
  },
  {
    id: 2,
    name: 'LAVIXAR Orange Backprint Oversized Tee',
    price: 2200,
    image: 'assets/orange-tee.jpg',
    category: 'mens'
  },
  {
    id: 3,
    name: 'LAVIXAR Minimalist Front Logo Black Tee',
    price: 2200,
    image: 'assets/plain-black-tee.jpg',
    category: 'mens'
  },
  {
    id: 4,
    name: 'LAVIXAR Cursive Front Logo Cream Tee',
    price: 2200,
    image: 'assets/plain-cream-tee.jpg',
    category: 'mens'
  }
];

// Format price in LKR
function formatPrice(amount) {
  return CURRENCY + ' ' + amount.toLocaleString('en-LK', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  // Loader
  setTimeout(() => {
    const loader = document.getElementById('loader');
    if (loader) {
      loader.classList.add('hidden');
    }
  }, 1500);

  // Custom cursor removed

  // Navbar Scroll Effect
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // Mobile Menu
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');
  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      mobileMenu.classList.toggle('open');
    });
  }

  updateCartCount();

  // If on index page
  const productGrid = document.getElementById('productGrid');
  if (productGrid) {
    renderProducts();
  }

  // If on cart page
  const cartItemsContainer = document.getElementById('cartItems');
  if (cartItemsContainer) {
    renderCart();

    // Payment method selection
    const paymentMethods = document.querySelectorAll('.payment-method');
    paymentMethods.forEach(method => {
      method.addEventListener('click', () => {
        paymentMethods.forEach(m => m.classList.remove('active'));
        method.classList.add('active');
      });
    });
  }

  // If on product details page
  const productDetail = document.getElementById('productDetail');
  if (productDetail) {
    renderProductDetail();
  }
});

function closeMobileMenu() {
  const mobileMenu = document.getElementById('mobileMenu');
  if (mobileMenu) {
    mobileMenu.classList.remove('open');
  }
}

// Render Products on Home Page
function renderProducts(category = 'all', btn = null) {
  // Update filter buttons
  if (btn) {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  }

  const productGrid = document.getElementById('productGrid');
  if (!productGrid) return;
  productGrid.innerHTML = '';
  
  const filteredProducts = category === 'all' 
    ? products 
    : products.filter(p => p.category === category);
    
  if (filteredProducts.length === 0) {
    productGrid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; color: var(--text-muted); padding: 3rem;">No products found in this collection.</p>';
    return;
  }

  filteredProducts.forEach(product => {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.onclick = () => window.location.href = `product.html?id=${product.id}`;
    card.innerHTML = `
      <div class="product-img-wrap">
        <img src="${product.image}" alt="${product.name}" class="product-img">
        <div class="product-img-overlay">
          <span style="color: white; font-size: 0.8rem; letter-spacing: 2px;">VIEW DETAILS</span>
        </div>
      </div>
      <div class="product-info">
        <h3 class="product-name">${product.name}</h3>
        <p class="product-price">${formatPrice(product.price)}</p>
        <button class="add-to-cart" onclick="event.stopPropagation(); window.location.href='product.html?id=${product.id}'">Select Size</button>
      </div>
    `;
    productGrid.appendChild(card);
  });
}

// Filter collections by category (smooth scroll)
function filterCollection(category, btn) {
  renderProducts(category, btn);
  const shopSection = document.getElementById('shop');
  if (shopSection && !btn) { // Only scroll if it came from the collection cards, not filter buttons
    shopSection.scrollIntoView({ behavior: 'smooth' });
    
    // Update active button
    const buttons = document.querySelectorAll('.filter-btn');
    buttons.forEach(b => {
      if(b.textContent.toLowerCase() === category) {
        buttons.forEach(bb => bb.classList.remove('active'));
        b.classList.add('active');
      }
    });
  }
}

// Product Detail Page Logic
function renderProductDetail() {
  const urlParams = new URLSearchParams(window.location.search);
  const productId = parseInt(urlParams.get('id'));
  const product = products.find(p => p.id === productId);

  if (!product) {
    document.getElementById('productDetail').innerHTML = '<div style="text-align: center; padding: 10rem 5%;"><p class="pd-title">Product not found.</p><a href="index.html" class="btn btn-outline" style="margin-top: 2rem;">Back to Shop</a></div>';
    return;
  }

  document.getElementById('pdImage').src = product.image;
  document.getElementById('pdName').textContent = product.name;
  document.getElementById('pdPrice').textContent = formatPrice(product.price);
  document.getElementById('pdCategory').textContent = product.category;

  window.currentProduct = product;
  window.selectedSize = null;

  // Handle sizes display/hiding for accessories
  const sizeSelectionDiv = document.querySelector('.size-selection');
  if (product.category === 'accessories') {
    if (sizeSelectionDiv) sizeSelectionDiv.style.display = 'none';
    window.selectedSize = 'N/A'; // No size needed
  } else {
    if (sizeSelectionDiv) sizeSelectionDiv.style.display = 'block';
  }

  const sizeBtns = document.querySelectorAll('.size-btn');
  sizeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      sizeBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      window.selectedSize = btn.dataset.size;
    });
  });
}

// Add to Cart with Size
function addToCartWithSize() {
  if (!window.selectedSize) {
    alert('Please select a size first.');
    return;
  }

  const product = window.currentProduct;
  const cartItemId = `${product.id}-${window.selectedSize}`;
  const existingItem = cart.find(item => item.cartItemId === cartItemId);

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({
      id: product.id,
      cartItemId: cartItemId,
      name: product.name,
      price: product.price,
      image: product.image,
      size: window.selectedSize === 'N/A' ? '' : window.selectedSize,
      quantity: 1
    });
  }

  saveCart();
  updateCartCount();
  
  // Visual feedback
  const btn = document.getElementById('addToCartBtn');
  const originalText = btn.textContent;
  btn.textContent = 'ADDED TO CART';
  btn.style.background = '#fff';
  btn.style.color = '#000';
  
  setTimeout(() => {
    btn.textContent = originalText;
    btn.style.background = 'var(--accent)';
  }, 2000);
}

// Update Cart Count Badge in navbar
function updateCartCount() {
  const countElements = document.querySelectorAll('.cart-count');
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  countElements.forEach(el => {
    el.textContent = totalItems;
    el.style.display = totalItems > 0 ? 'flex' : 'none';
  });
}

// Save Cart to LocalStorage
function saveCart() {
  localStorage.setItem('lavixar_cart', JSON.stringify(cart));
}

// Render Cart items on cart.html page
function renderCart() {
  const cartItemsContainer = document.getElementById('cartItems');
  const subtotalEl = document.getElementById('subtotal');
  const totalEl = document.getElementById('total');
  const checkoutBtn = document.getElementById('checkoutBtn');

  if (!cartItemsContainer) return;

  if (cart.length === 0) {
    cartItemsContainer.innerHTML = `
      <div class="empty-cart-msg">
        <p>YOUR CART IS EMPTY</p>
        <a href="index.html" class="btn btn-outline" style="margin-top: 1rem;">CONTINUE SHOPPING</a>
      </div>
    `;
    if (subtotalEl) subtotalEl.textContent = formatPrice(0);
    if (totalEl) totalEl.textContent = formatPrice(0);
    if (checkoutBtn) {
      checkoutBtn.disabled = true;
      checkoutBtn.style.opacity = '0.5';
      checkoutBtn.style.cursor = 'not-allowed';
    }
    return;
  }

  cartItemsContainer.innerHTML = '';
  let subtotal = 0;

  cart.forEach((item, index) => {
    subtotal += item.price * item.quantity;

    const itemEl = document.createElement('div');
    itemEl.className = 'cart-item';
    itemEl.innerHTML = `
      <img src="${item.image}" alt="${item.name}" class="cart-item-img">
      <div class="cart-item-details">
        <h3 class="cart-item-title">${item.name}</h3>
        <p class="cart-item-price">${formatPrice(item.price)} ${item.size ? '<span style="color: var(--text-soft); margin-left: 10px; font-weight: normal; font-size: 0.7rem; letter-spacing: 1px;">SIZE: ' + item.size + '</span>' : ''}</p>
      </div>
      <div class="cart-item-actions">
        <button class="qty-btn" onclick="updateQuantity(${index}, -1)">-</button>
        <span style="font-size: 0.8rem; min-width: 20px; text-align: center;">${item.quantity}</span>
        <button class="qty-btn" onclick="updateQuantity(${index}, 1)">+</button>
        <button class="remove-btn" onclick="removeFromCart(${index})">REMOVE</button>
      </div>
    `;
    cartItemsContainer.appendChild(itemEl);
  });

  const shipping = subtotal > 0 ? 350 : 0;
  if (subtotalEl) subtotalEl.textContent = formatPrice(subtotal);
  const shippingEl = document.getElementById('shipping');
  if (shippingEl) shippingEl.textContent = shipping > 0 ? formatPrice(350) : formatPrice(0);

  if (totalEl) totalEl.textContent = formatPrice(subtotal + shipping);

  if (checkoutBtn) {
    checkoutBtn.disabled = false;
    checkoutBtn.style.opacity = '1';
    checkoutBtn.style.cursor = 'pointer';
  }
}

// Update Quantity in cart
function updateQuantity(index, change) {
  if (cart[index].quantity + change > 0) {
    cart[index].quantity += change;
  } else {
    cart.splice(index, 1);
  }
  saveCart();
  updateCartCount();
  renderCart();
}

// Remove item from cart
function removeFromCart(index) {
  cart.splice(index, 1);
  saveCart();
  updateCartCount();
  renderCart();
}

// Checkout Function (Direct WhatsApp Order to 0768427705)
function processCheckout() {
  if (cart.length === 0) {
    alert("Your shopping cart is empty!");
    return;
  }

  const customerName = document.getElementById('customerName')?.value.trim();
  const customerPhone = document.getElementById('customerPhone')?.value.trim();
  const customerAddress = document.getElementById('customerAddress')?.value.trim();

  if (!customerName || !customerPhone || !customerAddress) {
    alert('Please fill out your Name, Phone Number, and Delivery Address before proceeding!');
    return;
  }

  const orderItemsText = cart.map(item => `• ${item.name} (Size: ${item.size || 'M'}) x ${item.quantity} - ${formatPrice(item.price * item.quantity)}`).join('\n');
  const subtotalText = document.getElementById('subtotal')?.textContent || formatPrice(0);
  const shippingText = document.getElementById('shipping')?.textContent || formatPrice(350);
  const totalText = document.getElementById('total')?.textContent || formatPrice(0);

  const messageText = `🔥 *NEW LAVIXAR ORDER* 🔥\n\n` +
    `👤 *Name:* ${customerName}\n` +
    `📞 *Phone:* ${customerPhone}\n` +
    `📍 *Delivery Address:* ${customerAddress}\n\n` +
    `🛒 *ORDER ITEMS:*\n${orderItemsText}\n\n` +
    `💰 *Subtotal:* ${subtotalText}\n` +
    `🚚 *Shipping:* ${shippingText}\n` +
    `💳 *TOTAL AMOUNT:* ${totalText}\n\n` +
    `🏦 *Payment Method:* Bank Transfer\n\n` +
    `Please send me bank account details to complete deposit. Thank you!`;

  const targetPhoneNumber = "94768427705";
  const whatsappUrl = `https://wa.me/${targetPhoneNumber}?text=${encodeURIComponent(messageText)}`;

  // Clear cart and update
  cart = [];
  saveCart();
  updateCartCount();
  renderCart();

  // Redirect to WhatsApp
  window.open(whatsappUrl, '_blank');
}

// Send Email via mailto for contact form
function sendEmail() {
  const name = document.getElementById('contactName').value;
  const email = document.getElementById('contactEmail').value;
  const message = document.getElementById('contactMessage').value;

  if (!name || !email || !message) {
    alert('Please fill out all the fields before sending.');
    return;
  }

  const subject = encodeURIComponent(`New Message from ${name} via LAVIXAR Website`);
  const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);

  window.location.href = `mailto:ceybrews@gmail.com?subject=${subject}&body=${body}`;
}
