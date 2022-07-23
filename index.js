import Parallax from 'parallax-js'
console.log(sense)
var scene = document.getElementById('scene');


function callback () { console.log(parallaxInstance.depthsX)};
function addValueToPage(text) {
    var data = document.getElementById("data");
    data.innerText = text;
}
var parallaxInstance = new Parallax(scene,{ onLoad: callback });
parallaxInstance.friction(0.2, 0.2);




 var sense1 = sense.init({
      debug: false
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
