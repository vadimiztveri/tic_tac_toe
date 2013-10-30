/**
 * @param {Number} номер ячейки от 0 до 8
 * @constructor
 */
function Cell() {
  this.chip = undefined;
};

Cell.prototype.set_chip = function(chip) {
  this.chip = chip;
};

Cell.prototype.set_win = function(chip) {
  this.win = true;
};

Cell.prototype.redraw = function(row, cell) {
  var role = "cell-" + row + cell,
      style = "",
      html_class = "";

  if (this.chip != undefined) {
    style = this.chip.redraw();
  }

  if (this.win === true) {
    html_class = "class=win";
  }

  return "<td role='" + role + "' " + style + html_class + "></td>";
};