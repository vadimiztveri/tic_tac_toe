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
    this.display_chenge_player_to("player2");
  } else {
    this.current_player = app.player1;
    this.display_chenge_player_to("player1");
  }
};

/**
 * Меняет в HTML отображение игрока, чей сейчас ход
 */
Game.prototype.display_chenge_player_to = function(player) {
  if (player === "player1") {
    var color_player1 = "#000"; var color_player2 = "#ddd";
  } else {
    var color_player1 = "#ddd"; var color_player2 = "#000";
  }
  document.getElementById("gamer1").style.color = color_player1;
  document.getElementById("gamer2").style.color = color_player2;
};

/**
 * Если случилась победа
 */
Game.prototype.ended_in_victory = function() {
  this.end = true;
  this.display_end_with("win", this.current_player.name);
//  document.getElementById("winner").innerHTML = "Победил " + this.current_player.name;
};

/**
 * Если случилась ничья
 */
Game.prototype.ended_in_standoff = function() {
  this.end = true;
  this.display_end_with("standoff");
//  document.getElementById("winner").innerHTML = "Ничья";
};

Game.prototype.display_end_with = function(result) {
  console.log(result);
  if (result === "standoff") {var text = "Ничья";}
  if (result === "win") {var text = "Победил" + this.current_player.name;}

  document.getElementById("winner").innerHTML = text;  
}

Game.prototype.is_victory = function() {
  for (var i = 0; i < 3; i++) {
    // board.at(i, 0) == this.current_player.chip
    // board.contains_at(this.current_player.chip, i, 0)
    if (app.board.rows[i][0].chip === this.current_player.chip && app.board.rows[i][1].chip === this.current_player.chip && app.board.rows[i][2].chip === this.current_player.chip){return true;}
  }
  
  for (var i = 0; i < 3; i++) {
    if (app.board.rows[0][i].chip === this.current_player.chip && app.board.rows[1][i].chip === this.current_player.chip && app.board.rows[2][i].chip === this.current_player.chip){return true;}
  }

  if (app.board.rows[0][0].chip === this.current_player.chip && app.board.rows[1][1].chip === this.current_player.chip && app.board.rows[2][2].chip === this.current_player.chip){return true;}
  if (app.board.rows[2][0].chip === this.current_player.chip && app.board.rows[1][1].chip === this.current_player.chip && app.board.rows[0][2].chip === this.current_player.chip){return true;}

  return false;
};