# Lab 5 – Creating an API endpoint

Based on the GCU FEWD Lab 5 handout, with AI assistance. The separate solutions repository was not consulted. This is a separate backend/frontend exercise as specified in the handout; Lab 4 remains intact.

## Start the backend
```sh
cd backend
npm install
npm start
```

## Start the frontend in another terminal
```sh
cd frontend
npm install
npm run dev
```

Use Node.js 20.19+ or 22.12+. Open http://localhost:5173. Backend runs on port 3001 and CORS allows the Vite development origin.

## Endpoints
- GET / – welcome message
- GET /food – JSON array of all 17 menu items
- GET /images/3.jpg – example image served by Express static middleware
- Unknown path – HTTP 404

The frontend uses fetch, useState, useCallback and useEffect in useFetchData.js, then displays the 14 available products with images and prices using React Bootstrap. Clicking Select displays the selected name. Pasta is explicitly unavailable in Lab 5, as in the handout. The images are reused from Lab 4.

## Checks to run
- Open /food and confirm 17 records and image URLs.
- Open an image URL directly.
- Visit an unknown endpoint and verify 404.
- Open the frontend and confirm 14 cards; click Select.
- Stop the backend and reload to verify the error message.
- Run npm run build in frontend.

This lab uses an in-memory array, not a database. There is no POST endpoint or order persistence in the brief.
