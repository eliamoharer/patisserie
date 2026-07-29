/* Pâtisserie V. Marie — shop logic */

const IMG = 'Assets/images/';

const products = [
  { id: 28, name: 'Signature Fruit Cake', category: 'fruit', price: 85, desc: 'Berries, piping, classic finish.', badge: 'Signature', image: IMG + 'fruit-cherry-clean.jpg' },
  { id: 29, name: 'Berry Cascade Cake', category: 'fruit', price: 120, desc: 'Fresh berries, densely arranged.', image: IMG + 'fruit-strawberry-tower.jpg', fit: 'contain' },
  { id: 30, name: 'Cherry Tower', category: 'fruit', price: 110, desc: 'Glazed cherries, vertical display.', image: IMG + 'fruit-cherry-product.jpg', fit: 'contain' },
  { id: 31, name: 'Celebration Fruit Tower', category: 'fruit', price: 185, desc: 'Centrepiece fruit tower.', badge: 'Showstopper', image: IMG + 'chocolate-fruit.jpg' },
  { id: 32, name: 'Garden Berry Cake', category: 'fruit', price: 95, desc: 'Berry-topped, scalloped piping.', image: IMG + 'berry-cake.jpg' },

  { id: 1, name: 'Mini Cheesecake', category: 'mini', price: 2.5, desc: 'Classic cheesecake, bite-size.', image: IMG + 'dessert-spread.jpg' },
  { id: 2, name: "Mini S'mores Tart", category: 'mini', price: 2.5, desc: 'Chocolate, graham, marshmallow.', image: IMG + 'chocolate-dessert.jpg' },
  { id: 3, name: 'Mini Apple Tart', category: 'mini', price: 2.5, desc: 'Caramelized apple.', image: IMG + 'cake3.jpg' },
  { id: 4, name: 'Mini Pecan Tart', category: 'mini', price: 2.5, desc: 'Maple pecan.', image: IMG + 'fruit-tart.jpg' },
  { id: 5, name: 'Mini Lemon Meringue Tart', category: 'mini', price: 2.5, desc: 'Lemon curd, meringue.', image: IMG + 'tart-lemon.jpg' },
  { id: 6, name: 'Mini Cannoli', category: 'mini', price: 2.5, desc: 'Ricotta cream.', image: IMG + 'cake2.jpg' },
  { id: 7, name: 'Mini Éclairs', category: 'mini', price: 2.5, desc: 'Choux, vanilla, chocolate.', image: IMG + 'cake1.jpg' },
  { id: 8, name: 'Mini Cupcake', category: 'mini', price: 2.5, desc: 'Seasonal, hand-piped.', image: IMG + 'cupcake-lux.jpg' },
  { id: 9, name: 'Salted Caramel Cream Puff', category: 'mini', price: 2.5, desc: 'Choux, salted caramel cream.', image: IMG + 'cake2.jpg' },
  { id: 10, name: 'Mini Bombe', category: 'mini', price: 2.5, desc: 'Chocolate sphere.', image: IMG + 'chocolate-dessert.jpg', options: { label: 'Filling', type: 'single', choices: ['Vanilla Custard', 'Nutella'] } },
  { id: 11, name: 'Macarons', category: 'mini', price: 2.5, desc: 'French macarons.', badge: 'Popular', image: IMG + 'macaroons.png', fit: 'contain', options: { label: 'Flavours', type: 'multi', choices: ['Chocolate', 'Vanilla', 'Pistachio', 'Salted Caramel', 'Passionfruit', 'Raspberry', 'Hazelnut'] } },

  { id: 12, name: 'Chocolate Crème Brûlée Tart', category: 'tarts', price: 4, desc: 'Chocolate, caramelized sugar.', image: IMG + 'chocolate-fruit.jpg' },
  { id: 13, name: 'Apple Almond Crumble Tart', category: 'tarts', price: 4, desc: 'Apple, frangipane, crumble.', image: IMG + 'fruit-tart.jpg' },
  { id: 14, name: 'Lemon Meringue Tart', category: 'tarts', price: 4, desc: 'Lemon curd, Swiss meringue.', image: IMG + 'tart-lemon.jpg' },
  { id: 15, name: "S'mores Tart", category: 'tarts', price: 4, desc: 'Chocolate, marshmallow.', image: IMG + 'chocolate-dessert.jpg' },
  { id: 16, name: 'Pecan Tart', category: 'tarts', price: 4, desc: 'Pecan, maple caramel.', image: IMG + 'pastry-mini.jpg' },

  { id: 17, name: 'Tiramisu Cup', category: 'verrine', price: 3, desc: 'Espresso, mascarpone.', image: IMG + 'dessert-glass.jpg' },
  { id: 18, name: 'Strawberry Cheesecake Cup', category: 'verrine', price: 3, desc: 'Strawberry, cheesecake.', image: IMG + 'dessert-spread.jpg' },
  { id: 19, name: 'Dulce de Leche Cup', category: 'verrine', price: 3, desc: 'Caramel, white chocolate.', image: IMG + 'chocolate-dessert.jpg' },
  { id: 20, name: 'Ferrero Rocher Cup', category: 'verrine', price: 3, desc: 'Hazelnut, chocolate.', image: IMG + 'layered-cake.jpg' },
  { id: 21, name: 'Cookies & Cream Cup', category: 'verrine', price: 3, desc: 'Cookie, vanilla cream.', image: IMG + 'dessert-glass.jpg' },
  { id: 22, name: 'Biscoff Cheesecake Cup', category: 'verrine', price: 3, desc: 'Cookie butter cheesecake.', image: IMG + 'pastry-mini.jpg' },
  { id: 23, name: 'Bueno Mousse Cup', category: 'verrine', price: 3, desc: 'Caramel, hazelnut mousse.', image: IMG + 'chocolate-dessert.jpg' },
  { id: 24, name: 'Turtles Cup', category: 'verrine', price: 3, desc: 'Caramel, pecan, chocolate.', image: IMG + 'dessert-spread.jpg' },

  { id: 25, name: '65pc Macaron Tree', category: 'trees', price: 225, desc: '65 macarons.', badge: 'Bestseller', image: IMG + 'macaroons.png', fit: 'contain' },
  { id: 26, name: '65pc Cream Puff Tree', category: 'trees', price: 200, desc: '65 cream puffs.', image: IMG + 'cake2.jpg' },
  { id: 27, name: '90pc Macaron Tree', category: 'trees', price: 290, desc: '90 macarons, faces forward.', image: IMG + 'macarons-lux.jpg' },
];

