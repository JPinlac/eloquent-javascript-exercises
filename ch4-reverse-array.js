/**
 * Created by Jonathan Pinlac on 2/18/2016.
 */
'use strict';
function reverseArray(array) {
    let newArray = [];
    for(let x = array.length; x > 0; x--) {
        newArray.push(array[x - 1]);
    }
    return newArray;
}
function reverseArrayInPlace(array) {
    for(let x = 0; x < array.length / 2; x++) {
        let temp = array[x];
        array[x] = array[array.length - x - 1];
        array[array.length - x - 1] = temp;
    }
}
console.log(reverseArray(['A', 'B', 'C']));
var testArray = [1, 2, 3, 4, 5, 6];
reverseArrayInPlace(testArray);
console.log(testArray);