// para hacer la importacion de la configuracion de los sockets
const {io} = require('../server');

// para saber cuando el cliente se conecta
io.on('connection', (client)=> {
    // cliente contiene toda informacion sobre el cliente o computadora
    console.log('usuario conectado');
    
    // mandar un mensaje a cliente
    client.emit('enviarMensaje', {
        usuario: 'Administrador',
        mensaje: 'Bienvenido a esta aplicacion'
    });

    // cuando el usuario se desconecta
    client.on('disconnect', ()=> {
        console.log('usuario desconectado');
    })

    // Escuchar cliente
    client.on('enviarMensaje', (data, callback)=>{
        console.log(data);

        // callback es la funcion que se manda como tercer parametro del emitir en el cliente
        // es la respuesta del servidor al cliente
        /* if(data.usuario){
            callback({
                resp: 'TODO SALIO BIEN!'
            });
        } else {
            callback({
                resp: 'TODO SALIO MAL!'
            });
        } */

        // Para emitir A TODOS el mensaje recibido al servidor
        client.broadcast.emit('enviarMensaje', data);
    });
    
});
