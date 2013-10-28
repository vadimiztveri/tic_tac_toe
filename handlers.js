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
  delete app.board;
 	app.board = new Board();
  app.board.redraw();
  app.game = new Game(app.player1);
  app.game.display_chenge_player_to("player1");
  document.getElementById("winner").innerHTML = "";
};