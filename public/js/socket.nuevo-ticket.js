// Establecer la conexion
var socket = io();
var label = $('#lblNuevoTicket')

socket.on('connect', function() {
    console.log('Conectado al servidor');    
});

socket.on('disconnect', function() {
    console.log('Desconectado del servidor');    
});

$('button').on('click', function(ticket) {

    socket.emit('sigTicket', null, function(sigTicket) {
        label.text(sigTicket);
    });

});