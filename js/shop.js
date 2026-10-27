/* Pâtisserie V. Marie — shop logic */

const IMG = 'Assets/images/';

const products = [
  /* ===== Mini Desserts — $2.50, no size choice ===== */
  { id: 2, name: 'Mini Cheesecake Dome', category: 'mini', price: 2.5, desc: 'Short crust biscuit, vanilla bean cheesecake.', image: IMG + 'mini-cheesecake.jpg' },
  { id: 4, name: 'Mini Apple Tart', category: 'mini', price: 2.5, desc: 'Vanilla tart shell, pastry cream, roasted cinnamon apples, toasted crumble.', image: IMG + 'mini-apple-tart.jpg?v=3', photoNote: '1" size' },
  { id: 6, name: 'Mini Cannoli', category: 'mini', price: 2.5, desc: 'Ricotta, Fior di Sicilia essence, traditional Sicilian cannoli shell.', image: IMG + 'mini-cannoli.jpg' },
  { id: 10, name: 'Salted Caramel Cream Puff', category: 'mini', price: 2.5, desc: 'Choux pastry, caramel, vanilla custard, Maldon sea salt flakes.', image: IMG + 'cream-puff.jpg' },
  { id: 11, name: 'Mini Éclair', category: 'mini', price: 2.5, desc: 'Choux pastry, custard filling.', image: IMG + 'eclair.jpg', options: [{ label: 'Filling', type: 'single', choices: ['Vanilla', 'Chocolate', 'Hazelnut'] }, { label: 'Dip colour', type: 'text', optional: true }] },
  { id: 12, name: 'Mini Bombe', category: 'mini', price: 2.5, desc: 'Nutella or vanilla custard filling.', image: IMG + 'mini-bombe.jpg', options: [{ label: 'Filling', type: 'single', choices: ['Nutella', 'Vanilla Custard'] }] },
  { id: 13, name: 'Cupcake', category: 'mini', price: 2.5, desc: 'Vanilla, chocolate, red velvet, or lemon.', image: IMG + 'cupcake-real.jpg', options: [{ label: 'Flavour', type: 'single', choices: ['Vanilla', 'Chocolate', 'Red Velvet', 'Lemon'] }, { label: 'Size', type: 'single', choices: [{ label: 'Mini', price: 2.5 }, { label: 'Regular', price: 5 }] }, { label: 'Buttercream colour', type: 'text', optional: true }], addon: { label: 'Add a flower', price: 1 } },

  /* ===== 1" or 2" choice — grouped together ===== */
  { id: 1, name: "S'mores Tart", category: 'mini', price: 2.5, dsizes: true, desc: 'Vanilla tart shell layered with caramel, homemade marshmallow, milk chocolate mousse, topped with graham cracker.', image: IMG + 'smores-tart.jpg?v=3', options: [{ label: 'Size', type: 'single', choices: [{ label: '1"', price: 2.5 }, { label: '2"', price: 4 }] }] },
  { id: 3, name: 'Lemon Meringue Tart', category: 'mini', price: 2.5, dsizes: true, desc: 'Vanilla tart shell, lemon curd, toasted meringue.', image: IMG + 'lemon-meringue-tart.jpg', options: [{ label: 'Size', type: 'single', choices: [{ label: '1"', price: 2.5 }, { label: '2"', price: 4 }] }] },
  { id: 5, name: 'Frutti di Bosco Tart', category: 'mini', price: 2.5, dsizes: true, desc: 'Vanilla tart shell, pastry cream, mixed fresh berries.', image: IMG + 'frutti-di-bosco-tart.jpg', options: [{ label: 'Size', type: 'single', choices: [{ label: '1"', price: 2.5 }, { label: '2"', price: 4 }] }] },

  /* ===== Mini Desserts — $3.00 ===== */
  { id: 14, name: 'Madeleine Cookie', category: 'mini', price: 3, desc: 'French madeleine.', image: IMG + 'madeleine.jpg', options: [{ label: 'White chocolate dip colour', type: 'text', optional: true }] },

  /* ===== Mini Desserts — $4.00, listed last ===== */
  { id: 7, name: 'Apple Almond Tart', category: 'mini', price: 4, desc: '2" vanilla tart shell, frangipane, pastry cream, roasted cinnamon apples, toasted crumble, golden almond.', image: IMG + 'apple-almond-tart.jpg?v=3' },
  { id: 8, name: 'Pecan Tart', category: 'mini', price: 4, desc: '2" vanilla tart shell, maple, honey, toasted pecans.', image: IMG + 'pecan-tart.jpg' },
  { id: 9, name: 'Chocolate Crème Brûlée Tart', category: 'mini', price: 4, desc: '2" chocolate tart shell, vanilla crème brûlée, dark chocolate mousse.', image: IMG + 'chocolate-creme-brulee-tart.jpg' },

  /* ===== Verrines ===== */
  { id: 15, name: 'Biscoff Verrine', category: 'verrine', price: 3, desc: 'Lotus cookie crumbs, vanilla cheesecake.', image: IMG + 'verrine-biscoff.jpg' },
  { id: 16, name: 'Berry Verrine', category: 'verrine', price: 3, desc: 'Gluten free and dairy free.', badge: 'GF', image: IMG + 'verrine-berry.jpg' },
  { id: 17, name: 'Ferrero Rocher Verrine', category: 'verrine', price: 3, desc: 'Nutella, dark chocolate mousse, chocolate cake, toasted hazelnut, dark chocolate crisp pearls.', image: IMG + 'verrine-ferrero-rocher.jpg' },
  { id: 18, name: 'Strawberry Cheesecake Verrine', category: 'verrine', price: 3, desc: 'Graham crust, layered vanilla and strawberry cheesecake.', image: IMG + 'verrine-strawberry-cheesecake.jpg' },
  { id: 19, name: 'Dulce de Leche Verrine', category: 'verrine', price: 3, desc: 'White chocolate mousse, dulce de leche, white chocolate crisp pearls.', image: IMG + 'verrine-dulce-de-leche.jpg' },
  { id: 20, name: 'Bueno Verrine', category: 'verrine', price: 3, desc: 'Nutella, hazelnut mousse, milk chocolate mousse, Nutella Bueno.', image: IMG + 'verrine-bueno.jpg' },
  { id: 21, name: 'Oreo Cheesecake Verrine', category: 'verrine', price: 3, desc: 'Oreo crumbs, vanilla cheesecake.', image: IMG + 'verrine-oreo.jpg' },
  { id: 22, name: 'Tiramisu Verrine', category: 'verrine', price: 3, desc: 'Mascarpone, espresso, savoiardi, Baileys.', image: IMG + 'verrine-tiramisu.jpg' },

  /* ===== Towers ===== */
  { id: 23, name: 'Macaron Tower', category: 'towers', price: 225, desc: '12" macaron tower. Larger sizes available on request.', options: [{ label: 'Size', type: 'single', choices: ['12"', 'Larger — request a quote'] }] },
  { id: 24, name: 'Éclair Tower', category: 'towers', price: 225, desc: '12" éclair tower. Larger sizes available on request.', options: [{ label: 'Size', type: 'single', choices: ['12"', 'Larger — request a quote'] }] },
  { id: 25, name: 'Madeleine Tower', category: 'towers', price: 225, desc: '12" madeleine tower. Larger sizes available on request.', image: IMG + 'tower-madeleine.jpg', badge: 'Showstopper', options: [{ label: 'Size', type: 'single', choices: ['12"', 'Larger — request a quote'] }] },
  { id: 26, name: 'Cream Puff Tower', category: 'towers', price: 225, desc: '12" cream puff tower. Larger sizes available on request.', options: [{ label: 'Size', type: 'single', choices: ['12"', 'Larger — request a quote'] }] },
  { id: 27, name: 'Fruit Tower', category: 'towers', price: null, inquire: true, desc: 'Seasonal fruit tower — cherry, grape, strawberry, blueberry, blackberry, peach, or mandarin. Price varies per season and size.', image: IMG + 'tower-fruit-cherry.jpg', options: [{ label: 'Size', type: 'single', choices: ['12"', '15"', '20"', '26"', 'Larger — request a quote'] }, { label: 'Fruit', type: 'single', choices: ['Cherry', 'Grape', 'Strawberry', 'Blueberry', 'Blackberry', 'Peach', 'Mandarin'] }] },

  /* ===== Macarons ===== */
  { id: 28, name: 'Macaron — Raspberry', category: 'macarons', price: 2.5, desc: 'French macaron, raspberry.', image: IMG + 'macaron-raspberry.jpg', badge: 'Popular' },
  { id: 29, name: 'Macaron — Double Chocolate', category: 'macarons', price: 2.5, desc: 'French macaron, double chocolate.', image: IMG + 'macaron-chocolate.jpg' },
  { id: 30, name: 'Macaron — Salted Caramel', category: 'macarons', price: 2.5, desc: 'French macaron, salted caramel.', image: IMG + 'macaron-salted-caramel.jpg' },
  { id: 31, name: 'Macaron — Passion Fruit', category: 'macarons', price: 2.5, desc: 'French macaron, passion fruit.', image: IMG + 'macaron-passion-fruit.jpg' },
  { id: 32, name: 'Macaron — Pistachio', category: 'macarons', price: 2.5, desc: 'French macaron, pistachio.', image: IMG + 'macaron-pistachio.jpg' },
  { id: 33, name: 'Macaron — Hazelnut', category: 'macarons', price: 2.5, desc: 'French macaron, hazelnut.', image: IMG + 'macaron-hazelnut.jpg' },
  { id: 34, name: 'Macaron — Vanilla Bean', category: 'macarons', price: 2.5, desc: 'French macaron, vanilla bean.', image: IMG + 'macaron-vanilla-bean.jpg' },

  /* ===== Pastries — ascending by price ===== */
  { id: 35, name: 'Croissant', category: 'pastries', price: 2.75, desc: 'Butter croissant.', image: IMG + 'croissant.jpg' },
  { id: 40, name: 'Rice Krispies Square', category: 'pastries', price: 4, desc: 'Homemade marshmallow, vanilla, Rice Krispies.', image: IMG + 'rice-krispies.jpg', options: [{ label: 'Dip colour', type: 'text', optional: true }, { label: 'Drizzle colour', type: 'text', optional: true }, { label: 'Topping', type: 'single', optional: true, choices: ['Gold sugar', 'Silver sugar', 'White pearls'] }] },
  { id: 41, name: 'Chocolate-Dipped Strawberries', category: 'pastries', price: 4, desc: 'Sold in sets of three.', image: IMG + 'dipped-strawberries.jpg', options: [{ label: 'Dip colour', type: 'text', optional: true }, { label: 'Drizzle colour', type: 'text', optional: true }, { label: 'Topping', type: 'single', optional: true, choices: ['Gold sugar', 'Silver sugar', 'White pearls'] }] },
  { id: 36, name: 'Filled Croissant', category: 'pastries', price: 4, desc: 'Vanilla custard or Nutella, icing sugar.', image: IMG + 'filled-croissant.jpg', options: [{ label: 'Filling', type: 'single', choices: ['Vanilla Custard', 'Nutella'] }] },
  { id: 37, name: 'Almond Croissant', category: 'pastries', price: 4.5, desc: 'Frangipane, toasted almonds, icing sugar.', image: IMG + 'almond-croissant.jpg' },
  { id: 38, name: 'Old Fashioned Donut', category: 'pastries', price: 5, desc: 'Old fashioned style donut.', image: IMG + 'donut.jpg', options: [{ label: 'Dip colour', type: 'text', optional: true }, { label: 'Drizzle colour', type: 'text', optional: true }, { label: 'Topping', type: 'single', optional: true, choices: ['Gold sugar', 'Silver sugar', 'White pearls', 'Multicoloured sprinkles'] }] },
  { id: 39, name: 'Cake Pop', category: 'pastries', price: 5, desc: 'Vanilla or chocolate.', image: IMG + 'cake-pop.jpg', options: [{ label: 'Flavour', type: 'single', choices: ['Vanilla', 'Chocolate'] }, { label: 'Ball', type: 'single', choices: ['Ball up', 'Ball down'] }, { label: 'Dip colour', type: 'text', optional: true }, { label: 'Drizzle colour', type: 'text', optional: true }, { label: 'Topping', type: 'single', optional: true, choices: ['Gold sugar', 'Silver sugar', 'White pearls', 'Multicoloured sprinkles'] }], addon: { label: 'Add a flower', price: 1 } },
];

