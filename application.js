function Application() {
  this.player1 = new Player(new Chip("cross"), "Игрок 1");
  this.player2 = new Player(new Chip("zero"), "Игрок 2");
  this.ui = new UI(this);

  var that = this;
  $(this.ui)
    .on(
      'start',
      function(event, size_board) {
	      that.start(size_board);
      }
    )
      .on(
      'restart',
      function(event) {
	      that.restart();
      }
    )
    .on(
      'cell',
      function(event, row, cell) {
        if (that.game.can_turn(row, cell)) {
          that.game.step(row, cell);
        }
      }
    )
};

Application.prototype.run = function(size_board) {
  this.ui.attach_handlers();
};

Application.prototype.start = function(size_board) {
  this.board = new Board(size_board);
  this.game = new Game(this.player1, this.board);
  this.game.start();
}

Application.prototype.restart = function(size_board) {
  var size = this.board.size_board;
  delete this.board;
  delete this.game;
  this.board = new Board(size_board);
  this.game = new Game(this.player1, this.board);
  this.game.start();
}

var app = new Application();
app.run();