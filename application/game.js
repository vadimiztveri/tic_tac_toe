Application.Game = (function(){
/**
 * @constructor
 */
function Game(players, board, win_length) {
  this.players = players;
  this.win_length = win_length;
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
 * @private
 */
Game.prototype.step = function(row, cell) {
  this.last_turn = new Application.Game.Turn(this.players.get_current().get_chip(), [row, cell], this.board, this.win_length);

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
  this.players.change_player();
};

/**
 * @private
 */
Game.prototype.can_turn = function(row, cell) {
  if(!this.board.get_chip(row, cell) && !this.end){
    return true;
  }
}

Game.prototype.VICTORY = 1;
Game.prototype.STANDOFF = 2;

/**
 * @private
 */
Game.prototype.ended_in_victory = function() {
  this.end = this.VICTORY;
};

/**
 * @private
 */
Game.prototype.ended_in_standoff = function() {
  this.end = this.STANDOFF;
};

/**
 * @private
 */
Game.prototype.redraw = function() {
  this.painter = new Application.Painter(this);
  this.painter.redraw();
};

  return Game;
})();

/*
var temp = function() {
console.log("--------------" + app.board_size);

  for (var i = 0; i < app.board_size; i++){
    var text = "";
    for (var j = 0; j < app.board_size; j++){
      if (app.board.rows[i][j].win){
        text = text + "win :";
      } else {
        text += "___ :";
      }
    }
    console.log(text);
  }
}
*/