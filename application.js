function Application() {
};

Application.prototype.run = function() {
	this.board = new Board();
  this.board.redraw();
};

var game = new Application();
game.run();
