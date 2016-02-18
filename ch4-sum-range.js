/**
 * Created by Jonathan Pinlac on 2/18/2016.
 */
'use strict';
function range(start, end) {
    let array = [];
    for(let x = start; x <= end; x++){
        array.push(x);
    }
    return array;
}
function sum(array) {
    let total = 0;
    for(let item in array) {
        total += array[item];
    }
    return total;
}

console.log(sum(range(1,10)));