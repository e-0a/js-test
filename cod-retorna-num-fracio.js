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
 
 * entrada esperada #Input (stdin)

    6 (n de casas 0 na frac. Metodo "toFixed()")

    -4 3 -9 0 4 1
    
 * saida esperada #Expected Output

    0.500000
    0.333333
    0.166667
      
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr) {
    let n = arr.length;
    let positivos = 0, negativos = 0, zeros = 0;
    
    for(let i = 0; i < n; i++){
        if(arr[i] > 0){
            positivos++
        } else if(arr[i] < 0){
            negativos++
        } else {
            zeros++
        }
    }
    
    let propPositivos = positivos/n;
    let propNegativos = negativos/n;
    let propZeros = zeros/n;
    
    console.log((propPositivos).toFixed(6));
    console.log((propNegativos).toFixed(6));
    console.log((propZeros).toFixed(6));
}

function main() {
    const n = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}



         EM JAVA !!!!
         
         
         
import java.io.*;
import java.math.*;
import java.security.*;
import java.text.*;
import java.util.*;
import java.util.concurrent.*;
import java.util.function.*;
import java.util.regex.*;
import java.util.stream.*;
import static java.util.stream.Collectors.joining;
import static java.util.stream.Collectors.toList;

class Result {

    /*
     * Complete the 'plusMinus' function below.
     *
     * The function accepts INTEGER_ARRAY arr as parameter.
     */

    public static void plusMinus(List<Integer> arr) {
    	// Variáveis de controle - tamanho da lista, definição de conteúdo
        int n = arr.size();
        int positives = 0;
        int negatives = 0;
        int zeros = 0;
        
        for (Integer num : arr) {
        if (num > 0) {
            positives++;
        } else if (num < 0) {
            negatives++;
        } else {
            zeros++;
        }
    }
    System.out.printf("%.6f\n", (double) positives / n);
    System.out.printf("%.6f\n", (double) negatives / n);
    System.out.printf("%.6f\n", (double) zeros / n);

    }

}

public class Solution {
    public static void main(String[] args) throws IOException {
        BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(System.in));

        int n = Integer.parseInt(bufferedReader.readLine().trim());

        List<Integer> arr = Stream.of(bufferedReader.readLine().replaceAll("\\s+$", "").split(" "))
            .map(Integer::parseInt)
            .collect(toList());

        Result.plusMinus(arr);

        bufferedReader.close();
    }
}