const CATEGORY_LABELS = {
  fruit: 'Fruit Cake',
  mini: 'Mini Pastry',
  tarts: 'Tart',
  verrine: 'Verrine',
  trees: 'Dessert Tree',
};

let cart = [];
let currentFilter = 'fruit';
let activeCustomizeId = null;
let customizeQty = 1;
let customizeChoices = [];
let modalProductId = null;

function money(n) {
  return '$' + n.toFixed(2);
}

function priceSuffix(p) {
  if (p.category === 'trees' || p.category === 'fruit') return '';
  return ' <small>/each</small>';
}

function getProduct(id) {
  return products.find((p) => p.id === id);
}

function showToast(msg) {
  const toast = document.getElementById('toast');
  toast.textContent = msg;
  toast.classList.add('show');
  clearTimeout(showToast._t);
  showToast._t = setTimeout(() => toast.classList.remove('show'), 2800);
}

function syncCustomizePanelUI() {
  const panel = document.querySelector('.customize-panel[data-panel]');
  if (!panel || activeCustomizeId == null) return;
  const p = getProduct(activeCustomizeId);
  if (!p) return;
  const qtyEl = panel.querySelector('[data-qty-value]');
  const totalEl = panel.querySelector('.customize-total');
  if (qtyEl) qtyEl.textContent = String(customizeQty);
  if (totalEl) totalEl.textContent = money(p.price * customizeQty);
}

function renderProducts(filter) {
  currentFilter = filter;
  const grid = document.getElementById('productsGrid');
  const filtered = products.filter((p) => p.category === filter);

  document.querySelectorAll('.filter-btn').forEach((btn) => {
    btn.classList.toggle('active', btn.dataset.filter === filter);
  });

  // Closing customize before wipe avoids orphan state after filter change
  activeCustomizeId = null;

  grid.innerHTML = filtered.map((p) => {
    const fitClass = p.fit === 'contain' ? ' product-image--contain' : '';
    return `
      <article class="product-card fade-in visible" data-id="${p.id}" role="button" tabindex="0" aria-label="${p.name}">
        <div class="product-image${fitClass}">
          ${p.badge ? `<span class="product-badge">${p.badge}</span>` : ''}
          <img src="${p.image}" alt="${p.name}" loading="lazy" width="600" height="600">
        </div>
        <div class="product-info">
          <p class="product-category">${CATEGORY_LABELS[p.category]}</p>
          <h3 class="product-name">${p.name}</h3>
          <p class="product-desc">${p.desc}</p>
          <div class="product-footer">
            <span class="product-price">${money(p.price)}${priceSuffix(p)}</span>
            <button type="button" class="add-btn" data-add="${p.id}">Add</button>
          </div>
        </div>
      </article>
    `;
  }).join('');

  bindProductEvents();
}

