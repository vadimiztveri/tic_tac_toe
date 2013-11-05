/**
 * @constructor
 */
function Game(current_player, board) {
  this.current_player = current_player;
  this.step_number = 0;
  this.end = false;
  this.board = board;
};

/**
 * @privat
 */
Game.prototype.start = function() {
  this.redraw();
};

/**
 * Ход одного игрока
 */
Game.prototype.step = function(row, cell) {
  this.last_turn = new Turn(this.current_player, [row, cell], this.board);

  if (this.last_turn.is_victory()) {
    this.ended_in_victory();
  } else {
    if (this.is_last_step()) {
      this.ended_in_standoff();
    } else {
      this.prepare_next_turn();
    }
  }

  this.redraw();
};

/**
 * @privat
 */
Game.prototype.prepare_next_turn = function() {
  this.change_current_player();
  this.step_number++; 
};

/**
 * @privat
 */
Game.prototype.is_last_step = function() {
  if (this.step_number === (this.board.size_board*this.board.size_board - 1)) {
    return true;
  }
};

/**
 * Смена игрока
 * @privat
 */
Game.prototype.change_current_player = function() {
  if (this.current_player === app.player1) {
    this.current_player = app.player2;
  } else {
    this.current_player = app.player1;
  }
};

/**
 * @private
 */
Game.prototype.can_turn = function(row, cell) {
  if(!this.board.get_chip(row, cell) && !this.end){
    return true;
  }
}

Game.prototype.VICTORI = 1;
Game.prototype.STANDOFF = 2;

Game.prototype.ended_in_victory = function() {
  this.end = this.VICTORI;
};

Game.prototype.ended_in_standoff = function() {
  this.end = this.STANDOFF;
};

Game.prototype.redraw = function() {
  this.painter = new Painter(this);
  this.painter.redraw();
};