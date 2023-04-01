const { gimnasio } = require("../models/usuario");

module.exports = checkEdad = async (req, res, next) => {
  try {
    const usuario = await gimnasio.findById(req.params.id);
    if (!usuario) {
      return res.status(404).json({ msg: "Usuario no encontrado" });
    }
    if (isNaN(usuario.edad) || usuario.edad >= 18 || usuario.edad <= 40) {
      next();
    } else {
      return res.status(401).json({ msg: "El usuario necesita entrenador" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Error del servidor" });
  }
};
