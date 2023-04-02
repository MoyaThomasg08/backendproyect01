const { usuario } = require("../models/usuario");

module.exports = checkEdad = async (req, res, next) => {
  try {
    const cliente = await usuario.findById(req.params.id);
    if (isNaN(cliente.edad) || cliente.edad >= 18 || cliente.edad <= 40) {
      next();
    } else {
      return res.status(401).json({ msg: "El usuario necesita entrenador" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Error del servidor" });
  }
};
