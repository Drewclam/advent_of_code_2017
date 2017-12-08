const testInput = `b inc 5 if a > 1
a inc 1 if b < 5
c dec -10 if a >= 1
c inc -20 if c == 10`;

const testOutput = 1;

const day8 = require('./day8');

const day8Input = require('./day8.input');

const part1Answer = 3880;

const part2Answer = 5035;

describe('Day 8 part 1', () => {

  describe('Input parser', () => {
    it('should convert instructions to an array', () => {
      expect(day8.converter(`b inc 5 if a > 1
        a inc 1 if b < 5`)).toEqual([
        'b inc 5 if a > 1',
        'a inc 1 if b < 5'
      ]);
      expect(day8.converter(testInput)).toEqual([
        'b inc 5 if a > 1',
        'a inc 1 if b < 5',
        'c dec -10 if a >= 1',
        'c inc -20 if c == 10'
      ]);
    });

    it('should add new variables to the register', () => {
      expect(day8.addToRegister('b inc 5 if a > 1')).toEqual({a: 0, b: 0});
      expect(day8.addToRegister('b inc 5 if a > 1', {b: 1})).toEqual({a: 0, b: 1});
      expect(day8.addToRegister('a inc 5 if a > 1', {b: 0})).toEqual({b: 0, a: 0});
    });

    it('should map instructions to JSON', () => {
      expect(day8.mapToArr('b inc 5 if a > 1')).toEqual(['b', '+', '5', 'a', '>', '1']);
      expect(day8.mapToArr('a inc 1 if b < 5')).toEqual(['a', '+', '1', 'b', '<', '5']);
      expect(day8.mapToArr('c dec -10 if a >= 1')).toEqual(['c', '-', '-10', 'a', '>=', '1']);
      expect(day8.mapToArr('c inc -20 if c == 10')).toEqual(['c', '+', '-20', 'c', '==', '10']);
    });
  });
    
  it('should evaluate the condition', () => {
    expect(day8.evalCondition(['b', '+', '5', 'a', '>', '1'], {a: 0})).toEqual(false);
    expect(day8.evalCondition(['b', '+', '5', 'a', '==', '1'], {a: 1})).toEqual(true);
    expect(day8.evalCondition(['b', '+', '5', 'a', '!==', '5'], {a: 4})).toEqual(true);
    expect(day8.evalCondition(['b', '+', '5', 'b', '>=', '5'], {b: 5, a: 3})).toEqual(true);
  });

  it('should execute the action', () => {
    expect(day8.execAction(['b', '+', '5', 'a', '>', '1'], {a: 3, b: 0})).toEqual({a: 3, b: 5});
    expect(day8.execAction(['b', '-', '5', 'a', '===', '1'], {a: 1, b: 5})).toEqual({a: 1, b: 0});
    expect(day8.execAction(['b', '-', '5', 'a', '>', '5'], {a: 6, b: 9})).toEqual({a: 6, b: 4});
  })

  it('should execute the instruction', () => {
    expect(day8.execInstruction(['b', '+', '5', 'a', '>', '1'], {a: 3, b: 0})).toEqual({a: 3, b: 5});
    expect(day8.execInstruction(['b', '+', '5', 'a', '===', '1'], {a: 1, b: 5, c: 0})).toEqual({a: 1, b: 10, c: 0});
    expect(day8.execInstruction(['a', '-', '3', 'c', '!==', '3'], {a: 5, b: 5, c: 5})).toEqual({a: 2, b: 5, c: 5});
  });

  it('should return the correct register', () => {
    expect(day8.applyInstructions(`b inc 5 if a > 1`)).toEqual({a: 0, b: 0});
    expect(day8.applyInstructions(`b inc 5 if a > 1
    a inc 1 if b < 5`)).toEqual({a: 1, b: 0});
  });
  
  it('should return the largest number', () => {
    expect(day8.getLargest({a: 2, b: 0, c: 10})).toEqual(10);
    expect(day8.getLargest({a: -2, b: 0, c: -10})).toEqual(0);
  });
  
  it('should return the test input solution', () => {
    expect(day8.getLargestRegister(testInput)).toEqual(testOutput);
    expect(day8.getLargestRegister(day8Input)).toEqual(part1Answer);
  });

  it('should return the largest register ever', () => {
    expect(day8.getLargestEverRegister(day8Input)).toEqual(part2Answer);
  });

});
