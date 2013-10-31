function Application(size_board) {
  this.player1 = new Player(new Chip("cross"), "Игрок 1");
  this.player2 = new Player(new Chip("zero"), "Игрок 2");
	this.board = new Board(size_board);
};

Application.prototype.run = function() {
  this.game = new Game(this.player1, this.board)
  this.game.redraw.set_all();
};

var app;