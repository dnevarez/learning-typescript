(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

exports.sayHello = function (name) {
    return "Hello from " + name;
};

},{}],2:[function(require,module,exports){
// Initial code to ensure all hookups are working.
"use strict";
// function hello(compiler: string){
//   console.log(`Hello from ${compiler}`);
// }
//
// hello("TypeScript")
// Structure more likely to be used in actual app.

var greet_1 = require("./greet");
function showHello(divName, name) {
    var elt = document.getElementById(divName);
    elt.innerText = greet_1.sayHello(name);
}
showHello("greeting", "Typescript");
// console.log(sayHello("TypeScript"));

},{"./greet":1}]},{},[2])


//# sourceMappingURL=bundle.js.map
