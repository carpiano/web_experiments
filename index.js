import Parallax from 'parallax-js'
console.log(sense)
var scene = document.getElementById('scene');


function callback () { console.log(parallaxInstance.depthsX)};
function addValueToPage(text) {
    var h = document.createElement("H1");
    var t = document.createTextNode(text);
    h.appendChild(t);
    document.body.appendChild(h);
}
var parallaxInstance = new Parallax(scene,{ onLoad: callback });
var first = document.getElementById("first");
parallaxInstance.friction(0.2, 0.2);




 var sense1 = sense.init({
      debug: true
    });
console.log(sense1);
    sense1.tilt(function(data){

        addValueToPage(data.direction.toString() + "-" + data.magnitude.toString())
        console.log(data.toString())
    })
//var sense = new Sense();
//console.log(sense);
    //sense.tiltScroll(function(data){
    //    console.log(data)
    //    addValueToPage(data)
    //})
