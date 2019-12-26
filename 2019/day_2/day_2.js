// --- Day 2: 1202 Program Alarm-- -

// Opcode 1 adds together numbers read from two positions and stores the result in a third position. The three integers immediately after the opcode tell you these three positions - the first two indicate the positions from which you should read the input values, and the third indicates the position at which the output should be stored.

// Opcode 2 works exactly like opcode 1, except it multiplies the two inputs instead of adding them. Again, the three integers after the opcode indicate where the inputs and outputs are, not their values.

const runOpCode1 = (arr, pos1, pos2, pos3) =>
  arr.map((val, i, array) => (i === pos3 ? array[pos1] + array[pos2] : val));
const runOpCode2 = (arr, pos1, pos2, pos3) =>
  arr.map((val, i, array) => (i === pos3 ? array[pos1] * array[pos2] : val));

const restoreLastState = (puzzleInput, noun = 12, verb = 2) =>
  puzzleInput.map((num, i) => {
    if (i === 1) return noun;
    if (i === 2) return verb;
    return num;
  });

const readIntCode = list => {
  for (let i = 0; i < list.length; i += 4) {
    if (list[i] === 1) {
      list = runOpCode1(list, list[i + 1], list[i + 2], list[i + 3]);
    } else if (list[i] === 2) {
      list = runOpCode2(list, list[i + 1], list[i + 2], list[i + 3]);
    } else if (list[i] === 99) {
      break;
    }
  }
  return list;
};

const findNounAndVerb = (list, noun = -1) => {
  const desiredOutput = 19690720;
  const result = readIntCode(list);

  if (result[0] > desiredOutput) {
    return 100 * (noun - 1) + Math.abs(result[0] - desiredOutput - 460800);
  }

  noun += 1;

  return findNounAndVerb(restoreLastState(list, noun, 0), noun);
};

module.exports = { runOpCode1, runOpCode2, readIntCode, restoreLastState, findNounAndVerb };
