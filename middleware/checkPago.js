const { usuario } = require("../models/usuario");
module.exports = checkPago = async (req, res, next) => {
  try {
    const cliente = await usuario.findById(req.params.id);
    if (!cliente.pago) {
      return res
        .status(401)
        .json({ msg: "El cliente no esta al dia con el pago" });
    } else {
      next();
    }
  } catch (error) {
    res.status(500).json({ msg: "Error del servidor" });
  }
};
