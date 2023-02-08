const dotenv = require("dotenv");
dotenv.config();

const express = require("express");

const hbs = require("express-handlebars");
const dbConnect = require("./mongo");

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

//activacion del servidor
app.listen( port,()=>{ console.log("App funcionando") })
dbConnect();