// --- Day 2: Password Philosophy ---

const parseLine = (line) => {
  const sections = line.split(' ');
  const [min, max] = sections[0].split('-');
  const letter = sections[1].split(':')[0];
  const pw = sections[2];
  return { letter, min: Number(min), max: Number(max), pw };
};

const parseInput = (input) => input.split('\n').map((section) => parseLine(section.trim()));

const checkValidity = ({ letter, min, max, pw }) => {
  const chars = pw.split('');
  let count = 0;
  for (let i = 0; i < chars.length; i++) {
    if (chars[i] === letter) {
      count++;
    }
    if (count > max) {
      return false;
    }
  }
  if (count >= min) {
    return true;
  }
  // fails abcoiculknc (c{2,9})
  // const regex = new RegExp(`(${letter}{${min},${max}})`);
  // return regex.test(pw);
};

const checkValidity2 = ({ letter, min: index1, max: index2, pw }) => {
  // incoming indices are base 1
  let isMatch = false;
  if (pw[index1 - 1] === letter) {
    isMatch = true;
  }
  if (pw[index2 - 1] === letter) {
    isMatch = !isMatch;
  }

  return isMatch;
};

const numberOfValidPasswords = (parsedInput) =>
  parsedInput.reduce((sum, parsedLine) => {
    if (checkValidity(parsedLine)) {
      sum += 1;
    }
    return sum;
  }, 0);

const numberOfValidPasswords2 = (parsedInput) =>
  parsedInput.reduce((sum, parsedLine) => {
    if (checkValidity2(parsedLine)) {
      sum += 1;
    }
    return sum;
  }, 0);

module.exports = {
  parseLine,
  parseInput,
  numberOfValidPasswords,
  checkValidity,
  checkValidity2,
  numberOfValidPasswords2,
};
