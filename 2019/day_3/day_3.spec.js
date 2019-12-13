const day3 = require("./day_3");
const input = require("./day_3.input");

describe("Day 3", () => {
  describe("calculateManhattan", () => {
    it("should calculate", () => {
      expect(day3.calculateManhattan([1, 1], [1, 1])).toEqual(0);
      expect(day3.calculateManhattan([0, 0], [3, 3])).toEqual(6);
      expect(day3.calculateManhattan([0, 0], [5, 6])).toEqual(11);
    });
  });

  describe("parseInstruction", () => {
    it("should get the end coordinate", () => {
      expect(day3.parseInstruction([10, 5], "R100")).toEqual([110, 5]);
      expect(day3.parseInstruction([5, 7], "U2")).toEqual([5, 9]);
      expect(day3.parseInstruction([5, 7], "L2")).toEqual([3, 7]);
      expect(day3.parseInstruction([5, 7], "D2")).toEqual([5, 5]);
    });
  });

  describe("getIntersection", () => {
    it("should get the intersecting coordinate", () => {
      expect(
        day3.getIntersection(
          [
            [5, 1],
            [5, 10]
          ],
          [
            [0, 5],
            [10, 5]
          ]
        )
      ).toEqual([5, 5]);
    });

    it("should handle parallel lines", () => {
      expect(
        day3.getIntersection(
          [
            [0, 0],
            [10, 0]
          ],
          [
            [0, 5],
            [10, 5]
          ]
        )
      ).toEqual([]);
    });
  });

  describe("parseInstructions", () => {
    it("should get range of coordinates", () => {
      expect(day3.parseInstructions(["R8", "U5", "L5", "D3"])).toEqual([
        [0, 0],
        [8, 0],
        [8, 5],
        [3, 5],
        [3, 2]
      ]);

      expect(day3.parseInstructions(["U7", "R6", "D4", "L4"])).toEqual([
        [0, 0],
        [0, 7],
        [6, 7],
        [6, 3],
        [2, 3]
      ]);
    });
  });

  describe.only("getIntersections", () => {
    it("should get the intersections", () => {
      expect(
        day3.getIntersections(
          [
            [0, 0],
            [8, 0],
            [8, 5],
            [3, 5],
            [3, 2]
          ],
          [
            [0, 0],
            [0, 7],
            [6, 7],
            [6, 3],
            [2, 3]
          ]
        )
      ).toContain([
        [3, 3],
        [5, 5]
      ]);

      expect(
        day3.getIntersections(
          [
            [0, 0],
            [8, 0],
            [8, 5],
            [3, 5],
            [3, 2]
          ],
          [
            [0, 0],
            [0, 7],
            [6, 7],
            [6, 3],
            [2, 3]
          ]
        )
      ).toHaveLength(2);
    });
  });

  xdescribe("getClosestManhattanPort", () => {
    it("should work with example input", () => {
      expect(
        day3.getClosestManhattanPort(
          ["R8", "U5", "L5", "D3"],
          ["U7", "R6", "D4", "L4"]
        )
      ).toEqual(6);
    });

    it("should solve with puzzle input", () => {
      const parsed = day3.parseInput(input);
      expect(day3.getClosestManhattanPort(parsed[0], parsed[1])).toEqual(0);
    });
  });
});
