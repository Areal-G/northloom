# Northloom storefront

Front end for a clothing store. Mobile-first, static data, no backend.

## Pages

- `/` - home: hero with counters, New Arrivals and Top Selling rows, dress-style grid, reviews
- `/shop` - product grid with a filter sidebar (drawer on mobile)
- `/shop/product/[id]/[slug]` - gallery, colour and size picker, quantity, details/reviews/FAQ tabs
- `/cart` - line items and order summary, kept in localStorage

## Dev

```bash
npm install
npm run dev
```

Runs on http://localhost:3000. Node 18.17+. No env vars.

Stack: Next.js 14 (App Router), Tailwind, Redux Toolkit + redux-persist for the cart, Framer Motion.