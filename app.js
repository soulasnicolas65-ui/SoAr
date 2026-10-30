const productos = [
  { "id": 1, "nombre": "Aji Cayena Roja o Amarilla", "categoria": "condimentos", "precio": 20000, "imagen": "img/aji_cayena.jpg" },
  { "id": 2, "nombre": "Aji Molido Seleccion", "categoria": "condimentos", "precio": 16000, "imagen": "img/aji_molidop.jpg" },
  { "id": 3, "nombre": "Aji Molido Extra", "categoria": "condimentos", "precio": 14000, "imagen": "img/aji_molido.jpg" },
  { "id": 4, "nombre": "Ajo Granulado Nacional", "categoria": "condimentos", "precio": 23000, "imagen": "img/ajo-granulado.jpg" },
  { "id": 5, "nombre": "Ajo Polvo", "categoria": "condimentos", "precio": 20000, "imagen": "img/ajo-polvo.jpg" },
  { "id": 6, "nombre": "Albahaca deshidratada Nacional", "categoria": "condimentos", "precio": 17000 },
  { "id": 7, "nombre": "Anis Estrellado Entero", "categoria": "condimentos", "precio": 56000, "imagen": "img/anis-estrellado.jpg" },
  { "id": 8, "nombre": "Anis grano", "categoria": "condimentos", "precio": 45000, "imagen": "img/anis.jpg" },
  { "id": 9, "nombre": "Anis molido", "categoria": "condimentos", "precio": 30000, "imagen": "img/anis-molido.jpg" },
  { "id": 10, "nombre": "Apio Polvo", "categoria": "condimentos", "precio": 24000, "imagen": "img/apio.jpg" },
  { "id": 11, "nombre": "Azafran Turco", "categoria": "condimentos", "precio": 25000, "imagen": "img/azafran-turco.jpg" },
  { "id": 12, "nombre": "Azucar Impalpable", "categoria": "condimentos", "precio": 5000, "imagen": "img/azucar-impalpable.jpg" },
  { "id": 13, "nombre": "Bicarbonato de Sodio", "categoria": "condimentos", "precio": 10000, "imagen": "img/bicarbonato.jpg" },
  { "id": 14, "nombre": "Butter de milanesa", "categoria": "condimentos", "precio": 14000 },
  
  { "id": 16, "nombre": "Canela en Rama (sticks)", "categoria": "condimentos", "precio": 65000, "imagen": "img/canela.jpg" },
  { "id": 17, "nombre": "Canela Molida Premium", "categoria": "condimentos", "precio": 45000, "imagen": "img/canela-molida.jpg" },
  { "id": 18, "nombre": "Cebolla en escamas", "categoria": "condimentos", "precio": 17000, "imagen": "img/cebolla-escamas.jpg" },
  { "id": 19, "nombre": "Cebolla en Polvo", "categoria": "condimentos", "precio": 15000, "imagen": "img/cebolla-polvo.jpg" },
  { "id": 20, "nombre": "Chimichurri Premium", "categoria": "condimentos", "precio": 17000, "imagen": "img/chimichurri.jpg" },
 
  { "id": 22, "nombre": "Clavo de olor entero", "categoria": "condimentos", "precio": 78000, "imagen": "img/clavo.jpg" },
  { "id": 23, "nombre": "Coco Rallado (Hight Fat - mas grasa)", "categoria": "condimentos", "precio": 25000, "imagen": "img/coco-rayado.jpg"  },
  { "id": 24, "nombre": "Comino Grano Siria", "categoria": "condimentos", "precio": 23000, "imagen": "img/comino-grano.jpg" },
  { "id": 25, "nombre": "Comino Molido Siria", "categoria": "condimentos", "precio": 23000, "imagen": "img/comino-polvo.jpg" },
  { "id": 26, "nombre": "Condimento p/arroz", "categoria": "condimentos", "precio": 11000, "imagen": "img/condimentop.jpg" },
  { "id": 27, "nombre": "Condimento p/carne", "categoria": "condimentos", "precio": 11000,  "imagen": "img/condimentop.jpg" },

  { "id": 29, "nombre": "Condimento para Pizza Premium", "categoria": "condimentos", "precio": 18000 },
  { "id": 30, "nombre": "Curcuma Molida Premium INDIA", "categoria": "condimentos", "precio": 35000, "imagen": "img/curcuma.jpg" },
  { "id": 31, "nombre": "Curry INDIA", "categoria": "condimentos", "precio": 25000, "imagen": "img/curry.jpg" },
  { "id": 32, "nombre": "Especias surtidas", "categoria": "condimentos", "precio": 12000 },
  { "id": 33, "nombre": "Espinaca en Polvo Importada", "categoria": "condimentos", "precio": 22000, "imagen": "img/espinaca-polvo.jpg" },
  { "id": 34, "nombre": "Gelatina s/ sabor 180 Bloom", "categoria": "condimentos", "precio": 53000, "imagen": "img/gelatina.jpg" },
  { "id": 35, "nombre": "Hibiscus (Flor de Jamaica)", "categoria": "condimentos", "precio": 42000,  "imagen": "img/hibiscus.jpg" },
  { "id": 36, "nombre": "Hongos Bolletus (de pino) chilenos", "categoria": "condimentos", "precio": 26000,  "imagen": "img/hongo-pino.jpg" },
  { "id": 37, "nombre": "Jengibre Molido", "categoria": "condimentos", "precio": 27000,  "imagen": "img/jengibre.jpg"},
  { "id": 38, "nombre": "Laurel en hojas Nacional", "categoria": "condimentos", "precio": 25000, "imagen": "img/laurel.jpg" },
  { "id": 39, "nombre": "Manzanilla", "categoria": "condimentos", "precio": 75000, "imagen": "img/manzanilla.jpg" },
  { "id": 40, "nombre": "Morron en polvo", "categoria": "condimentos", "precio": 28000 },
  { "id": 41, "nombre": "Mostaza Grano", "categoria": "condimentos", "precio": 16000,  "imagen": "img/mostaza.jpg" },
  { "id": 42, "nombre": "Mostaza Molida", "categoria": "condimentos", "precio": 16000,  "imagen": "img/mostaza-polvo.jpg" },
  { "id": 43, "nombre": "Nuez moscada Grano Mediana (60/65)", "categoria": "condimentos", "precio": 80000, "imagen": "img/nuez-moscada.jpg" },
  { "id": 44, "nombre": "Nuez moscada molida Premium", "categoria": "condimentos", "precio": 36000,  "imagen": "img/nuez-molida.jpg" },
  { "id": 45, "nombre": "Oregano Premium ", "categoria": "condimentos", "precio": 11000,  "imagen": "img/oregano.jpg" },
  { "id": 46, "nombre": "Oregano molido", "categoria": "condimentos", "precio": 10000 },
  { "id": 47, "nombre": "Paprika (pimenton picante)", "categoria": "condimentos", "precio": 15000,  "imagen": "img/paprika.jpg" },
  { "id": 48, "nombre": "Perejil Nacional-Premium", "categoria": "condimentos", "precio": 18000,  "imagen": "img/perejil.jpg" },
  { "id": 49, "nombre": "Pesto (Albahaca y Ajo)", "categoria": "condimentos", "precio": 15000 },
  { "id": 50, "nombre": "Pimenton Premium", "categoria": "condimentos", "precio": 16000,  "imagen": "img/pimenton.jpg" },
  { "id": 51, "nombre": "Pimenton Ahumado ", "categoria": "condimentos", "precio": 16000,  "imagen": "img/pimenton.jpg" },
  { "id": 52, "nombre": "Pimienta Blanca en Grano", "categoria": "condimentos", "precio": 75000 },
  { "id": 53, "nombre": "Pimienta Blanca Molida Premium", "categoria": "condimentos", "precio": 75000 },
  { "id": 54, "nombre": "Pimienta Blanca Mol. Seleccion", "categoria": "condimentos", "precio": 40000 },
  { "id": 55, "nombre": "Pimienta Blanca Molida Brasil", "categoria": "condimentos", "precio": 30000 },
  { "id": 56, "nombre": "Pimienta Negra en Grano", "categoria": "condimentos", "precio": 40000, "imagen": "img/pimienta-negra.jpg" },
  { "id": 57, "nombre": "Pimienta Negra Molida", "categoria": "condimentos", "precio": 40000 },
  { "id": 58, "nombre": "Pimientas mix (5 variedades)", "categoria": "condimentos", "precio": 70000, "imagen": "img/pimienta-mix.jpg" },
  { "id": 59, "nombre": "Polvo p/ hornear", "categoria": "condimentos", "precio": 18000 },
  { "id": 60, "nombre": "Provenzal Ajo Nacional", "categoria": "condimentos", "precio": 23000,  "imagen": "img/provenzal-nacional.jpg" },
  { "id": 61, "nombre": "Provenzal Ajo Chino", "categoria": "condimentos", "precio": 23000,  "imagen": "img/provenzal-chino.jpg" },
  { "id": 62, "nombre": "Puerro molido", "categoria": "condimentos", "precio": 34000 },
  { "id": 63, "nombre": "Remolacha en Polvo", "categoria": "condimentos", "precio": 20000 },
  { "id": 64, "nombre": "Salvia", "categoria": "condimentos", "precio": 17000 },
  { "id": 65, "nombre": "Sopa juliana", "categoria": "condimentos", "precio": 24000 },
  { "id": 66, "nombre": "Tomate en Polvo", "categoria": "condimentos", "precio": 40000 },
  { "id": 67, "nombre": "Tomillo Cultivado Nacional", "categoria": "condimentos", "precio": 15000 },
  { "id": 68, "nombre": "Zanahoria en Polvo", "categoria": "condimentos", "precio": 19000 },
  { "id": 69, "nombre": "Zapallo Polvo", "categoria": "condimentos", "precio": 20000 },
  { 
    "id": 70, 
    "nombre": "Almendra Guara", 
    "categoria": "frutos secos", 
    "precio": 25000, 
    "imagen": "img/almendra-guara.jpg" 
  },
];

