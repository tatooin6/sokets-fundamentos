// no todos los navegadores tienen el let
var socket = io();

// Los .on son para escuchar sucesos
// mensaje de comunicacion entre el servidor y el cliente, para saber cuando uno se conecta al servidor
socket.on('connect', function(){
    // cuando se conecte se manda el mensaje y va a estar pendiente de la conexión con el servidor
    console.log('conectado al servidor');
});

socket.on('disconnect', function(){
    console.log('Perdimos la conexión con el servidor');
})

// los emit son para Enviar Información
socket.emit('enviarMensaje', {
    usuario: "tato",
    mensaje: "Hola Mundo"
}, function(resp) {
    // respuesta del servidor
    console.log('Respuesta Server: ', resp);
});

// Escuchar mensaje que se envia del servidor (poner mismo nombre de como se lo emite)
socket.on('enviarMensaje', function(mensaje){
    console.log('Servidor: ', mensaje);
});