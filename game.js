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

Game.prototype.is_victory = function() {
  for (var i = 0; i < 3; i++) {
    if (this.board.contains_at(this.current_player.chip, i, "row")) {this.set_light_win(["gorisont", i]); return true;}
  }
  
  for (var i = 0; i < 3; i++) {
    if (this.board.contains_at(this.current_player.chip, i, "cell")) {this.set_light_win(["vertical", i]); return true;}
  }

  if (this.board.contains_at(this.current_player.chip, 0, "diagonal")) {this.set_light_win(["diagonal", 0]); return true;}
  if (this.board.contains_at(this.current_player.chip, 1, "diagonal")) {this.set_light_win(["diagonal", 1]); return true;}

  return false;
};


Game.prototype.set_light_win = function(win_cells) {

  if (win_cells[0] === "gorisont") {
    for (var i = 0; i < 3; i++){
      this.board.rows[win_cells[1]][i].set_win();
    }
  }
  if (win_cells[0] === "vertical") {
    for (var i = 0; i < 3; i++){
      this.board.rows[i][win_cells[1]].set_win();
    }
  }

  if (win_cells[0] === "diagonal") {
    for (var i = 0; i < 3; i++){
      if (win_cells[1] === 0) {this.board.rows[i][i].set_win();}
      if (win_cells[1] === 1) {this.board.rows[2- i][i].set_win();}
    }
  }

  this.board.redrow;
};


/**
 * Временная фигня
var temp = function() {
  console.log("----------------");
  for (var i = 0; i < 3; i++) {
    console.log([app.board.rows[i][0].win, app.board.rows[i][1].win, app.board.rows[i][2].win])
  }
};
 */