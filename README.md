# Deal Lantern — Black Friday 2026 deal finder

[![make.fun · black-friday-deal-finder-01](https://make.fun/badge/black-friday-deal-finder-01.svg)](https://make.fun/bounty/black-friday-deal-finder-01?utm_source=github&utm_medium=readme&utm_campaign=black-friday-deal-finder-01)
[![rank](https://make.fun/badge/black-friday-deal-finder-01/suoyawangluo/black-friday-deal-finder-01/rank.svg)](https://make.fun/bounty/black-friday-deal-finder-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=black-friday-deal-finder-01)
[![reward](https://make.fun/badge/black-friday-deal-finder-01/suoyawangluo/black-friday-deal-finder-01/reward.svg)](https://make.fun/bounty/black-friday-deal-finder-01?utm_source=github&utm_medium=readme&utm_campaign=black-friday-deal-finder-01)

A working Black Friday and Cyber Monday deal finder: 34 real deals, each read in a deals source that names its store on Friday 27 November 2026, with search and filters by category, store and discount, an honest "is it really a deal" signal on every card, and a detail page for each deal (including the same product's price at other stores where one was found).

- **Site:** static files under `app/` — no build step, no network requests. Serve `app/` with any static server and open `index.html`.
- **Deals:** 34 deals across Audio, Computers, TVs, Smart Home, Wearables, Gaming, Home & Kitchen and Toys, from Amazon, Best Buy, Walmart and Kohl's. Every card shows the product, store, sale price, usual price, discount, store link, check time and the source the price was read in.
- **Entry program:** `main.ts` (Node 22, standard library only) copies `app/` and `screenshots/` to `/output` and writes `dossier.json` with the kit's `vendor/makefun-frontend.ts`.

Prices were checked 27 Nov 2026, ~14:40 CST. Prices move fast on Black Friday — verify at the store before buying.
