const socket = io.connect("/");

const div = document.getElementById("contenedor");
const boton = document.getElementById("boton")

boton.addEventListener("click",() => { socket.emit("click") })

socket.on("sendData",(data)=>{

    data.map(

        (element)=>{

            if(element.apellido === "Messi")
            { div.innerHTML = element.apellido }

        }
    )

})