/**
 * По клику в доску получает сведения о ходе игрока
 */
document.getElementById('board').onclick = function(event) {
  var clicking_element = event.target || event.srcElement,
      method_name = clicking_element.getAttribute('role'),
      row = method_name[5],
      cell = method_name[6];

  if (app.board.rows[row][cell].chip != 'undefined' && !app.game.end) {
    app.game.step(row, cell);
  }
};

/**
 * По клику новая игра
 */
document.getElementById('restart').onclick = function(event) {
  var number_cell = app.board.size_board;
  delete app.board;
 	app.board = new Board(number_cell);
  app.board.redraw();
  app.game = new Game(app.player1);
  app.game.display_change_player_to("player1");
  document.getElementById("winner").innerHTML = "";
};

/**
 * По клику новая игра
 */
document.getElementById('start').onclick = function(event) {
  lenth_board = document.getElementById("lenth-board").value;
  if (lenth_board < 1 || lenth_board > 10) {
    alert("Длина доски должна быть от 1 до 10");
  }
 else {
    app = new Application(lenth_board);
    app.run();
    document.getElementById("game-area").style.display = "block";
  }
  return false;
};
