import express from "express";
import cors from "cors";
import { fileURLToPath } from "node:url";
import router from "./routes.js";

const app = express();
const imagesPath = fileURLToPath(new URL("./public/images/", import.meta.url));

app.use(cors({ origin: "http://localhost:5173" }));
app.use("/images", express.static(imagesPath));
app.use(router);

app.use((req, res) => {
    res.status(404).send("Oops! We didn't find what you are looking for.");
});

app.listen(3001, () => {
    console.log("Server started on port 3001. Ctrl^c to quit.");
});
