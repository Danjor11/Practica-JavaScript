<!DOCTYPE>
<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<html lang="es">
<head>
    <link rel="stylesheet" href="css/estilo.css">
    <meta charset="UTF-8">
    <title>Venta de Frutas y Verduras</title>
    <link rel="stylesheet" href="css/c01.css"/>
</head>

<body>
    <header>
        <h1>Bienvenidos a SuperFrutas</h1>
    </header>      

    <button id="boton" type="button">Mostrar información del cliente</button>
    
    <div id="saludo-container">
        <script src="js/saludo.js"></script>
    </div>
    <p>
        <em>Productos Disponibles para la Venta</em>
    </p> 
    <div id="productos"></div>
    
    <div id="cost">Costo: </div>
    <img src="images/vegetables.jpg" alt="vegetales" width="125px" height="75px">

    <div class="message">Existencias en bodega
    <span id="stock"></span>
    </div>

    <div class="message">Enviado a domicilio
    <span id="envio"></span>
    </div>

    <script src="js/stock.js"></script>
    <script src="js/factura.js"></script>
    <script src="js/clientes.js"></script>
    <script src="js/productos.js"></script>

</body>
</html>

