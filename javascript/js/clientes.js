var persona={
nombre:"Ana",
apellido:"Paz",
edad:32,
cedula:1714032789,
direccion:"San Juan",
correo:"apaz@gmail.com"
};

function saludo (nombre,correo) {
    alert("Hola "+persona.nombre+ " de correo: "+persona.correo);
}

var buttom = document.getElementById("boton");

buttom.addEventListener("click", function (){
    saludo(persona.nombre, persona.correo);
});