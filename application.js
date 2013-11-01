function Application() {
  this.player1 = new Player(new Chip("cross"), "Игрок 1");
  this.player2 = new Player(new Chip("zero"), "Игрок 2");
  this.ui = new UI(this);

  var that = this;
  $(this.ui)
    .on(
      'start',
      function() {
	      that.board = new Board(Number($("#length-board").val()));
        that.game = new Game(that.player1, that.board);
        that.ui.set_painter(that.game);
        that.game.start();
        that.ui.painter.game_visible();
      }
    )
      .on(
      'restart',
      function() {
        var size = app.board.size_board;
        delete that.board;
        delete that.game;
        that.board = new Board(size);
        that.game = new Game(that.player1, that.board);
        that.ui.set_painter(that.game);
        that.game.start();
      }
    )
    .on(
      'cell',
      function(event, row, cell) {
        if (!that.board.rows[row][cell].chip && !that.game.end) {
          that.game.step(row, cell);
        }
      }
    )
};

Application.prototype.run = function(size_board) {
  this.ui.attach_handlers();
};

var app = new Application();
app.run();