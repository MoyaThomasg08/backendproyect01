const { gimnasio } = require("../models/gimnasio");
module.exports = checkEdad = async (req, res, next) => {
  try {
    const user = await gimnasio.find(req.params.edad);
    if (user.params.edad > 18 && user.params.edad < 40) {
      next();
    } else {
      return res.json({
        msg: "El usuario necesita entrenador",
      });
    }
  } catch (error) {
    res.status(501).json(error);
  }
};
