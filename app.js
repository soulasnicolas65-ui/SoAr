document.addEventListener('DOMContentLoaded', () => {
    let cartCount = 0;
    let cartTotal = 0;

    const cartCountEl = document.getElementById('cart-count');
    const cartTotalEl = document.getElementById('cart-total');
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        const select = card.querySelector('.weight-select');
        const priceEl = card.querySelector('.product-price');
        const btnAdd = card.querySelector('.btn-add');
        const basePricePerKg = parseFloat(card.getAttribute('data-base-price'));

        // Función para actualizar el precio visual según el selector de peso
        function updatePrice() {
            const weight = parseInt(select.value);
            let calculatedPrice = 0;

            if (weight === 1000) {
                calculatedPrice = basePricePerKg;
            } else {
                calculatedPrice = (basePricePerKg * weight) / 1000;
            }

            priceEl.textContent = `$${calculatedPrice.toLocaleString('es-AR', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}` ;
        }

        select.addEventListener('change', updatePrice);
        updatePrice(); // Inicializar precio

        // Botón para sumar al carrito
        btnAdd.addEventListener('click', () => {
            const weightText = select.options[select.selectedIndex].text;
            const weightValue = parseInt(select.value);
            let itemPrice = weightValue === 1000 ? basePricePerKg : (basePricePerKg * weightValue) / 1000;

            cartCount += 1;
            cartTotal += itemPrice;

            cartCountEl.textContent = `${cartCount} ${cartCount === 1 ? 'producto' : 'productos'}`;
            cartTotalEl.textContent = `$${cartTotal.toLocaleString('es-AR')}`;

            // Pequeña animación visual en el botón
            btnAdd.textContent = '¡Agregado!';
            btnAdd.style.backgroundColor = '#15803d';
            setTimeout(() => {
                btnAdd.textContent = 'Agregar';
                btnAdd.style.backgroundColor = '#16a34a';
            }, 1000);
        });
    });

    // Buscador sencillo
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
