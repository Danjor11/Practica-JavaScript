var today = new Date();
var hourNow = today.getHours();
var saludo;

console.log("Fecha y hora actual: " + today);

if(hourNow >= 18)
{
    saludo = "Buenas noches";
}
else if (hourNow >= 12)
{
    saludo = "Buenas Tardes";
}
else if (hourNow >= 0 )
{
    saludo = "Buenos días";
}
else 
{
    saludo = "Bienvenido!!!"
}

let colores = ['rojo', 'azul', 'verde'];
for (let color of colores)
{
    console.log(color);
}

let usuario = {nombre:"Juan", edad:28};
for (let clave in usuario)
{
    console.log(clave+":"+usuario[clave]);
}


document.write('<h3>' + saludo + '</h3>');
