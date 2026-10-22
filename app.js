document.addEventListener('DOMContentLoaded', () => {
    let cart = [];

    const cartBarBtn = document.getElementById('cart-bar-btn');
    const cartDrawer = document.getElementById('cart-drawer');
    const drawerOverlay = document.getElementById('drawer-overlay');
    const closeDrawerBtn = document.getElementById('close-drawer');
    
    const cartCountEl = document.getElementById('cart-count');
    const cartTotalEl = document.getElementById('cart-total');
    const drawerTotalEl = document.getElementById('drawer-total');
    const drawerItemsEl = document.getElementById('drawer-items');
    const btnWhatsapp = document.getElementById('btn-whatsapp');
    const cards = document.querySelectorAll('.card');

    // Funciones para abrir y cerrar el cajón del carrito
    function toggleCart() {
        cartDrawer.classList.toggle('open');
        drawerOverlay.classList.toggle('open');
    }

    cartBarBtn.addEventListener('click', toggleCart);
    closeDrawerBtn.addEventListener('click', toggleCart);
    drawerOverlay.addEventListener('click', toggleCart);

    cards.forEach(card => {
        const select = card.querySelector('.weight-select');
        const priceEl = card.querySelector('.product-price');
        const btnAdd = card.querySelector('.btn-add');
        const productName = card.querySelector('h2').textContent;
        const basePricePerKg = parseFloat(card.getAttribute('data-base-price'));

        function updatePrice() {
            const weight = parseInt(select.value);
            let calculatedPrice = weight === 1000 ? basePricePerKg : (basePricePerKg * weight) / 1000;
            priceEl.textContent = `$${calculatedPrice.toLocaleString('es-AR', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}`;
        }

        select.addEventListener('change', updatePrice);
        updatePrice();

        btnAdd.addEventListener('click', () => {
            const weightValue = parseInt(select.value);
            const weightText = select.options[select.selectedIndex].text;
            let itemPrice = weightValue === 1000 ? basePricePerKg : (basePricePerKg * weightValue) / 1000;

            // Agregar producto al array del carrito (con un ID único basado en tiempo)
            cart.push({
                id: Date.now() + Math.random(),
                name: productName,
                weight: weightText,
                price: itemPrice
            });

            updateCartUI();

            btnAdd.textContent = '¡Agregado!';
            btnAdd.style.backgroundColor = '#15803d';
            setTimeout(() => {
                btnAdd.textContent = 'Agregar';
                btnAdd.style.backgroundColor = '#16a34a';
            }, 1000);
        });
    });

    // Función para actualizar la visualización del carrito
    function updateCartUI() {
        let totalCount = cart.length;
        let totalPrice = cart.reduce((acc, item) => acc + item.price, 0);

        cartCountEl.textContent = `${totalCount} ${totalCount === 1 ? 'producto' : 'productos'}`;
        cartTotalEl.textContent = `$${totalPrice.toLocaleString('es-AR')}`;
        drawerTotalEl.textContent = `$${totalPrice.toLocaleString('es-AR')}`;

        if (cart.length === 0) {
            drawerItemsEl.innerHTML = `<p class="empty-cart-msg">El carrito está vacío</p>`;
            return;
        }

        drawerItemsEl.innerHTML = '';
        cart.forEach(item => {
            const itemEl = document.createElement('div');
            itemEl.className = 'cart-item-card';
            itemEl.innerHTML = `
                <div class="cart-item-info">
                    <h4>${item.name}</h4>
                    <p>${item.weight} - $${item.price.toLocaleString('es-AR', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}</p>
                </div>
                <button class="btn-remove-item" data-id="${item.id}">🗑️</button>
            `;
            drawerItemsEl.appendChild(itemEl);
        });

        // Eventos para eliminar ítems individuales
        const removeButtons = drawerItemsEl.querySelectorAll('.btn-remove-item');
        removeButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                const itemId = parseFloat(e.currentTarget.getAttribute('data-id'));
                cart = cart.filter(item => item.id !== itemId);
                updateCartUI();
            });
        });
    }

    // Botón de WhatsApp para enviar el pedido
    btnWhatsapp.addEventListener('click', () => {
        if (cart.length === 0) {
            alert('El carrito está vacío');
            return;
        }

        let message = "Hola! Quiero hacer el siguiente pedido en SoAr Tienda Natural:\n\n";
        cart.forEach(item => {
            message += `- ${item.name} (${item.weight}): $${item.price.toLocaleString('es-AR', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}\n`;
        });
        
        let totalPrice = cart.reduce((acc, item) => acc + item.price, 0);
        message += `\n*Total a pagar: $${totalPrice.toLocaleString('es-AR')}*`;

        const encodedMessage = encodeURIComponent(message);
        window.open(`https://wa.me/?text=${encodedMessage}`, '_blank');
    });

    // Buscador
    const buscador = document.getElementById('buscador');
    buscador.addEventListener('input', (e) => {
        const term = e.target.value.toLowerCase();
        cards.forEach(card => {
            const title = card.querySelector('h2').textContent.toLowerCase();
            const category = card.querySelector('.category').textContent.toLowerCase();
            if (title.includes(term) || category.includes(term)) {
                card.style.display = 'flex';
            } else {
                card.style.display = 'none';
            }
        });
    });
});
