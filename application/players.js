Application.Players = (function(){
/**
 * Коллекция игроков
 * @constructor
 */
function Players(names_chips) {
  this.names_chips = names_chips;
  this.players = this.create_players();
  this.current = this.players[0];
};

/**
 * @private
 */
Players.prototype.create_players = function() {
  var players = [],
      new_player;
  
  for(var i = 0; i < this.names_chips.length; i++){
    new_player = new Application.Players.Player(new Application.Board.Chip(this.names_chips[i]), ("Игрок " + (i + 1)));
    players.push(new_player);
  }
  
  this.set_next_players(players);
  
  return players;
};

/**
 * @private
 */
Players.prototype.set_next_players = function(players) {
  for(var i = 0; i < players.length; i++){
    if (i === (players.length - 1)){
      players[i].set_next_player(players[0]);
    } else {
      players[i].set_next_player(players[i + 1]);
    }
  }

}

/**
 * @private
 */
Players.prototype.change_player = function(){
  this.current = this.current.next_player;
}

  return Players;
})();