var precio;
var cantidad;
var total;
var producto;

producto = 'tomate';
precio = 0.75;
cantidad = 15;

total = precio * cantidad;

var el = document.getElementById('cost');
el.textContent = producto + ' $' + total;
