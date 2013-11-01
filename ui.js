/**
 * Обработчик событий
 * @constructor
 */
function UI() {
};


/**
 * Получение событий от JQvery
 */
UI.prototype.click_in_button = function() {
  $("button").on("click", function(event){
    if (event.target.id === "start") {
      app.ui.start();
    }

    if (event.target.id === "restart") {
      app.ui.restart();
    }

    return false;
  });
};

/**
 * Получение событий от JQvery
 */
UI.prototype.click_in_cell = function(){
  $("#board").on("click", function(event){
    var element_role = "" + event.target.getAttribute('role');

    if (element_role.substring(0, 4) === "cell") {
      app.ui.set_new_turn(element_role[5], element_role[6]);
    }

    return false;
  });
};

UI.prototype.set_painter = function(game) {
  this.painter = new Painter(game);
}

/**
 * Запуск новой игры с введенным количеством клеток стороны доски
 */
UI.prototype.start = function() {
  var length_board = Number($("#length-board").val());

  if (length_board < 1 || length_board > 10) {
    alert("Длина доски должна быть от 1 до 10");
  } else {
    app.run(length_board);
  }
};

/**
 * По клику в доску получает сведения о ходе игрока
 */
UI.prototype.set_new_turn = function(row, cell) {
  if (!app.board.rows[row][cell].chip && !app.game.end) {
    app.game.step(row, cell);
  }
};

/**
 * Удаление старой доски и запуск новой. Число клеток на стороне сохраняется
 */
UI.prototype.restart = function() {
  var number_cell = app.board.size_board;
  delete app;
 	app = new Application();
  app.run(number_cell);
};