//snapshot.js: the functionality behind the record button//

var snapShot = function(){
  //if video has a src
  if($('video').attr('src')){
    //x is the context that specifies the main canvas element (set in main.js)
    x.drawImage(v, 0, 0, mainVideoWidth, mainVideoHeight);
    //c is the canvas (set in main.js)
    c.src = canvas.toDataUrl('image/webp');
  } else {
    alert('please start the video first!');
  }
}