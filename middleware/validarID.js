const { usuario } = require("../models/usuario");

module.exports = validarID = async (req, res, next) => {
  try {
    const cliente = await usuario.findById(req.params.id);
    if (!cliente) {
      return res.status(404).json({ msg: "Usuario no encontrado" });
    }
    next();
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Error del servidor" });
  }
};
