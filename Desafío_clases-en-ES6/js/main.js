"use strict";

var _carousel = _interopRequireDefault(require("./carousel.js"));

var _cliente = _interopRequireDefault(require("./cliente.js"));

var _impuestos = _interopRequireDefault(require("./impuestos.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var impuestos = new _impuestos["default"](1000, 500);
var impuestos1 = new _impuestos["default"](329042000, 1000);
var cliente = new _cliente["default"]('Ramira Ramos', impuestos);
var cliente1 = new _cliente["default"]('Rodomira Rozas', impuestos1);
console.log('Clientes e impuestos');
console.log('------------');
console.log('Nombre: ' + cliente.nombre);
console.log('Impuesto: ' + cliente.calcularImpuesto());
console.log('Nombre: ' + cliente1.nombre);
console.log('Impuesto: ' + cliente1.calcularImpuesto());