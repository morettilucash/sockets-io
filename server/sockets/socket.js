const { io } = require('../server');
const { TicketControl } = require('../classes/ticket-control');

const ticketControl = new TicketControl();


io.on('connection', (client) => {

    client.on('sigTicket', (data, callback) => {
        let sig = ticketControl.siguiente();
        console.log('Siguiente: ', sig);
        callback(sig);        
    });







    // client.emit('enviarMensaje', {
    //     usuario: 'Administrador',
    //     mensaje: 'Bienvenido'
    // });

    // client.on('disconnect', () => {
    //     console.log('Usuario desconectado');
    // });

    // client.on('enviarMensaje', (data, callback) => {
    //     console.log(data);
    // client.broadcast.emit('enviarMensaje', data);
    // if (mensaje.usuario) {
    //     callback({
    //         resp: 'Hay usuario!'
    //     });
    // } else {
    //     callback({
    //         resp: 'No hay usuario!'
    //     });
    // }
    // });

})