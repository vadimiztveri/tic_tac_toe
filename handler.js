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
Handler.prototype.event_of_user = $("#game").on("click", function(event){
  var clicking_element = event.target;
  var element_role = "" + clicking_element.getAttribute('role');

  if (clicking_element.id === "start") {
    handler.start();
  }

  if (clicking_element.id === "restart") {
    handler.restart();
  }

  if (element_role.substring(0, 4) === "cell") {
    handler.set_new_turn(element_role[5], element_role[6]);
  }

  return false;
});

/**
 * Запуск новой игры с введенным количеством клеток стороны доски
 */
Handler.prototype.start = function() {
  lenth_board = document.getElementById("lenth-board").value;
  if (lenth_board < 1 || lenth_board > 10) {
    alert("Длина доски должна быть от 1 до 10");
  }
 else {
    app = new Application(lenth_board);
    app.run();
    app.game.redraw.game_visible();
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
  delete app.board;
 	app.board = new Board(number_cell);
  app.game = new Game(app.player1, app.board);
  app.game.redraw.set_all();
};