import Parallax from 'node_modules/parallax-js';
var scene = document.getElementById('scene');
function callback () { console.log(parallaxInstance.depthsX)};

function addValueToPage(text) {
    var data = document.getElementById("data");
    var t = document.createTextNode(text);
    data.appendChild(t);
    data.innerText = text;
}
var parallaxInstance = new Parallax(scene,{ onLoad: callback });
parallaxInstance.friction(0.5, 0.5);
var sense1 = sense.init({
    debug: true,
});
console.log(sense1);
sense1.tilt(function(data){
    addValueToPage(data.direction.toString() + "-" + data.magnitude.toString());
    console.log(data.toString());
})
//var sense = new Sense();
//console.log(sense);
    //sense.tiltScroll(function(data){
    //    console.log(data)
    //    addValueToPage(data)
    //})
