const { gimnasio } = require("../models/usuario");
module.exports = validarID = async (req, res, next) => {
  try {
    const user = await gimnasio.findById(req.params.id);
    if (user !== null) {
      next();
    } else {
      return res.status(501).json({ msg: "el id es invalido" });
    }
  } catch (error) {
    res.status(501).json(error);
  }
};
