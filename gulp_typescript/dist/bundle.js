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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvZ3JlZXQudHMiLCJzcmMvbWFpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7QUNBYSxnQkFBUSxHQUFHLFVBQUMsSUFBWTtJQUNuQyxNQUFNLENBQUMsZ0JBQWMsSUFBTSxDQUFDO0FBQzlCLENBQUMsQ0FBQTs7O0FDRkQsa0RBQWtEOztBQUVsRCxvQ0FBb0M7QUFDcEMsMkNBQTJDO0FBQzNDLElBQUk7QUFDSixFQUFFO0FBQ0Ysc0JBQXNCO0FBRXRCLGtEQUFrRDtBQUNsRCxzQkFBeUIsU0FBUyxDQUFDLENBQUE7QUFFbkMsbUJBQW1CLE9BQWUsRUFBRSxJQUFZO0lBQzlDLElBQU0sR0FBRyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDN0MsR0FBRyxDQUFDLFNBQVMsR0FBRyxnQkFBUSxDQUFDLElBQUksQ0FBQyxDQUFBO0FBQ2hDLENBQUM7QUFFRCxTQUFTLENBQUMsVUFBVSxFQUFFLFlBQVksQ0FBQyxDQUFBO0FBRW5DLHVDQUF1QyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJleHBvcnQgY29uc3Qgc2F5SGVsbG8gPSAobmFtZTogc3RyaW5nKSA9PiB7XG4gIHJldHVybiBgSGVsbG8gZnJvbSAke25hbWV9YDtcbn1cbiIsIi8vIEluaXRpYWwgY29kZSB0byBlbnN1cmUgYWxsIGhvb2t1cHMgYXJlIHdvcmtpbmcuXG5cbi8vIGZ1bmN0aW9uIGhlbGxvKGNvbXBpbGVyOiBzdHJpbmcpe1xuLy8gICBjb25zb2xlLmxvZyhgSGVsbG8gZnJvbSAke2NvbXBpbGVyfWApO1xuLy8gfVxuLy9cbi8vIGhlbGxvKFwiVHlwZVNjcmlwdFwiKVxuXG4vLyBTdHJ1Y3R1cmUgbW9yZSBsaWtlbHkgdG8gYmUgdXNlZCBpbiBhY3R1YWwgYXBwLlxuaW1wb3J0IHsgc2F5SGVsbG8gfSBmcm9tIFwiLi9ncmVldFwiO1xuXG5mdW5jdGlvbiBzaG93SGVsbG8oZGl2TmFtZTogc3RyaW5nLCBuYW1lOiBzdHJpbmcpIHtcbiAgY29uc3QgZWx0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZGl2TmFtZSk7XG4gIGVsdC5pbm5lclRleHQgPSBzYXlIZWxsbyhuYW1lKVxufVxuXG5zaG93SGVsbG8oXCJncmVldGluZ1wiLCBcIlR5cGVzY3JpcHRcIilcblxuLy8gY29uc29sZS5sb2coc2F5SGVsbG8oXCJUeXBlU2NyaXB0XCIpKTtcbiJdfQ==
