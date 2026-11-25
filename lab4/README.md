# Lab 4 – Navigation in SPA

Continues Lab 3 and follows the GCU FEWD Lab 4 handout, with AI assistance. Implementation is based on the handout, not the solutions source code.

Run with Node.js 20.19+ or 22.12+:
```sh
npm install
npm run dev
npm run build
```

Home retains the searchable menu and map. React Router provides /, /orders and a fallback 404 view. Available food cards add names to selectedItems; OrderSummary reads and updates that state through OrderContext. Clicking a selected item removes one occurrence rather than every duplicate. The click alert is retained for the lab exercise. State is local to the order page and resets when leaving it. No database submission or customer details form is implemented at this stage because the final tasks on pages 17–18 stop at adding and removing items.

Image URLs point to the local Vite public directory instead of a hard-coded port. The supplied JPGs are transferred separately.
