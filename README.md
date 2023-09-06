# Northloom storefront

A responsive fashion storefront: editorial home page, filterable shop, product pages and a cart that survives reloads. Front end only, all data is typed and static.

## Cart

The cart is a Redux Toolkit slice. You can add an item, remove it and change the quantity. Each line is keyed by product, size and colour, so the same shirt in two sizes is two lines. The order summary shows subtotal, discount and total, and there is a cart badge in the navbar. The cart is persisted to `localStorage` with `redux-persist`.

## Pages

- `/` - home
- `/shop` - shop listing
- `/shop/product/[id]/[slug]` - product page
- `/cart` - cart

## Components

- `components/homepage/` - hero
- `components/homepage/` - brands
- `components/homepage/` - dress style grid
- `components/homepage/` - reviews
- `components/shop-page/` - breadcrumb
- `components/shop-page/` - filter sections (desktop)
- `components/shop-page/` - filter sections (mobile)
- `components/product-page/` - gallery
- `components/product-page/` - colour selection
- `components/product-page/` - size selection
- `components/product-page/` - add to cart
- `components/product-page/` - tabs
- `components/cart-page/` - cart line item
- `components/cart-page/` - breadcrumb
- `components/common/` - product card
- `components/common/` - product row
- `components/common/` - review card
- `components/layout/` - announcement banner
- `components/layout/` - navbar
- `components/layout/` - footer
- `components/ui/` - accordion
- `components/ui/` - dialog
- `components/ui/` - select
- `components/ui/` - slider
- `components/ui/` - navigation menu
- `components/storage/` - SSR-safe storage for redux-persist
- `app/page.tsx` - home page and the static product and review data
- `app/shop/` - shop listing and product detail
- `app/cart/` - cart page
- `app/layout.tsx` - fonts, metadata, navbar, footer, providers
- `app/providers.tsx` - Redux store and PersistGate
- `lib/store.ts` - store setup and persistence config
- `lib/features/` - carts slice
- `lib/features/` - products slice
- `lib/hooks/` - typed Redux hooks
- `types/` - Product type
- `types/` - Review type
- `types/` - Discount type
- `styles/` - global CSS
- `styles/` - local fonts
- `public/images/` - product photography
- `public/images/` - hero photography
- `public/images/` - dress-style photography

## Design tokens

- Black: base color
- White: base color
- Warm off-white: surface color
- Red: discount badges
- Red: price reductions
- Display font: heavy, wide, capitals, used for headlines
- Display font: also used for section titles
- Body font: light geometric sans
- Body font: also used for prices
- Fonts: loaded locally
- Radius: large, on product images
- Radius: pill, on buttons
- Radius: pill, on inputs
- Border: hairline, on cart cards
- Border: hairline, on filter cards
- Animation: tailwindcss-animate
- Animation: Framer Motion entrances on sections
- Animation: Framer Motion counters
- Progress: holy-loader route progress bar
- Breakpoint: layouts from 390px up
- Dark tokens: present in the CSS (shadcn), not used by any component

## How the cart works

When you click add to cart on the product page, `addToCart(id, size, colour, qty)` is dispatched to the store. The carts slice checks if a line with the same product, size and colour already exists. If it does, the quantity goes up. If not, a new line is added. Totals and discounts are worked out inside the slice. Only the `carts` slice is saved (`whitelist: ["carts"]`); the products slice is not. On the server `redux-persist` gets a no-op storage, in the browser it gets `localStorage`, so server rendering doesn't break. When you reload, the cart comes back.

## Stack

Next.js 14.2, React 18.3, TypeScript 5, Tailwind CSS 3.4, Redux Toolkit 2, react-redux 9, redux-persist 6, Framer Motion 11, Radix UI via shadcn/ui, vaul, Embla, lucide-react, react-icons, holy-loader, react-simple-star-rating, usehooks-ts.

## Dev

```bash
npm install
npm run dev
npm run lint
```

Node.js 18.17 or newer. No environment variables.