const CATEGORY_LABELS = {
  mini: 'Mini Desserts',
  verrine: 'Verrines',
  towers: 'Towers',
  macarons: 'Macarons',
  pastries: 'Pastries',
};

let cart = [];
let currentFilter = 'mini';
let activeCustomizeId = null;
let customizeQty = 1;
let customizeChoices = [];
let customizeAddon = false;
let modalProductId = null;

function money(n) {
  return '$' + n.toFixed(2);
}

function choiceLabel(c) {
  return typeof c === 'string' ? c : c.label;
}
function choicePrice(c) {
  return typeof c === 'string' ? null : c.price;
}

function escapeHtml(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function hasPricedOptions(p) {
  return (p.options || []).some((opt) => (opt.choices || []).some((c) => choicePrice(c) != null));
}

function minPrice(p) {
  let min = p.price;
  (p.options || []).forEach((opt) => {
    (opt.choices || []).forEach((c) => {
      const cp = choicePrice(c);
      if (cp != null && cp < min) min = cp;
    });
  });
  return min;
}

function priceDisplay(p) {
  if (p.inquire) return 'Inquire';
  if (hasPricedOptions(p)) return 'from ' + money(minPrice(p));
  return money(p.price);
}

function getUnitPrice(p, choices, addonOn) {
  let price = p.price;
  (p.options || []).forEach((opt, i) => {
    const sel = choices[i];
    if (!sel || !opt.choices) return;
    const c = opt.choices.find((x) => choiceLabel(x) === sel);
    const cp = c && choicePrice(c);
    if (cp != null) price = cp;
  });
  if (addonOn && p.addon) price += p.addon.price;
  return price;
}

function optionsLabel(p, choices, addonOn) {
  const parts = [];
  (p.options || []).forEach((opt, i) => {
    const val = String(choices[i] || '').trim();
    if (!val) return;
    parts.push(opt.type === 'text' ? `${opt.label}: ${val}` : val);
  });
  if (addonOn && p.addon) parts.push(p.addon.label);
  return parts.join(' · ');
}

function priceSuffix(p) {
  if (p.category === 'towers' || p.inquire) return '';
  return ' <small>/each</small>';
}

function defaultChoices(p) {
  return (p.options || []).map((opt) => {
    if (opt.type === 'text' || opt.optional) return '';
    return choiceLabel(opt.choices[0]);
  });
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
  if (totalEl && !p.inquire) totalEl.textContent = money(getUnitPrice(p, customizeChoices, customizeAddon) * customizeQty);
}

function renderOptionChips(p, groupIndex) {
  const opt = p.options[groupIndex];
  const note = opt.optional ? ' <span class="opt-note">Optional</span>' : '';
  if (opt.type === 'text') {
    const value = escapeHtml(customizeChoices[groupIndex] || '');
    return `
    <div>
      <span class="customize-label">${escapeHtml(opt.label)}${note}</span>
      <input type="text" class="customize-input" data-text-group="${groupIndex}" value="${value}" autocomplete="off" maxlength="40">
    </div>`;
  }
  return `
    <div>
      <span class="customize-label">${escapeHtml(opt.label)}${note}</span>
      <div class="flavor-chips" role="group" aria-label="${escapeHtml(opt.label)}">
        ${opt.choices.map((c) => {
          const label = choiceLabel(c);
          const price = choicePrice(c);
          const selected = customizeChoices[groupIndex] === label;
          const priceTag = price != null ? `<span class="chip-price">${money(price)}</span>` : '';
          return `<button type="button" class="flavor-chip${selected ? ' selected' : ''}" data-group="${groupIndex}" data-choice="${escapeHtml(label)}" aria-pressed="${selected}">${escapeHtml(label)}${priceTag}</button>`;
        }).join('')}
      </div>
    </div>`;
}

function renderAddonChip(p) {
  if (!p.addon) return '';
  return `
    <div>
      <span class="customize-label">Extras</span>
      <div class="flavor-chips" role="group" aria-label="Extras">
        <button type="button" class="flavor-chip${customizeAddon ? ' selected' : ''}" data-addon="1" aria-pressed="${customizeAddon}">${p.addon.label} +${money(p.addon.price).replace('.00', '')}</button>
      </div>
    </div>`;
}

function renderCustomizePanel(p) {
  const chips = (p.options || []).map((_, i) => renderOptionChips(p, i)).join('');
  const addon = renderAddonChip(p);
  const foot = p.inquire
    ? `<div class="customize-foot"><button type="button" class="customize-add" data-confirm-add="${p.id}">Inquire</button></div>`
    : `<div class="customize-foot"><span class="customize-total">${money(getUnitPrice(p, customizeChoices, customizeAddon) * customizeQty)}</span><button type="button" class="customize-add" data-confirm-add="${p.id}">Add</button></div>`;

  return `
    <div class="customize-panel" data-panel="${p.id}">
      <div class="customize-head">
        <h3 class="product-name">${p.name}</h3>
        <button type="button" class="customize-close" data-close-panel aria-label="Close"><span aria-hidden="true">×</span></button>
      </div>
      ${p.inquire ? '' : `
      <div>
        <span class="customize-label">Quantity</span>
        <div class="customize-qty">
          <button type="button" data-qty-delta="-1" aria-label="Decrease">−</button>
          <span data-qty-value>${customizeQty}</span>
          <button type="button" data-qty-delta="1" aria-label="Increase">+</button>
        </div>
      </div>`}
      ${chips}
      ${addon}
      ${foot}
    </div>`;
}

function bindCustomizePanel(panel) {
  if (!panel) return;
  const p = getProduct(Number(panel.dataset.panel));

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

  panel.querySelectorAll('.flavor-chip[data-group]').forEach((chip) => {
    chip.addEventListener('click', (e) => {
      e.stopPropagation();
      const group = Number(chip.dataset.group);
      const opt = p.options[group];
      const choice = chip.dataset.choice;
      const next = opt.optional && customizeChoices[group] === choice ? '' : choice;
      customizeChoices[group] = next;
      panel.querySelectorAll(`.flavor-chip[data-group="${group}"]`).forEach((c) => {
        const on = next !== '' && c.dataset.choice === next;
        c.classList.toggle('selected', on);
        c.setAttribute('aria-pressed', String(on));
      });
      syncCustomizePanelUI();
    });
  });

  panel.querySelectorAll('[data-text-group]').forEach((input) => {
    input.addEventListener('click', (e) => e.stopPropagation());
    input.addEventListener('keydown', (e) => e.stopPropagation());
    input.addEventListener('input', () => {
      customizeChoices[Number(input.dataset.textGroup)] = input.value;
    });
  });

  panel.querySelectorAll('.flavor-chip[data-addon]').forEach((chip) => {
    chip.addEventListener('click', (e) => {
      e.stopPropagation();
      customizeAddon = !chip.classList.contains('selected');
      chip.classList.toggle('selected', customizeAddon);
      chip.setAttribute('aria-pressed', String(customizeAddon));
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
      if (e.target.closest('.add-btn, .customize-panel, button')) return;
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
  customizeChoices = defaultChoices(p);
  customizeAddon = false;

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

  if (p.inquire) {
    closeCustomize();
    closeProductModal();
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    return true;
  }

  const unit = getUnitPrice(p, customizeChoices, customizeAddon);
  const label = optionsLabel(p, customizeChoices, customizeAddon);
  const key = label;
  const existing = cart.find((c) => c.id === id && (c.optionsKey || '') === key);

  if (existing) {
    existing.qty += customizeQty;
  } else {
    cart.push({
      id: p.id,
      name: p.name,
      price: unit,
      image: p.image,
      qty: customizeQty,
      optionsLabel: label,
      optionsKey: key,
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
      <div class="cart-item-image${item.image ? '' : ' cart-item-image--blank'}">${item.image ? `<img src="${item.image}" alt="">` : ''}</div>
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
  customizeChoices = defaultChoices(p);
  customizeAddon = false;

  const overlay = document.getElementById('modalOverlay');
  const modal = document.getElementById('productModal');
  const price = p.inquire ? 'Price varies per season' : priceDisplay(p) + priceSuffix(p);
  const chips = (p.options || []).map((_, i) => renderOptionChips(p, i)).join('');
  const imageHtml = p.image
    ? `<div class="modal-image"><img src="${p.image}" alt="${escapeHtml(p.name)}"></div>`
    : '';
  modal.classList.toggle('product-modal--text', !p.image);

  const addon = p.addon ? `
    <div>
      <span class="customize-label">Extras</span>
      <div class="flavor-chips" role="group" aria-label="Extras">
        <button type="button" class="flavor-chip" id="modalAddon" data-addon="1" aria-pressed="false">${p.addon.label} +${money(p.addon.price).replace('.00', '')}</button>
      </div>
    </div>` : '';

  const foot = p.inquire
    ? `<div class="customize-foot"><button type="button" class="customize-add" id="modalAdd">Inquire</button></div>`
    : `<div class="customize-foot"><span class="customize-total" id="modalTotal">${money(getUnitPrice(p, customizeChoices, customizeAddon))}</span><button type="button" class="customize-add" id="modalAdd">Add</button></div>`;

  modal.innerHTML = `
    <button type="button" class="modal-close" id="modalClose" aria-label="Close"><span aria-hidden="true">×</span></button>
    ${imageHtml}
    <div class="modal-body">
      <p class="modal-category">${CATEGORY_LABELS[p.category]}</p>
      <h3>${p.name}</h3>
      <p class="modal-desc">${p.desc}</p>
      <p class="modal-price">${price}</p>
      <div class="modal-actions">
        <div class="customize-panel">
          ${p.inquire ? '' : `
          <span class="customize-label">Quantity</span>
          <div class="customize-qty">
            <button type="button" id="modalQtyMinus" aria-label="Decrease">−</button>
            <span id="modalQtyVal">1</span>
            <button type="button" id="modalQtyPlus" aria-label="Increase">+</button>
          </div>`}
          ${chips}
          ${addon}
          ${foot}
        </div>
      </div>
    </div>
  `;

  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';

  const syncModal = () => {
    if (!p.inquire) {
      document.getElementById('modalQtyVal').textContent = String(customizeQty);
      document.getElementById('modalTotal').textContent = money(getUnitPrice(p, customizeChoices, customizeAddon) * customizeQty);
    }
  };

  document.getElementById('modalClose').addEventListener('click', closeProductModal);
  document.getElementById('modalQtyMinus')?.addEventListener('click', () => {
    customizeQty = Math.max(1, customizeQty - 1);
    syncModal();
  });
  document.getElementById('modalQtyPlus')?.addEventListener('click', () => {
    customizeQty += 1;
    syncModal();
  });
  modal.querySelectorAll('.flavor-chip[data-group]').forEach((chip) => {
    chip.addEventListener('click', () => {
      const group = Number(chip.dataset.group);
      const opt = p.options[group];
      const choice = chip.dataset.choice;
      const next = opt.optional && customizeChoices[group] === choice ? '' : choice;
      customizeChoices[group] = next;
      modal.querySelectorAll(`.flavor-chip[data-group="${group}"]`).forEach((c) => {
        const on = next !== '' && c.dataset.choice === next;
        c.classList.toggle('selected', on);
        c.setAttribute('aria-pressed', String(on));
      });
      syncModal();
    });
  });
  modal.querySelectorAll('[data-text-group]').forEach((input) => {
    input.addEventListener('input', () => {
      customizeChoices[Number(input.dataset.textGroup)] = input.value;
    });
  });
  document.getElementById('modalAddon')?.addEventListener('click', (e) => {
    customizeAddon = !e.currentTarget.classList.contains('selected');
    e.currentTarget.classList.toggle('selected', customizeAddon);
    e.currentTarget.setAttribute('aria-pressed', String(customizeAddon));
    syncModal();
  });
  document.getElementById('modalAdd').addEventListener('click', () => {
    if (p.inquire) {
      closeProductModal();
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      return;
    }
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

function scrollShopToTopIfNeeded() {
  if (!window.matchMedia('(max-width: 860px)').matches) return;
  const store = document.getElementById('store');
  if (!store) return;
  const navH = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--nav-h')) || 0;
  if (store.getBoundingClientRect().top < navH - 8) {
    store.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

function filterProducts(category) {
  closeCustomize();
  renderProducts(category);
  scrollShopToTopIfNeeded();
}

function renderProducts(filter) {
  currentFilter = filter;
  const grid = document.getElementById('productsGrid');
  const filtered = products.filter((p) => p.category === filter);

  document.querySelectorAll('.filter-btn').forEach((btn) => {
    btn.classList.toggle('active', btn.dataset.filter === filter);
  });

  activeCustomizeId = null;

  /* One flat grid, cheapest to priciest. The 1"/2" badge does the
     differentiating so no tier headings are needed. */
  const ordered = filter === 'mini'
    ? [...filtered].sort((a, b) => minPrice(a) - minPrice(b))
    : filtered;

  const cardHtml = (p) => {
    const btn = p.inquire
      ? `<a href="#contact" class="add-btn">Inquire</a>`
      : `<button type="button" class="add-btn" data-add="${p.id}">Add</button>`;
    const imageHtml = `
        <div class="product-image${p.image ? '' : ' product-image--blank'}">
          ${p.badge ? `<span class="product-badge">${escapeHtml(p.badge)}</span>` : ''}
          ${p.dsizes ? `<span class="product-badge product-badge--size">1" / 2"</span>` : ''}
          ${p.image ? `<img src="${p.image}" alt="${escapeHtml(p.name)}" loading="lazy" width="600" height="600">` : ''}
        </div>`;
    return `
      <article class="product-card fade-in visible" data-id="${p.id}" role="button" tabindex="0" aria-label="${escapeHtml(p.name)}">
        ${imageHtml}
        <div class="product-info">
          <p class="product-category">${CATEGORY_LABELS[p.category]}</p>
          <h3 class="product-name">${p.name}</h3>
          <p class="product-desc">${p.desc}</p>
          <div class="product-footer">
            <span class="product-price">${priceDisplay(p)}${priceSuffix(p)}</span>
            ${btn}
          </div>
        </div>
      </article>
    `;
  };

  grid.innerHTML = ordered.map(cardHtml).join('');

  bindProductEvents();
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

  renderProducts('mini');
  updateCartUI();
}

document.addEventListener('DOMContentLoaded', initShop);
