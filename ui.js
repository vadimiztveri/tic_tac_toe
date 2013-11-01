/**
 * Обработчик событий
 * @constructor
 */
function UI() {
};

UI.prototype.attach_handlers = function() {
  this.click_in_button();
  this.click_in_cell();
};

/**
 * Получение событий от JQvery
 */
UI.prototype.click_in_button = function() {
  var that = this;
  
  $("button").on("click", function(event){
    if (event.target.id === "start") {
      $(that).trigger('start');
    }

    if (event.target.id === "restart") {
      $(that).trigger('restart');
    }

    return false;
  });
};


/**
 * Получение событий от JQvery
 */
UI.prototype.click_in_cell = function(){
  var that = this;
  
  $("#board").on("click", function(event){
    var element_role = "" + event.target.getAttribute('role');

    if (element_role.substring(0, 4) === "cell") {
      $(that).trigger('cell', [element_role[5], element_role[6]]);
    }

    return false;
  });
};

UI.prototype.set_painter = function(game) {
  this.painter = new Painter(game);
};