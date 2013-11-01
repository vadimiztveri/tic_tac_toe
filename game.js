/**
 * @constructor
 */
function Game(current_player, board) {
  this.current_player = current_player;
  this.step_number = 0;
  this.end = false;
  this.board = board;
};

Game.prototype.start = function() {
  this.painter = app.ui.painter;
  this.painter.redraw();
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

  this.painter.redraw();
};

Game.prototype.prepare_next_turn = function() {
  this.change_current_player();
  this.step_number++; 
}

Game.prototype.is_last_step = function() {
  if (this.step_number === (this.board.size_board*this.board.size_board - 1)) {
    return true;
  } else {
    return false;
  }
}

/**
 * Смена игрока
 */
Game.prototype.change_current_player = function() {
  if (this.current_player === app.player1) {
    this.current_player = app.player2;
  } else {
    this.current_player = app.player1;
  }
};

Game.prototype.ended_in_victory = function() {
  this.end = "victori";
};

Game.prototype.ended_in_standoff = function() {
  this.end = "standoff";
};

/*
var temp = function() {
  console.log("--------------");
  for (var i = 0; i < app.board.size_board; i++){
    var array = [];
    for (var j = 0; j < app.board.size_board; j++){
      if (app.board.rows[i][j].chip) {
        array.push(app.board.rows[i][j].chip.name);
      } else {
        array.push("____");
      }
    }
  console.log(array);
  }
}
*/