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

  if (this.last_turn.is_victory()) {
    this.ended_in_victory();
  } else {
    if (this.is_last_step()) {
      this.ended_in_standoff();
    } else {
      this.prepare_next_turn();
    }
  }

  this.board.redraw();
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
  this.display_end_with_victory();
};

Game.prototype.display_end_with_victory = function() {
  document.getElementById("winner").innerHTML = "Победил" + this.current_player.name;
};

Game.prototype.ended_in_standoff = function() {
  this.end = true;
  this.display_end_with_standoff();
};

Game.prototype.display_end_with_standoff = function() {
  document.getElementById("winner").innerHTML = "Ничья";
};


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
