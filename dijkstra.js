const Graph = require('node-dijkstra')


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
/*
function removeDanger(tree) {
    var danger;
    for (var node in tree) {
        if (tree[node].danger) {
            danger = {node : { connections:tree[node].connections } };
            delete tree[node];
        }
    }
    for (var node in tree) {
        for (var d in danger) {
            for (var c in danger[d]) {
                if (String(danger[d][connections].c) == String(node)) {
                    delete tree[node][connections][d];
                }
            }
        }
    }
    return tree;
}
*/
function findDanger(tree) {
    var danger = [];
    for (var node in tree) {
        if (tree[node].danger) {
            danger.push(String(node));
        }
    }
    return danger;
}
/*

*/



function dijkstra(startNode, tree) {
    const danger = findDanger(tree);
    const route = new Graph();

    var endNode;

    for (var node in tree) {
        if (!(node in danger)) {
            for (var c in tree[node].connections) {
                if (danger.includes(c)) {
                    delete tree[node].connections[c];
                }
            }
            if (tree[node].exit) {
                endNode = String(node);
            }
                route.addNode(String(node), tree[node].connections);
        }

    }

    return route.path(startNode, endNode);
}
console.log(dijkstra('A', testTree))
