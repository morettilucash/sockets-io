        // var, por las versiones de los navegadores
        var socket = io();

        // ON = escuchan
        socket.on('connect', function () {
            console.log('Conectado al servidor');
        });

        socket.on('disconnect', function () {
            console.log('Desconectado del servidor');
        });

        // Emit = envia informacion
        socket.emit('enviarMensaje', {
            usuario: 'Lucas',
            mensaje: 'Hola Sockets'
        }, function (resp) {
            console.log('Respuesta del servidor: ', resp);
        });

        socket.on('enviarMensaje', function (mensaje) {
            console.log('Servidor: ', mensaje);
        });