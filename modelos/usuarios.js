const mongoose = require("mongoose");

const usuariosSchema = new mongoose.Schema(

    {
        nombre:{type:String},
        apellido:{type:String},
        edad:{type:String},
        curso:{type:String, index:true }
    },
    {
        versionKey:false
    }

)

const modeloUsuario = mongoose.model("usuarios",usuariosSchema)

module.exports = {modeloUsuario}

