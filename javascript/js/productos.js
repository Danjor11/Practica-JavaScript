var productos = ['Tomate', 'Lechuga', 'Zanahoria', 'Cebolla', 'Pimiento'];

console.log("=== Lista de productos (consola) ===");
for (let i = 0; i < productos.length; i++) {
    console.log(productos[i]);
}

var contenedorProductos = document.getElementById('productos');
if (contenedorProductos) {
    var listaHTML = '<ul>';
    for (let i = 0; i < productos.length; i++) {
        listaHTML += '<li>' + productos[i] + '</li>';
    }
    listaHTML += '</ul>';
    contenedorProductos.innerHTML = listaHTML;
}