document.addEventListener('DOMContentLoaded', () => {
    let cart = [];
    let categoriaActual = 'todos';

    const cartBarBtn = document.getElementById('cart-bar-btn');
    const cartDrawer = document.getElementById('cart-drawer');
    const drawerOverlay = document.getElementById('drawer-overlay');
    const closeDrawerBtn = document.getElementById('close-drawer');
    const cartCountEl = document.getElementById('cart-count');
    const cartTotalEl = document.getElementById('cart-total');
    const drawerTotalEl = document.getElementById('drawer-total');
    const drawerItemsEl = document.getElementById('drawer-items');
    const btnWhatsapp = document.getElementById('btn-whatsapp');
    const buscador = document.getElementById('buscador');
    const tabChips = document.querySelectorAll('.tab-chip');

    function renderCatalog(items) {
        let grid = document.getElementById('grid-productos');
        if (!grid) return;
        grid.innerHTML = '';

        if (items.length === 0) {
            grid.innerHTML = `<p style="grid-column: 1/-1; text-align:center; padding: 30px; color:#777;">No se encontraron productos.</p>`;
            return;
        }

        items.forEach(prod => {
            const card = document.createElement('div');
            card.className = 'card';
            card.setAttribute('data-base-price', prod.precio);
            card.innerHTML = `
                <div class="card-image">
                    <img src="${prod.imagen || 'img/default.jpg'}" alt="${prod.nombre}" loading="lazy">
                </div>
                <div class="card-content">
                    <h2>${prod.nombre}</h2>
                    <p class="product-price">$ ${prod.precio.toLocaleString('es-AR')}</p>
                    <select class="weight-select">
                        <option value="100" selected>100 gr</option>
                        <option value="250">250 gr</option>
                        <option value="500">500 gr</option>
                        <option value="1000">1 kg</option>
                    </select>
                    <button class="btn-add">Agregar al carrito</button>
                </div>
            `;
            grid.appendChild(card);
        });
        initCardEvents();
    }

    // Filtrar por categoría y buscador
    function filtrarProductos() {
        const term = buscador ? buscador.value.toLowerCase() : '';
        let filtrados = productos.filter(p => {
            const coincideCategoria = categoriaActual === 'todos' || p.categoria === categoriaActual;
            const coincideTexto = p.nombre.toLowerCase().includes(term) || p.categoria.toLowerCase().includes(term);
            return coincideCategoria && coincideTexto;
        });
        renderCatalog(filtrados);
    }

    // Manejo de clics en las solapas deslizantes (píldoras)
    tabChips.forEach(btn => {
        btn.addEventListener('click', (e) => {
            tabChips.forEach(b => b.classList.remove('active'));
            e.currentTarget.classList.add('active');
            categoriaActual = e.currentTarget.getAttribute('data-categoria');
            filtrarProductos();
        });
    });

    if(buscador) {
        buscador.addEventListener('input', filtrarProductos);
    }

    function toggleCart() {
        cartDrawer.classList.toggle('open');
        drawerOverlay.classList.toggle('open');
    }

    if(cartBarBtn) cartBarBtn.addEventListener('click', toggleCart);
    if(closeDrawerBtn) closeDrawerBtn.addEventListener('click', toggleCart);
    if(drawerOverlay) drawerOverlay.addEventListener('click', toggleCart);

    function updateCartUI() {
        let totalCount = cart.length;
        let totalPrice = cart.reduce((acc, item) => acc + item.price, 0);
        if(cartCountEl) cartCountEl.textContent = `${totalCount} ${totalCount === 1 ? 'producto' : 'productos'}`;
        if(cartTotalEl) cartTotalEl.textContent = `$ ${totalPrice.toLocaleString('es-AR')}`;
        if(drawerTotalEl) drawerTotalEl.textContent = `$ ${totalPrice.toLocaleString('es-AR')}`;
        
        if (cart.length === 0) {
            if(drawerItemsEl) drawerItemsEl.innerHTML = `<p class="empty-cart-msg">El carrito está vacío</p>`;
            return;
        }
        
        if(drawerItemsEl) {
            drawerItemsEl.innerHTML = '';
            cart.forEach(item => {
                const itemEl = document.createElement('div');
                itemEl.className = 'cart-item-card';
                itemEl.innerHTML = `
                    <div class="cart-item-info">
                        <h4>${item.name}</h4>
                        <p>${item.weight} - $ ${item.price.toLocaleString('es-AR', {minimumFractionDigits: 0, maximumFractionDigits: 0})}</p>
                    </div>
                    <button class="btn-remove-item" data-id="${item.id}">🗑️</button>
                `;
                drawerItemsEl.appendChild(itemEl);
            });
            
            drawerItemsEl.querySelectorAll('.btn-remove-item').forEach(button => {
                button.addEventListener('click', (e) => {
                    const itemId = parseFloat(e.currentTarget.getAttribute('data-id'));
                    cart = cart.filter(item => item.id !== itemId);
                    updateCartUI();
                });
            });
        }
    }

    function initCardEvents() {
        const cards = document.querySelectorAll('.card');
        cards.forEach(card => {
            const select = card.querySelector('.weight-select');
            const priceEl = card.querySelector('.product-price');
            const btnAdd = card.querySelector('.btn-add');
            const productName = card.querySelector('h2').textContent;
            const basePricePerKg = parseFloat(card.getAttribute('data-base-price'));

            function updatePrice() {
                const weight = parseInt(select.value);
                let calculatedPrice = (basePricePerKg * weight) / 1000;
                priceEl.textContent = `$ ${Math.round(calculatedPrice).toLocaleString('es-AR')}`;
            }

            select.addEventListener('change', updatePrice);
            select.value = "100";
            updatePrice();

            btnAdd.addEventListener('click', () => {
                const weightValue = parseInt(select.value);
                const weightText = select.options[select.selectedIndex].text;
                let itemPrice = weightValue === 100 ? basePricePerKg / 10 : (basePricePerKg * weightValue) / 1000;
                
                cart.push({
                    id: Date.now() + Math.random(),
                    name: productName,
                    weight: weightText,
                    price: itemPrice
                });
                updateCartUI();
            });
        });
    }

    if(btnWhatsapp) {
        btnWhatsapp.addEventListener('click', () => {
            if (cart.length === 0) {
                alert('El carrito está vacío');
                return;
            }
            let message = "Hola! Quiero hacer el siguiente pedido en SoAr Tienda Natural:\n\n";
            cart.forEach(item => {
                message += `- ${item.name} (${item.weight}): $ ${Math.round(item.price).toLocaleString('es-AR')}\n`;
            });
            let totalPrice = cart.reduce((acc, item) => acc + item.price, 0);
            message += `\n*Total a pagar: $ ${Math.round(totalPrice).toLocaleString('es-AR')}*`;
            window.open(`https://wa.me/5492324685211?text=${encodeURIComponent(message)}`, '_blank');
        });
    }

    // --- Lógica de deslizamiento táctil (Swipe) con transición suave ---
    let touchStartX = 0;
    let touchEndX = 0;
    const categoriasDisponibles = ['todos', 'condimentos', 'frutos secos', 'varios'];

    document.addEventListener('touchstart', e => {
        touchStartX = e.changedTouches[0].screenX;
    }, false);

    document.addEventListener('touchend', e => {
        touchEndX = e.changedTouches[0].screenX;
        manejarSwipe();
    }, false);

    function manejarSwipe() {
        const umbralSwipe = 50; 
        if (touchEndX < touchStartX - umbralSwipe) {
            cambiarCategoriaSiguiente(1);
        }
        if (touchEndX > touchStartX + umbralSwipe) {
            cambiarCategoriaSiguiente(-1);
        }
    }

    function cambiarCategoriaSiguiente(direccion) {
        let indexActual = categoriasDisponibles.indexOf(categoriaActual);
        if (indexActual === -1) indexActual = 0;
        
        let nuevoIndex = indexActual + direccion;
        
        if (nuevoIndex >= categoriasDisponibles.length) nuevoIndex = 0;
        if (nuevoIndex < 0) nuevoIndex = categoriasDisponibles.length - 1;
        
        categoriaActual = categoriasDisponibles[nuevoIndex];
        
        const grid = document.getElementById('grid-productos');
        if (grid) {
            grid.style.opacity = '0';
            grid.style.transform = 'translateY(10px)';
            grid.style.transition = 'opacity 0.2s ease, transform 0.2s ease';
        }

        setTimeout(() => {
            tabChips.forEach(btn => {
                if (btn.getAttribute('data-categoria') === categoriaActual) {
                    btn.classList.add('active');
                    btn.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
                } else {
                    btn.classList.remove('active');
                }
            });
            
            filtrarProductos();

            if (grid) {
                grid.style.opacity = '1';
                grid.style.transform = 'translateY(0)';
            }
        }, 150);
    }

    renderCatalog(productos);
});
