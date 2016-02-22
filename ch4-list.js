/**
 * Created by Jonathan Pinlac on 2/19/2016.
 */
'use strict';
function arrayToList(array) {
    let list = null;
    for(let x = array.length - 1; x >= 0; x--) {
        list = {value: array[x], rest: list}
    }
    return list;
}

function listToArray(list) {
    let array = [];
    while(list.rest !== null){
        array.push(list.value);
        list = list.rest;
    }
    array.push(list.value);
    return array;
}
function prepend(element, list) {
    return {value: element, rest: list};
}
console.log(arrayToList([10,20,30]));
console.log(listToArray(arrayToList([1,2,3])));
console.log(prepend('Fitty', arrayToList(['a', 'b', 'c'])));
