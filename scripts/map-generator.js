/*The purpose of this javascript file is to create an environment that administrators can use to generate a map for their specific building */
var mousePos;
var two;
var styles;
var counter = 0;
var mapArray = [] 


function updateJSON() {

}

function addNode(mouse) {
    mapArray.push(two.makeCircle(mouse.x,mouse.y,10));
    two.makeText(String(counter),mouse.x,mouse.y,styles);
    two.update();
    counter++;
}

function addLine() {

}

function getMousePos(canvas,evt) {
    var rect = canvas.getBoundingClientRect();
    return {
        x: evt.clientX - rect.left,
        y: evt.clientY - rect.top
    };
}


document.addEventListener("DOMContentLoaded", function() {
    
    var elem = document.getElementById('drawing-tool');
    two = new Two({ 
        type:Two.Types.canvas,
        width: 500,
        height: 480
        
    
    }).appendTo(elem)
    
    var myCanvas = document.getElementsByTagName("canvas")[0]
    var context = myCanvas.getContext('2d');

    myCanvas.addEventListener('mousemove', function(evt) {
        mousePos = getMousePos(myCanvas, evt);
    }, false);

    styles = {
        size: 9,
        family: 'Lato'
    } 

    myCanvas.addEventListener('click', function(evt) {
        mousePos = getMousePos(myCanvas,evt);
        addNode(mousePos)
    },false);

        /*  var rectA = two.makeRectangle(150, 100, 200, 100);
    rectA.stroke = 'orange';
    two.makeText('Rectangle', 150, 100, styles);

    var rectB = two.makeRoundedRectangle(400, 100, 200, 100, 10);
    rectB.stroke = 'blue';
    rectB.linewidth = 5;
    two.makeText('Rounded Rectangle', 400, 100, styles);

    var rectC = two.makeRoundedRectangle(650, 100, 200, 100, 50);
    rectC.stroke = 'green';
    rectC.linewidth = 2;
    two.makeText('Rounded Rectangle (II)', 650, 100, styles);

    // var circA = two.makeCircle(150, 250, 75);
    //circA.fill = 'yellow';
    //circA.noStroke();
    //two.makeText('Circle', 150, 250, styles);

    var ellipseA = two.makeEllipse(400, 250, 100, 75);
    ellipseA.fill = 'pink';
    ellipseA.stroke = 'red';
    ellipseA.linewidth = 4;
    two.makeText('Ellipse', 400, 250, styles);

    var ellipseB = two.makeEllipse(650, 300, 75, 100);
    ellipseB.fill = 'white';
    ellipseB.stroke = 'black';
    ellipseB.linewidth = 20;
    two.makeText('Ellipse (II)', 650, 300, styles);
    two.update(); */
});



