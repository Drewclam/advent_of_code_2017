"use strict";
// --- Day 3: Spiral Memory ---
Object.defineProperty(exports, "__esModule", { value: true });
var input = 312051;
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
