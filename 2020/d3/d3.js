// --- Day 3: Toboggan Trajectory ---

const parseMap = (rawInput) => {
  return rawInput
    .split('\n')
    .map((row) => row.trim())
    .map((row) => {
      return row.split('').map((char) => {
        if (char === '.') {
          return 0;
        }
        if (char === '#') {
          return 1;
        }
      });
    });
};

const getPosition = (map, row, col) => {
  if (!map[row]) {
    return 0;
  }
  const colWithShift = col % map[row].length;
  return map[row][colWithShift];
};

const getTreeCount = (map, slopeX, slopeY) => {
  let count = 0;
  let currentPos = [0, 0];
  const curriedGetPosition = ([x, y]) => getPosition(map, y, x);

  for (let i = 0; i < map.length; i++) {
    const position = curriedGetPosition(currentPos);

    if (position === 1) {
      count++;
    }
    currentPos[0] += slopeX;
    currentPos[1] += slopeY;
  }
  return count;
};

const getProduct = (nums) => nums.reduce((product, num) => (product *= num), 1);
module.exports = { parseMap, getPosition, getTreeCount, getProduct };
