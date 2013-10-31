/**
 * Обработчик событий
 * @constructor
 */
function Handler() {
};
var handler = new Handler;



/**
 * Получение событий от JQvery
 */
Handler.prototype.click_in_button = function() {
  $("button").on("click", function(event){
    if (event.target.id === "start") {
      handler.start();

    }

    if (event.target.id === "restart") {
      handler.restart();
    }

    return false;
  });
};

/**
 * Получение событий от JQvery
 */
Handler.prototype.click_in_cell = function(){
  $("#board").on("click", function(event){
    var element_role = "" + event.target.getAttribute('role');

    if (element_role.substring(0, 4) === "cell") {
      handler.set_new_turn(element_role[5], element_role[6]);
    }

    return false;
  });
};

handler.click_in_button();
handler.click_in_cell();

/**
 * Запуск новой игры с введенным количеством клеток стороны доски
 */
Handler.prototype.start = function() {
  lenth_board = document.getElementById("lenth-board").value;

  if (lenth_board < 1 || lenth_board > 10) {
    alert("Длина доски должна быть от 1 до 10");
  } else {
    app = new Application(lenth_board);
    app.run();
    app.painter.set_all();
    app.painter.game_visible();
  }
};

/**
 * По клику в доску получает сведения о ходе игрока
 */
Handler.prototype.set_new_turn = function(row, cell) {
  if (!app.board.rows[row][cell].chip && !app.game.end) {
    app.game.step(row, cell);
  }
};

/**
 * Удаление старой доски и запуск новой. Число клеток на стороне сохраняется
 */
Handler.prototype.restart = function() {
  var number_cell = app.board.size_board;
  delete app;
 	app = new Application(number_cell);
  app.run();
};