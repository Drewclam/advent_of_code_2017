


const converter = (str) => {
  return str.split('\n').map(char => Number(char));
};

const move = (arr, start) => {
  let index = start;
  let jumps = arr[start];
  let result = start += jumps;
  return arr[result] === undefined ? null : result;
};

const incrementJump = (arr, index) => {
  arr[index] += 1;
  return arr;
};

const findExit = (input) => {
  let instructions = converter(input);
  let start = 0;
  let prev = 0;
  let steps = 0;

  while (start !== null) {
    prev = start;
    start = move(instructions, start);
    steps++;
    instructions = incrementJump(instructions, prev);
  }
  return steps;
}


module.exports = { converter, move, findExit, incrementJump };