function Application() {
  this.count_players = 3;
  this.players = this.create_players(this.count_players, ["cross", "zero", "square"])
  
  this.ui = new Application.UI(this);

  $(this.ui)
    .on('start', this.ui_start_event_handler.bind(this))
    .on( 'restart', this.ui_restart_event_handler.bind(this))
    .on( 'cell', this.ui_turn_event_handler.bind(this))
};

Application.prototype.run = function(size_board) {
  this.ui.attach_handlers();
  this.start(3);
};

/**
 * @private
 */
Application.prototype.create_players = function(number, names) {
  var players = [],
      new_player;
  
  for(var i = 0; i < number; i++){
    new_player = new Application.Player(new Application.Board.Chip(names[i]), ("Игрок " + (i + 1)));
    players.push(new_player);
  }
  
  this.set_next_players(players);
  
  return players;
};

/**
 * @private
 */
Application.prototype.set_next_players = function(players) {
  for(var i = 0; i < players.length; i++){
    if (i === (players.length - 1)){
      players[i].set_next_player(players[0]);
    } else {
      players[i].set_next_player(players[i + 1]);
    }
  }

}

/**
 * @private
 */
Application.prototype.ui_start_event_handler = function(event, board_size) {
  this.start(board_size);
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
Application.prototype.start = function(board_size) {
  this.board_size = board_size;
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
  return new Application.Game(this.players[0], this.board, this.count_players);
};