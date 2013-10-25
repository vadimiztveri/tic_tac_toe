function Application() {
};

Application.prototype.run = function() {
	this.board = new Board();
  this.board.redraw();
  this.player1 = new Player("cross", "Игрок 1");
  this.player2 = new Player("zero", "Игрок 2");
  this.game = new Game(this.player1)
};

var app = new Application();
app.run();