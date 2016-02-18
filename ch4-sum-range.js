/**
 * Created by Jonathan Pinlac on 2/18/2016.
 */
'use strict';
function range(start, end, step) {
    let array = [];
    if(step === undefined){
        step = start < end ? 1 : -1;
    }
    if (step > 0) {
        for (let x = start; x <= end; x += step) {
            array.push(x);
        }
    } else {
        for (let x = start; x >= end; x += step) {
            array.push(x);
        }
    }
    return array;
}

function sum(array) {
    let total = 0;
    for(let x = 0; x < array.length; x++) {
        total += array[x];
    }
    return total;
}

console.log(sum(range(1,10)));