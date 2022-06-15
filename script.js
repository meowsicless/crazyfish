$(function() {
    var url = 'cometogether.mp3';
    window.AudioContext = window.AudioContext || window.webkitAudioContext;
    var context = new AudioContext();
    var source = context.createBufferSource();
    source.connect(context.destination);
    var request = new XMLHttpRequest();
    request.open('GET', url, true); 
    request.responseType = 'arraybuffer';
    request.onload = function() {
        context.decodeAudioData(request.response, function(response) {
            source.buffer = response;
            source.start(0);
            source.loop = true;
        }, function () { console.error('The request failed.'); } );
    }
    request.send();
});
