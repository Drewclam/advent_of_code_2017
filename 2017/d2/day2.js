"use strict";
// --- Day 2: Corruption Checksum ---
Object.defineProperty(exports, "__esModule", { value: true });
var input = "116\t1259\t1045\t679\t1334\t157\t277\t1217\t218\t641\t1089\t136\t247\t1195\t239\t834\n269\t1751\t732\t3016\t260\t6440\t5773\t4677\t306\t230\t6928\t7182\t231\t2942\t2738\t3617\n644\t128\t89\t361\t530\t97\t35\t604\t535\t297\t599\t121\t567\t106\t114\t480\n105\t408\t120\t363\t430\t102\t137\t283\t123\t258\t19\t101\t181\t477\t463\t279\n873\t116\t840\t105\t285\t238\t540\t22\t117\t125\t699\t953\t920\t106\t113\t259\n3695\t161\t186\t2188\t3611\t2802\t157\t2154\t3394\t145\t2725\t1327\t3741\t2493\t3607\t4041\n140\t1401\t110\t119\t112\t1586\t125\t937\t1469\t1015\t879\t1798\t122\t1151\t100\t926\n2401\t191\t219\t607\t267\t2362\t932\t2283\t889\t2567\t2171\t2409\t1078\t2247\t2441\t245\n928\t1142\t957\t1155\t922\t1039\t452\t285\t467\t305\t506\t221\t281\t59\t667\t232\n3882\t1698\t170\t5796\t2557\t173\t1228\t4630\t174\t3508\t5629\t4395\t180\t5100\t2814\t2247\n396\t311\t223\t227\t340\t313\t355\t469\t229\t162\t107\t76\t363\t132\t453\t161\n627\t1331\t1143\t1572\t966\t388\t198\t2068\t201\t239\t176\t1805\t1506\t1890\t1980\t1887\n3390\t5336\t1730\t4072\t5342\t216\t3823\t85\t5408\t5774\t247\t5308\t232\t256\t5214\t787\n176\t1694\t1787\t1586\t3798\t4243\t157\t4224\t3603\t2121\t3733\t851\t2493\t4136\t148\t153\n2432\t4030\t3397\t4032\t3952\t2727\t157\t3284\t3450\t3229\t4169\t3471\t4255\t155\t127\t186\n919\t615\t335\t816\t138\t97\t881\t790\t855\t89\t451\t789\t423\t108\t95\t116";
function checkSum(input) {
    return convertToMatrix(input)
        .map(function (row) { return row.sort(function (a, b) { return a - b; }); })
        .reduce(function (sum, current, index, arr) {
        var first = arr[index][0];
        var last = arr[index][arr[index].length - 1];
        return sum += (last - first);
    }, 0);
}
function convertToMatrix(str) {
    return str
        .replace(/\t/g, ' ')
        .split('\n')
        .map(function (strRow) { return strRow
        .split(' ')
        .map(function (str) { return Number(str); }); });
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
function checkSumPart2(input) {
    return convertToMatrix(input)
        .map(function (row) { return findDivisible(row); })
        .reduce(function (sum, current) {
        return sum += current;
    }, 0);
}
// find the evenly divisible numbers
function findDivisible(row) {
    for (var i = 0; i < row.length; i++) {
        for (var j = 0; j < row.length; j++) {
            if (i === j) {
                continue;
            }
            else {
                if (row[i] % row[j] === 0) {
                    return row[i] / row[j];
                }
            }
        }
    }
    return 0;
}
console.log(checkSumPart2(input));
