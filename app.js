document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var staticEmail = "contoh@gmail.com";
    var staticPassword = "00000000";

    var emailInput = document.getElementById('email').value;
    var passwordInput = document.getElementById('password').value;

    if(emailInput === staticEmail && passwordInput === staticPassword) {
        alert("Login Succesful!");
        window.location.href="order.html";
    } else {
        alert("Invalid email or password. Please try again.");
    }
});

function togglePasswordVisibility() {
    var passwordInput = document.getElementById("password");
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
    } else {
        passwordInput.type = "password";
    }
}


function addOrder() {
    const foodSelect = document.getElementById('food');
    const selectedOption = foodSelect.options[foodSelect.selectedIndex];
    const foodName = selectedOption.textContent.split(' - ')[0];
    const price = parseInt(selectedOption.getAttribute('data-price'));
    const quantity = parseInt(document.getElementById('quantity').value); // Mengambil jumlah makanan yang dipilih

    const ordersList = document.getElementById('orders');
    const newOrder = document.createElement('li');
    newOrder.textContent = `${foodName} x${quantity} - Rp ${price * quantity}`; // Menampilkan jumlah makanan dan total harga untuk makanan tersebut
    ordersList.appendChild(newOrder);

    let totalPrice = parseInt(document.getElementById('totalPrice').textContent);
    totalPrice += price * quantity; // Menambahkan total harga untuk makanan tersebut
    document.getElementById('totalPrice').textContent = totalPrice;

}

function resetOrder() {
    const ordersList = document.getElementById('orders');
    while (ordersList.firstChild) {
        ordersList.removeChild(ordersList.firstChild);
    }
    total = 0;
    document.getElementById('totalPrice').textContent = total;
}

function displayThankYou() {
    window.location.href="last.html";
}

function returnOrder() {
    window.location.href="order.html";
}

function returnLogin() {
    
    window.location.href="login.html";
}

















