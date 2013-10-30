function Application(size_board) {
  this.player1 = new Player(new Chip("cross"), "Игрок 1");
  this.player2 = new Player(new Chip("zero"), "Игрок 2");
	this.board = new Board(size_board);
  this.redraw = new Redraw(this.board);
};

Application.prototype.run = function() {
//  this.board.redraw();
  this.game = new Game(this.player1, this.board)
  this.redraw.set_board();
};

var app;