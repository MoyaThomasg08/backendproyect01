const mongoose = require("mongoose");
require("dotenv").config();
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_CONNECT);
    console.log("Se conecto con la base de datos");
  } catch (error) {
    console.log("No se conecto con la base de datos");
  }
};
module.exports = { connect };
