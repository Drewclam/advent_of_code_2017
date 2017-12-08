const day4Input = require('./day4.input');
const day4 = require('./day4');

const part1Answer = 451;
const part2Answer = 223;

const testInput = `aa bb cc dd ee
  aa bb cc dd aa
  aa bb cc dd aaa`;

const part2TestInput = `abcde fghij
  abcde xyz ecdab
  a ab abc abd abf abj
  iiii oiii ooii oooi oooo
  oiii ioii iioi iiio`;

describe('Day 4', () => {
  it('should find duplicate phrases', () => {
    expect(day4.findDuplicates(['aa', 'bb', 'cc', 'dd', 'ee'])).toEqual(false);
    expect(day4.findDuplicates(['aa', 'bb', 'cc', 'dd', 'aa'])).toEqual(true);
    expect(day4.findDuplicates(['aa', 'bb', 'cc', 'dd', 'aaa'])).toEqual(false);
  });

  it('should return a count of duplicate-free passwords', () => {
    expect(day4.countValidPhrases(testInput, day4.findDuplicates)).toEqual(2);
    expect(day4.countValidPhrases(day4Input, day4.findDuplicates)).toEqual(part1Answer);
  });

  it('should find anagrams', () => {
    expect(day4.findAnagram(['abcde', 'fghij'])).toEqual(false);
    expect(day4.findAnagram(['abcde', 'xyz', 'ecdab'])).toEqual(true);
    expect(day4.findAnagram(['a', 'ab', 'abc', 'abd', 'abf', 'abj'])).toEqual(false);
    expect(day4.findAnagram(['iiii', 'oiii', 'ooii', 'oooi', 'oooo'])).toEqual(false);
    expect(day4.findAnagram(['oiii', 'ioii', 'iioi', 'iiio'])).toEqual(true);
  });

  it('should return a count of anagram-free passwords', () => {
    expect(day4.countValidPhrases(part2TestInput, day4.findAnagram)).toEqual(3);
    expect(day4.countValidPhrases(day4Input, day4.findAnagram)).toEqual(part2Answer);
  })
});