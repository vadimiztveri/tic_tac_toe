/**
 * @param {Number} номер ячейки от 0 до 8
 * @constructor
 */
function Cell(number) {
  this.empty = true;
  this.chip = 'undefined';
};

Cell.prototype.get_chip = function(chip) {
  this.empty = false;
  this.chip = chip;
}