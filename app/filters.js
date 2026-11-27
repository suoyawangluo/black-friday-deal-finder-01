// Deal Lantern — filtering, sorting and the "is it really a deal" signal.
// The signal is computed from the two prices only: the discount percentage
// decides the tier, and each deal's `why` line carries its evidence.

export function discountPct(deal) {
  return Math.round((1 - deal.sale / deal.was) * 100);
}

export function dollarsSaved(deal) {
  return deal.was - deal.sale;
}

// Tiers: >=50% a true low, 30–49% a strong deal, 15–29% a good price,
// under 15% a routine sale (honest: a small cut is not a bargain).
export function signalFor(deal) {
  const pct = discountPct(deal);
  if (pct >= 50) return { tier: 'TRUE LOW', cls: 'sig-low' };
  if (pct >= 30) return { tier: 'STRONG DEAL', cls: 'sig-strong' };
  if (pct >= 15) return { tier: 'GOOD PRICE', cls: 'sig-good' };
  return { tier: 'ROUTINE SALE', cls: 'sig-routine' };
}

export function formatPrice(n) {
  return '$' + n.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

export function applyFilters(deals, state) {
  const q = (state.q || '').trim().toLowerCase();
  return deals.filter((d) => {
    if (state.category && state.category !== 'All' && d.category !== state.category) return false;
    if (state.store && state.store !== 'All' && d.store !== state.store) return false;
    if (state.minDiscount && discountPct(d) < Number(state.minDiscount)) return false;
    if (q) {
      const hay = (d.product + ' ' + d.store + ' ' + d.category).toLowerCase();
      if (!hay.includes(q)) return false;
    }
    return true;
  });
}

export function applySort(deals, sort) {
  const list = deals.slice();
  if (sort === 'discount') list.sort((a, b) => discountPct(b) - discountPct(a) || dollarsSaved(b) - dollarsSaved(a));
  else if (sort === 'price-asc') list.sort((a, b) => a.sale - b.sale);
  else if (sort === 'price-desc') list.sort((a, b) => b.sale - a.sale);
  else if (sort === 'saved') list.sort((a, b) => dollarsSaved(b) - dollarsSaved(a));
  return list;
}
