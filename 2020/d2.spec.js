const {
  parseLine,
  parseInput,
  checkValidity,
  checkValidity2,
  numberOfValidPasswords,
  numberOfValidPasswords2,
} = require('./d2');
const input = require('./d2.input');

describe('d2', () => {
  describe('parseLine', () => {
    it('should parse', () => {
      const sampleLine = `1-3 a: abcde`;
      const parsedLine = parseLine(sampleLine);
      expect(parsedLine).toMatchObject({
        letter: 'a',
        min: 1,
        max: 3,
        pw: 'abcde',
      });
    });

    it('should parse', () => {
      const sampleLine = `1-3 b: cdefg`;
      const parsedLine = parseLine(sampleLine);
      expect(parsedLine).toMatchObject({
        letter: 'b',
        min: 1,
        max: 3,
        pw: 'cdefg',
      });
    });

    it('should parse', () => {
      const sampleLine = `2-9 c: ccccccccc`;
      const parsedLine = parseLine(sampleLine);
      expect(parsedLine).toMatchObject({
        letter: 'c',
        min: 2,
        max: 9,
        pw: 'ccccccccc',
      });
    });
  });

  describe('parseInput', () => {
    it('should parse', () => {
      const sampleInput = `1-3 a: abcde
          1-3 b: cdefg
          2-9 c: ccccccccc`;
      const parsedInput = parseInput(sampleInput);
      expect(parsedInput[0]).toMatchObject({
        letter: 'a',
        min: 1,
        max: 3,
        pw: 'abcde',
      });
      expect(parsedInput[1]).toMatchObject({
        letter: 'b',
        min: 1,
        max: 3,
        pw: 'cdefg',
      });
      expect(parsedInput[2]).toMatchObject({
        letter: 'c',
        min: 2,
        max: 9,
        pw: 'ccccccccc',
      });
    });
  });

  describe('checkValidity', () => {
    it('should return true', () => {
      const sampleLine = `1-3 a: abcde`;
      const parsedLine = parseLine(sampleLine);
      expect(checkValidity(parsedLine)).toBeTruthy();
    });

    it('should return true', () => {
      const sampleLine = `2-9 c: ccccccccc`;
      const parsedLine = parseLine(sampleLine);
      expect(checkValidity(parsedLine)).toBeTruthy();
    });

    it('should return false', () => {
      const sampleLine = `1-3 b: cdefg`;
      const parsedLine = parseLine(sampleLine);
      expect(checkValidity(parsedLine)).toBeFalsy();
    });

    it('should return false', () => {
      const sampleLine = `17-18 m: lmmmmmmmmmmmmmmmgh`;
      const parsedLine = parseLine(sampleLine);
      expect(checkValidity(parsedLine)).toBeFalsy();
    });

    it('should return true', () => {
      const sampleLine = `9-19 x: xxxxxxxxxxxxxxxxxxqx`;
      const parsedLine = parseLine(sampleLine);
      expect(checkValidity(parsedLine)).toBeTruthy();
    });

    it('should return false', () => {
      const sampleLine = `9-13 q: fqxlqsqlqgxkqvrfqgb`;
      const parsedLine = parseLine(sampleLine);
      expect(checkValidity(parsedLine)).toBeFalsy();
    });
  });

  describe('numberOfValidPaasswords', () => {
    it('should solve example 1', () => {
      const sampleInput = `1-3 a: abcde
      1-3 b: cdefg
      2-9 c: ccccccccc`;
      const parsedInput = parseInput(sampleInput);
      expect(numberOfValidPasswords(parsedInput)).toEqual(2);
    });

    it('should solve part 1', () => {
      const parsedInput = parseInput(input);
      expect(numberOfValidPasswords(parsedInput)).toEqual(536);
    });
  });

  describe('checkValidity2', () => {
    it('should return true', () => {
      const sampleLine = `1-3 a: abcde`;
      const parsedLine = parseLine(sampleLine);
      expect(checkValidity2(parsedLine)).toBe(true);
    });

    it('should return false', () => {
      const sampleLine = `1-3 b: cdefg`;
      const parsedLine = parseLine(sampleLine);
      expect(checkValidity2(parsedLine)).toBe(false);
    });

    it('should return false', () => {
      const sampleLine = `2-9 c: ccccccccc`;
      const parsedLine = parseLine(sampleLine);
      expect(checkValidity2(parsedLine)).toBe(false);
    });
  });

  describe('numberOfValidPaasswords2', () => {
    it('should solve example 2', () => {
      const sampleInput = `1-3 a: abcde
      1-3 b: cdefg
      2-9 c: ccccccccc`;
      const parsedInput = parseInput(sampleInput);
      expect(numberOfValidPasswords2(parsedInput)).toEqual(1);
    });

    it('should solve part 2', () => {
      const parsedInput = parseInput(input);
      expect(numberOfValidPasswords2(parsedInput)).toEqual(558);
    });
  });
});
