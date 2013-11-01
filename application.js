function Application() {
  this.player1 = new Player(new Chip("cross"), "Игрок 1");
  this.player2 = new Player(new Chip("zero"), "Игрок 2");
  this.ui = new UI();

  this.ui.click_in_button();
  this.ui.click_in_cell();
};

Application.prototype.run = function(size_board) {
	this.board = new Board(size_board);
  this.game = new Game(this.player1, this.board)
  this.ui.set_painter(this.game);
  this.game.start();
  this.ui.painter.game_visible();
};

var app = new Application();