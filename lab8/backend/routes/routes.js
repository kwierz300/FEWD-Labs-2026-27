import express from "express";
import passport from "passport";
import controller from "../controllers/controllers.js";

const router = express.Router();

router.get("/", controller.listMenu);
router.get("/food", controller.listMenu);
router.post("/addOrder", controller.addOrder);
router.post("/deleteOrder", passport.authenticate("jwt", { session: false }), controller.deleteOrder);

router.get(
  "/viewOrders",
  passport.authenticate("jwt", { session: false }),
  controller.listOrders
);
router.get(
  "/appData",
  passport.authenticate("jwt", { session: false }),
  controller.displayAppData
);
router.post("/login", controller.processLogin);


router.use((req, res) => {
  res.status(404);
  res.type("text/plain");
  res.send("404 Not found.");
});

router.use((err, req, res, next) => {
  res.status(500);
  res.type("text/plain");
  res.send("Internal Server Error.");
});

export default router;
