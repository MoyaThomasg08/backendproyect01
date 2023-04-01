const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const usuarioSchema = new Schema({
  nombre: {
    type: String,
    required: true,
  },
  edad: {
    type: Number,
    required: true,
  },
  pago: {
    type: Boolean,
    required: true,
  },
  email: {
    type: String,
  },
  telefono: {
    type: Number,
    required: true,
  },
  entrenamiento: {
    type: String,
    required: true,
  },
  entrenador: {
    type: Boolean,
    required: true,
  },
  plan: {
    type: String,
    required: true,
  },
});
const usuario = mongoose.model("usuario", usuarioSchema);
module.exports = { usuario };
