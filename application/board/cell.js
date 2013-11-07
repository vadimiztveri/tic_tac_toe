Application.Board.Cell = (function(){
/**
 * @param {Number} номер ячейки от 0 до 8
 * @constructor
 */
function Cell() {
};

/**
 * @privat
 */
Cell.prototype.set_chip = function(chip) {
  this.chip = chip;
};

/**
 * @privat
 */
Cell.prototype.set_win = function() {
  this.win = true;
};

  return Cell;
})();