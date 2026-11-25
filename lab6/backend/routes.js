import express from "express";
import { items } from "./data.js";

const router = express.Router();

router.get("/", (req, res) => {
    res.send("Hello! Welcome to my application.");
});

router.get("/food", (req, res) => {
    res.json(items);
});

router.post("/addOrder", express.json(), (req, res) => {
    if (!Array.isArray(req.body)) {
        return res.status(400).json({ message: "Invalid order." });
    }

    const [name, table, selectedItems] = req.body;
    const availableNames = items.filter(item => item.available === "yes").map(item => item.name);

    if (typeof name !== "string" || !name.trim() ||
        typeof table !== "string" || !table.trim() ||
        !Array.isArray(selectedItems) || selectedItems.length === 0 ||
        !selectedItems.every(item => availableNames.includes(item))) {
        return res.status(400).json({ message: "Please enter your name, table number and valid menu items." });
    }

    console.log(req.body);
    res.status(201).json({
        message: "Order received for " + name.trim() + ", table " + table.trim() + ": " + selectedItems.join(", ")
    });
});

export default router;
