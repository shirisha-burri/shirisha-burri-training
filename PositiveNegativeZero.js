'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr) {
    // Write your code here
    let n = arr.length;
    let negative = 0;
    let positive = 0;
    let zero = 0;

    for (let i = 0; i < n; i++) {
        if (arr[i] === 0) {
            zero++;
        } else if (arr[i] > 0) {
            positive++;
        } else {
            negative++;
        }
    }

    let positive1 = (positive / n).toFixed(6);
    let negative1 = (negative / n).toFixed(6);
    let zero1 = (zero / n).toFixed(6);

    console.log(positive1);
    console.log(negative1);
    console.log(zero1);
}


function main() {
    const n = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}
