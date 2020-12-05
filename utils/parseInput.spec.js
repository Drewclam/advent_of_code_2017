describe("parseInput", () => {
  it("should parse", () => {
    const unparsedInput = `1231
      12345
      12345`;
    expect(day1.parseInput(unparsedInput)).toEqual([1231, 12345, 12345]);
  });
});
