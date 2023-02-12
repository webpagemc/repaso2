require("dotenv").config();
const express = require("express");
const hbs = require("express-handlebars");
const dbConnect = require("./mongo");
const {Server} = require("socket.io");

//servidor express
const app = express();
const port = 8080;

//middlewares
app.use(express.json());
app.use(express.urlencoded());

//vistas
app.use(express.static("./public"))

app.engine("hbs",hbs.engine())
app.set("view engine","hbs")
app.set("views","./public/views")

//rutas
app.use("/usuarios",require("./rutas/usuarios"));
app.use("/example",require("./rutas/example"));

//activacion del servidor
const servidorHTTP = app.listen( port,()=>{ console.log("App funcionando") })

//websockets
const io = new Server(servidorHTTP);

io.on("connection", (socket)=>{ 

    console.log("Se hizo la conexion")

    const {modeloUsuario} = require("./modelos/usuarios")

    socket.on("click",async()=>{

        const datos = await modeloUsuario.find()
        socket.emit("sendData",datos)

    })
})

dbConnect();

