const { gimnasio } = require("../models/gimnasio");
const { validationResult } = require("express-validator");

const apiController = {
  async users(req, res) {
    const users = await gimnasio.find();
    res.json({ users });
  },
  async user(req, res) {
    const user = await gimnasio.findById();
    res.json({ user });
  },
  async create(req, res) {
    try {
      const err = validationResult(req);
      if (err.isEmpty()) {
        const item = new gimnasio(req.body);
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
        await gimnasio.findByIdAndUpdate(req.params.id, req.body);
        res
          .status(201)
          .json({ msg: `El usuario de id: ${req.params.id} se actualizo ` });
      }
    } catch (error) {
      res.json(error);
    }
  },
  async delete(req, res) {
    await gimnasio.findByIdAndDelete(req.params.id);
    res.json({ msg: "El usuario fue eliminado sin problemas" });
  },
};

module.exports = apiController;
