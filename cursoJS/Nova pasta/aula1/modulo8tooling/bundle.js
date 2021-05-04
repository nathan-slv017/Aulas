"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Casa = function Casa(pessoa1, pessoa2, pessoa3) {
  _classCallCheck(this, Casa);

  this.pessoa1 = pessoa1;
  this.pessoa2 = pessoa2;
  this.pessoa3 = pessoa3;
};

var casa = new Casa('pai', 'mae', 'filho');
