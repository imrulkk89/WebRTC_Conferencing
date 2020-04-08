/* navigator.getUserMedia = (
    navigator.getUserMedia ||
    navigator.webkitGetUserMedia ||
    navigator.mozGetUserMedia ||
    navigator.msGetUserMedia
)

if(typeof navigator.mediaDevices.getUserMedia === 'undefined'){
    navigator.getUserMedia({
        video: true, 
        audio: false
    }, streamHandler, errorHandler)
}else{
    navigator.mediaDevices.getUserMedia({
        video: true,
        audio: false
    }).then(streamHandler).catch(errorHandler)
}

function streamHandler(stream){

 
}

function errorHandler(err){
    console.error(err)
} */


const Peer = require('simple-peer')
const peer = new Peer({
    initiator: location.hash === '#init', 
    trickle: false
})

peer.on('signal', function(data) {
    document.getElementById('yourId').value = JSON.stringify(data)
})

document.getElementById('connect').addEventListener('click', function(){
const otherId = JSON.parse(document.getElementById('otherId').value)
peer.signal(otherId)  
})

document.getElementById('send').addEventListener('click', function(){
    const yourMessage = document.getElementById('yourMessage').value
    peer.send(yourMessage)
})

peer.on('data', function(data){
    document.getElementById('messages').textContent += data + '\n'
})

