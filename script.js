// Simulating an API call for users and products data
const users = [
    { id: 1, name: "John Doe", email: "john@example.com" },
    { id: 2, name: "Jane Smith", email: "jane@example.com" },
    { id: 3, name: "Mark Johnson", email: "mark@example.com" }
];

const products = [
    { id: 1, name: "Product A", price: "$100" },
    { id: 2, name: "Product B", price: "$200" },
    { id: 3, name: "Product C", price: "$150" }
];

// Functions to handle data loading
function loadUserCount() {
    document.getElementById("userCount").innerText = users.length;
}

function loadProductCount() {
    document.getElementById("productCount").innerText = products.length;
}

function loadUsers() {
    const userList = document.getElementById("userList");
    userList.innerHTML = ""; // Clear existing users

    users.forEach(user => {
        const li = document.createElement("li");
        li.textContent = `${user.name} (${user.email})`;
        userList.appendChild(li);
    });
}

function loadProducts() {
    const productList = document.getElementById("productList");
    productList.innerHTML = ""; // Clear existing products

    products.forEach(product => {
        const li = document.createElement("li");
        li.textContent = `${product.name} - ${product.price}`;
        productList.appendChild(li);
    });
}

// Event listeners
document.getElementById("loadUsersBtn").addEventListener("click", loadUsers);
document.getElementById("loadProductsBtn").addEventListener("click", loadProducts);

// Initial loading of counts
loadUserCount();
loadProductCount();
// Hamburger menu toggle for mobile responsiveness
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
});
