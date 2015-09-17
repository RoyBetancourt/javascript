function changeImage() {
  var image = document.getElementById('myImage');
  if (image.src.match("bulon")){
    image.src="image/pic_bulboff.gif"
  } else {
    image.src = "image/pic_bulbon.gof";
  }
}
