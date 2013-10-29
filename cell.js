/**
 * @param {Number} номер ячейки от 0 до 8
 * @constructor
 */
function Cell() {
};

Cell.prototype.set_chip = function(chip) {
  this.chip = chip;
};

Cell.prototype.set_win = function(chip) {
  this.win = true;
};

Cell.prototype.redraw = function(cell_number) {
  var role = "cell-" + cell_number,
      style = "",
      html_class = "";

  if (this.chip != undefined) {
    style = this.chip.redraw();
  }

  if (this.win === true) {
    console.log(this.win);
    html_class = "class=win";
  }

  return "<td role='" + role + "' " + style + html_class + "></td>";
};