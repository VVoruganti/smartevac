/*The purpose of this javascript file is to create an environment that administrators can use to generate a map for their specific building */
let mousePos;
let two;
let styles;
let counter = 0;
let mapArray = [] 
let JSONObject = [];

function updateJSON(...args) {
    if(args[0] == true) {
        let node = args[1];
        let xval = args[2];
        let yval = args[3];
        JSONObject[node] = {
            x:xval,
            y:yval,
            connections:[]
        }
    }
    else if(args[0] == false) {
        JSONObject[args[1][0]]["connections"].push(args[1][1]);
        JSONObject[args[1][1]]["connections"].push(args[1][0]);
    }
}

function addNode(mouse) {
    mapArray.push(two.makeCircle(mouse.x,mouse.y,10));
    two.makeText(String(counter),mouse.x,mouse.y,styles);
    two.update();
    updateJSON(true,counter,mouse.x,mouse.y);
    counter++;
}

function addLine(str) {
    var lineArray = [];
    try {
        lineArray = str.split(",");
        two.makeLine(mapArray[lineArray[0]]._translation._x,mapArray[lineArray[0]]._translation._y,mapArray[lineArray[1]]._translation._x,mapArray[lineArray[1]]._translation._y);
        two.update();
        updateJSON(false,lineArray);
    }
    catch(err) {
        console.log(err);
        console.log("Incorrect Format");
        console.log(str.split(","));

    }
}

function getMousePos(canvas,evt) {
    let rect = canvas.getBoundingClientRect();
    return {
        x: evt.clientX - rect.left,
        y: evt.clientY - rect.top
    };
}


document.addEventListener("DOMContentLoaded", () => {
    
    let elem = document.getElementById('drawing-tool');
    two = new Two({ 
        type:Two.Types.canvas,
        width: 500,
        height: 480
        
    
    }).appendTo(elem)
    
    let myCanvas = document.getElementsByTagName("canvas")[0]
    let context = myCanvas.getContext('2d');

    myCanvas.addEventListener('mousemove', (evt) => {
        mousePos = getMousePos(myCanvas, evt);
    }, false);

    styles = {
        size: 9,
        family: 'Lato'
    } 

    myCanvas.addEventListener('click', (evt) => {
        mousePos = getMousePos(myCanvas,evt);
        addNode(mousePos)
    },false);
});



