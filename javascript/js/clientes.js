var persona = {
    nombre: "Ana",
    apellido: "Paz",
    edad: 32,
    cedula: 1714032789,
    direccion: "San Juan",
    correo: "apaz@gmail.com"
};

function saludo(nombre, correo) {
    alert("Hola " + nombre + " de correo: " + correo);
}

var boton = document.getElementById("boton");

if (boton) {
    boton.addEventListener("click", function () {
        saludo(persona.nombre, persona.correo);
    });
} else {
    console.error("No se encontró el botón con id='boton'");
}