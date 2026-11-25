# Lab 7 – Authentication in React

Continues Lab 6 with the backend supplied by Fiona MacRae Fairlie (https://github.com/FionaMacRaeFairlie/FEWD2627-backend), adapted for the lab. Frontend developed from the handout with AI assistance.

## Run
In lab7/backend: npm install then npm start.
In lab7/frontend: npm install then npm run dev.
Open http://localhost:5173/staff. Local demo login: test / test (or set LAB_STAFF_PASSWORD before the first backend start). Never deploy the demo account.

The supplied backend currently uses ES modules, so package.json retains type: module rather than the CommonJS workaround in the handout. No old lockfile is copied. Setup generates fresh RSA keys and a local demo account; private keys and runtime order/user databases are ignored by Git. Menu data is supplied by the lecturer. Demo orders are seeded locally when the database is empty.

The backend returns a Bearer-prefixed RS256 JWT, used unchanged in Authorization. GET /viewOrders is protected by Passport. The custom useToken hook uses localStorage as the final handout stage; to try sessionStorage, replace localStorage references in that file and log in again. Logout clears the token. Browser storage is vulnerable to XSS; this is a local teaching exercise, not production authentication. Registration and menu-reset routes are disabled, and deletion requires authentication. No real-time updates are implemented.

## Manual verification
- GET /viewOrders without token returns 401.
- Login with incorrect password fails; correct demo credentials reveal orders.
- Refresh or open a new tab: localStorage retains login.
- Submit a customer order from the public page, navigate to Staff and confirm it appears.
- Restart backend and confirm orders persist.
- Log out and verify access requires login.
- Run npm run build in frontend.

Runtime checks have not yet been performed.
