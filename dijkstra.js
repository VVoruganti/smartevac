const Graph = require('node-dijkstra')


const testTree = { //some tree, sample here for test
    'A': {
        exit : false,
        danger : false,
        connections : { C:1 }
    },
    'B': {
        exit : true,
        danger : false,
        connections : { C:3 }
    },
    'C': {
        exit : false,
        danger : false,
        connections : { B:3, A:1 }
    }
}


function dijkstra(startNode, tree) {
    const route = new Graph();

    var endNode;

    for (var node in tree) {
        if (tree[node].exit) {
            endNode = String(node);
        }
        route.addNode(String(node), tree[node].connections);
    }

    return route.path(startNode, endNode);
}

console.log(dijkstra('A', testTree))
