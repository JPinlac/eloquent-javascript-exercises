'use strict';
var size = 8;
function makeBoard(size) {
	var board = '';
	for(let x = 0; x<size; x++){
		for(let y = 0; y<=size; y++){
			if(x%2 === 0){
				if(y === size)
					board += '\n';
				else if(y%2 === 0)
					board += ' ';
				else
					board += '#';
			}
			else{
				if(y === size)
					board += '\n';
				else if (y%2 === 0)
					board += '#';
				else
					board += ' ';
			}
		}
	}
	return board;
}
console.log(makeBoard(size));
