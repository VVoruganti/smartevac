const fs = require('fs');


const testMap = {
    '1' : { 'x':1,
            'y':1,
            exit:false,
            connections:['2', '3'] },
    '2' : { 'x':3,
            'y':2,
            exit:false,
            connections:['1'] },
    '3' : { 'x':4,
            'y':7,
            exit:false,
            connections:['1', '4'] },
    '4' : { 'x':5,
            'y':1,
            exit:true,
            connections:['3'] }
}

function distance(x1, x2, y1, y2) {
    return Math.sqrt((x1-x2)*(x1-x2) + (y1-y2)*(y1-y2));
}

function createTree(map) {
    var tree = {};
    for (var node in map) {
        tree[node] = {node};
        tree[node]["exit"] = map[node].exit;
        tree[node]["danger"] = false;
        tree[node]["connections"] = { };
        for (var i = 0; i < map[node].connections.length; i++) {
            var c = map[node].connections[i];
            var dist = distance(map[node].x, map[c].x, map[node].y, map[c].y);
        tree[node]["connections"][String(c)] = dist;
        }
    }
    let data = JSON.stringify(tree);
    fs.writeFileSync('Tree.json', data);
    return tree;

}
var t = createTree(testMap);


function updateDanger(dangerNodes, tree, map) {
    for (var i = 0; i < dangerNodes.length; i++) {
        /*
        for (var node in tree) {
            if (node == dangerNodes[i]) {
                tree[node]["danger"] = true;
            }
        }
*/
        for (var node in map) {
            if (distance(map[node].x, map[dangerNodes[i]].x, map[node].y, map[dangerNodes[i]].y) < 60) {
                tree[node]["danger"] = true;
            }
        }
    }
    let data = JSON.stringify(tree);
    fs.writeFileSync('Tree.json', data);
    return tree;
}
console.log(updateDanger(['2'], t, testMap)) //to be called with dangerous nodes array;
