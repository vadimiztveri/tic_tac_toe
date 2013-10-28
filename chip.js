/**
 * Фишка «Крестик» для игры
 * @constructor
 */
function Chip(name) {
  this.name = name;
};

Chip.prototype.redraw = function() {
  return " style=\"background-image:url('png/" + this.name + ".png')\"";
};