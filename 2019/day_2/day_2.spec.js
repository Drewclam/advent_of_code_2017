const day2 = require("./day_2");
const input = require("./day_2.input");

describe("Day 2", () => {
  describe("runOpCode1", () => {
    it("should sum 2 indices and modify the correct index", () => {
      expect(day2.runOpCode1([5, 2, 3, 10], 0, 1, 2)).toEqual([5, 2, 7, 10]);
    });
  });

  describe("runOpCode2", () => {
    it("should sum 2 indices and modify the correct index", () => {
      expect(day2.runOpCode2([1, 2, 3, 4], 0, 1, 2)).toEqual([1, 2, 2, 4]);
    });
  });

  describe("restoreLastState", () => {
    it("should modify the correct values", () => {
      expect(day2.restoreLastState([0, 1, 2, 3, 4, 5])).toEqual([
        0,
        12,
        2,
        3,
        4,
        5
      ]);
    });
  });

  describe("readIntCode", () => {
    it("should calculate correctly", () => {
      expect(day2.readIntCode([1, 0, 0, 0, 99])).toEqual([2, 0, 0, 0, 99]);
      expect(day2.readIntCode([2, 3, 0, 3, 99])).toEqual([2, 3, 0, 6, 99]);
      expect(day2.readIntCode([2, 4, 4, 5, 99, 0])).toEqual([
        2,
        4,
        4,
        5,
        99,
        9801
      ]);
      expect(day2.readIntCode([1, 1, 1, 4, 99, 5, 6, 0, 99])).toEqual([
        30,
        1,
        1,
        4,
        2,
        5,
        6,
        0,
        99
      ]);
    });
  });

  describe("Part 1 solution", () => {
    it("should solve", () => {
      expect(day2.readIntCode(day2.restoreLastState(input))[0]).toEqual(
        6327510
      );
    });
  });
});
