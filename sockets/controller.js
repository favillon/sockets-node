const socketController = (socket) => {
    console.log('Cliente conectado', socket.id);

    socket.on('disconnect',() =>{
        console.log('cliente desconectado', socket.id);
    })
    
    socket.on('send-message', (payload, callback) => {
        console.log('Message Cliente : ' );
        console.table(payload);
        const id = 9999
        callback(id)
        socket.broadcast.emit('send-message-cliente', payload)
    })
}

module.exports = {
    socketController
}