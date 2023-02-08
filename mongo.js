const mongoose = require("mongoose")

const dbConnect = ()=>{

    const URI = process.env.URI;
    mongoose.set("strictQuery",true)

    mongoose.connect(
        URI,
        (err)=>{
            if (!err){
                console.log("CONEXION EXITOSA")
            }else{
                console.log("ERROR DE CONEXION")
            }
        }
    )
}

module.exports = dbConnect;