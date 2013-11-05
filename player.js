/**
 * Игрок
 * @constructor
 */
function Player(chip, name) {
  this.chip = chip;
  this.name = name;
};

/**
 * @privat
 */
Player.prototype.get_chip = function() {
  return this.chip.name;
};