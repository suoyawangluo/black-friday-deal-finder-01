// Deal Lantern — boot, hash routing and controls.
// Routes: #/ is the finder (filters live in the hash query so a filtered view
// is a shareable link), #/deal/<id> is one deal's page.

import { DEALS, CATEGORIES, STORES, CHECKED_AT } from './deals.js';
import { applyFilters, applySort, discountPct } from './filters.js';
import { renderList, renderDetail } from './views.js';

const grid = document.getElementById('grid');
const count = document.getElementById('count');
const search = document.getElementById('search');
const categoryRow = document.getElementById('categories');
const storeSel = document.getElementById('store');
const minSel = document.getElementById('min-discount');
const sortSel = document.getElementById('sort');

function readState() {
  const raw = location.hash.slice(1);
  const [path, query] = raw.split('?');
  const params = new URLSearchParams(query || '');
  return {
    route: path || '/',
 deal: (path || '').startsWith('/deal/') ? path.slice(6) : null,
    q: params.get('q') || '', category: params.get('cat') || 'All',
    store: params.get('store') || 'All', minDiscount: params.get('min') || '',
    sort: params.get('sort') || 'discount',
  };
}

function writeState(state, replace) {
  const params = new URLSearchParams();
  if (state.q) params.set('q', state.q);
  if (state.category && state.category !== 'All') params.set('cat', state.category);
  if (state.store && state.store !== 'All') params.set('store', state.store);
  if (state.minDiscount) params.set('min', state.minDiscount);
  if (state.sort && state.sort !== 'discount') params.set('sort', state.sort);
  const qs = params.toString();
  const hash = '#/' + (qs ? '?' + qs : '');
  if (replace) history.replaceState(null, '', hash);
  else location.hash = hash;
}

function render() {
  const state = readState();
  search.value = state.q;
  storeSel.value = state.store;
  minSel.value = state.minDiscount;
  sortSel.value = state.sort;
  categoryRow.querySelectorAll('button').forEach((b) =>
    b.classList.toggle('active', b.dataset.cat === state.category));
  if (state.deal) {
    document.getElementById('finder').hidden = true;
    document.getElementById('detail').hidden = false;
    renderDetail(document.getElementById('detail'), state.deal);
    count.textContent = '';
    return;
  }
  document.getElementById('finder').hidden = false;
  document.getElementById('detail').hidden = true;
  const filtered = applySort(applyFilters(DEALS, state), state.sort);
  renderList(grid, filtered);
  const best = DEALS.reduce((m, d) => Math.max(m, discountPct(d)), 0);
  count.textContent = filtered.length + ' of ' + DEALS.length + ' deals · best cut −' + best + '% · checked ' + CHECKED_AT;
}

// Controls
categoryRow.innerHTML = ['All'].concat(CATEGORIES).map((c) =>
  `<button type="button" data-cat="${c}">${c}</button>`).join('');
storeSel.innerHTML = ['All'].concat(Object.keys(STORES)).map((s) =>
  `<option value="${s}">${s}</option>`).join('');
categoryRow.addEventListener('click', (e) => {
  const b = e.target.closest('button');
  if (!b) return;
  const s = readState(); s.category = b.dataset.cat; writeState(s, true); render();
});
let searchTimer = null;
search.addEventListener('input', () => {
  clearTimeout(searchTimer);
  searchTimer = setTimeout(() => { const s = readState(); s.q = search.value; writeState(s, true); render(); }, 150);
});
storeSel.addEventListener('change', () => { const s = readState(); s.store = storeSel.value; writeState(s, true); render(); });
minSel.addEventListener('change', () => { const s = readState(); s.minDiscount = minSel.value; writeState(s, true); render(); });
sortSel.addEventListener('change', () => { const s = readState(); s.sort = sortSel.value; writeState(s, true); render(); });
window.addEventListener('hashchange', render);
render();
