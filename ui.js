/**
 * Обработчик событий
 * @constructor
 */
function UI() {
};

UI.prototype.attach_handlers = function() {
  this.report_click_in_start();
  this.report_click_in_restart();
  this.click_in_cell();
};

/**
 * Клик на кнопку старт
 */
UI.prototype.report_click_in_start = function() {
  var that = this,
      size_board;

  $("#start").on("click", function(event){
    size_board = Number($("#length-board").val());
    $(that).trigger('start', [size_board]);

    return false;
  });
};

/**
 * Клик на кнопку рестарт
 */
UI.prototype.report_click_in_restart = function() {
  var that = this;
  
  $("#restart").on("click", function(event){
    $(that).trigger('restart');

    return false;
  });
};


/**
 * Клик в поле на доске
 */
UI.prototype.click_in_cell = function(){
  var that = this;
  
  $("#board").on("click", function(event){
    var element_role = "" + $(event.target).attr('role');
    $(that).trigger('cell', [element_role[5], element_role[6]]);
    return false;
  });
};

