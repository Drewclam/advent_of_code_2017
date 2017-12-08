const day7Input = require('./day7.input');
const testInput = require('./day7.testInput');
const testOutput = 'tknk';
const day7 = require('./day7');

        //         gyxo(61)
        //        /     
        // ugml(68) - ebii(61)
        // /      \     
        // |         jptl(61)
        // |        
        // |         pbga(66)
        // /        /
// tknk(41) --- padx(45) - havc(66)
        // \        \
        // |         qoyq(66)
        // |             
        // |       ktlj(57)
        // \      /     
        // fwft(72) - cntj(57)
        //        \     
        //         xhth(57)

describe('Day 7 part 1', () => {
  it('should parse the input into an array', () => {
    expect(day7.converter(testInput)).toEqual({
      pbga: {
        weight: 66,
        children: []
      },
      xhth: {
        weight: 57,
        children: []
      }
    })
  });

  it('should return the test output', () => {
    expect(getBottom(testInput)).toBe(testOutput);
  });
});