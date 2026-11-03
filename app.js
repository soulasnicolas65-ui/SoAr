const productos = [
  { "id": 1, "nombre": "Aji Cayena Roja o Amarilla", "categoria": "condimentos", "precio": 20000, "imagen": "img/aji_cayena.jpg",
    pesoVariable: true },
  { "id": 2, "nombre": "Aji Molido Seleccion", "categoria": "condimentos", "precio": 16000, "imagen": "img/aji-molidop.jpg",
    pesoVariable: true },
  { "id": 3, "nombre": "Aji Molido Extra", "categoria": "condimentos", "precio": 14000, "imagen": "img/aji_molido.jpg" ,
    pesoVariable: true},
  { "id": 4, "nombre": "Ajo Granulado Nacional", "categoria": "condimentos", "precio": 23000, "imagen": "img/ajo-granulado.jpg",
    pesoVariable: true },
  { "id": 5, "nombre": "Ajo Polvo", "categoria": "condimentos", "precio": 20000, "imagen": "img/ajo-polvo.jpg",
    pesoVariable: true },
  { "id": 6, "nombre": "Albahaca deshidratada Nacional", "categoria": "condimentos", "precio": 17000,"imagen": "img/albahaca-seca.jpg",
    pesoVariable: true  },
  { "id": 7, "nombre": "Anis Estrellado Entero", "categoria": "condimentos", "precio": 56000, "imagen": "img/anis-estrellado.jpg",
    pesoVariable: true },
  { "id": 8, "nombre": "Anis grano", "categoria": "condimentos", "precio": 45000, "imagen": "img/anis.jpg",
    pesoVariable: true },
  { "id": 9, "nombre": "Anis molido", "categoria": "condimentos", "precio": 30000, "imagen": "img/anis-molido.jpg",
    pesoVariable: true },
  { "id": 10, "nombre": "Apio Polvo", "categoria": "condimentos", "precio": 24000, "imagen": "img/apio.jpg",
    pesoVariable: true },
  { "id": 11, "nombre": "Azafran Turco", "categoria": "condimentos", "precio": 25000, "imagen": "img/azafran-turco.jpg",
    pesoVariable: true },
  { "id": 12, "nombre": "Azucar Impalpable", "categoria": "condimentos", "precio": 5000, "imagen": "img/azucar-impalpable.jpg",
    pesoVariable: true },
  { "id": 13, "nombre": "Bicarbonato de Sodio", "categoria": "condimentos", "precio": 10000, "imagen": "img/bicarbonato.jpg",
    pesoVariable: true },
  { "id": 16, "nombre": "Canela en Rama (sticks)", "categoria": "condimentos", "precio": 65000, "imagen": "img/canela.jpg",
    pesoVariable: true },
  { "id": 17, "nombre": "Canela Molida Premium", "categoria": "condimentos", "precio": 45000, "imagen": "img/canela-molida.jpg",
    pesoVariable: true },
  { "id": 18, "nombre": "Cebolla en escamas", "categoria": "condimentos", "precio": 17000, "imagen": "img/cebolla-escamas.jpg",
    pesoVariable: true },
  { "id": 19, "nombre": "Cebolla en Polvo", "categoria": "condimentos", "precio": 15000, "imagen": "img/cebolla-polvo.jpg",
    pesoVariable: true },
  { "id": 20, "nombre": "Chimichurri Premium", "categoria": "condimentos", "precio": 17000, "imagen": "img/chimichurri.jpg",
    pesoVariable: true },
  { "id": 22, "nombre": "Clavo de olor entero", "categoria": "condimentos", "precio": 78000, "imagen": "img/clavo.jpg",
    pesoVariable: true },
  { "id": 23, "nombre": "Coco Rallado (Hight Fat - mas grasa)", "categoria": "condimentos", "precio": 25000, "imagen": "img/coco-rayado.jpg" ,
    pesoVariable: true },
  { "id": 24, "nombre": "Comino Grano Siria", "categoria": "condimentos", "precio": 23000, "imagen": "img/comino-grano.jpg",
    pesoVariable: true },
  { "id": 25, "nombre": "Comino Molido Siria", "categoria": "condimentos", "precio": 23000, "imagen": "img/comino-polvo.jpg",
    pesoVariable: true },
  { "id": 26, "nombre": "Condimento p/arroz", "categoria": "condimentos", "precio": 11000, "imagen": "img/condimentop.jpg" ,
    pesoVariable: true},
  { "id": 27, "nombre": "Condimento p/carne", "categoria": "condimentos", "precio": 11000,  "imagen": "img/condimentop.jpg" ,
    pesoVariable: true},
  { "id": 29, "nombre": "Condimento para Pizza Premium", "categoria": "condimentos", "precio": 18000,   "imagen": "img/pizza.jpg",
    pesoVariable: true },
  { "id": 30, "nombre": "Curcuma Molida Premium INDIA", "categoria": "condimentos", "precio": 35000, "imagen": "img/curcuma.jpg" ,
    pesoVariable: true},
  { "id": 31, "nombre": "Curry INDIA", "categoria": "condimentos", "precio": 25000, "imagen": "img/curry.jpg",
    pesoVariable: true },
  { "id": 32, "nombre": "Especias surtidas", "categoria": "condimentos", "precio": 12000,   "imagen": "img/condimentos.jpg",
    pesoVariable: true },
  { "id": 33, "nombre": "Espinaca en Polvo Importada", "categoria": "condimentos", "precio": 22000, "imagen": "img/espinaca-polvo.jpg",
    pesoVariable: true },
  { "id": 34, "nombre": "Gelatina s/ sabor 180 Bloom", "categoria": "condimentos", "precio": 53000, "imagen": "img/gelatina.jpg",
    pesoVariable: true },
  { "id": 35, "nombre": "Hibiscus (Flor de Jamaica)", "categoria": "condimentos", "precio": 42000,  "imagen": "img/hibiscus.jpg",
    pesoVariable: true },
  { "id": 36, "nombre": "Hongos Bolletus (de pino) chilenos", "categoria": "condimentos", "precio": 26000,  "imagen": "img/hongo-pino.jpg",
    pesoVariable: true },
  { "id": 37, "nombre": "Jengibre Molido", "categoria": "condimentos", "precio": 27000,  "imagen": "img/jengibre.jpg",
    pesoVariable: true},
  { "id": 38, "nombre": "Laurel en hojas Nacional", "categoria": "condimentos", "precio": 25000, "imagen": "img/laurel.jpg",
    pesoVariable: true },
  { "id": 39, "nombre": "Manzanilla", "categoria": "condimentos", "precio": 75000, "imagen": "img/manzanilla.jpg",
    pesoVariable: true },
  { "id": 40, "nombre": "Morron en polvo", "categoria": "condimentos", "precio": 28000, "imagen": "img/morron.jpg",
    pesoVariable: true },
  { "id": 41, "nombre": "Mostaza Grano", "categoria": "condimentos", "precio": 16000,  "imagen": "img/mostaza.jpg",
    pesoVariable: true },
  { "id": 42, "nombre": "Mostaza Molida", "categoria": "condimentos", "precio": 16000,  "imagen": "img/mostaza-polvo.jpg",
    pesoVariable: true },
  { "id": 43, "nombre": "Nuez moscada Grano Mediana (60/65)", "categoria": "condimentos", "precio": 80000, "imagen": "img/nuez-moscada.jpg",
    pesoVariable: true },
  { "id": 44, "nombre": "Nuez moscada molida Premium", "categoria": "condimentos", "precio": 36000,  "imagen": "img/nuez-molida.jpg",
    pesoVariable: true },
  { "id": 45, "nombre": "Oregano Premium ", "categoria": "condimentos", "precio": 11000,  "imagen": "img/oregano.jpg",
    pesoVariable: true },
 
  { "id": 47, "nombre": "Paprika (pimenton picante)", "categoria": "condimentos", "precio": 15000,  "imagen": "img/paprika.jpg",
    pesoVariable: true },
  { "id": 48, "nombre": "Perejil Nacional-Premium", "categoria": "condimentos", "precio": 18000,  "imagen": "img/perejil.jpg",
    pesoVariable: true },
  { "id": 49, "nombre": "Pesto (Albahaca y Ajo)", "categoria": "condimentos", "precio": 15000, "imagen": "img/pesto.jpg",
    pesoVariable: true },
  { "id": 50, "nombre": "Pimenton Premium", "categoria": "condimentos", "precio": 16000,  "imagen": "img/pimenton.jpg",
    pesoVariable: true },
  { "id": 51, "nombre": "Pimenton Ahumado ", "categoria": "condimentos", "precio": 16000,  "imagen": "img/pimenton.jpg",
    pesoVariable: true },
  { "id": 52, "nombre": "Pimienta Blanca en Grano", "categoria": "condimentos", "precio": 75000, "imagen": "img/pimienta-bg.jpg",
    pesoVariable: true },
  { "id": 53, "nombre": "Pimienta Blanca Molida Premium", "categoria": "condimentos", "precio": 75000, "imagen": "img/pimienta-b.jpg",
    pesoVariable: true },
  { "id": 54, "nombre": "Pimienta Blanca Mol. Seleccion", "categoria": "condimentos", "precio": 40000,  "imagen": "img/pimienta-b.jpg",
    pesoVariable: true },
  { "id": 55, "nombre": "Pimienta Blanca Molida Brasil", "categoria": "condimentos", "precio": 30000,  "imagen": "img/pimienta-b.jpg",
    pesoVariable: true },
  { "id": 56, "nombre": "Pimienta Negra en Grano", "categoria": "condimentos", "precio": 40000, "imagen": "img/pimienta-negra.jpg",
    pesoVariable: true },
  { "id": 57, "nombre": "Pimienta Negra Molida", "categoria": "condimentos", "precio": 40000,  "imagen": "img/pimienta-n.jpg",
    pesoVariable: true },
  { "id": 58, "nombre": "Pimientas mix (5 variedades)", "categoria": "condimentos", "precio": 70000, "imagen": "img/pimienta-mix.jpg",
    pesoVariable: true },
  { "id": 59, "nombre": "Polvo p/ hornear", "categoria": "condimentos", "precio": 18000,   "imagen": "img/polvo-hornear.jpg",
    pesoVariable: true },
  { "id": 60, "nombre": "Provenzal Ajo Nacional", "categoria": "condimentos", "precio": 23000,  "imagen": "img/provenzal-nacional.jpg",
    pesoVariable: true },
  { "id": 61, "nombre": "Provenzal Ajo Chino", "categoria": "condimentos", "precio": 23000,  "imagen": "img/provenzal-chino.jpg",
    pesoVariable: true },
  { "id": 62, "nombre": "Puerro molido", "categoria": "condimentos", "precio": 34000,  "imagen": "img/puerro.jpg",
    pesoVariable: true },
  { "id": 63, "nombre": "Remolacha en Polvo", "categoria": "condimentos", "precio": 20000,  "imagen": "img/remolacha.jpg",
    pesoVariable: true  },
  { "id": 64, "nombre": "Salvia", "categoria": "condimentos", "precio": 17000,  },
  { "id": 65, "nombre": "Sopa juliana", "categoria": "condimentos", "precio": 24000,   "imagen": "img/sopa.jpg",
    pesoVariable: true },
  { "id": 66, "nombre": "Tomate en Polvo", "categoria": "condimentos", "precio": 40000,   "imagen": "img/tomate.jpg",
    pesoVariable: true },
  { "id": 67, "nombre": "Tomillo Cultivado Nacional", "categoria": "condimentos", "precio": 15000,   "imagen": "img/tomillo.jpg",
    pesoVariable: true },
  { "id": 68, "nombre": "Zanahoria en Polvo", "categoria": "condimentos", "precio": 19000,   "imagen": "img/zanahoria.jpg",
    pesoVariable: true },
  { "id": 69, "nombre": "Zapallo Polvo", "categoria": "condimentos", "precio": 20000,  "imagen": "img/zapallo.jpg",
    pesoVariable: true },

  { "id": 71, "nombre": "Almendras Guara", "categoria": "frutos secos", "precio": 25000, "imagen": "img/almendra_guara.jpg",
    pesoVariable: true },
 
    { "id": 75, "nombre": "Harina de Almendras (sin piel)", "categoria": "frutos secos", "precio": 20000, "imagen": "img/harina-almendra.jpg",
    pesoVariable: true },
    { "id": 76, "nombre": "Maiz Frito", "categoria": "frutos secos", "precio": 27000, "imagen": "img/maiz-frito.jpg",
    pesoVariable: true },
    { "id": 77, "nombre": "Avellanas grandes", "categoria": "frutos secos", "precio": 25000, "imagen": "img/avellana.jpg",
    pesoVariable: true },
    { "id": 78, "nombre": "Castañas de Caju", "categoria": "frutos secos", "precio": 27000, "imagen": "img/castaña.jpg",
    pesoVariable: true },
  
    { "id": 81, "nombre": "Nueces Chandler Extra Light Mariposa", "categoria": "frutos secos", "precio": 23000, "imagen": "img/nuez.jpg",
    pesoVariable: true },
  
    { "id": 83, "nombre": "Pistachos (con cascara salados)", "categoria": "frutos secos", "precio": 90000, "imagen": "img/pistacho-cascara.jpg",
    pesoVariable: true },
    { "id": 84, "nombre": "Pistachos naturales pelados", "categoria": "frutos secos", "precio": 160000, "imagen": "img/pistacho-natural.jpg",
    pesoVariable: true },
    { "id": 85, "nombre": "Mani Crudo (para hacer garrapiñada)", "categoria": "frutos secos", "precio": 10000, "imagen": "img/mani_crudo.jpg",
    pesoVariable: true },
    { "id": 86, "nombre": "Mani Repelado Salado", "categoria": "frutos secos", "precio": 10000, "imagen": "img/mani.jpg",
    pesoVariable: true },
    { "id": 87, "nombre": "Mani Repelado Tostado", "categoria": "frutos secos", "precio": 10000, "imagen": "img/mani.jpg",
    pesoVariable: true },
    { "id": 88, "nombre": "Mani con cascara", "categoria": "frutos secos", "precio": 12000, "imagen": "img/mani_cascara.jpg",
    pesoVariable: true },
 
    { "id": 91, "nombre": "Granolas", "categoria": "frutos secos", "precio": 9000, "imagen": "img/granola.jpg",
    pesoVariable: true },
    { "id": 92, "nombre": "Pasas de Uva Morocha", "categoria": "frutos secos", "precio": 16000, "imagen": "img/pasa-negra.jpg",
    pesoVariable: true },
    { "id": 93, "nombre": "Avena", "categoria": "semillas", "precio": 5000, "imagen": "img/avena.jpg",
    pesoVariable: true },
    { "id": 94, "nombre": "Mijo", "categoria": "semillas", "precio": 4000, "imagen": "img/mijo.jpg",
    pesoVariable: true },
    { "id": 95, "nombre": "Chia", "categoria": "semillas", "precio": 11000, "imagen": "img/chia.jpg",
    pesoVariable: true },
    { "id": 96, "nombre": "Te Verde", "categoria": "varios", "precio": 15000, "imagen": "img/te-verde.jpg",
    pesoVariable: true },
    { "id": 97, "nombre": "Cacao Amargo Comun", "categoria": "varios", "precio": 20000, "imagen": "img/cacao.jpg",
    pesoVariable: true },
    { "id": 98, "nombre": "Copos de Maiz", "categoria": "cereales", "precio": 8000, "imagen": "img/copos.jpg",
    pesoVariable: true },
    { "id": 99, "nombre": "Aceite de Coco Neutro 360", "categoria": "varios", "precio": 8500, "imagen": "img/aceite-coco.jpg",
    pesoVariable: false },
    { "id": 100, "nombre": "Galletita Boccone", "categoria": "varios", "precio": 2000, "imagen": "img/galletita_boccone.jpg",
    pesoVariable: false },
    { "id": 101, "nombre": "Falafel", "categoria": "varios", "precio": 2800, "imagen": "img/falafel.jpg",
    pesoVariable: false  },
    { "id": 102, "nombre": "Humus", "categoria": "varios", "precio": 2500, "imagen": "img/humus.jpg",
    pesoVariable: false  },
    { "id": 103, "nombre": "Hamburguesa", "categoria": "varios", "precio": 2800, "imagen": "img/hamburguesa.jpg",
    pesoVariable: false  },
    { "id": 104, "nombre": "Buñuelos de Espinaca", "categoria": "varios", "precio": 3500, "imagen": "img/buñuelos_de_espinaca.jpg",
    pesoVariable: false  },
    { "id": 105, "nombre": "Sal Marina Fina", "categoria": "varios", "precio": 4500, "imagen": "img/sal-marina.jpg",
    pesoVariable: true },
    { "id": 106, "nombre": "Pasta de mani", "categoria": "frutos secos", "precio": 3200, "imagen": "img/pasta-mani.jpg", pesoVariable: false },
    { "id": 107, "nombre": "Levadura", "categoria": "varios", "precio": 1200, "imagen": "img/levadura.jpg",
    pesoVariable: false  },
    { "id": 108, "nombre": "Queso Crema Light 190g", "categoria": "varios", "precio": 2600, "imagen": "img/queso_crema_light_190g.jpg",
    pesoVariable: false  },
    { "id": 109, "nombre": "Queso Crema 290g", "categoria": "varios", "precio": 3200, "imagen": "img/queso_crema_290g.jpg",
    pesoVariable: false  },
    { "id": 110, "nombre": "Queso Cremoso", "categoria": "varios", "precio": 11000, "imagen": "img/queso_cremoso.jpg",
    pesoVariable: false  },
    { "id": 111, "nombre": "Yogurt bebible 900g", "categoria": "varios", "precio": 2300, "imagen": "img/yogurt_bebible_900g.jpg",
    pesoVariable: false  }

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

    // Manejo inteligente de solapas con filtro de movimiento diagonal
    tabChips.forEach(btn => {
        let startX = 0;
        let startY = 0;

        btn.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
            startY = e.touches[0].clientY;
        }, { passive: true });

        btn.addEventListener('touchend', (e) => {
            const endX = e.changedTouches[0].clientX;
            const endY = e.changedTouches[0].clientY;
            
            const diffX = Math.abs(endX - startX);
            const diffY = Math.abs(endY - startY);

            if (diffX < 40 && diffY < 40) {
                tabChips.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                categoriaActual = btn.getAttribute('data-categoria');
                filtrarProductos();
            }
        });

        btn.addEventListener('click', (e) => {
            if (!e.detail) return;
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
            const basePrice = parseFloat(card.getAttribute('data-base-price'));

            if (select) {
                function updatePrice() {
                    const weight = parseInt(select.value);
                    let calculatedPrice = (basePrice * weight) / 1000;
                    priceEl.textContent = `$ ${Math.round(calculatedPrice).toLocaleString('es-AR')}`;
                }
                select.addEventListener('change', updatePrice);
                select.value = "100";
                updatePrice();

                btnAdd.addEventListener('click', () => {
                    const weightValue = parseInt(select.value);
                    const weightText = select.options[select.selectedIndex].text;
                    let itemPrice = weightValue === 100 ? basePrice / 10 : (basePrice * weightValue) / 1000;
                    
                    cart.push({
                        id: Date.now() + Math.random(),
                        name: productName,
                        weight: weightText,
                        price: itemPrice
                    });
                    updateCartUI();
                });
            } else {
                btnAdd.addEventListener('click', () => {
                    cart.push({
                        id: Date.now() + Math.random(),
                        name: productName,
                        weight: '1 unidad',
                        price: basePrice
                    });
                    updateCartUI();
                });
            }
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

    // Renderizado inicial del catálogo completo
    renderCatalog(productos);
});

// Registro del Service Worker para PWA
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then((reg) => console.log('Service Worker registrado con éxito:', reg.scope))
            .catch((err) => console.log('Error al registrar el Service Worker:', err));
    });
}
