const parser = input => input.split('\n').map(phrase => phrase.trim().split(' '));

const findDuplicates = phrase => {
  let hash = {};
  return !phrase.every(word => hash[word] ? false : (hash[word] = true, true));
};

const findAnagram = phrase => {
  let sorted = phrase.map(word => word.split('').sort().join(''));
  return findDuplicates(sorted);
};

const countValidPhrases = (input, validator) => {
  let parsedInput = parser(input);
  return parsedInput.reduce((count, phrase) => validator(phrase) ? count : count += 1, 0);
};

module.exports = {
  parser,
  findDuplicates,
  countValidPhrases,
  findAnagram
};