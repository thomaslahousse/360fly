
var images = new Array();
images.push("js/camera-360-fly_3.png");
images.push("js/camera-360-fly_2.jpg");

var pointeur = 0;

function ChangerImage(){
  document.getElementById("image_script").src = images[pointeur];

  if(pointeur < images.length - 1){
    pointeur++;
  }
  else{
    pointeur = 0;
  }
}

window.onload = function(){
  setInterval(ChangerImage, 1500);
}
console.warn();
