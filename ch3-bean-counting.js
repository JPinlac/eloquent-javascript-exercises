'use strict';
function countBs(str) {
	return countChar(str, 'B');
}
function countChar(str, letter) {
	var count = 0;
	for(let x = 0; x < str.length; x++) {
		if(str.charAt(x) === letter)
			count++;
	}
	return count;
}
console.log(countBs('Bobby'));
