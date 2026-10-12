# Grocify – Smart Grocery Shopping Assistant (Interactive Demo)

Grocify is a working, front-end demo of an AI-assisted grocery app. Unlike the original static showcase, every screen here is interactive: you can build a list, check items off, finish a trip, and watch the budget, health score and predictions update.

Data is saved in your browser (localStorage), so nothing leaves your device. Use **Reset demo data** in the banner to start over with the sample list and history.

## Features

**List**
- Natural-language quick add: `2L milk, eggs x2, 500 g paneer, bananas ₹60`
- Quantities, units and prices detected automatically, from a built-in catalog of 65 common Indian grocery items with ₹ prices
- Items grouped by store aisle (store layout mapping)
- Multiple lists (Weekly, Party, Kids…), quantity steppers, edit and delete
- Duplicate items merge instead of repeating

**Smart suggestions**
- "Usually bought with…" pairings learned from past trips
- Frequency reminders ("you buy milk every ~4 days, last 5 days ago")
- "Due soon" list in the Plan tab

**Budget**
- Weekly budget meter: spent this week, in cart, still planned
- Alerts at 80%, when the list would exceed the budget, and when over
- Cheaper store-brand alternatives with one-tap switching
- Finish trip: saves history, clears checked items, shows an end-of-trip reflection
- Spending by category (last 30 days), past trips, savings this month

**Impulse Guard**
- A 10-second pause before adding snacks, sweets and soft drinks
- Skip it (savings tracked), take a healthier swap, or add anyway after the timer
- Can be switched off in Budget settings

**Health**
- Profile: diet (vegetarian, eggetarian, vegan), allergies, goals (low sugar, low sodium, heart healthy)
- List health score out of 10, protein and fiber sources, share of fresh produce
- Flags for items that conflict with the profile, plus healthier swaps

**Plan**
- Recipes matched against your list and what's already in your kitchen, with "add missing to list"
- Pack & carry: estimated weight, bag count, cold-bag and fragile-item tips

## Run it

No build step. Open `index.html` in a browser, or serve the folder:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Deploy to GitHub Pages

1. Copy the contents of this folder into your repository root (replacing the old `index.html`).
2. Commit and push.
3. In the repository's **Settings → Pages**, set the source to the `main` branch, root folder.

## Project structure

```
index.html        Page markup
css/styles.css    Styles, light and dark themes
js/app.js         App logic, catalog, parser, storage
.nojekyll         Tells GitHub Pages to serve files as-is
```

## Roadmap to a production app

The demo stores data per browser. A production version would add:

- **Backend and real-time sync** (e.g. Firebase or Supabase) for shared family lists across devices
- **Accounts and household invites**
- **Voice input** (Web Speech API) and **barcode scanning** (BarcodeDetector API or a library like ZXing) with a product database such as Open Food Facts
- **AI features** (meal plans, photo-of-list import) via an LLM API on the server
- **Live deals and prices** from store or quick-commerce partners
- **PWA** support for install and offline use

## Tech

Plain HTML, CSS and JavaScript. Fonts: Bricolage Grotesque and Figtree (Google Fonts).
