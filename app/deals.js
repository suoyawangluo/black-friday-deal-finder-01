// Deal Lantern — the deals. Every price below was read by the agent in a
// deals source that names the store, during the session that built this site
// (Friday 27 November 2026, ~14:40 CST). `source` names where the price was
// read; `checked` is when. Store links go to the store's own site: verify
// the price there before buying, prices move fast on Black Friday.

export const CHECKED_AT = '27 Nov 2026, 14:40 CST';
export const CHECKED_NOTE =
  'Prices read 27 Nov 2026, ~14:40 CST, in the deals sources named on each card.';

export const STORES = {
  Amazon: { home: 'https://www.amazon.com', short: 'Amazon' },
  'Best Buy': { home: 'https://www.bestbuy.com', short: 'Best Buy' },
  Walmart: { home: 'https://www.walmart.com', short: 'Walmart' },
  "Kohl's": { home: 'https://www.kohls.com', short: "Kohl's" },
};

export const CATEGORIES = [
  'Audio',
  'Computers',
  'TVs',
  'Smart Home',
  'Wearables',
  'Gaming',
  'Home & Kitchen',
  'Toys',
];

// sale and was are USD. `why` is the one-line evidence behind the signal.
export const DEALS = [
  { id: 'airpods-pro-3', product: 'Apple AirPods Pro 3', store: 'Amazon', category: 'Audio', sale: 179, was: 249, source: 'USA Today Reviewed', alsoAt: [{ store: 'Walmart', price: 149, note: 'Passion for Savings' }], why: 'Four trackers list $179 at Amazon; Walmart shows $149.' },
  { id: 'sony-xm5', product: 'Sony WH-1000XM5 Noise Cancelling Headphones', store: 'Best Buy', category: 'Audio', sale: 169, was: 399.99, source: 'Best Buy Black Friday release', why: "Best Buy's headline headphone cut: $229 off list." },
  { id: 'sony-xm6', product: 'Sony WH-1000XM6 Noise Cancelling Headphones', store: 'Amazon', category: 'Audio', sale: 348, was: 459, source: "Tom's Guide", why: '$111 off the current flagship.' },
  { id: 'bose-qc2', product: 'Bose QuietComfort Headphones (2nd Gen)', store: 'Amazon', category: 'Audio', sale: 199, was: 359, source: 'petematheson', why: '$160 off; selected colors only.' },
  { id: 'airpods-4', product: 'Apple AirPods 4', store: 'Walmart', category: 'Audio', sale: 99, was: 129.99, source: 'TechResearchOnline', why: '$31 off the base AirPods.' },
  { id: 'airpods-max-2', product: 'Apple AirPods Max 2', store: 'Amazon', category: 'Audio', sale: 419, was: 549, source: 'Mashable', why: '$130 off the flagship over-ears.' },
  { id: 'macbook-air-m5', product: 'Apple MacBook Air 13-inch (M5, 16GB / 512GB)', store: 'Best Buy', category: 'Computers', sale: 1049, was: 1299, source: 'Best Buy Black Friday release', alsoAt: [{ store: 'Amazon', price: 989.1, note: 'Mashable — Midnight config' }], why: '$250 off; Amazon lists a Midnight config at $989.10.' },
  { id: 'macbook-neo', product: 'Apple MacBook Neo 13-inch (256GB)', store: 'Amazon', category: 'Computers', sale: 649, was: 699, source: 'The Verge', why: 'Only $50 off — a new model, small cut.' },
  { id: 'hp-omnibook-5', product: 'HP OmniBook 5 14-inch 2K OLED Touch Laptop', store: 'Best Buy', category: 'Computers', sale: 449.99, was: 799.99, source: 'Best Buy Black Friday release', why: '$350 off; an OLED screen at a budget price.' },
  { id: 'ipad-a16', product: 'Apple iPad (A16, Wi-Fi, 128GB)', store: 'Amazon', category: 'Computers', sale: 379, was: 449, source: 'Mashable', why: '$70 off the base iPad.' },
  { id: 'ipad-mini-a17', product: 'Apple iPad mini (A17 Pro, Wi-Fi, 128GB)', store: 'Amazon', category: 'Computers', sale: 484, was: 599, source: 'USA Today Reviewed', why: '$115 off the mini.' },
  { id: 'tcl-65-fire-tv', product: 'TCL 65-inch 4K UHD HDR Fire TV (2026)', store: 'Best Buy', category: 'TVs', sale: 229.99, was: 469.99, source: 'Best Buy Black Friday release', why: 'Best Buy doorbuster: $240 off.' },
  { id: 'samsung-frame-65', product: 'Samsung The Frame 65-inch (2025)', store: 'Amazon', category: 'TVs', sale: 1097.99, was: 1497.99, source: 'MacRumors', why: '$400 off the art TV.' },
  { id: 'roku-65-4k', product: 'Roku 65-inch Smart 4K TV', store: 'Amazon', category: 'TVs', sale: 479.99, was: 649.99, source: 'MacRumors', why: '$170 off.' },
  { id: 'fire-tv-stick-4k-plus', product: 'Amazon Fire TV Stick 4K Plus', store: 'Amazon', category: 'Smart Home', sale: 29, was: 69, source: "Tom's Guide", why: '58% off the 4K stick.' },
  { id: 'echo-spot', product: 'Amazon Echo Spot', store: 'Amazon', category: 'Smart Home', sale: 44, was: 109, source: "Tom's Guide", why: '60% off the smart clock.' },
  { id: 'ring-doorbell-2k', product: 'Ring Battery Doorbell 2K', store: 'Amazon', category: 'Smart Home', sale: 39.99, was: 99.99, source: 'petematheson', why: '$60 off the doorbell.' },
  { id: 'google-home-speaker', product: 'Google Home Speaker', store: 'Best Buy', category: 'Smart Home', sale: 79.99, was: 100, source: '9to5Google', why: '9to5Google calls it the lowest price ever.' },
  { id: 'pixel-watch-5', product: 'Google Pixel Watch 5 (41mm)', store: 'Amazon', category: 'Wearables', sale: 300, was: 400, source: '9to5Google', why: '$100 off the new watch.' },
  { id: 'apple-watch-s12', product: 'Apple Watch Series 12 (GPS, 42mm)', store: 'Amazon', category: 'Wearables', sale: 329, was: 399, source: 'TechRadar', why: '$70 off the new Series 12.' },
  { id: 'apple-watch-se3', product: 'Apple Watch SE 3 (GPS, 40mm)', store: 'Amazon', category: 'Wearables', sale: 179, was: 249, source: 'Mashable', why: '$70 off the new SE.' },
  { id: 'switch2-mario-kart', product: 'Nintendo Switch 2 + Mario Kart World Bundle', store: 'Amazon', category: 'Gaming', sale: 499, was: 549.99, source: 'Nintendo / GamesRadar', alsoAt: [{ store: 'Walmart', price: 499, note: '2ndShift' }, { store: 'Best Buy', price: 499.99, note: 'GamesRadar' }], why: 'The $79.99 game is effectively free at this price.' },
  { id: 'dualsense', product: 'Sony DualSense Wireless Controller (PS5)', store: 'Amazon', category: 'Gaming', sale: 54, was: 74.99, source: 'GamesRadar', why: 'Back to its usual Black Friday price.' },
  { id: 'xbox-controller', product: 'Xbox Wireless Controller', store: 'Amazon', category: 'Gaming', sale: 42.99, was: 64.99, source: '2ndShift', why: '$22 off the standard pad.' },
  { id: 'gamesir-supernova', product: 'GameSir Super Nova Wireless Controller (Switch 2)', store: 'Best Buy', category: 'Gaming', sale: 29.99, was: 49.99, source: 'GamesRadar', why: "GamesRadar's best budget Switch 2 pad at its event price." },
  { id: 'samsung-p9-microsd', product: 'Samsung P9 256GB microSD Express (Switch 2)', store: 'Amazon', category: 'Gaming', sale: 44.99, was: 79.99, source: '2ndShift', why: '44% off the Switch 2 storage card.' },
  { id: 'kitchenaid-artisan', product: 'KitchenAid Artisan Series 5-Quart Stand Mixer', store: 'Walmart', category: 'Home & Kitchen', sale: 349, was: 499.99, source: 'koupon.ai', why: '$150 off the 5-quart mixer.' },
  { id: 'keurig-k-express', product: 'Keurig K-Express Single-Serve Coffee Maker', store: 'Amazon', category: 'Home & Kitchen', sale: 59, was: 89, source: 'DansDeals', why: '$30 off the single-serve brewer.' },
  { id: 'ninja-kitchen-system', product: 'Ninja Kitchen System with BlendSense', store: 'Amazon', category: 'Home & Kitchen', sale: 179, was: 249, source: 'neeshu', why: '$70 off the blender system.' },
  { id: 'dyson-v8', product: 'Dyson V8 Cyclone Cordless Vacuum', store: 'Walmart', category: 'Home & Kitchen', sale: 299, was: 399.99, source: 'koupon.ai', why: '$100 off the cordless stick.' },
  { id: 'shark-powerdetect', product: 'Shark PowerDetect Speed Cordless Vacuum', store: 'Best Buy', category: 'Home & Kitchen', sale: 199.99, was: 499.99, source: 'KCDesi', why: '60% off list.' },
  { id: 'ninja-slushi-xl', product: 'Ninja SLUSHi XL Frozen Drink Machine', store: "Kohl's", category: 'Home & Kitchen', sale: 299.99, was: 349.99, source: "Kohl's", why: '14% off — a modest cut on a popular machine.' },
  { id: 'lego-bugatti-bolide', product: 'LEGO Technic Bugatti Bolide Race Car', store: 'Walmart', category: 'Toys', sale: 39.95, was: 49.99, source: 'koupon.ai', why: '20% off the Technic build.' },
  { id: 'lego-red-panda', product: 'LEGO Creator Red Panda', store: 'Walmart', category: 'Toys', sale: 15, was: 30, source: 'DealNews', why: 'Half price.' },
];