function renderCustomizePanel(p) {
  const chips = p.options
    ? `
      <div>
        <span class="customize-label">${p.options.label}</span>
        <div class="flavor-chips" role="group" aria-label="${p.options.label}">
          ${p.options.choices.map((c) => {
            const selected = customizeChoices.includes(c) ? ' selected' : '';
            return `<button type="button" class="flavor-chip${selected}" data-choice="${c}" aria-pressed="${customizeChoices.includes(c)}">${c}</button>`;
          }).join('')}
        </div>
      </div>
    `
    : '';

  return `
    <div class="customize-panel" data-panel="${p.id}">
      <div class="customize-head">
        <h3 class="product-name">${p.name}</h3>
        <button type="button" class="customize-close" data-close-panel aria-label="Close"><span aria-hidden="true">×</span></button>
      </div>
      <div>
        <span class="customize-label">Quantity</span>
        <div class="customize-qty">
          <button type="button" data-qty-delta="-1" aria-label="Decrease">−</button>
          <span data-qty-value>${customizeQty}</span>
          <button type="button" data-qty-delta="1" aria-label="Increase">+</button>
        </div>
      </div>
      ${chips}
      <div class="customize-foot">
        <span class="customize-total">${money(p.price * customizeQty)}</span>
        <button type="button" class="customize-add" data-confirm-add="${p.id}">Add</button>
      </div>
    </div>
  `;
}

function bindCustomizePanel(panel) {
  if (!panel) return;

  panel.addEventListener('click', (e) => e.stopPropagation());

  panel.querySelector('[data-close-panel]')?.addEventListener('click', (e) => {
    e.stopPropagation();
    closeCustomize();
  });

  panel.querySelectorAll('[data-qty-delta]').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      customizeQty = Math.max(1, customizeQty + Number(btn.dataset.qtyDelta));
      syncCustomizePanelUI();
    });
  });

  panel.querySelectorAll('.flavor-chip').forEach((chip) => {
    chip.addEventListener('click', (e) => {
      e.stopPropagation();
      const p = getProduct(activeCustomizeId);
      if (!p?.options) return;
      const value = chip.dataset.choice;
      if (p.options.type === 'single') {
        customizeChoices = [value];
        panel.querySelectorAll('.flavor-chip').forEach((c) => {
          const on = c.dataset.choice === value;
          c.classList.toggle('selected', on);
          c.setAttribute('aria-pressed', String(on));
        });
      } else {
        const on = !chip.classList.contains('selected');
        chip.classList.toggle('selected', on);
        chip.setAttribute('aria-pressed', String(on));
        customizeChoices = [...panel.querySelectorAll('.flavor-chip.selected')].map((c) => c.dataset.choice);
      }
      syncCustomizePanelUI();
    });
  });

  panel.querySelector('[data-confirm-add]')?.addEventListener('click', (e) => {
    e.stopPropagation();
    confirmAdd(Number(panel.dataset.panel));
  });
}

function bindProductEvents() {
  document.querySelectorAll('.product-card').forEach((card) => {
    const id = Number(card.dataset.id);

    card.addEventListener('click', (e) => {
      if (e.target.closest('[data-add], .customize-panel, button')) return;
      openProductModal(id);
    });

    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openProductModal(id);
      }
    });
  });

  document.querySelectorAll('[data-add]').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      openCustomize(Number(btn.dataset.add));
    });
  });
}

function openCustomize(id) {
  const p = getProduct(id);
  if (!p) return;
  if (activeCustomizeId === id) return;

  closeCustomize();

  const card = document.querySelector(`.product-card[data-id="${id}"]`);
  if (!card) return;

  activeCustomizeId = id;
  customizeQty = 1;
  customizeChoices = p.options?.type === 'single' ? [p.options.choices[0]] : [];

  card.classList.add('is-customizing');
  const info = card.querySelector('.product-info');
  info.insertAdjacentHTML('beforeend', renderCustomizePanel(p));
  bindCustomizePanel(info.querySelector('.customize-panel'));
}

