/**
 * @constructor
 */
function Game(current_player) {
  this.current_player = current_player;
  this.step_number = 0;
  this.end = false;
  this.board = app.board;
};

/**
 * Ход одного игрока
 */
Game.prototype.step = function(row, cell) {
  this.board.rows[row][cell].set_chip(this.current_player.chip);

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

  this.board.redraw();
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

Game.prototype.ended_in_victory = function() {
  this.end = true;
  this.display_end_with("win", this.is_victory);
};

Game.prototype.ended_in_standoff = function() {
  this.end = true;
  this.display_end_with("standoff");
};

Game.prototype.display_end_with = function(result) {
  if (result === "standoff") {var text = "Ничья";}
  if (result === "win") {var text = "Победил" + this.current_player.name;}

  document.getElementById("winner").innerHTML = text;
}

Game.prototype.display_light = function(wins_cell) {

  if (wins_cell[0] === "row") {
    for (var i = 0; i < 3; i++){
      this.board.rows[wins_cell[1]][i].win = true;
    }
  }
  if (wins_cell[0] === "cell") {
    for (var i = 0; i < 3; i++){
      this.board.rows[i][wins_cell[1]].win = true;
    }
  }

console.log(temp());
  this.board.redrow;
};

Game.prototype.is_victory = function() {
  for (var i = 0; i < 3; i++) {
    if (this.board.contains_at(this.current_player.chip, i, "row")) {this.display_light(["row", i]); return true;}
  }
  
  for (var i = 0; i < 3; i++) {
    if (this.board.contains_at(this.current_player.chip, i, "cell")) {this.display_light(["cell", i]); return true;}
  }

  if (this.board.contains_at(this.current_player.chip, 0, "diagonal")) {return ["cell", 0];}
  if (this.board.contains_at(this.current_player.chip, 1, "diagonal")) {return ["cell", 1];}

  return false;
};

var temp = function () {
  for (var i = 0; i < 3; i++) {
    console.log([app.board.rows[i][0].win, app.board.rows[i][1].win, app.board.rows[i][2].win]);
  }
}
  