const Graph = require('node-dijkstra')


const testTree = { //some tree, sample here for test
    'A': {
        exit : false,
        danger : false,
        connections : {B : 1}
    },
    'B': {
        exit : true,
        danger : false,
        connections : {A : 1}
    }
}
function dijkstra(startNode, testTree) {
    const route = new Graph();

    var endNode;
    var i = 0;
    var nodeNames = Object.keys(testTree);
    for (var node in testTree) {
        if (testTree.node.exit)
            endNode = testTree.node;
        }
        route.addNode(testTree.node, testTree.node.connections);
        i++;
    }

    return route.path(startNode, endNode);
}

dijkstra('A', testTree)
