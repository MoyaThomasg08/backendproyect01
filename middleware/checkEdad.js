const { gimnasio } = require("../models/gimnasio");
module.exports = checkEdad = async (req, res, next) => {
  const user = await gimnasio.find(req.params.edad);
  if (parseInt(user.edad) < 18 && parseInt(user.edad) > 40) {
    return res.status(401).json({ msg: "El usuario necesita entrenador" });
  }
  next();
};
