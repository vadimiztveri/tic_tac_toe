/**
 * Игрок 1
 * @constructor
 */
function Gamer1(chip, has_stroke) {
  this.chip = chip;
  this.name = "Игрок 1";
  this.victory = 0;
  this.first_step = true;
};

Gamer2.prototype.get_victory = function() {
  this.victory++;
}

Gamer2.prototype.chenge_name = function(name) {
  this.name = name;
}