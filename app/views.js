// Deal Lantern — rendering: the deal grid and the deal detail page.
// All markup is built from the deal data; nothing here is placeholder.

import { DEALS, STORES, CHECKED_AT } from './deals.js';
import { discountPct, dollarsSaved, signalFor, formatPrice } from './filters.js';

function esc(s) {
  return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

export function dealCard(d) {
  const pct = discountPct(d);
  const sig = signalFor(d);
  const store = STORES[d.store];
  return `<article class="card" data-id="${esc(d.id)}">
    <div class="card-top"><span class="store">${esc(d.store)}</span><span class="cat">${esc(d.category)}</span></div>
    <h3><a href="#/deal/${esc(d.id)}">${esc(d.product)}</a></h3>
    <div class="prices"><span class="sale">${formatPrice(d.sale)}</span><span class="was">${formatPrice(d.was)}</span><span class="pct">−${pct}%</span></div>
    <div class="save">You save ${formatPrice(dollarsSaved(d))}</div>
    <div class="signal ${sig.cls}">${sig.tier}</div>
    <p class="why">${esc(d.why)}</p>
    <p class="meta">Checked ${esc(CHECKED_AT)} · Source: ${esc(d.source)}</p>
    <div class="actions"><a class="btn-store" href="${esc(store.home)}" target="_blank" rel="noopener">View at ${esc(d.store)} ↗</a><a class="btn-detail" href="#/deal/${esc(d.id)}">Details</a></div>
  </article>`;
}

export function renderList(root, deals) {
  if (!deals.length) {
    root.innerHTML = '<p class="empty">No deals match those filters. Clear the search or lower the discount bar.</p>';
    return;
  }
  root.innerHTML = deals.map(dealCard).join('');
}

export function renderDetail(root, id) {
  const d = DEALS.find((x) => x.id === id);
  if (!d) {
    root.innerHTML = '<p class="empty">That deal is not in this finder. <a href="#/">Back to all deals</a></p>';
    return;
  }
  const pct = discountPct(d);
  const sig = signalFor(d);
  const store = STORES[d.store];
  const also = (d.alsoAt || [])
    .map((a) => `<li>${esc(a.store)}: <strong>${formatPrice(a.price)}</strong> <span class="meta">(${esc(a.note)})</span></li>`)
    .join('');
  root.innerHTML = `<article class="detail">
    <p class="back"><a href="#/">← All deals</a></p>
    <div class="card-top"><span class="store">${esc(d.store)}</span><span class="cat">${esc(d.category)}</span></div>
    <h2>${esc(d.product)}</h2>
    <div class="prices big"><span class="sale">${formatPrice(d.sale)}</span><span class="was">${formatPrice(d.was)}</span><span class="pct">−${pct}%</span></div>
    <div class="save">You save ${formatPrice(dollarsSaved(d))} (${pct}% off list)</div>
    <div class="signal ${sig.cls}">${sig.tier}</div>
    <p class="why">${esc(d.why)}</p>
    <p class="meta">Price checked ${esc(CHECKED_AT)} · Source: ${esc(d.source)}</p>
    ${also ? `<h3>Same product elsewhere</h3><ul class="also">${also}</ul>` : ''}
    <div class="actions"><a class="btn-store" href="${esc(store.home)}" target="_blank" rel="noopener">View at ${esc(d.store)} ↗</a></div>
    <p class="fine">Prices move fast on Black Friday — check the price at the store before you buy.</p>
  </article>`;
}
