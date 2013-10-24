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
  console.log("Ну?");
  var table_text = "";
  for (var i = 0; i < 3; i++) {
    table_text += "<tr>";
    for (var j = 0; j <3; j++) {
      table_text += "<td></td>";
    }
    table_text += "</tr>";
  }
  document.getElementById("board").innerHTML = table_text;
}

/**
 * @param {Number} номер ячейки от 0 до 8
 * @constructor
 */
function Cell(number) {
  this.empty = true;
  this.chip = 'undefined';
};