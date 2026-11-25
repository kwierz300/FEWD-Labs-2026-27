# Lab 3 – Working with state in React

Continues Lab 2, based on the GCU FEWD 2026/27 Lab 3 handout, with AI assistance. The separate solutions repository was not consulted.

## Run
Use Node.js 20.19+ or 22.12+.
```sh
npm install
npm run dev
npm run build
```

## Features
- Controlled search input with state lifted into FilterableMenuTable.
- Case-insensitive search of names and descriptions.
- Checkbox to include unavailable items, including pasta whose availability is missing.
- Leaflet map with four supplied café locations, custom SVG markers and styled popups.
- Selected café name and description displayed outside the map using React state.
- Responsive layout: introduction above two columns, stacked on small screens.

The handout uses latitude/longitude order in its feature-like location records, which is retained for direct use by Leaflet Marker (standard GeoJSON instead uses longitude/latitude). OpenStreetMap tiles require internet access. The final selected-café display uses name and description instead of coordinates as requested.

## Manual checks
- Empty search: 14 visible items; checking show unavailable: 17.
- Search for CREAM: chocolate cake, apple pie, cheesecake and ice cream.
- Search for carrot: hidden until unavailable items are enabled.
- Search for nonexistent text: no matching items.
- Click each marker and verify the popup and separate description update.
- Resize the viewport to check the responsive layout.
