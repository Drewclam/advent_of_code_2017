// --- Day 2: Corruption Checksum ---

// As you walk through the door, a glowing humanoid shape yells in your direction. "You there! Your state appears to be idle. Come help us repair the corruption in this spreadsheet - if we take another millisecond, we'll have to display an hourglass cursor!"

// The spreadsheet consists of rows of apparently-random numbers. To make sure the recovery process is on the right track, they need you to calculate the spreadsheet's checksum. For each row, determine the difference between the largest value and the smallest value; the checksum is the sum of all of these differences.

// For example, given the following spreadsheet:

// `5 1 9 5
// 7 5 3
// 2 4 6 8`
// The first row's largest and smallest values are 9 and 1, and their difference is 8.
// The second row's largest and smallest values are 7 and 3, and their difference is 4.
// The third row's difference is 6.
// In this example, the spreadsheet's checksum would be 8 + 4 + 6 = 18.

// What is the checksum for the spreadsheet in your puzzle input?

export {};

const input = `116	1259	1045	679	1334	157	277	1217	218	641	1089	136	247	1195	239	834
269	1751	732	3016	260	6440	5773	4677	306	230	6928	7182	231	2942	2738	3617
644	128	89	361	530	97	35	604	535	297	599	121	567	106	114	480
105	408	120	363	430	102	137	283	123	258	19	101	181	477	463	279
873	116	840	105	285	238	540	22	117	125	699	953	920	106	113	259
3695	161	186	2188	3611	2802	157	2154	3394	145	2725	1327	3741	2493	3607	4041
140	1401	110	119	112	1586	125	937	1469	1015	879	1798	122	1151	100	926
2401	191	219	607	267	2362	932	2283	889	2567	2171	2409	1078	2247	2441	245
928	1142	957	1155	922	1039	452	285	467	305	506	221	281	59	667	232
3882	1698	170	5796	2557	173	1228	4630	174	3508	5629	4395	180	5100	2814	2247
396	311	223	227	340	313	355	469	229	162	107	76	363	132	453	161
627	1331	1143	1572	966	388	198	2068	201	239	176	1805	1506	1890	1980	1887
3390	5336	1730	4072	5342	216	3823	85	5408	5774	247	5308	232	256	5214	787
176	1694	1787	1586	3798	4243	157	4224	3603	2121	3733	851	2493	4136	148	153
2432	4030	3397	4032	3952	2727	157	3284	3450	3229	4169	3471	4255	155	127	186
919	615	335	816	138	97	881	790	855	89	451	789	423	108	95	116`;

function checkSum(input: string): number {
  return convertToMatrix(input)
    .map(row => row.sort((a, b) => a - b))
    .reduce((sum, current, index, arr) => {
      let first = arr[index][0];
      let last = arr[index][arr[index].length - 1];
      return sum += (last - first);
    }, 0);
}

function convertToMatrix(str: string): number[][] {
  return str
    .replace(/\t/g, ' ')
    .split('\n')
    .map(strRow => strRow
      .split(' ')
      .map(str => Number(str))
    );
}
console.log(checkSum(input));

// --- Part Two ---

// "Great work; looks like we're on the right track after all. Here's a star for your effort." However, the program seems a little worried. Can programs be worried?

// "Based on what we're seeing, it looks like all the User wanted is some information about the evenly divisible values in the spreadsheet. Unfortunately, none of us are equipped for that kind of calculation - most of us specialize in bitwise operations."

// It sounds like the goal is to find the only two numbers in each row where one evenly divides the other - that is, where the result of the division operation is a whole number. They would like you to find those numbers on each line, divide them, and add up each line's result.

// For example, given the following spreadsheet:

// `5 9 2 8
// 9 4 7 3
// 3 8 6 5`
// In the first row, the only two numbers that evenly divide are 8 and 2; the result of this division is 4.
// In the second row, the two numbers are 9 and 3; the result is 3.
// In the third row, the result is 2.
// In this example, the sum of the results would be 4 + 3 + 2 = 9.

// What is the sum of each row's result in your puzzle input?

function checkSumPart2(input: string) {
  return convertToMatrix(input)
    .map(row => findDivisible(row))
    .reduce((sum, current) => {
      return sum += current;
    }, 0);
}

// find the evenly divisible numbers
function findDivisible(row: number[]) {
  for (var i = 0; i < row.length; i++) {
    for (var j = 0; j < row.length; j++) {
      if (i === j) { // don't calculate the same number
        continue;
      } else {
        if (row[i] % row[j] === 0) {
          return row[i] / row[j];
        }
      }
    }
  }
  return 0;
}

console.log(checkSumPart2(input));