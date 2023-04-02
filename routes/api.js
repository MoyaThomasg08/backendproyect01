const express = require("express");
const router = express.Router();
const apiController = require("../controllers/apiController");
const validarID = require("../middleware/validarID");
const checkExpressVal = require("../middleware/checkExpressVal");
const checkEdad = require("../middleware/checkEdad");
const checkPago = require ("../middleware/checkPago");

router.get("/users", apiController.users);
router.get("/user/:id", validarID, checkEdad, checkPago, apiController.user);
router.post("/create", checkExpressVal, apiController.create);
router.put("/edit/:id", validarID, checkExpressVal, apiController.edit);
router.delete("/delete/:id", validarID, apiController.delete);

module.exports = router;
