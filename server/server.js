const express = require('express');
const socketIO = require('socket.io'); // para trabajar con sockets
const http = require('http'); // ya viene con nodejs no se instala

const path = require('path');

const app = express();
let server = http.createServer(app); // Monta la configuracion de los sockets en el express

const publicPath = path.resolve(__dirname, '../public');
const port = process.env.PORT || 3000;

// uso de middleware para habilitar la carpeta publica
app.use(express.static(publicPath));

// en vez de crear con "let io = " se lo exporta para que en socket.js se lo use
// IO = Esta es la comunicacion [del socket con] del backend
module.exports.io = socketIO(server); // inicializar el socketIO

// importacion de la configuracion de los sockets
require('./sockets/socket');

// se llama al server no al app
server.listen(port, (err) => {

    if (err) throw new Error(err);

    console.log(`Servidor corriendo en puerto ${ port }`);

});