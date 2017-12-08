"use strict";
// --- Day 3: Spiral Memory ---
Object.defineProperty(exports, "__esModule", { value: true });
var input = 312051;
var storage = { '0,0': 1 };
function spiral(input) {
    var steps = 0;
    var x = 0;
    var y = 0;
    var maxX = 1;
    var minX = -1;
    var maxY = 1;
    var minY = -1;
    var counter = 1;
    if (input === 1)
        return 0;
    while (counter <= input - 1) {
        while (x < maxX) {
            x++;
            counter++;
            if (counter === input)
                return Math.abs(x) + Math.abs(y);
        }
        while (y < maxY) {
            y++;
            counter++;
            if (counter === input)
                return Math.abs(x) + Math.abs(y);
        }
        while (x > minX) {
            x--;
            counter++;
            if (counter === input)
                return Math.abs(x) + Math.abs(y);
        }
        while (y > minY) {
            y--;
            counter++;
            if (counter === input)
                return Math.abs(x) + Math.abs(y);
        }
        maxX += 1;
        maxY += 1;
        minX -= 1;
        minY -= 1;
    }
}
// get3Sum - takes the coordinate storage object and a (x,y) coordinate
function get3Sum(x, y, storage) {
    // top left -> x - 1, y + 1
    // middle left -> x - 1, y + 0
    // bottom left -> x - 1, y - 1
    // top  -> x + 0, y + 1
    // bottom -> x + 0, y - 1
    // top right -> x + 1, y + 1
    // middle right -> x + 1, y + 0
    // bottom right -> x + 1, y - 1
    // iterate through these combos and return the sum
    var sum = 0;
    for (var i = -1; i <= 1; i++) {
        for (var j = -1; j <= 1; j++) {
            var key = [x + i, y + j].toString();
            if (i === 0 && j === 0) {
                continue;
            }
            sum += storage[key] || 0;
        }
    }
    return sum;
}
function spiral2(input) {
    var steps = 0;
    var x = 0;
    var y = 0;
    var maxX = 1;
    var minX = -1;
    var maxY = 1;
    var minY = -1;
    var counter = 1;
    var key;
    if (input === 1)
        return 1;
    while (counter <= input - 1) {
        while (x < maxX) {
            x++;
            key = [x, y].toString();
            counter++;
            storage[key] = get3Sum(x, y, storage);
            if (counter === input || storage[key] > input)
                return storage[key];
        }
        while (y < maxY) {
            y++;
            key = [x, y].toString();
            counter++;
            storage[key] = get3Sum(x, y, storage);
            if (counter === input || storage[key] > input)
                return storage[key];
        }
        while (x > minX) {
            x--;
            key = [x, y].toString();
            counter++;
            storage[key] = get3Sum(x, y, storage);
            if (counter === input || storage[key] > input)
                return storage[key];
        }
        while (y > minY) {
            y--;
            key = [x, y].toString();
            counter++;
            storage[key] = get3Sum(x, y, storage);
            if (counter === input || storage[key] > input)
                return storage[key];
        }
        maxX += 1;
        maxY += 1;
        minX -= 1;
        minY -= 1;
    }
    return storage[key];
}
console.log('result:', spiral2(312051));
