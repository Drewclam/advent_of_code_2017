const day1 = require('./day_1');
const input = require('./day_1.input');
const answer = 3152919;

describe('Day 1', () => {
  describe('parseInput', () => {
    it('should parse', () => {
      const unparsedInput = `1231
      12345
      12345`;
      expect(day1.parseInput(unparsedInput)).toEqual([1231, 12345, 12345]);
    });
  });

  describe('calculateFuel', () => {
    it('should calculate fuel for mass of 12', () => {
      expect(day1.calculateFuel(12)).toEqual(2);
    });

    it('should calculate fuel for mass of 14', () => {
      expect(day1.calculateFuel(14)).toEqual(2);
    });

    it('should calculate fuel for mass of 1969', () => {
      expect(day1.calculateFuel(1969)).toEqual(654);
    });

    it('should calculate fuel for mass of 100756', () => {
      expect(day1.calculateFuel(100756)).toEqual(33583);
    });
  });

  describe('fuelCounterUpper', () => {
    expect(day1.fuelCounterUpper(input)).toEqual(answer);
  });
});