function closeCustomize() {
  if (activeCustomizeId == null) return;
  const card = document.querySelector(`.product-card[data-id="${activeCustomizeId}"]`);
  if (card) {
    card.classList.remove('is-customizing');
    card.querySelector('.customize-panel')?.remove();
  }
  activeCustomizeId = null;
}

function confirmAdd(id) {
  const p = getProduct(id);
  if (!p) return false;

  if (p.options?.type === 'multi' && customizeChoices.length === 0) {
    showToast('Select a flavour');
    return false;
  }
  if (p.options?.type === 'single' && customizeChoices.length === 0) {
    showToast('Select a filling');
    return false;
  }

  const optionsKey = customizeChoices.slice().sort().join('|');
  const existing = cart.find((c) => c.id === id && (c.optionsKey || '') === optionsKey);

  if (existing) {
    existing.qty += customizeQty;
  } else {
    cart.push({
      id: p.id,
      name: p.name,
      price: p.price,
      image: p.image,
      qty: customizeQty,
      optionsLabel: customizeChoices.join(', '),
      optionsKey,
    });
  }

  closeCustomize();
  updateCartUI();
  showToast(`${p.name} added`);
  return true;
}

function updateCartUI() {
  const count = cart.reduce((s, c) => s + c.qty, 0);
  const countEl = document.getElementById('cartCount');
  countEl.textContent = String(count);
  countEl.classList.toggle('show', count > 0);

  const itemsEl = document.getElementById('cartItems');
  const footerEl = document.getElementById('cartFooter');
  const total = cart.reduce((s, c) => s + c.price * c.qty, 0);

  if (cart.length === 0) {
    footerEl.hidden = true;
    itemsEl.innerHTML = '<div class="cart-empty"><p>Your selection is empty</p></div>';
    return;
  }

  footerEl.hidden = false;
  document.getElementById('cartSubtotal').textContent = money(total);
  document.getElementById('cartTotal').textContent = money(total);

  itemsEl.innerHTML = cart.map((item, index) => `
    <div class="cart-item">
      <div class="cart-item-image"><img src="${item.image}" alt=""></div>
      <div class="cart-item-details">
        <p class="cart-item-name">${item.name}</p>
        ${item.optionsLabel ? `<p class="cart-item-meta">${item.optionsLabel}</p>` : ''}
        <div class="qty-inline">
          <button type="button" data-cart-qty="${index}" data-delta="-1">−</button>
          <span>${item.qty}</span>
          <button type="button" data-cart-qty="${index}" data-delta="1">+</button>
        </div>
        <p class="cart-item-total">${money(item.price * item.qty)}</p>
        <button type="button" class="cart-item-remove" data-cart-remove="${index}">Remove</button>
      </div>
    </div>
  `).join('');

  itemsEl.querySelectorAll('[data-cart-qty]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const i = Number(btn.dataset.cartQty);
      const delta = Number(btn.dataset.delta);
      cart[i].qty += delta;
      if (cart[i].qty <= 0) cart.splice(i, 1);
      updateCartUI();
    });
  });

  itemsEl.querySelectorAll('[data-cart-remove]').forEach((btn) => {
    btn.addEventListener('click', () => {
      cart.splice(Number(btn.dataset.cartRemove), 1);
      updateCartUI();
    });
  });
}

