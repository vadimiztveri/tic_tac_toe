/**
 * Рисует всю доску с фишками
 * @constructor
 */
function Redraw(game) {
  this.game = game;
};

Redraw.prototype.set_all = function() {
  this.set_players();
  this.set_end_game();
  this.set_board();
}

Redraw.prototype.game_visible = function(){
  document.getElementById("game-area").style.display = "block";
}

Redraw.prototype.set_players = function() {
  if (this.game.current_player === app.player1) {
    var color_player1 = "#000"; var color_player2 = "#ddd";
  } else {
    var color_player1 = "#ddd"; var color_player2 = "#000";
  }
  document.getElementById("gamer1").style.color = color_player1;
  document.getElementById("gamer1").innerHTML = app.player1.name + " " + "<img src='png/" + app.player1.chip.name + ".png'>";
  document.getElementById("gamer2").style.color = color_player2;
  document.getElementById("gamer2").innerHTML = app.player2.name + " " + "<img src='png/" + app.player2.chip.name + ".png'>";
}

Redraw.prototype.set_end_game = function() {
  if (!this.game.end) {
    var text = "";
  } else {
    if (this.game.end === "victori") {
      var text = "Победил: " + this.game.current_player.name + ".";
    } else {
      var text = "Ничья.";
    }
  }
  
  document.getElementById("winner").innerHTML = text;
}

Redraw.prototype.set_board = function() {
  var table_text = "";

  for (var i = 0; i < this.game.board.size_board; i++) {
    table_text += "<tr>";
    for (var j = 0; j <this.game.board.size_board; j++) {
      table_text += this.set_cell(i, j);
    }
    table_text += "</tr>";
  }
  this.display(table_text);
}

Redraw.prototype.set_cell = function(row, cell) {
    var role = "cell-" + row + cell,
      style = "",
      html_class = "";

  if (this.game.board.get_chip(row, cell)) {
    style = this.set_chip(this.game.board.get_chip(row, cell));
  }

  if (this.game.board.get_win(row, cell)) {
    html_class = "class=win";
  }

  return "<td role='" + role + "' " + style + html_class + "></td>";
};

Redraw.prototype.set_chip = function(chip) {
  return " style=\"background-image:url('png/" + chip + ".png')\"";
};

Redraw.prototype.display = function(table_text) {
  document.getElementById("board").innerHTML = table_text;
}