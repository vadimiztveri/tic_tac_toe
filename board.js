/**
 * Доска для игры
 * @constructor
 */
function Board() {
  this.rows = this.create_rows();
};

Board.prototype.create_rows = function() {
  var new_row = [];
      rows = [];

  for (var i = 0; i < 3; i++) {
    for (var j = 0; j <3; j++) {
      new_row.push(new Cell());
    }
    rows.push(new_row);
  }
  return rows;
}

Board.prototype.redraw = function() {
  var table_text = "";
  for (var i = 0; i < 3; i++) {
    table_text += "<tr>";
    for (var j = 0; j <3; j++) {
      var id_name = "cell-" + i + j;
      table_text += "<td id=" + id_name + " role=" + id_name + "></td>";
    }
    table_text += "</tr>";
  }
  document.getElementById("board").innerHTML = table_text;
}
