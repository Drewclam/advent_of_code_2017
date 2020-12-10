const { parseMap, getPosition, getTreeCount, getProduct } = require('./d3');
const input = require('./d3.input');

describe('day 3', () => {
  describe('parseMap', () => {
    it('should transform input to trees and spaces matrix', () => {
      let input = `.#
      #.`;
      expect(parseMap(input)).toEqual([
        [0, 1],
        [1, 0],
      ]);

      input = `..##
      #...
      .#..`;
      expect(parseMap(input)).toEqual([
        [0, 0, 1, 1],
        [1, 0, 0, 0],
        [0, 1, 0, 0],
      ]);

      input = `..##
      #...
      .#..
      ..#.`;
      expect(parseMap(input)).toEqual([
        [0, 0, 1, 1],
        [1, 0, 0, 0],
        [0, 1, 0, 0],
        [0, 0, 1, 0],
      ]);
    });
  });

  describe('getPosition', () => {
    it('should get the correct square from map', () => {
      let input = `.#
      #.`;
      let parsedMap = parseMap(input);
      expect(getPosition(parsedMap, 0, 0)).toBe(0);
      expect(getPosition(parsedMap, 0, 1)).toBe(1);
      expect(getPosition(parsedMap, 0, 2)).toBe(0);
      expect(getPosition(parsedMap, 0, 3)).toBe(1);
      expect(getPosition(parsedMap, 0, 4)).toBe(0);
      expect(getPosition(parsedMap, 1, 2)).toBe(1);
      expect(getPosition(parsedMap, 1, 3)).toBe(0);
      expect(getPosition(parsedMap, 1, 4)).toBe(1);

      input = `..##
      #...
      .#..`;
      parsedMap = parseMap(input);
      expect(getPosition(parsedMap, 0, 4)).toBe(0); // 0
      expect(getPosition(parsedMap, 0, 5)).toBe(0); // 1
      expect(getPosition(parsedMap, 0, 6)).toBe(1); // 2
      expect(getPosition(parsedMap, 0, 7)).toBe(1); // 3
      // 8 0
      // 9 1
      // 10 2
      // 11 3
      expect(getPosition(parsedMap, 1, 4)).toBe(1);
      expect(getPosition(parsedMap, 1, 5)).toBe(0);
      expect(getPosition(parsedMap, 1, 6)).toBe(0);
      expect(getPosition(parsedMap, 1, 7)).toBe(0);
      expect(getPosition(parsedMap, 2, 4)).toBe(0);
      expect(getPosition(parsedMap, 2, 5)).toBe(1);
      expect(getPosition(parsedMap, 2, 6)).toBe(0);
      expect(getPosition(parsedMap, 2, 7)).toBe(0);

      input = `..##.......
      #...#...#..
      .#....#..#.
      ..#.#...#.#
      .#...##..#.
      ..#.##.....
      .#.#.#....#
      .#........#
      #.##...#...
      #...##....#
      .#..#...#.#`;
      parsedMap = parseMap(input);
      expect(getPosition(parsedMap, 1, 3)).toBe(0);
      expect(getPosition(parsedMap, 2, 6)).toBe(1);
      expect(getPosition(parsedMap, 3, 9)).toBe(0);
      expect(getPosition(parsedMap, 4, 12)).toBe(1);
      expect(getPosition(parsedMap, 5, 15)).toBe(1);
      expect(getPosition(parsedMap, 6, 18)).toBe(0);
      expect(getPosition(parsedMap, 7, 21)).toBe(1);
      expect(getPosition(parsedMap, 8, 24)).toBe(1);
      expect(getPosition(parsedMap, 9, 27)).toBe(1);
      expect(getPosition(parsedMap, 10, 30)).toBe(1);
    });
  });

  describe('getTreeCount', () => {
    it('should solve example 1', () => {
      let input = `..##.......
      #...#...#..
      .#....#..#.
      ..#.#...#.#
      .#...##..#.
      ..#.##.....
      .#.#.#....#
      .#........#
      #.##...#...
      #...##....#
      .#..#...#.#`;
      parsedMap = parseMap(input);
      expect(getTreeCount(parsedMap, 3, 1)).toBe(7);
    });

    it('should solve part 1', () => {
      const parsedMap = parseMap(input);
      expect(getTreeCount(parsedMap, 3, 1)).toBe(242);
    });

    it('should solve example 2', () => {
      let input = `..##.......
      #...#...#..
      .#....#..#.
      ..#.#...#.#
      .#...##..#.
      ..#.##.....
      .#.#.#....#
      .#........#
      #.##...#...
      #...##....#
      .#..#...#.#`;
      parsedMap = parseMap(input);
      expect(getTreeCount(parsedMap, 1, 1)).toBe(2);
      expect(getTreeCount(parsedMap, 3, 1)).toBe(7);
      expect(getTreeCount(parsedMap, 5, 1)).toBe(3);
      expect(getTreeCount(parsedMap, 7, 1)).toBe(4);
      expect(getTreeCount(parsedMap, 1, 2)).toBe(2);

      expect(
        getProduct([
          getTreeCount(parsedMap, 1, 1),
          getTreeCount(parsedMap, 3, 1),
          getTreeCount(parsedMap, 5, 1),
          getTreeCount(parsedMap, 7, 1),
          getTreeCount(parsedMap, 1, 2),
        ]),
      ).toEqual(336);
    });

    it('should solve part 2', () => {
      const parsedMap = parseMap(input);
      expect(getTreeCount(parsedMap, 1, 1)).toBe(82);
      expect(getTreeCount(parsedMap, 5, 1)).toBe(71);
      expect(getTreeCount(parsedMap, 7, 1)).toBe(67);
      expect(getTreeCount(parsedMap, 1, 2)).toBe(24);
      expect(
        getProduct([
          getTreeCount(parsedMap, 1, 1),
          getTreeCount(parsedMap, 3, 1),
          getTreeCount(parsedMap, 5, 1),
          getTreeCount(parsedMap, 7, 1),
          getTreeCount(parsedMap, 1, 2),
        ]),
      ).toEqual(2265549792);
    });
  });
});
