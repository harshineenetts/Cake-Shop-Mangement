let cart = [];
let totalAmount = 0;
let gst = 0;
let vat = 0;
let cartItemsDiv = document.getElementById('cart-items');
let cartTotalDiv = document.getElementById('cart-total');
let cartSection = document.getElementById('cart');
let checkoutSection = document.getElementById('checkout');
let confirmationSection = document.getElementById('confirmation');

// Add cake to the cart
function addCake(cakeName, price) {
    let item = cart.find(item => item.cakeName === cakeName);
    if (item) {
        item.quantity++;
    } else {
        cart.push({ cakeName, price, quantity: 1 });
    }
    updateCart();
}

// Update quantity in the cart
function updateQuantity(cakeName, quantity) {
    let item = cart.find(item => item.cakeName === cakeName);
    if (item) {
        item.quantity = parseInt(quantity);
        updateCart();
    }
}

// Update Cart UI
function updateCart() {
    cartItemsDiv.innerHTML = `
        <tr>
            <th>Item</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
        </tr>
    `;

    totalAmount = 0;
    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        totalAmount += itemTotal;
        cartItemsDiv.innerHTML += `
            <tr>
                <td>${item.cakeName}</td>
                <td>₹${item.price}</td>
                <td>${item.quantity}</td>
                <td>₹${itemTotal}</td>
            </tr>
        `;
    });

    gst = totalAmount * 0.18; // 18% GST
    vat = totalAmount * 0.05; // 5% VAT
    const finalAmount = totalAmount + gst + vat;

    cartTotalDiv.innerHTML = `
        <p>Subtotal: ₹${totalAmount}</p>
        <p>GST (18%): ₹${gst}</p>
        <p>VAT (5%): ₹${vat}</p>
        <p><strong>Total: ₹${finalAmount}</strong></p>
    `;

    cartSection.classList.remove('hidden');
}

// Proceed to Checkout
function goToCheckout() {
    cartSection.classList.add('hidden');
    checkoutSection.classList.remove('hidden');
}

// Confirm Order with Validation
function confirmOrder() {
    const customerName = document.getElementById('name').value;
    const deliveryAddress = document.getElementById('address').value;
    const contactNumber = document.getElementById('contact').value;
    const message = document.getElementById('message').value;

    // Validation: Check if the required fields are filled
    if (!customerName || !deliveryAddress || !contactNumber) {
        alert("Please fill in all the required fields.");
        return; // Exit the function if any required field is missing
    }

    const orderDetails = {
        customerName,
        deliveryAddress,
        contactNumber,
        message,
        cakes: cart,
        totalAmount: totalAmount + gst + vat,
        gst,
        vat,
        paymentMode: 'Cash on Delivery'
    };

    fetch('/place-order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(orderDetails)
    })
    .then(response => response.json())
    .then(data => {
        showConfirmation(data.orderId, orderDetails);
    })
    .catch(error => console.error('Error placing order:', error));
}

// Show Confirmation with Order Details
function showConfirmation(orderId, orderDetails) {
    checkoutSection.classList.add('hidden');
    confirmationSection.classList.remove('hidden');

    const confirmationDiv = document.getElementById('confirmation');
    confirmationDiv.innerHTML = `
        <h2>Thank You for Your Order!</h2>
        <div class="order-details">
            <p><strong>Order ID:</strong> ${orderId}</p>
            <p><strong>Order Details:</strong></p>
            <p><strong>Name:</strong> ${orderDetails.customerName}</p>
            <p><strong>Address:</strong> ${orderDetails.deliveryAddress}</p>
            <p><strong>Contact Number:</strong> ${orderDetails.contactNumber}</p>
            <p><strong>Message:</strong> ${orderDetails.message || "N/A"}</p>
            <p><strong>Total Amount:</strong> ₹${orderDetails.totalAmount}</p>
            <p><strong>Payment Mode:</strong> ${orderDetails.paymentMode}</p>
        </div>
        <button onclick="backToCakes()">Back to Cakes</button>
    `;
}

// Back to Cakes after confirmation
function backToCakes() {
    confirmationSection.classList.add('hidden');
    cart = [];
    totalAmount = 0;
    gst = 0;
    vat = 0;
    document.getElementById('cart').classList.add('hidden');
    checkoutSection.classList.add('hidden');
}
