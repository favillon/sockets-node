const lblOnline  = document.querySelector("#labelOnline")
const lblOffline = document.querySelector("#labelOffline")
const txtMessage = document.querySelector("#txtMessage")
const btnSend    = document.querySelector("#btnSend")

console.log("Hola Mundo");

const socketClient = io();

socketClient.on('connect', ()=> {
    console.log("conectado");
    lblOnline.style.display  = 'block';
    lblOffline.style.display = 'none';
})

socketClient.on('disconnect', ()=> {
    console.log("desconectado");
    lblOffline.style.display = 'block';
    lblOnline.style.display  = 'none';
})

socketClient.on('send-message-cliente', (payload) => {
    console.log(payload);
})

btnSend.addEventListener('click', () =>{
    const msg = txtMessage.value
    const payload = {
        msg,
        id : '123456ABCD',
        date : new Date().getTime()
    }
    socketClient.emit('send-message', payload, (id) => {
        console.log('Desde el server' , id );
    })
})