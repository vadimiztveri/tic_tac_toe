/**
 * @param {Number} номер ячейки от 0 до 8
 * @constructor
 */
function Cell() {
};

Cell.prototype.set_chip = function(chip) {
  this.chip = chip;
};

Cell.prototype.redraw = function(cell_number) {
  var id = "cell-" + cell_number,
      style = "";

  if (this.chip != undefined) {
    style = this.chip.redraw();
  }

  return "<td role='" + id + "' " + style + "></td>";
};