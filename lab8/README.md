# Lab 8 – Using localStorage with React

Final lab, continuing Lab 7. Based on the GCU FEWD Lab 8 handout, with AI assistance. The backend is the adapted lecturer-supplied backend from Lab 7.

## Run
In separate terminals from the lab8 folder:
- cd backend; npm install; npm start
- cd frontend; npm install; npm run dev

Open http://localhost:5173 for ordering or /staff for the staff dashboard.
Local demo login: test / test. Do not deploy the demo account.

## Personal ratings
Each available food item has five clickable coffee icons (LuCoffee from react-icons), with purple selected icons and grey unselected icons, matching the final example on page 9. The initial rating is 3. The custom useLocalStorage hook reads the saved JSON value during state initialization and writes it using useEffect whenever the value changes.

Storage keys use the stable food ID rather than the menu array index, so sorting or changing availability does not assign a rating to a different product. Keys are prefixed with cafe-rating: to avoid collisions with authentication storage. Rating buttons and order-selection buttons are siblings, so clicking a rating does not add an order item. Ratings belong to the current browser origin, not an authenticated individual account; they are not shared with the backend or averaged across customers.

## Manual checks
- First visit: each available product shows 3/5.
- Change two different product ratings and reload; verify both persist independently.
- Close and reopen browser; verify ratings persist.
- Change a rating; verify the order list is unchanged.
- Click a product image/name; verify the order list changes but rating does not.
- Submit an order and verify it appears in the protected staff dashboard.
- Verify login/logout and 401 without token.
- Run npm run build in frontend.

Backend keys and user/order database files are generated locally as in Lab 7. No real-time updates or shared rating API are added. Runtime/browser checks have not yet been performed.
