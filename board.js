/**
 * Доска для игры
 * @constructor
 */
function Board(number_cells_on_side) {
  this.number_cells_on_side = number_cells_on_side;
  this.rows = this.create_rows();
};

/**
 * Создает массивы ячеек. Массивров по числу this.number_cells_on_side, в каждом массиве ячеек по числу this.number_cells_on_side
 */
Board.prototype.create_rows = function() {
  var rows = [];

  for (var i = 0; i < this.number_cells_on_side; i++) {
    var new_row = [];    
    for (var j = 0; j < this.number_cells_on_side; j++) {
      new_row.push(new Cell());
    }
    rows.push(new_row);
  }

  return rows;
};

Board.prototype.redraw = function() {
  var table_text = "";
  for (var i = 0; i < this.number_cells_on_side; i++) {
    table_text += "<tr>";
    for (var j = 0; j <this.number_cells_on_side; j++) {
      table_text += this.rows[i][j].redraw(i, j);
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

Board.prototype.get_chip = function(row, cell) {
  if (this.rows[row][cell].chip === undefined) {
    return false;
  } else {
    return this.rows[row][cell].chip.name;
  }
}


Board.prototype.contains_at = function (chip, i, row_or_cell) {
  var line = true;

  if (row_or_cell === "gorisont") {
    for (var j = 0; j < this.number_cells_on_side; j++){
      if (this.rows[i][j].chip != chip) {line = false;}
    }
  } else if (row_or_cell === "vertical") {
    for (var j = 0; j < this.number_cells_on_side; j++){
      if (this.rows[j][i].chip != chip) {line = false;}
    }
  } else {
    if (i = 0) {
      for (var j = 0; j < this.number_cells_on_side; j++){
        if (this.rows[j][j].chip != chip) {line = false;}
      }
    }
    if (i = 1) {
      for (var j = 0; j < this.number_cells_on_side; j++){
        if (this.rows[j][this.number_cells_on_side - 1 - j].chip != chip) {line = false;}
      }
    }
  }
  
  return line;
};