const { gimnasio } = require("../models/gimnasio");
module.exports = checkEdad = async (req, res, next) => {
  try {
    const user = await gimnasio.find(req.params.edad);
    if (user.edad < 18 && user.edad > 40) {
      return res.status(401).json({ msg: "El usuario necesita entrenador" });
    }
    next();
  } catch (error) {
    res.status(501).json(error);
  }
};
