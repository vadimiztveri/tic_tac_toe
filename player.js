/**
 * Игрок
 * @constructor
 */
function Player(chip, name) {
  this.chip = chip;
  this.name = name;
};

Player.prototype.get_chip = function() {
  return this.chip.name;
};