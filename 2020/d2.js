// --- Day 2: Password Philosophy ---

const parseLine = (line) => {
  const sections = line.split(" ");
  const [min, max] = sections[0].split("-");
  const letter = sections[1].split(":")[0];
  const pw = sections[2];
  return { letter, min: Number(min), max: Number(max), pw };
};

const parseInput = (input) =>
  input.split("\n").map((section) => parseLine(section.trim()));

const checkValidity = ({ letter, min, max, pw }) => {
  // fails abcoiulknc (c{2,9})
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
  // const regex = new RegExp(`(${letter}{${min},${max}})`);
  // return regex.test(pw);
};

const numberOfValidPasswords = (parsedInput) =>
  parsedInput.reduce((sum, parsedLine) => {
    if (checkValidity(parsedLine)) {
      sum += 1;
    }
    return sum;
  }, 0);

module.exports = {
  parseLine,
  parseInput,
  numberOfValidPasswords,
  checkValidity,
};
