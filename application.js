function Application() {
  this.player1 = new Player(new Chip("cross"), "Игрок 1");
  this.player2 = new Player(new Chip("zero"), "Игрок 2");
  
  this.ui = new UI(this);

  $(this.ui)
    .on('start', this.ui_start_event_handler.bind(this))
    .on( 'restart', this.ui_restart_event_handler.bind(this))
    .on( 'cell', this.ui_turn_event_handler.bind(this))
};

Application.prototype.run = function(size_board) {
  this.ui.attach_handlers();
};

/**
 * @private
 */
Application.prototype.ui_start_event_handler = function(event, board_size) {
  this.start(board_size);
}

/**
 * @private
 */
Application.prototype.ui_restart_event_handler = function(event) {
  this.restart();
}

Application.prototype.ui_turn_event_handler = function(event, row, cell) {
  if (this.game.can_turn(row, cell)) {
    this.game.step(row, cell);
  }
}

/**
 * @private
 */
Application.prototype.start = function(board_size) {
  this.board_size = board_size;
  this.board = this.board_factory();

  this.game = new Game(this.player1, this.board);
  this.game.start();
}

/**
 * @private
 */
Application.prototype.restart = function() {
  this.board = this.board_factory();

  this.game = new Game(this.player1, this.board);
  this.game.start();
}

/**
 * @private
 */
Application.prototype.board_factory = function() {
  return new Board(this.board_size);
}

var app = new Application();
app.run();