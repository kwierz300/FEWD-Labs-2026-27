# Lab 2 – Building interactive interfaces using React

Based on the GCU FEWD 2026/27 Lab 2 instructions, implemented with AI assistance without consulting the separate solutions repository.

## Run
Use Node.js 20.19+ or 22.12+.

```sh
npm install
npm run dev
npm run build
```

The final interface uses React props, local menu data, reusable components, filtering, category sorting, React Bootstrap Accordion and a responsive three-column layout. The map is a placeholder, as required by the brief.

The data retains all 17 records in the handout. Pasta has no available property, so the strict available === "yes" filter excludes it along with carrot cake and sandwiches. There are 14 visible food items in six categories. Café introduction text is illustrative.

## Manual checks
- Verify all 14 available items appear under alphabetical category headings.
- Expand and collapse menu items to see descriptions and prices.
- Confirm the three columns stack on a narrow viewport.
- Confirm the map remains a placeholder.

Intermediate hello-world and table stages are superseded by the final accordion layout.
