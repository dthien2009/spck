function createAlertBox(message, backgroundColor, borderColor, duration) {
    const alertBox = document.createElement('div');
    alertBox.innerText = message;
    alertBox.style.position = 'fixed';
    alertBox.style.right = '20px';
    alertBox.style.padding = '10px';
    alertBox.style.backgroundColor = backgroundColor;
    alertBox.style.border = `1px solid ${borderColor}`;
    alertBox.style.borderRadius = '10px';
    alertBox.style.zIndex = 1000;
    alertBox.className = 'alert-box';

    const alertBoxes = document.querySelectorAll('.alert-box');
    const alertCount = alertBoxes.length;
    const alertHeight = 50;
    const topPosition = 20 + (alertCount * alertHeight);

    alertBox.style.top = topPosition + 'px';

    document.body.appendChild(alertBox);

    setTimeout(() => {
        document.body.removeChild(alertBox);
    }, duration);
}

function addToCart(event, id, name) {
    event.preventDefault();

    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let item = cart.find(item => item.id === id);

    if (item) {
        item.quantity += 1;
    } else {
        cart.push({ id: id, name: name, quantity: 1 });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    createAlertBox(`${name} has been added to cart!`, 'lightblue', 'blue', 3000);
}

function viewCart() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let cartContent = cart.map(item => `${item.name} - quantity : ${item.quantity}`).join('\n') || "Your shopping cart is empty!";
    createAlertBox(cartContent, 'lightgray', 'gray', 5000);
}

function buyCart() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    if (cart.length === 0) {
        createAlertBox("Your cart is empty!", 'lightcoral', 'red', 3000);
    } else {
        localStorage.removeItem('cart');
        createAlertBox("Purchased cart!", 'lightgreen', 'green', 3000);
    }
}

window.onload = () => {
    // displayCart();
};