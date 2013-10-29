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
  this.last_turn = new Turn(this.current_player, [row, cell], this.board);

console.log(this.board.number_cells_on_side*this.board.number_cells_on_side - 1);

  if (this.last_turn.is_victory()) {
    this.ended_in_victory();
  } else {
    if (this.is_last_step()) {
      this.ended_in_standoff();
    } else {
      // this.next_turn();
      
      this.change_current_player();
      this.step_number++;
      // this.last_turn = ...
    }
  }

  this.board.redraw();
};

Game.prototype.is_last_step = function() {
  if (this.step_number === (this.board.number_cells_on_side*this.board.number_cells_on_side - 1)) {
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
    this.display_change_player_to("player2");
  } else {
    this.current_player = app.player1;
    this.display_change_player_to("player1"); //change --> change
  }
};

/**
 * Меняет в HTML отображение игрока, чей сейчас ход
 */
Game.prototype.display_change_player_to = function(player) {
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
};

var temp = function() {
  console.log("--------------");
  for (var i = 0; i < app.board.number_cells_on_side; i++){
    console.log([app.board.rows[i][0].chip.name, app.board.rows[i][1].chip.name, app.board.rows[i][2].chip.name]);
  }
}