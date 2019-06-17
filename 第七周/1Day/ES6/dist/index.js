"use strict";

var a = "hello";

var bool = true;

var Point = function Point() {
	var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 10;
	var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 20;

	this.x = x;
	this.y = y;
};

var point = new Point();
console.log(point.x);
console.log(point.y);