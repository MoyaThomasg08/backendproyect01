const validator = require("validator");
module.exports = validarEmail = (req, res, next) => {
  const email = req.body.email;
  if (!validator.isEmail(email)) {
    return res.status(400).json({ error });
  }
};
