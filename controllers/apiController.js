const { usuario } = require("../models/usuario");
const { validationResult } = require("express-validator");

const apiController = {
  async users(req, res) {
    const users = await usuario.find();
    res.json({ users });
  },
  async cliente(req, res) {
    const cliente = await usuario.findById(req.params.id);
    res.json({ cliente });
  },
  async create(req, res) {
    try {
      const err = validationResult(req);
      if (err.isEmpty()) {
        const item = new usuario(req.body);
        await item.save();
        res.status(201).json({ item });
      } else {
        res.status(501).json(err);
      }
    } catch (error) {
      res.status(401).json({ error });
    }
  },
  async edit(req, res) {
    try {
      const err = validationResult(req);
      if (err.isEmpty()) {
        await usuario.findByIdAndUpdate(req.params.id, req.body);
        res
          .status(201)
          .json({ msg: `El usuario de id: ${req.params.id} se actualizo ` });
      }
    } catch (error) {
      res.json(error);
    }
  },
  async delete(req, res) {
    await usuario.findByIdAndDelete(req.params.id);
    res.json({ msg: "El usuario fue eliminado sin problemas" });
  },
};

module.exports = apiController;
