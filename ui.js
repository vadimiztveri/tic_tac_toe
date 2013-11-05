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
 * @private
 */
UI.prototype.report_click_in_start = function() {
  $("#start").on("click", function(event){
    var board_size = Number($("#length-board").val());
    $(this).trigger('start', [board_size]);

    return false;
  }.bind(this));
};

/**
 * Клик на кнопку рестарт
 * @private
 */
UI.prototype.report_click_in_restart = function() {
  $("#restart").on("click", function(event){
    $(this).trigger('restart');

    return false;
  }.bind(this));
};

/**
 * Клик в поле на доске
 * @private
 */
UI.prototype.click_in_cell = function(){
  $("#board").on("click", function(event){
    var element_role = "" + $(event.target).attr('role');
    $(this).trigger('cell', [element_role[5], element_role[6]]);
    return false;
  }.bind(this));
};