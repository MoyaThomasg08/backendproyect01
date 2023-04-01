const { gimnasio } = require("../models/gimnasio");

const checkEdad = async (req, res, next) => {
  try {
    const usuario = await gimnasio.findById(req.params.id);
    console.log(usuario.edad);
    if (isNaN(usuario.edad) || usuario.edad < 18 || usuario.edad > 40) {
      return res.status(401).json({ msg: "El usuario necesita entrenador" });
    }
    next();
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Error interno del servidor" });
  }
};

module.exports = { checkEdad };
