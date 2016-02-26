/**
 * Created by pinlacj on 2/26/2016.
 */
'use strict';
var arrays = [[1,2,3],[4,5],[6]];
console.log(arrays.reduce(function(a,b) {
    return a.concat(b);
}));
