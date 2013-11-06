Application.Player = (function(){
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

/**
 * @privat
 */
Player.prototype.set_next_player = function(next_player) {
  this.next_player = next_player;
};


  return Player;
})();