/**
 * По клику в доску получает сведения о ходе игрока
 */
document.getElementById('board').onclick = function(event) {
  var clicking_element = event.target || event.srcElement,
      method_name = clicking_element.getAttribute('role');
  game.new_step(method_name.substring(5));
};

document.getElementById('gamers').onclick = function(event) {
  var clicking_element = event.target || event.srcElement,
      method_name = clicking_element.getAttribute('role');
  gamers.chenge_name(method_name);
};
