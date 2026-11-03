const productos = [
  { "id": 1, "nombre": "Aji Cayena Roja o Amarilla", "categoria": "condimentos", "precio": 20000, "imagen": "img/aji_cayena.jpg" },
  { "id": 2, "nombre": "Aji Molido Seleccion", "categoria": "condimentos", "precio": 16000, "imagen": "img/aji-molidop.jpg" },
  { "id": 3, "nombre": "Aji Molido Extra", "categoria": "condimentos", "precio": 14000, "imagen": "img/aji_molido.jpg" },
  { "id": 4, "nombre": "Ajo Granulado Nacional", "categoria": "condimentos", "precio": 23000, "imagen": "img/ajo-granulado.jpg" },
  { "id": 5, "nombre": "Ajo Polvo", "categoria": "condimentos", "precio": 20000, "imagen": "img/ajo-polvo.jpg" },
  { "id": 6, "nombre": "Albahaca deshidratada Nacional", "categoria": "condimentos", "precio": 17000,"imagen": "img/albahaca-seca.jpg"  },
  { "id": 7, "nombre": "Anis Estrellado Entero", "categoria": "condimentos", "precio": 56000, "imagen": "img/anis-estrellado.jpg" },
  { "id": 8, "nombre": "Anis grano", "categoria": "condimentos", "precio": 45000, "imagen": "img/anis.jpg" },
  { "id": 9, "nombre": "Anis molido", "categoria": "condimentos", "precio": 30000, "imagen": "img/anis-molido.jpg" },
  { "id": 10, "nombre": "Apio Polvo", "categoria": "condimentos", "precio": 24000, "imagen": "img/apio.jpg" },
  { "id": 11, "nombre": "Azafran Turco", "categoria": "condimentos", "precio": 25000, "imagen": "img/azafran-turco.jpg" },
  { "id": 12, "nombre": "Azucar Impalpable", "categoria": "condimentos", "precio": 5000, "imagen": "img/azucar-impalpable.jpg" },
  { "id": 13, "nombre": "Bicarbonato de Sodio", "categoria": "condimentos", "precio": 10000, "imagen": "img/bicarbonato.jpg" },
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
  { "id": 29, "nombre": "Condimento para Pizza Premium", "categoria": "condimentos", "precio": 18000,   "imagen": "img/pizza.jpg" },
  { "id": 30, "nombre": "Curcuma Molida Premium INDIA", "categoria": "condimentos", "precio": 35000, "imagen": "img/curcuma.jpg" },
  { "id": 31, "nombre": "Curry INDIA", "categoria": "condimentos", "precio": 25000, "imagen": "img/curry.jpg" },
  { "id": 32, "nombre": "Especias surtidas", "categoria": "condimentos", "precio": 12000,   "imagen": "img/condimentos.jpg" },
  { "id": 33, "nombre": "Espinaca en Polvo Importada", "categoria": "condimentos", "precio": 22000, "imagen": "img/espinaca-polvo.jpg" },
  { "id": 34, "nombre": "Gelatina s/ sabor 180 Bloom", "categoria": "condimentos", "precio": 53000, "imagen": "img/gelatina.jpg" },
  { "id": 35, "nombre": "Hibiscus (Flor de Jamaica)", "categoria": "condimentos", "precio": 42000,  "imagen": "img/hibiscus.jpg" },
  { "id": 36, "nombre": "Hongos Bolletus (de pino) chilenos", "categoria": "condimentos", "precio": 26000,  "imagen": "img/hongo-pino.jpg" },
  { "id": 37, "nombre": "Jengibre Molido", "categoria": "condimentos", "precio": 27000,  "imagen": "img/jengibre.jpg"},
  { "id": 38, "nombre": "Laurel en hojas Nacional", "categoria": "condimentos", "precio": 25000, "imagen": "img/laurel.jpg" },
  { "id": 39, "nombre": "Manzanilla", "categoria": "condimentos", "precio": 75000, "imagen": "img/manzanilla.jpg" },
  { "id": 40, "nombre": "Morron en polvo", "categoria": "condimentos", "precio": 28000, "imagen": "img/morron.jpg" },
  { "id": 41, "nombre": "Mostaza Grano", "categoria": "condimentos", "precio": 16000,  "imagen": "img/mostaza.jpg" },
  { "id": 42, "nombre": "Mostaza Molida", "categoria": "condimentos", "precio": 16000,  "imagen": "img/mostaza-polvo.jpg" },
  { "id": 43, "nombre": "Nuez moscada Grano Mediana (60/65)", "categoria": "condimentos", "precio": 80000, "imagen": "img/nuez-moscada.jpg" },
  { "id": 44, "nombre": "Nuez moscada molida Premium", "categoria": "condimentos", "precio": 36000,  "imagen": "img/nuez-molida.jpg" },
  { "id": 45, "nombre": "Oregano Premium ", "categoria": "condimentos", "precio": 11000,  "imagen": "img/oregano.jpg" },
 
  { "id": 47, "nombre": "Paprika (pimenton picante)", "categoria": "condimentos", "precio": 15000,  "imagen": "img/paprika.jpg" },
  { "id": 48, "nombre": "Perejil Nacional-Premium", "categoria": "condimentos", "precio": 18000,  "imagen": "img/perejil.jpg" },
  { "id": 49, "nombre": "Pesto (Albahaca y Ajo)", "categoria": "condimentos", "precio": 15000, "imagen": "img/pesto.jpg" },
  { "id": 50, "nombre": "Pimenton Premium", "categoria": "condimentos", "precio": 16000,  "imagen": "img/pimenton.jpg" },
  { "id": 51, "nombre": "Pimenton Ahumado ", "categoria": "condimentos", "precio": 16000,  "imagen": "img/pimenton.jpg" },
  { "id": 52, "nombre": "Pimienta Blanca en Grano", "categoria": "condimentos", "precio": 75000, "imagen": "img/pimienta-bg.jpg" },
  { "id": 53, "nombre": "Pimienta Blanca Molida Premium", "categoria": "condimentos", "precio": 75000, "imagen": "img/pimienta-b.jpg" },
  { "id": 54, "nombre": "Pimienta Blanca Mol. Seleccion", "categoria": "condimentos", "precio": 40000,  "imagen": "img/pimienta-b.jpg" },
  { "id": 55, "nombre": "Pimienta Blanca Molida Brasil", "categoria": "condimentos", "precio": 30000,  "imagen": "img/pimienta-b.jpg" },
  { "id": 56, "nombre": "Pimienta Negra en Grano", "categoria": "condimentos", "precio": 40000, "imagen": "img/pimienta-negra.jpg" },
  { "id": 57, "nombre": "Pimienta Negra Molida", "categoria": "condimentos", "precio": 40000,  "imagen": "img/pimienta-n.jpg" },
  { "id": 58, "nombre": "Pimientas mix (5 variedades)", "categoria": "condimentos", "precio": 70000, "imagen": "img/pimienta-mix.jpg" },
  { "id": 59, "nombre": "Polvo p/ hornear", "categoria": "condimentos", "precio": 18000,   "imagen": "img/polvo-hornear.jpg" },
  { "id": 60, "nombre": "Provenzal Ajo Nacional", "categoria": "condimentos", "precio": 23000,  "imagen": "img/provenzal-nacional.jpg" },
  { "id": 61, "nombre": "Provenzal Ajo Chino", "categoria": "condimentos", "precio": 23000,  "imagen": "img/provenzal-chino.jpg" },
  { "id": 62, "nombre": "Puerro molido", "categoria": "condimentos", "precio": 34000 },
  { "id": 63, "nombre": "Remolacha en Polvo", "categoria": "condimentos", "precio": 20000,  "imagen": "img/remolacha.jpg"  },
  { "id": 64, "nombre": "Salvia", "categoria": "condimentos", "precio": 17000 },
  { "id": 65, "nombre": "Sopa juliana", "categoria": "condimentos", "precio": 24000,   "imagen": "img/sopa.jpg" },
  { "id": 66, "nombre": "Tomate en Polvo", "categoria": "condimentos", "precio": 40000,   "imagen": "img/tomate.jpg" },
  { "id": 67, "nombre": "Tomillo Cultivado Nacional", "categoria": "condimentos", "precio": 15000,   "imagen": "img/tomillo.jpg" },
  { "id": 68, "nombre": "Zanahoria en Polvo", "categoria": "condimentos", "precio": 19000,   "imagen": "img/zanahoria.jpg" },
  { "id": 69, "nombre": "Zapallo Polvo", "categoria": "condimentos", "precio": 20000 },

  { "id": 71, "nombre": "Almendras Guara", "categoria": "frutos secos", "precio": 25000, "imagen": "img/almendra_guara.jpg" },
    { "id": 72, "nombre": "Almendras partidas", "categoria": "frutos secos", "precio": 20000, "imagen": "img/almendras_partidas.jpg" },
    { "id": 73, "nombre": "Harina de Almendras (con piel)", "categoria": "frutos secos", "precio": 11000, "imagen": "img/harina_de_almendras_con_piel.jpg" },
    { "id": 74, "nombre": "Harina de Almendras (con piel) 100% pura", "categoria": "frutos secos", "precio": 0, "imagen": "img/harina_de_almendras_con_piel_100_pura.jpg" },
    { "id": 75, "nombre": "Harina de Almendras (sin piel)", "categoria": "frutos secos", "precio": 20000, "imagen": "img/harina_de_almendras_sin_piel.jpg" },
    { "id": 76, "nombre": "Maiz Frito", "categoria": "frutos secos", "precio": 27000, "imagen": "img/maiz_frito.jpg" },
    { "id": 77, "nombre": "Avellanas grandes", "categoria": "frutos secos", "precio": 25000, "imagen": "img/avellanas_grandes.jpg" },
    { "id": 78, "nombre": "Castañas de Caju W3", "categoria": "frutos secos", "precio": 27000, "imagen": "img/castañas_de_caju_w3.jpg" },
    { "id": 79, "nombre": "Castañas de Caju W4", "categoria": "frutos secos", "precio": 23000, "imagen": "img/castañas_de_caju_w4.jpg" },
    { "id": 80, "nombre": "Nueces Chandler Extra Light Cuartos cosecha 2025", "categoria": "frutos secos", "precio": 26000, "imagen": "img/nueces_chandler_extra_light_cuartos_cosecha_2025.jpg" },
    { "id": 81, "nombre": "Nueces Chandler Extra Light Mariposa", "categoria": "frutos secos", "precio": 27000, "imagen": "img/nueces_chandler_extra_light_mariposa.jpg" },
    { "id": 82, "nombre": "Nueces Chandler con cascara 34/36", "categoria": "frutos secos", "precio": 18000, "imagen": "img/nueces_chandler_con_cascara_3436.jpg" },
    { "id": 83, "nombre": "Pistachos (con cascara salados)", "categoria": "frutos secos", "precio": 90000, "imagen": "img/pistachos_con_cascara_salados.jpg" },
    { "id": 84, "nombre": "Pistachos naturales pelados", "categoria": "frutos secos", "precio": 160000, "imagen": "img/pistachos_naturales_pelados.jpg" },
    { "id": 85, "nombre": "Mani Crudo (para hacer garrapiñada)", "categoria": "frutos secos", "precio": 4500, "imagen": "img/mani_crudo_para_hacer_garrapiñada.jpg" },
    { "id": 86, "nombre": "Mani Repelado Salado", "categoria": "frutos secos", "precio": 0, "imagen": "img/mani_repelado_salado.jpg" },
    { "id": 87, "nombre": "Mani Repelado Tostado", "categoria": "frutos secos", "precio": 10000, "imagen": "img/mani_repelado_tostado.jpg" },
    { "id": 88, "nombre": "Mani con cascara", "categoria": "frutos secos", "precio": 12000, "imagen": "img/mani_con_cascara.jpg" },
    { "id": 89, "nombre": "Garrapiñada de Mani", "categoria": "frutos secos", "precio": 0, "imagen": "img/garrapiñada_de_mani.jpg" },
    { "id": 90, "nombre": "Garrapiñada de Almendras", "categoria": "frutos secos", "precio": 0, "imagen": "img/garrapiñada_de_almendras.jpg" },
    { "id": 91, "nombre": "Granolas", "categoria": "frutos secos", "precio": 7200, "imagen": "img/granolas.jpg" },
    { "id": 92, "nombre": "Pasas de Uva Morocha", "categoria": "frutos secos", "precio": 6000, "imagen": "img/pasas_de_uva_morocha_sultanina.jpg" },
    { "id": 93, "nombre": "Avena", "categoria": "semillas", "precio": 4000, "imagen": "img/avena.jpg" },
    { "id": 94, "nombre": "Mijo", "categoria": "semillas", "precio": 4000, "imagen": "img/mijo.jpg" },
    { "id": 95, "nombre": "Chia", "categoria": "semillas", "precio": 11000, "imagen": "img/chia.jpg" },
    { "id": 96, "nombre": "Te Verde", "categoria": "Otros", "precio": 15000, "imagen": "img/te_verde.jpg" },
    { "id": 97, "nombre": "Cacao Amargo Comun", "categoria": "Otros", "precio": 20000, "imagen": "img/cacao_amargo_comun.jpg" },
    { "id": 98, "nombre": "Copos de Maiz", "categoria": "cereales", "precio": 8000, "imagen": "img/copos_de_maiz.jpg" },
    { "id": 99, "nombre": "Aceite de Coco Neutro 360", "categoria": "Otros", "precio": 85000, "imagen": "img/aceite_de_coco_neutro_360.jpg" },
    { "id": 100, "nombre": "Galletita Boccone", "categoria": "Otros", "precio": 20000, "imagen": "img/galletita_boccone.jpg" },
    { "id": 101, "nombre": "Falafel", "categoria": "Otros", "precio": 28000, "imagen": "img/falafel.jpg" },
    { "id": 102, "nombre": "Humus", "categoria": "Otros", "precio": 25000, "imagen": "img/humus.jpg" },
    { "id": 103, "nombre": "Hamburguesa", "categoria": "Otros", "precio": 28000, "imagen": "img/hamburguesa.jpg" },
    { "id": 104, "nombre": "Buñuelos de Espinaca", "categoria": "Otros", "precio": 35000, "imagen": "img/buñuelos_de_espinaca.jpg" },
    { "id": 105, "nombre": "Sal Marina Fina", "categoria": "otros", "precio": 4500, "imagen": "img/sal_marina_fina.jpg" },
    { "id": 106, "nombre": "Pasta de mani", "categoria": "frutos secos", "precio": 32000, "imagen": "img/pasta_de_mani.jpg" },
    { "id": 107, "nombre": "Levadura", "categoria": "Otros", "precio": 12000, "imagen": "img/levadura.jpg" },
    { "id": 108, "nombre": "Queso Crema Light 190g", "categoria": "Otros", "precio": 26000, "imagen": "img/queso_crema_light_190g.jpg" },
    { "id": 109, "nombre": "Queso Crema 290g", "categoria": "Otros", "precio": 32000, "imagen": "img/queso_crema_290g.jpg" },
    { "id": 110, "nombre": "Queso Cremoso", "categoria": "Otros", "precio": 110000, "imagen": "img/queso_cremoso.jpg" },
    { "id": 111, "nombre": "Yogurt bebible 900g", "categoria": "Otros", "precio": 23000, "imagen": "img/yogurt_bebible_900g.jpg" }

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
