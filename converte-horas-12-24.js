'use strict';

const fs = require('fs');

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
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function timeConversion(s) {
    let horas = parseInt(s.substring(0, 2));
    const minutos = s.substring(3, 5);
    const segundos = s.substring(6, 8);
    const meridian = s.substring(8, 10);

    if (meridian === 'PM' && horas !== 12) {
        horas += 12;
    } else if (meridian === 'AM' && horas === 12) {
        horas -= 12;
    }

    const horasString = horas.toString().padStart(2, '0');

    return `${horasString}:${minutos}:${segundos}`;
}


function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const result = timeConversion(s);

    ws.write(result + '\n');

    ws.end();
}

