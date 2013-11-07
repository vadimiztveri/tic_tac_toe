function Application() {
  this.players = new Application.Players(["cross", "zero", "square"]);
      
  this.ui = new Application.UI(this);

  $(this.ui)
    .on('start', this.ui_start_event_handler.bind(this))
    .on( 'restart', this.ui_restart_event_handler.bind(this))
    .on( 'cell', this.ui_turn_event_handler.bind(this))
};

Application.prototype.run = function(size_board) {
  this.ui.attach_handlers();
//  this.start(10, 4);
};

/**
 * @private
 */
Application.prototype.ui_start_event_handler = function(event, board_size, win_length) {
  this.start(board_size, win_length);
};

/**
 * @private
 */
Application.prototype.ui_restart_event_handler = function(event) {
  this.restart();
};

/**
 * @private
 */
Application.prototype.ui_turn_event_handler = function(event, row, cell) {
  if (this.game.can_turn(row, cell)) {
    this.game.step(row, cell);
  }
};

/**
 * @private
 */
Application.prototype.start = function(board_size, win_length) {
  this.board_size = board_size;
  this.win_length = win_length;

  this.board = this.board_factory();
  this.game = this.game_factory();
  this.game.start();
};

/**
 * @private
 */
Application.prototype.restart = function() {
  this.board = this.board_factory();
  this.game = this.game_factory();
  this.game.start();
};

/**
 * @private
 */
Application.prototype.board_factory = function() {
  return new Application.Board(this.board_size);
};

/**
 * @private
 */
Application.prototype.game_factory = function() {
  return new Application.Game(this.players, this.board, this.win_length);
};