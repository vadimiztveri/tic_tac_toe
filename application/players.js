Application.Players = (function(){
/**
 * Коллекция игроков
 * @constructor
 */
function Players(names_chips) {
  this.names_chips = names_chips;
  this.players = this.create_players();
  this.current_index = 0;
};

/**
 * @private
 */
Players.prototype.create_players = function() {
  var players = [],
      new_player;
  
  for(var i = 0; i < this.names_chips.length; i++){
    new_player = this.player_factory(i);
    players.push(new_player);
  }
  
  return players;
};

/**
 * @private
 */
Players.prototype.player_factory = function(i) {
  return new Application.Players.Player(new Application.Board.Chip(this.names_chips[i]), ("Игрок " + (i + 1)));
}

/**
 * @private
 */
Players.prototype.change_player = function(){
  switch ( this.current_index ) {
    case this.players.length - 1:
      this.current_index = 0;
      break;
    
    default:
      this.current_index = this.current_index + 1;
  }
}

/**
 * @private
 */
Players.prototype.get_current = function(){
  return this.players[this.current_index];
}

  return Players;
})();