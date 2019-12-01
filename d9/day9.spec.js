const garbageTest1 = '<>';
const garbageTest2 = '<aosifhpuosahfp>';
const garbageTest3 = '<<<<>';
const garbageTest4 = '<{!>}>';
const garbageTest5 = '<!!>';
const garbageTest6 = '<!!!>>';
const garbageTest7 = '<{o"i!a,<{i<a>';

const groupTest1 = '{}';
const groupTest2 = '{{{}}}';
const groupTest3 = '{{},{}}';
const groupTest4 = '{{{},{},{{}}}}';
const groupTest5 = '{<{},{},{{}}>}';
const groupTest6 = '{<a>,<a>,<a>,<a>}';
const groupTest7 = '{{<a>},{<a>},{<a>},{<a>}}';
const groupTest8 = '{{<!>},{<!>},{<!>},{<a>}}';

const day9 = require('./day9');

describe('Garbage detector', () => {
  it('should find anything inside <> to be garbage', () => {
    expect(day9.garbageDetector(garbageTest1)).toEqual(true);
    expect(day9.garbageDetector(garbageTest2)).toEqual(true);
    expect(day9.garbageDetector(garbageTest3)).toEqual(true);
    expect(day9.garbageDetector(garbageTest4)).toEqual(true);
    expect(day9.garbageDetector(garbageTest5)).toEqual(true);
    expect(day9.garbageDetector(garbageTest6)).toEqual(true);
    expect(day9.garbageDetector(garbageTest7)).toEqual(true);
  });

  it('should ')
});
it('should count how many groups are in a string', () => {

});