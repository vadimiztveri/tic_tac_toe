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