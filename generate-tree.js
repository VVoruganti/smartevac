const fs = require('fs');


const testMap = {
    '1' : { 'x':1,
            'y':1,
            exit:false,
            connection:['2', '3'] },
    '2' : { 'x':3,
            'y':2,
            exit:false,
            connection:['1'] },
    '3' : { 'x':4,
            'y':7,
            exit:false,
            connection:['1', '4'] },
    '4' : { 'x':5,
            'y':1,
            exit:true,
            connection:['3'] }
}

function createTree(map) {
    let tree = {};
    for (var node in map) {
        tree[node] = {node};
        tree[node]["exit"] = map[node].exit;
        tree[node]["danger"] = false;
        tree[node]["connections"] = { };
        for (var i = 0; i < map[node].connection.length; i++) {
            var c = map[node].connection[i];
            var distance = Math.sqrt((map[node].x)*(map[node].x) + (map[node].y)*(map[node].y));
            tree[node]["connections"][String(c)] = distance;

        }
    }
    let data = JSON.stringify(tree);
    fs.writeFileSync('Tree-testg.json', data);

}

createTree(testMap);