function openCart() {
  document.getElementById('cartOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeCart() {
  document.getElementById('cartOverlay').classList.remove('open');
  if (!document.getElementById('modalOverlay').classList.contains('open')) {
    document.body.style.overflow = '';
  }
}

function openProductModal(id) {
  const p = getProduct(id);
  if (!p) return;
  closeCustomize();
  modalProductId = id;
  customizeQty = 1;
  customizeChoices = p.options?.type === 'single' ? [p.options.choices[0]] : [];

  const overlay = document.getElementById('modalOverlay');
  const modal = document.getElementById('productModal');
  const fitClass = p.fit === 'contain' ? ' modal-image--contain' : '';

  modal.innerHTML = `
    <button type="button" class="modal-close" id="modalClose" aria-label="Close"><span aria-hidden="true">×</span></button>
    <div class="modal-image${fitClass}"><img src="${p.image}" alt="${p.name}"></div>
    <div class="modal-body">
      <p class="modal-category">${CATEGORY_LABELS[p.category]}</p>
      <h3>${p.name}</h3>
      <p class="modal-desc">${p.desc}</p>
      <p class="modal-price">${money(p.price)}${priceSuffix(p)}</p>
      <div class="modal-actions">
        <div class="customize-panel">
          <span class="customize-label">Quantity</span>
          <div class="customize-qty">
            <button type="button" id="modalQtyMinus" aria-label="Decrease">−</button>
            <span id="modalQtyVal">1</span>
            <button type="button" id="modalQtyPlus" aria-label="Increase">+</button>
          </div>
          ${p.options ? `
            <div>
              <span class="customize-label">${p.options.label}</span>
              <div class="flavor-chips" id="modalFlavors" role="group" aria-label="${p.options.label}">
                ${p.options.choices.map((c, i) => {
                  const selected = p.options.type === 'single' && i === 0 ? ' selected' : '';
                  const pressed = selected ? 'true' : 'false';
                  return `<button type="button" class="flavor-chip${selected}" data-choice="${c}" aria-pressed="${pressed}">${c}</button>`;
                }).join('')}
              </div>
            </div>
          ` : ''}
          <div class="customize-foot">
            <span class="customize-total" id="modalTotal">${money(p.price)}</span>
            <button type="button" class="customize-add" id="modalAdd">Add</button>
          </div>
        </div>
      </div>
    </div>
  `;

  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';

  const syncModal = () => {
    document.getElementById('modalQtyVal').textContent = String(customizeQty);
    document.getElementById('modalTotal').textContent = money(p.price * customizeQty);
    if (p.options) {
      customizeChoices = [...document.querySelectorAll('#modalFlavors .flavor-chip.selected')].map((c) => c.dataset.choice);
    }
  };

  document.getElementById('modalClose').addEventListener('click', closeProductModal);
  document.getElementById('modalQtyMinus').addEventListener('click', () => {
    customizeQty = Math.max(1, customizeQty - 1);
    syncModal();
  });
  document.getElementById('modalQtyPlus').addEventListener('click', () => {
    customizeQty += 1;
    syncModal();
  });
  document.querySelectorAll('#modalFlavors .flavor-chip').forEach((chip) => {
    chip.addEventListener('click', () => {
      if (p.options.type === 'single') {
        document.querySelectorAll('#modalFlavors .flavor-chip').forEach((c) => {
          const on = c === chip;
          c.classList.toggle('selected', on);
          c.setAttribute('aria-pressed', String(on));
        });
      } else {
        const on = !chip.classList.contains('selected');
        chip.classList.toggle('selected', on);
        chip.setAttribute('aria-pressed', String(on));
      }
      syncModal();
    });
  });
  document.getElementById('modalAdd').addEventListener('click', () => {
    syncModal();
    if (confirmAdd(id)) closeProductModal();
  });
}

function closeProductModal() {
  document.getElementById('modalOverlay').classList.remove('open');
  modalProductId = null;
  if (!document.getElementById('cartOverlay').classList.contains('open')) {
    document.body.style.overflow = '';
  }
}

function submitOrder() {
  if (cart.length === 0) return;
  cart = [];
  updateCartUI();
  closeCart();
  showToast('Inquiry sent');
}

function filterProducts(category) {
  closeCustomize();
  renderProducts(category);
}

function initShop() {
  document.querySelectorAll('.filter-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      filterProducts(btn.dataset.filter);
    });
  });

  document.querySelectorAll('[data-shop-filter]').forEach((el) => {
    el.addEventListener('click', () => {
      filterProducts(el.dataset.shopFilter);
      document.getElementById('store')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  document.getElementById('cartToggle').addEventListener('click', openCart);
  document.getElementById('cartClose').addEventListener('click', closeCart);
  document.getElementById('cartOverlay').addEventListener('click', (e) => {
    if (e.target.id === 'cartOverlay') closeCart();
  });
  document.getElementById('submitOrder').addEventListener('click', submitOrder);

  document.getElementById('modalOverlay').addEventListener('click', (e) => {
    if (e.target.id === 'modalOverlay') closeProductModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeProductModal();
      closeCart();
      closeCustomize();
    }
  });

  renderProducts('fruit');
  updateCartUI();
}

document.addEventListener('DOMContentLoaded', initShop);
