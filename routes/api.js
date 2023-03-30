const express = require("express");
const router = express.Router();
const apiController = require("../controllers/apiController");
const validarID = require("../middleware/validarID");
const checkExpressVal = require("../middleware/checkExpressVal");
const validarEmail = require("../middleware/validarEmail");
const checkEdad = require("../middleware/checkEdad");

router.get("/users", validarEmail, apiController.users);
router.get("/user/:id", validarID, checkEdad, apiController.user);
router.post("/create", checkExpressVal, validarEmail, apiController.create);
router.put("/edit/:id", validarID, checkExpressVal, apiController.edit);
router.delete("/delete/:id", validarID, apiController.delete);

module.exports = router;
