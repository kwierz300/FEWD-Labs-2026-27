# Lab 6 – Communicating with a remote server

Continues Lab 5 using the GCU FEWD Lab 6 handout, with AI assistance. The solutions repository was not consulted.

## Run
Use Node.js 20.19+ or 22.12+. In separate terminals:
```sh
cd backend
npm install
npm start
```
```sh
cd frontend
npm install
npm run dev
```

Open http://localhost:5173. Express runs at http://localhost:3001.

## API
- GET /food returns the 17 menu records.
- GET /images/3.jpg serves an example image.
- POST /addOrder accepts JSON array [name, table, selected item names], validates it and returns HTTP 201 with a confirmation message (400 for invalid orders).
- Unknown routes return 404.

The frontend shows 14 available products. Each selection receives a nanoid once when added, so keys remain stable across renders and duplicates can be removed individually. Successful submission clears the fields and selection and shows a dismissible Bootstrap Toast that automatically hides after 3000 ms. Failed requests preserve the order. No database is used; the server logs and acknowledges the order but does not persist it.

## Manual checks
- Add the same product twice, remove one occurrence.
- Enter a name and table number, submit, verify HTTP 201 and the confirmation.
- Verify form and list reset only after success.
- Verify toast dismisses manually and automatically.
- Stop backend and verify failed submission retains selections.
- Run npm run build in frontend.
