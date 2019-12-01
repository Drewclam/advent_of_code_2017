const day1Input = require('./day1.input');

const testInput1 = '1122';
const testInput1Answer = 3;

const testInput2 = '1111';
const testInput2Answer = 4;

const testInput3 = '1234';
const testInput3Answer = 0;

const testInput4 = '91212129';
const testInput4Answer = 9;

const day1Part1Answer = 1341;
const day1Part2Answer = 1348;

const day1 = require('./day1');

describe('Day 1', () => {
  it('should convert input to array of numbers', () => {
    expect(day1.converter(testInput1)).toEqual([1, 1, 2, 2]);
  });
  
  it('should add if the next digit is the same', () => {
    expect(day1.compare(1, 1)).toEqual(true);
    expect(day1.compare(1, 2)).toEqual(false);
  });

  it('should get the correct sum', () => {
    expect(day1.getCaptchaSum(testInput1, day1.sumNext)).toEqual(testInput1Answer);
    expect(day1.getCaptchaSum(testInput2, day1.sumNext)).toEqual(testInput2Answer);
    expect(day1.getCaptchaSum(testInput3, day1.sumNext)).toEqual(testInput3Answer);
    expect(day1.getCaptchaSum(testInput4, day1.sumNext)).toEqual(testInput4Answer);
    expect(day1.getCaptchaSum(day1Input, day1.sumNext)).toEqual(day1Part1Answer);
    expect(day1.getCaptchaSum(day1Input, day1.sumHalf)).toEqual(day1Part2Answer);
  });
});
