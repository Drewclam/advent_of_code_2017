const day4 = require('./day_4');
const answer1 = 1178;

describe('Day4', () => {
  it('should be a six-digit number', () => {
    expect(day4.checkLength(12345)).toBeFalsy();
    expect(day4.checkLength(123456)).toBeTruthy();
    expect(day4.checkLength(1234567)).toBeFalsy();
  });

  it('should be within range', () => {
    expect(day4.checkWithinRange(111111, 111111, 111115)).toBeTruthy();
    expect(day4.checkWithinRange(111115, 111111, 111115)).toBeTruthy();
    expect(day4.checkWithinRange(111116, 111111, 111115)).toBeFalsy();
    expect(day4.checkWithinRange(111110, 111111, 111115)).toBeFalsy();
  });

  it('should have two adjacent digits', () => {
    expect(day4.checkAdjacentDigits(111111)).toBeTruthy();
    expect(day4.checkAdjacentDigits(122345)).toBeTruthy();
    expect(day4.checkAdjacentDigits(123789)).toBeFalsy();
  });

  it('should have two adjacent digits grouped', () => {
    expect(day4.checkAdjacentDigitsGrouped(111111)).toBeTruthy();
    expect(day4.checkAdjacentDigitsGrouped(111110)).toBeFalsy();
    expect(day4.checkAdjacentDigitsGrouped(111100)).toBeTruthy();
    expect(day4.checkAdjacentDigitsGrouped(111000)).toBeFalsy();
    expect(day4.checkAdjacentDigitsGrouped(110000)).toBeTruthy();
    expect(day4.checkAdjacentDigitsGrouped(100000)).toBeFalsy();
    expect(day4.checkAdjacentDigitsGrouped(100001)).toBeTruthy();
    expect(day4.checkAdjacentDigitsGrouped(100101)).toBeTruthy();
    // expect(day4.checkAdjacentDigitsGrouped(101101)).toBeTruthy();
    // expect(day4.checkAdjacentDigitsGrouped(111101)).toBeTruthy();
    // expect(day4.checkAdjacentDigitsGrouped(111001)).toBeFalsy();
    // expect(day4.checkAdjacentDigitsGrouped(111011)).toBeFalsy();
    // expect(day4.checkAdjacentDigitsGrouped(101011)).toBeTruthy();
  });

  it('should never decrease from left to right', () => {
    expect(day4.checkDecrease(111123)).toBeTruthy();
    expect(day4.checkDecrease(135679)).toBeTruthy();
    expect(day4.checkDecrease(223450)).toBeFalsy();
  });

  it('should solve part 1', () => {
    expect(day4.isValidPassword(111123, 0, 999999, [day4.checkAdjacentDigits])).toBeTruthy();
    expect(day4.isValidPassword(115679, 0, 999999, [day4.checkAdjacentDigits])).toBeTruthy();
    expect(day4.isValidPassword(111111, 0, 999999, [day4.checkAdjacentDigits])).toBeTruthy();
    expect(day4.isValidPassword(122345, 0, 999999, [day4.checkAdjacentDigits])).toBeTruthy();
    expect(day4.isValidPassword(123444, 0, 999999, [day4.checkAdjacentDigits])).toBeTruthy();

    expect(day4.countPasswords(235741, 706948, [day4.checkAdjacentDigits])).toEqual(answer1);
  });

  xit('should solve part 2', () => {
    expect(day4.isValidPassword(112233, 0, 999999, [day4.checkAdjacentDigitsGrouped])).toBeTruthy();
    expect(day4.isValidPassword(111111, 0, 999999, [day4.checkAdjacentDigitsGrouped])).toBeTruthy();
    expect(day4.isValidPassword(123444, 0, 999999, [day4.checkAdjacentDigitsGrouped])).toBeFalsy();
    expect(day4.isValidPassword(111122, 0, 999999, [day4.checkAdjacentDigitsGrouped])).toBeTruthy();
    expect(day4.isValidPassword(111234, 0, 999999, [day4.checkAdjacentDigitsGrouped])).toBeFalsy();
    expect(day4.isValidPassword(112234, 0, 999999, [day4.checkAdjacentDigitsGrouped])).toBeTruthy();

    expect(day4.countPasswords(235741, 706948, [day4.checkAdjacentDigitsGrouped])).toEqual(0);
  });
});
