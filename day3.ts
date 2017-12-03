// --- Day 3: Spiral Memory ---

// You come across an experimental new kind of memory stored on an infinite two-dimensional grid.

// Each square on the grid is allocated in a spiral pattern starting at a location marked 1 and then counting up while spiraling outward. For example, the first few squares are allocated like this:

// 17  16  15  14  13
// 18   5   4   3  12
// 19   6   1   2  11
// 20   7   8   9  10
// 21  22  23---> ...
// While this is very space-efficient (no squares are skipped), requested data must be carried back to square 1 (the location of the only access port for this memory system) by programs that can only move up, down, left, or right. They always take the shortest path: the Manhattan Distance between the location of the data and square 1.

// For example:

// Data from square 1 is carried 0 steps, since it's at the access port.
// Data from square 12 is carried 3 steps, such as: down, left, left.
// Data from square 23 is carried only 2 steps: up twice.
// Data from square 1024 must be carried 31 steps.
// How many steps are required to carry the data from the square identified in your puzzle input all the way to the access port?

// Your puzzle input is 312051.

// R U LL DD
// RRR UUU LLLL DDDD 
// RRRRR UUUUU LLLLLL DDDDDD
// RRRRRRR UUUUUUU LLLLLLLL DDDDDDDD

export {};

const input = 312051;
const storage = {'0,0': 1};

function spiral(input: number) {

  let steps = 0;

  let x = 0;
  let y = 0;
  let maxX = 1;
  let minX = -1;
  let maxY = 1;
  let minY = -1;
  let counter = 1;

  if (input === 1) return 0;

  while(counter <= input - 1) {

    while (x < maxX) {
      x++;
      counter++;
      if (counter === input) return Math.abs(x) + Math.abs(y);
    }

     while (y < maxY) {
      y++;
      counter++;
      if (counter === input) return Math.abs(x) + Math.abs(y);
    }

     while (x > minX) {
      x--;
      counter++;
      if (counter === input) return Math.abs(x) + Math.abs(y);
    }

     while (y > minY) {
      y--;
      counter++;
      if (counter === input) return Math.abs(x) + Math.abs(y);
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
  let sum = 0;
  for (let i = -1; i <= 1; i++) {
    for (let j = -1; j <= 1; j++) {
      let key =  [x + i, y + j].toString();
      if (i === 0 && j === 0) {
        continue;
      }
      sum += storage[key] || 0;
    }
  }
  return sum;
}

function spiral2(input: number) {

  let steps = 0;

  let x = 0;
  let y = 0;
  let maxX = 1;
  let minX = -1;
  let maxY = 1;
  let minY = -1;
  let counter = 1;
  let key;

  if (input === 1) return 1;

  while(counter <= input - 1) {
    
    while (x < maxX) {
      x++;
      key = [x, y].toString();
      counter++;
      storage[key] = get3Sum(x, y, storage);
      if (counter === input || storage[key] > input) return storage[key];
    }

    while (y < maxY) {
      y++;
      key = [x, y].toString();
      counter++;
      storage[key] = get3Sum(x, y, storage);
      if (counter === input || storage[key] > input) return storage[key];
    }

    while (x > minX) {
      x--;
      key = [x, y].toString();
      counter++;
      storage[key] = get3Sum(x, y, storage);
      if (counter === input || storage[key] > input) return storage[key];
    }

    while (y > minY) {
      y--;
      key = [x, y].toString();
      counter++;
      storage[key] = get3Sum(x, y, storage);
      if (counter === input || storage[key] > input) return storage[key];
    } 
    maxX += 1;
    maxY += 1;
    minX -= 1;
    minY -= 1;
  }

  return storage[key];
}

console.log('result:',spiral2(312051));
