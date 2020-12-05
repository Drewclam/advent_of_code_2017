const parseInput = (input) =>
  input
    .split("\n")
    .map((str) => str.trim())
    .map((str) => Number(str));

module.exports = { parseInput };
