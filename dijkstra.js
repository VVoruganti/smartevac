const Graph = require('node-dijkstra')
const fs = require('fs');

let raw = fs.readFileSync('Tree-testg.json');
let testTree2 = JSON.parse(raw);
const testTree = { //some tree, sample here for test
    'A': {
        exit : false,
        danger : false,
        connections : { B:1, C:5 }
    },
    'B': {
        exit : false,
        danger : true,
        connections : { A:1, C:1 }
    },
    'C': {
        exit : true,
        danger : false,
        connections : { B:1, A:5 }
    }
}


function findDanger(tree) { //returns an array of dangerous nodes
    var danger = [];
    for (var node in tree) { //loops through all nodes in tree
        if (tree[node].danger) { //pushes node to array if dangerous
            danger.push(String(node));
        }
    }
    return danger;
}

function dijkstra(startNode, tree) { //runs dijkstra algorithm on safe nodes
    const danger = findDanger(tree);
    const route = new Graph();

    var endNode;

    for (var node in tree) {
        if (!(node in danger)) { //only considers safe nodes
            for (var c in tree[node].connections) { //removes dangerous nodes from connections with other nodes
                if (danger.includes(c)) {
                    delete tree[node].connections[c];
                }
            }
            if (tree[node].exit) {
                endNode = String(node);
            }
                route.addNode(String(node), tree[node].connections); //add nodes to tree map
        }

    }

    return route.path(startNode, endNode); //calculates shortest route between the nodes
}
console.log(dijkstra('1', testTree2))
