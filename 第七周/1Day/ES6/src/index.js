let a = "hello";

const bool = true;

const Point = function(x=10,y=20){
	this.x = x;
	this.y = y;
};

let point = new Point();
console.log(point.x);
console.log(point.y)
