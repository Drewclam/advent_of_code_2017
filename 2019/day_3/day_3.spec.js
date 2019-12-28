const day3 = require('./day_3');
const input = require('./day_3.input');
const answer1 = 273;

describe('Day 3', () => {
  describe('calculateManhattan', () => {
    it('should calculate', () => {
      expect(day3.calculateManhattan([1, 1], [1, 1])).toEqual(0);
      expect(day3.calculateManhattan([0, 0], [3, 3])).toEqual(6);
      expect(day3.calculateManhattan([0, 0], [5, 6])).toEqual(11);
    });
  });

  describe('getEndCoord', () => {
    it('should get the end coordinate', () => {
      expect(day3.getEndCoord([10, 5], 'R100')).toEqual([110, 5]);
      expect(day3.getEndCoord([5, 7], 'U2')).toEqual([5, 9]);
      expect(day3.getEndCoord([5, 7], 'L2')).toEqual([3, 7]);
      expect(day3.getEndCoord([5, 7], 'D2')).toEqual([5, 5]);
    });
  });

  describe('getIntersection', () => {
    it('should get the intersecting coordinate', () => {
      expect(
        day3.getIntersection(
          [
            [8, 5],
            [3, 5],
          ],
          [
            [6, 7],
            [6, 3],
          ],
        ),
      ).toEqual([6, 5]);

      expect(
        day3.getIntersection(
          [
            [3, 5],
            [3, 2],
          ],
          [
            [6, 3],
            [2, 3],
          ],
        ),
      ).toEqual([3, 3]);
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
        [0, 0],
        [8, 0],
        [8, 5],
        [3, 5],
        [3, 2],
      ]);

      expect(day3.getRanges(['U7', 'R6', 'D4', 'L4'])).toEqual([
        [0, 0],
        [0, 7],
        [6, 7],
        [6, 3],
        [2, 3],
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
          [3, 3],
          [6, 5],
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

  describe('Solution', () => {
    it('should solve part 1', () => {
      const parsed = day3.parseInput(input);
      expect(day3.getClosestManhattanPort(parsed[0], parsed[1])).toEqual(answer1);
    });
  });
});
