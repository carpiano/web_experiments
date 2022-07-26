import Parallax from "parallax-js";

var scene = document.getElementById("scene");

function callback() {
  console.log(parallaxInstance.depthsX);
}
function addValueToPage(text) {
  var data = document.getElementById("data");
  data.innerText = text;
}
var parallaxInstance = new Parallax(scene, { onLoad: callback });
parallaxInstance.friction(0.2, 0.2);

var sense1 = sense.init({
  debug: false,
});

sense1.tilt(function (data) {
  addValueToPage(data.direction.toString() + "-" + data.magnitude.toString());
  console.log(data.toString());
});
