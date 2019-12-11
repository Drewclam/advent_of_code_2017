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
    it('should calculate part 1', () => {
      expect(day1.fuelCounterUpper(day1.parseInput(input), day1.calculateFuel)).toEqual(answer);
    });

    it('should calculate part 2', () => {
      expect(
        day1.fuelCounterUpper(day1.parseInput(input), day1.calculateFuelWithAdditional),
      ).not.toEqual(4726153);
    });
  });

  describe('calculateFuelWithAdditional', () => {
    expect(day1.calculateFuelWithAdditional(51590)).toEqual(25762);
    expect(day1.calculateFuelWithAdditional(53619)).toEqual(26780);

    it('should calculate additional fuel for mass of 14', () => {
      expect(day1.calculateFuelWithAdditional(14)).toEqual(2);
    });

    it('should calculate additional fuel for mass of 1969', () => {
      expect(day1.calculateFuelWithAdditional(1969)).toEqual(966);
    });

    it('should calculate additional fuel for mass of 100756', () => {
      expect(day1.calculateFuelWithAdditional(100756)).toEqual(50346);
    });
  });
});
