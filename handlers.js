/**
 * По клику в доску получает сведения о ходе игрока
 */
document.getElementById('board').onclick = function(event) {
  var clicking_element = event.target || event.srcElement,
      method_name = clicking_element.getAttribute('role');
//      handler = click_handlers[method_name];
//  if (typeof(handler) !== 'undefined') {

  game.step.action(method_name.substring(5));

//    handler(event);
//  }
};

/*
var click_handlers = {
  "year-minus": function(event) {
    calendar.select_previous_year();
  },
};
*/