/**
 * Created by pinlacj on 2/22/2016.
 */
'use strict';
function deepEqual(a, b) {
    if(typeof a === 'object' && typeof b === 'object' && (a !== null || b !== null)) {
        if(a.length !== b.lenth) {
            return false;
        }
        for(let property in a) {
            if(a[property] !== b[property]) {
                return false;
            }
        }
        return true;
    }
    return a === b;
}
let a = {name: 'jon', age: 26};
let b = {name: 'jon', age: 26};
console.log(deepEqual('a','a'));
console.log(a==b);
console.log(deepEqual(a, b));
