/**
 * Рисует всю доску с фишками
 * @constructor
 */
function Painter(game) {
  this.game = game;
};

Painter.prototype.redraw = function() {
  this.set_players();
  this.set_end_game();
  this.set_board();
  
  if ($("#game-area").css("opacity") === "0") {
    this.set_game_visible();
  }
};

/**
 * @privat
 */
Painter.prototype.set_game_visible = function(){
  $('#game-area').animate({opacity:1});
};

/**
 * @privat
 */
Painter.prototype.set_players = function() {
  if (this.game.current_player === app.player1) {
    var color_player1 = "#000"; var color_player2 = "#ddd";
  } else {
    var color_player1 = "#ddd"; var color_player2 = "#000";
  }
  $("#gamer1").css("color", color_player1);
  $("#gamer1").html(app.player1.name + " " + "<img src='png/" + app.player1.chip.name + ".png'>");
  $("#gamer2").css("color", color_player2);
  $("#gamer2").html(app.player2.name + " " + "<img src='png/" + app.player2.chip.name + ".png'>");
};

/**
 * @privat
 */
Painter.prototype.set_end_game = function() {
  if (!this.game.end) {
    var text = "";
  } else {
    if (this.game.end === this.game.VICTORI) {
      var text = "Победил: " + this.game.current_player.name + ".";
    } else {
      var text = "Ничья.";
    }
  }
  
  $("#winner").html(text);
};

/**
 * @privat
 */
Painter.prototype.set_board = function() {
  var table_text = "";

  for (var i = 0; i < this.game.board.size_board; i++) {
    table_text += "<tr>";
    for (var j = 0; j <this.game.board.size_board; j++) {
      table_text += this.set_cell(i, j);
    }
    table_text += "</tr>";
  }
  this.display(table_text);
};

/**
 * @privat
 */
Painter.prototype.set_cell = function(row, cell) {
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

/**
 * @privat
 */
Painter.prototype.set_chip = function(chip) {
  return " style=\"background-image:url('png/" + chip + ".png')\"";
};

/**
 * @privat
 */
Painter.prototype.display = function(table_text) {
  $("#board").html(table_text);
};