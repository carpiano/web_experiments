// import Parallax from 'node_modules/parallax-js';
// var scene = document.getElementById('scene');
// function callback () { console.log(parallaxinstance.depthsx)};

// function addvaluetopage(text) {
//     var data = document.getelementbyid("log");
//     var t = document.createelement("div");
//     data.appendchild(t);
//     t.innertext = text;
// }

// var parallaxInstance = new Parallax(scene,{ onLoad: callback });
// parallaxInstance.friction(0.5, 0.5);
// var sense1 = sense.init({
//     debug: false,
// });

// sense1.tilt(function(data){
//     addValueToPage("tilt: " + data.direction.toString() + "-" + data.magnitude.toString());
// })
// sense1.orientation(function(data){
//     addValueToPage("orientation: " + data.direction.toString() + "-" + data.magnitude.toString());
// })

//var sense = new Sense();
//console.log(sense);
    //sense.tiltScroll(function(data){
    //    console.log(data)
    //    addValueToPage(data)
    //})

let gyroscope = new Gyroscope({frequency: 1});

function log_axis(eje,valor) {
    var data = document.getElementById("axis-"+eje);
    data.innerText = valor;
}

gyroscope.addEventListener('reading', (e) => {
    log_axis("x", gyroscope.x);
    log_axis("y", gyroscope.y);
    log_axis("z", gyroscope.z);
});
gyroscope.start();
