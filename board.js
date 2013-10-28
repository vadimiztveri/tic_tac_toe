/**
 * Доска для игры
 * @constructor
 */
function Board() {
  this.rows = this.create_rows();
};

/**
 * Три массива по 3 ячейки
 */
Board.prototype.create_rows = function() {
  var new_row = [];
      rows = [];

  for (var i = 0; i < 3; i++) {
    new_row = [new Cell(), new Cell(), new Cell()];
    rows.push(new_row);
  }
  return rows;
};

Board.prototype.redraw = function() {
  var table_text = "";
  for (var i = 0; i < 3; i++) {
    table_text += "<tr>";
    for (var j = 0; j <3; j++) {
      table_text += this.rows[i][j].redraw("" + i + j);
    }
    table_text += "</tr>";
  }
  this.display(table_text);
};

/**
 * Вставляет игровую доску в HTML
 */
Board.prototype.display = function(table_text) {
  document.getElementById("board").innerHTML = table_text;
};