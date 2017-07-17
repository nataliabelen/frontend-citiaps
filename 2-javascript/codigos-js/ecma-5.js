'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(function () {
  var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 2;
  return a * 2;
});
var doubleMap = function doubleMap(numbers) {
  return numbers.map(function (n) {
    return n * 2;
  });
};
var b = 2;

function anonima() {
  var b = 1;
  console.log(b);
}

if (true) {
  var _b = 3;
  console.log('b', _b);
}

var Poligono = function Poligono(alto, ancho) {
  _classCallCheck(this, Poligono);

  this.alto = alto;
  this.ancho = ancho;
  this.metodo = function (d) {
    return d * 3;
  };
};

var lista = [{ name: 'pedro', age: 10 }, { name: 'juan', age: 12 }, { name: 'diego', age: 13 }];

lista.map(function (i) {
  return i.name;
});
lista.map(function (a) {
  return a.age;
});
lista.map(function (a) {
  return a.age;
}).reduce(function (a, b) {
  return a + b;
});
lista.filter(function (n) {
  return n.age == 10;
});
lista.find(function (n) {
  return n.age == 10;
});
