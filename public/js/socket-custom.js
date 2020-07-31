    var socket = io();
    //Los on son para escuchar

    socket.on('connect', function(){
        console.log('Conectado con el servidor');
    });


    socket.on('disconnect', function(){
        console.log('Perdimos conexion con el servidor');
    });


    //Los emit son para enviar informacion
    //enviar informacion 
    socket.emit('enviarMensaje', {
        usuario: 'Cristian',
        mensaje: 'Hola Mundo' 
    }, function( resp ){
        console.log( 'Respuesta Servidor' , resp);
    });

    //escuchar informacion 
    socket.on('enviarMensaje', function( mensaje ){
        console.log('informacion desde el servidor', mensaje)
    });

