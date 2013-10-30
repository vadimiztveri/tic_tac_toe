/**
 * Рисует всю доску с фишками
 * @constructor
 */
function Redraw(board) {
  this.board = board;
};

Redraw.prototype.set_board = function() {
  var table_text = "";

  for (var i = 0; i < this.board.size_board; i++) {
    table_text += "<tr>";
    for (var j = 0; j <this.board.size_board; j++) {
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

  if (this.board.get_chip(row, cell)) {
    style = this.set_chip(this.board.get_chip(row, cell));
  }

  if (this.board.get_win(row, cell)) {
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