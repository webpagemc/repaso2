const express = require("express");
const router = express.Router();
const {modeloUsuario} = require("../modelos/usuarios")

router.get("/",async(req,res)=>{

    const datos = await modeloUsuario.find();
    res.send(datos);

})

router.get("/soloBackend",async(req,res)=>{

    const datos = await modeloUsuario.find({curso:"Backend"});
    res.send(datos);

})

router.get("/:id",async(req,res)=>{

    const id = req.params.id;
    const dato = await modeloUsuario.findOne( {_id:id} )
    res.send(dato)

})

router.post("/",async(req,res)=>{

    const body = await req.body
    await modeloUsuario.create(body)
    res.send("registro creado exitosamente")

})

router.put("/:id",async(req,res)=>{

    const id = req.params.id;
    const nuevosDatos = await req.body;
    await modeloUsuario.findOneAndUpdate( {_id:id},nuevosDatos );
    res.send(`Elemento ${id} actualizado`);

})

router.delete("/:id",async(req,res)=>{

    const id = req.params.id;
    await modeloUsuario.deleteOne( {_id:id} );
    res.send(`Elemento ${id} eliminado`);

})

module.exports = router