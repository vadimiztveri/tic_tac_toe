/**
 * @param {Number} номер ячейки от 0 до 8
 * @constructor
 */
function Cell() {
  this.win = false;
};

Cell.prototype.set_chip = function(chip) {
  this.chip = chip;
};

Cell.prototype.redraw = function(cell_number) {
  var role = "cell-" + cell_number,
      style = "",
      html_class = "";

  if (this.chip != undefined) {
    style = this.chip.redraw();
  }

  if (this.win) {
    html_class = "style='win'";
  }

  return "<td role='" + role + "' " + style + html_class + "></td>";
};