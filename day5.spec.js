const day5 = require('./day5');

const testInput = `0
3
0
1
-3`;

const day5Input = require('./day5.input');
const part1Answer = 351282;
const part2Answer = 24568703;

describe('Day 5 part 1', () => {
  it('should convert the input string into an array', () => {
    expect(day5.converter(testInput)).toEqual([0, 3, 0, 1, -3]);
  });

  it('should move n jumps on n', () => {
    expect(day5.move([0, 1, 2, 3], 0)).toEqual(0);
    expect(day5.move([1, 3, 4, 5], 0)).toEqual(1);
    expect(day5.move([2, 3, 4, 5, 6], 1)).toEqual(4);
    expect(day5.move([2, 3, 4, 5, 6, 7, 8, 9, 10], 2)).toEqual(6);

    expect(day5.move([-2, -3, -4, -2, -3, -4, -8, -9, -10], 3)).toEqual(1);
  });

  it('should return null if moving off the CPU', () => {
    expect(day5.move([2, 3, 4, 5, 6, 7, 8, 9, 10], 5)).toEqual(null);
    expect(day5.move([-1, 3, 4, 5, 6, 7, 8, 9, 10], 0)).toEqual(null);
    expect(day5.move([-2, -3, -4, -2, -3, -4, -8, -9, -10], 8)).toEqual(null);
  });

  it('should increment the jump after using it', () => {
    expect(day5.incrementJump([1, 2, 2, 3], 0)).toEqual([2, 2, 2, 3]);
    expect(day5.incrementJump([-10, -22, -5, 4], 1)).toEqual([-10, -21, -5, 4]);
  });

  it('should return the steps once the exit is reached', () => {
    expect(day5.findExit(testInput, day5.incrementJump)).toEqual(5);
    expect(day5.findExit(day5Input, day5.incrementJump)).toEqual(part1Answer);
  });
});

describe('Day 5 part 2', () => {
  it('should decrease jump by 1 if jump is 3 or more, increase by 1 otherwise', () => {
    expect(day5.strangeJump([-2, -4, -10, 7], 0)).toEqual([-1, -4, -10, 7]);
    expect(day5.strangeJump([0, 1, 2, 3], 0)).toEqual([1, 1, 2, 3]);
    expect(day5.strangeJump([0, 5, 3, 6], 1)).toEqual([0, 4, 3, 6]);
    expect(day5.strangeJump([0, 5, 3, 6], 2)).toEqual([0, 5, 2, 6]);
  });

  it('should validate test input', () => {
    expect(day5.findExit(testInput, day5.strangeJump)).toEqual(10);
    expect(day5.findExit(day5Input, day5.strangeJump)).toEqual(part2Answer);
  });
});