const {usuario} = require("../models/usuario")
module.exports = checkPago = async (req, res, next) =>{
    try {
        const cliente = await usuario.findById(req.params.id);
        if (cliente.pago){
            next();
        } else {
            return res.status (401).json({msg:"El cliente no esta al dia con el pago"})
        }
    } catch (error) {
        res.status(501).json(error);
    }
}