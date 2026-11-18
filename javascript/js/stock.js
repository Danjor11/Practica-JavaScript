var existencias = true;
var enviado = false;

var elStock = document.getElementById('stock');
elStock.className=existencias;

var elEnvio = document.getElementById('envio');
elEnvio.className=enviado;

console.log("Existencias: " + existencias);
console.log("Enviado: " + enviado);