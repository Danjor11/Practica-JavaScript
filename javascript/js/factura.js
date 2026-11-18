var precio;
var cantidad;
var total;
var producto;

producto = 'Tomate';
precio = 0.75;
cantidad = 15;

total = precio * cantidad;

console.log("Producto: " + producto + ", Precio: $" + precio + ", Cantidad: " + cantidad + ", Total: $" + total.toFixed(2));

var el = document.getElementById('cost');
el.textContent = producto + ' - Total: $' + total.toFixed(2);
