// Dados dos produtos (adicione mais conforme necessário)
const products = [
    { id: 1, name: 'Camiseta Básica', price: 49.99, image: 'https://via.placeholder.com/200?text=Camiseta' },
    { id: 2, name: 'Calça Jeans', price: 99.99, image: 'https://via.placeholder.com/200?text=Calca' },
    { id: 3, name: 'Vestido Floral', price: 79.99, image: 'https://via.placeholder.com/200?text=Vestido' },
];

let cart = [];

// Renderizar produtos
const productList = document.getElementById('product-list');
products.forEach(product => {
    const div = document.createElement('div');
    div.className = 'product';
    div.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>R$ ${product.price.toFixed(2)}</p>
        <button onclick="addToCart(${product.id})">Adicionar ao Carrinho</button>
    `;
    productList.appendChild(div);
});

// Adicionar ao carrinho
function addToCart(id) {
    const product = products.find(p => p.id === id);
    cart.push(product);
    updateCart();
}

// Atualizar carrinho
function updateCart() {
    const cartItems = document.getElementById('cart-items');
    const total = document.getElementById('total');
    const cartCount = document.getElementById('cart-count');
    
    cartItems.innerHTML = '';
    let sum = 0;
    cart.forEach(item => {
        cartItems.innerHTML += `<p>${item.name} - R$ ${item.price.toFixed(2)}</p>`;
        sum += item.price;
    });
    total.textContent = sum.toFixed(2);
    cartCount.textContent = cart.length;
}

// Simulação de checkout
document.getElementById('checkout').addEventListener('click', () => {
    alert('Compra finalizada! (Integre com Stripe para pagamentos reais)');
});