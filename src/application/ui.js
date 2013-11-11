Application.UI = (function(){
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
    var board_size = Number($("#size-board").val());
    var win_length = Number($("#win_length").val());

    if (!this.errors(board_size, win_length)){
      $(this).trigger('start', [board_size, win_length]);
    } else {
      alert(this.errors(board_size, win_length));
    }

    return false;
  }.bind(this));
};

/**
 * Клик на кнопку старт
 * @private
 */
UI.prototype.errors = function(board_size, win_length) {
  if (
    board_size < 1 ||
    board_size > 10
  ) {
    return "Ширина доски должна быть от 1 до 10.";
  }
  if (win_length > board_size) {
    return "Длина победной линии из фишек не может быть длиннее ширины доски.";
  }
  if (win_length < 3) {
    return "Длина победной линии из фишек не может быть меньше 3.";
  }
}

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

  return UI;
})();