//record.js: the functionality behind the record button
var recordVideo = function(){
  navigator.getUserMedia({video: true, audio: true},  function(stream){
      localStream = stream;
      //v is the video element set in main.js
      v.src = window.URL.createObjectURL(localStream);
  });
}