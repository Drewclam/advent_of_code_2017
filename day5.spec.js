const day5 = require('./day5');

const testInput = `0
3
0
1
-3`;

const day5Input = require('./day5.input');

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
    expect(day5.findExit(testInput)).toEqual(5);
    expect(day5.findExit(day5Input)).toEqual(351282);
  });
});