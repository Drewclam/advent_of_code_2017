// --- Day 1: Report Repair ---
const { parseInput } = require("../utils/parseInput");
const input = require("./d1.input");
const parsedInput = parseInput(input);

const findEntriesForSum = (input, sum) => {
  for (let i = 0; i < input.length - 1; i++) {
    for (let k = 0; k < input.length - 1; k++) {
      if (input[i] + input[k] === sum) {
        return [input[i], input[k]];
      }
    }
  }
};

const findEntriesForSum2 = (input, sum) => {
  for (let i = 0; i < input.length - 1; i++) {
    for (let k = 0; k < input.length - 1; k++) {
      for (let j = 0; j < input.length - 1; j++) {
        if ((i === k) === j) {
          continue;
        }
        if (input[i] + input[k] + input[j] === sum) {
          return [input[i], input[k], input[j]];
        }
      }
    }
  }
};

findEntriesForSum(parsedInput, 2020);

module.exports = { findEntriesForSum, findEntriesForSum2 };
