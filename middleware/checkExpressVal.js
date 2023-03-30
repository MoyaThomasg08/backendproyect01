const { check } = require("express-validator");

const checkExpressVal = [
  check("nombre")
    .not()
    .isEmpty()
    .withMessage("el campo nombre es requerido")
    .isLength({ min: 1, max: 30 }),
  check("edad")
    .not()
    .isEmpty()
    .withMessage("el campo edad es requerido")
    .isLength({ min: 1, max: 3 }),
  check("pago").not().isEmpty().withMessage("el campo pago es requerido"),
  check("telefono")
    .not()
    .isEmpty()
    .withMessage("el campo telefono es requerido")
    .isLength({ min: 9, max: 20 }),
  check("entrenamiento")
    .not()
    .isEmpty()
    .withMessage("el campo entrenamiento es requerido")
    .isLength({ min: 1, max: 30 }),
  check("entrenador")
    .not()
    .isEmpty()
    .withMessage("el campo entrenador es requerido"),
  check("plan")
    .not()
    .isEmpty()
    .withMessage("el campo plan es requerido")
    .isLength({ min: 1, max: 30 }),
];
module.exports = checkExpressVal;
