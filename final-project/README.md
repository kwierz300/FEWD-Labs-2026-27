# FEWD integrated café project

Combines the coursework practice from Labs 2–8, with AI assistance. Original lab directories are unchanged. Backend is adapted from the lecturer's FEWD2627-backend repository as documented in Lab 7.

## Run locally
Use Node.js 20.19+ or 22.12+.
In separate terminals from final-project:
- cd backend; npm install; npm start
- cd frontend; npm install; npm run dev

Frontend: http://localhost:5173
Backend: http://localhost:3001
Demo staff login: test / test. Local teaching use only.

## Pages
- /: café information, interactive Leaflet map with four example locations, searchable menu grouped by category. Menu data comes from GET /food. Checkbox includes unavailable products.
- /orders: searchable available food cards, independent personal ratings, order selection and submission.
- /staff: JWT login, protected current orders, logout.
- Other routes: 404 page.

Ratings remain in localStorage by product ID. Staff orders are persisted in NeDB; the dashboard fetches on entry/login, not in real time. Map locations are the static teaching dataset from Lab 3; map tiles require internet access. Menu data is shared across café locations, not location-specific. Order selection resets when leaving the order page.

## Verification checklist
- Start both servers and build frontend with npm run build.
- Search home and order menus by name and description; check unavailable filtering and empty results.
- Click all map markers and confirm descriptions.
- Rate items, reload, and verify ratings persist without adding items.
- Place an order, log in as staff and verify it appears.
- Verify invalid credentials, unauthenticated HTTP 401 and logout.
- Restart backend and check persisted orders.
- Test narrow viewport and 404.

Runtime/browser tests have not yet been performed.
