/**
 * Игрок 2
 * @constructor
 */
function Gamer2(chip, has_stroke) {
  this.chip = chip;
  this.name = "Игрок 2";
  this.victory = 0;
  this.first_step = false;
};

Gamer2.prototype.get_victory = function() {
  this.victory++;
}

Gamer2.prototype.chenge_name = function(name) {
  this.name = name;
}