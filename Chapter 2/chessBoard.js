/*
	Print a chessboard with height and width equal to provided size
*/
function chessBoard(size) {
	var board = "";

	for(var y = 0; y < num; y++) {
		for(var x = 0; x < num; x++) {
			if((x + y) % 2 == 0) {
				board += "#";
			}
			else {
				board += " ";
			}
		}
		board +="\n";
	}

	console.log(board);
}