const day3 = require('./day_3');
const input = require('./day_3.input');
const answer1 = 273;
const answer2 = 15622;

describe('Day 3', () => {
  describe('calculateManhattan', () => {
    it('should calculate', () => {
      expect(day3.calculateManhattan([1, 1], [1, 1])).toEqual(0);
      expect(day3.calculateManhattan([0, 0], [3, 3])).toEqual(6);
      expect(day3.calculateManhattan([0, 0], [5, 6])).toEqual(11);
    });
  });

  describe('getResultCoord', () => {
    it('should get the end coordinate', () => {
      expect(day3.getResultCoord([10, 5], 'R100')).toEqual([110, 5]);
      expect(day3.getResultCoord([5, 7], 'U2')).toEqual([5, 9]);
      expect(day3.getResultCoord([5, 7], 'L2')).toEqual([3, 7]);
      expect(day3.getResultCoord([5, 7], 'D2')).toEqual([5, 5]);
    });
  });

  describe('getIntersection', () => {
    it('should get the intersecting coordinate', () => {
      expect(
        day3.getIntersection(
          [
            [8, 5, 13],
            [3, 5, 18],
          ],
          [
            [6, 7, 13],
            [6, 3, 17],
          ],
        ),
      ).toEqual([6, 5, 30]);

      expect(
        day3.getIntersection(
          [
            [3, 5, 18],
            [3, 2, 21],
          ],
          [
            [6, 3, 17],
            [2, 3, 21],
          ],
        ),
      ).toEqual([3, 3, 40]);
    });

    it('should handle parallel lines', () => {
      expect(
        day3.getIntersection(
          [
            [0, 0],
            [10, 0],
          ],
          [
            [0, 5],
            [10, 5],
          ],
        ),
      ).toEqual(null);
    });

    it('should return false', () => {
      expect(
        day3.getIntersection(
          [
            [0, 0],
            [8, 0],
          ],
          [
            [6, 7],
            [6, 3],
          ],
        ),
      ).toEqual(null);
    });
  });

  describe('getRanges', () => {
    it('should get range of coordinates', () => {
      expect(day3.getRanges(['R8', 'U5', 'L5', 'D3'])).toEqual([
        [0, 0, 0],
        [8, 0, 8],
        [8, 5, 13],
        [3, 5, 18],
        [3, 2, 21],
      ]);

      expect(day3.getRanges(['U7', 'R6', 'D4', 'L4'])).toEqual([
        [0, 0, 0],
        [0, 7, 7],
        [6, 7, 13],
        [6, 3, 17],
        [2, 3, 21],
      ]);
    });
  });

  describe('getIntersections', () => {
    it('should get the intersections', () => {
      expect(
        day3.getIntersections(
          day3.getRanges(['R8', 'U5', 'L5', 'D3']),
          day3.getRanges(['U7', 'R6', 'D4', 'L4']),
        ),
      ).toEqual(
        expect.arrayContaining([
          [3, 3, 40],
          [6, 5, 30],
        ]),
      );

      expect(
        day3.getIntersections(
          day3.getRanges(['R8', 'U5', 'L5', 'D3']),
          day3.getRanges(['U7', 'R6', 'D4', 'L4']),
        ),
      ).toHaveLength(2);
    });
  });

  describe('calculateSteps', () => {
    it('should calculate', () => {
      expect(day3.calculateSteps([8, 5], [6, 5], 13)).toEqual(15);
      expect(day3.calculateSteps([3, 5], [3, 3], 18)).toEqual(20);

      expect(day3.calculateSteps([6, 3], [3, 3], 17)).toEqual(20);
      expect(day3.calculateSteps([6, 7], [6, 5], 18)).toEqual(20);
    });
  });

  describe('calculateStepsToIntersection', () => {
    it('should calculate', () => {
      expect(
        day3.calculateStepsToIntersection(['R8', 'U5', 'L5', 'D3'], ['U7', 'R6', 'D4', 'L4']),
      ).toEqual(expect.arrayContaining([40, 30]));
    });
  });

  describe('calculateLeastSteps', () => {
    it('should calculate', () => {
      expect(day3.calculateLeastSteps(['R8', 'U5', 'L5', 'D3'], ['U7', 'R6', 'D4', 'L4'])).toEqual(
        30,
      );
      expect(
        day3.calculateLeastSteps(
          ['R75', 'D30', 'R83', 'U83', 'L12', 'D49', 'R71', 'U7', 'L72'],
          ['U62', 'R66', 'U55', 'R34', 'D71', 'R55', 'D58', 'R83'],
        ),
      ).toEqual(610);

      expect(
        day3.calculateLeastSteps(
          ['R98', 'U47', 'R26', 'D63', 'R33', 'U87', 'L62', 'D20', 'R33', 'U53', 'R51'],
          ['U98', 'R91', 'D20', 'R16', 'D67', 'R40', 'U7', 'R15', 'U6', 'R7'],
        ),
      ).toEqual(410);
    });
  });

  describe('Solution', () => {
    const parsed = day3.parseInput(input);
    it('should solve part 1', () => {
      expect(day3.getClosestManhattanPort(parsed[0], parsed[1])).toEqual(answer1);
    });

    it('should solve part 2', () => {
      expect(day3.calculateLeastSteps(parsed[0], parsed[1])).toEqual(answer2);
    });
  });
});
