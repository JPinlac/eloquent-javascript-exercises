/**
 * Created by pinlacj on 2/19/2016.
 */
'use strict';
function arrayToList(array) {
    let list = null;
    for(let x = array.length - 1; x >= 0; x--) {
        list = {value: array[x], rest: list}
    }
    return list;
}
arrayToList([10,20,30]);