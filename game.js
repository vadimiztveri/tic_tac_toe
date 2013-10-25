/**
 * @constructor
 */
function Game(current_player) {
  this.current_player = current_player;
  this.step_number = 0;
  this.end = false;
};

/**
 * Ход одного игрока
 */
Game.prototype.step = function(row, cell) {
  app.board.rows[row][cell].set_chip(this.current_player.chip);
  if (this.is_victory()) {
    this.ended_in_victory();
  } else {
    if (this.step_number === 8) {
      this.ended_in_standoff();
    } else {
      this.chenge_current_player();
      this.step_number++;
    }
  }
  app.board.redraw();
};

/**
 * Смена игрока
 */
Game.prototype.chenge_current_player = function() {
  if (this.current_player === app.player1) {
    this.current_player = app.player2;
    document.getElementById("gamer1").style.color = "#ddd";
    document.getElementById("gamer2").style.color = "#000";
  } else {
    this.current_player = app.player1;
    document.getElementById("gamer1").style.color = "#000";
    document.getElementById("gamer2").style.color = "#ddd";
  }
};


/**
 * Если случилась победа
 */
Game.prototype.ended_in_victory = function() {
  this.end = true;
  document.getElementById("winner").innerHTML = "Победил " + this.current_player.name;
};

/**
 * Если случилась ничья
 */
Game.prototype.ended_in_standoff = function() {
  this.end = true;
  document.getElementById("winner").innerHTML = "Ничья";
};

Game.prototype.is_victory = function() {
  if (app.board.rows[0][0].chip === this.current_player.chip && app.board.rows[0][1].chip === this.current_player.chip && app.board.rows[0][2].chip === this.current_player.chip){return true;}
  if (app.board.rows[1][0].chip === this.current_player.chip && app.board.rows[1][1].chip === this.current_player.chip && app.board.rows[1][2].chip === this.current_player.chip){return true;}
  if (app.board.rows[2][0].chip === this.current_player.chip && app.board.rows[2][1].chip === this.current_player.chip && app.board.rows[2][2].chip === this.current_player.chip){return true;}

  if (app.board.rows[0][0].chip === this.current_player.chip && app.board.rows[1][0].chip === this.current_player.chip && app.board.rows[2][0].chip === this.current_player.chip){return true;}
  if (app.board.rows[0][1].chip === this.current_player.chip && app.board.rows[1][1].chip === this.current_player.chip && app.board.rows[2][1].chip === this.current_player.chip){return true;}
  if (app.board.rows[0][2].chip === this.current_player.chip && app.board.rows[1][2].chip === this.current_player.chip && app.board.rows[2][2].chip === this.current_player.chip){return true;}

  if (app.board.rows[0][0].chip === this.current_player.chip && app.board.rows[1][1].chip === this.current_player.chip && app.board.rows[2][2].chip === this.current_player.chip){return true;}
  if (app.board.rows[2][0].chip === this.current_player.chip && app.board.rows[1][1].chip === this.current_player.chip && app.board.rows[0][2].chip === this.current_player.chip){return true;}

  return false;
}