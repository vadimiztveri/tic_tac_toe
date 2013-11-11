Application.Painter = (function(){
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
 * @private
 */
Painter.prototype.set_game_visible = function(){
  $('#game-area').animate({opacity:1});
  $('#board').animate({opacity:1});
};

/**
 * @private
 */
Painter.prototype.set_players = function() {
  for (var i = 0; i < this.game.players.players.length; i++){
    var id = "#gamer" + (i + 1);
    if (this.game.players.get_current() === this.game.players.players[i]){
      $(id).css("color", "#000");
    } else {
      $(id).css("color", "#ddd");
    }
    $(id).html(this.game.players.players[i].name + " " + "<img src='png/" + this.game.players.players[i].chip.name + ".png'>");
  }
};

/**
 * @private
 */
Painter.prototype.set_end_game = function() {
  if (!this.game.end) {
    var text = "";
  } else {
    if (this.game.end === this.game.VICTORY) {
      var text = "Победил: " + this.game.players.get_current().name + ".";
    } else {
      var text = "Ничья.";
    }
  }
  
  $("#winner").html(text);
};

/**
 * @private
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
 * @private
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
 * @private
 */
Painter.prototype.set_chip = function(chip) {
  return " style=\"background-image:url('png/" + chip + ".png')\"";
};

/**
 * @private
 */
Painter.prototype.display = function(table_text) {
  $("#board").html(table_text);
};

  return Painter;
})();