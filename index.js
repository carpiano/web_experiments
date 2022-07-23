import Parallax from 'parallax-js'
var scene = document.getElementById('scene');


function callback () { console.log(parallaxInstance.depthsX)};

var parallaxInstance = new Parallax(scene,{ onLoad: callback });
var first = document.getElementById("first");
first.addEventListener('change', function(event) {
    console.log(parallaxInstance.depthX);
  });
parallaxInstance.friction(0.2, 0.2);

