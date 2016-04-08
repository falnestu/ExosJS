var DEFAULT_LineWidth = 15;


var Circle = function function_name (config) {
    var _self = this;
    _self.name = config.name;
    _self.interval = config.interval;
    _self.value = config.value;
    _self.step = (Math.PI*2) / _self.interval;
    _self.radius = config.radius;
    _self.startAngle = - (Math.PI/2);
    _self.endAngle = (_self.value * _self.step) + _self.startAngle;
    _self.counterClockwise = false;
    _self.color = config.color;
    _self.counter = 0;
    
}

Circle.prototype.update = function(argument){
    var _self = this;
    _self.counter++;
    console.log(_self.name)
    console.log(_self.counter)
    console.log(_self.interval / 60)
    if (_self.counter == _self.interval / 60) {
        _self.counter = 0;
        _self.endAngle += _self.step;
        _self.value++;
        console.log(_self.value);
        if (_self.endAngle < (Math.PI * 2) + _self.startAngle) {
            _self.drawArc();
           /*drawArc({
                center : canvasCenter,
                radius : radius,
                startAngle : startAngle,
                endAngle : endAngle,
                lineWidth : counter % 2 ? 32 : 30,
                color : counter % 2 ? "white" : "black"
            })*/
        } else {
            _self.endAngle = _self.startAngle;
            _self.value = 0;
        }
    }
    
};

Circle.prototype.drawArc = function drawArc() {
    console.log("draw")
    var _self = this;
    console.log(this);
    context.beginPath();
    context.arc(canvasCenter.x, canvasCenter.y, _self.radius, _self.startAngle, _self.endAngle);
    context.lineWidth = DEFAULT_LineWidth;
    context.strokeStyle = _self.color;
    context.stroke();
};



var monCanvas = document.getElementById("myCanvas");
    monCanvas.width = 800; //window.innerWidth;
    monCanvas.height = 600; //window.innerHeight;

var context = monCanvas.getContext("2d");

var canvasCenter = {
	x : monCanvas.width / 2,
	y : monCanvas.height / 2
}
var offset = 60;

var radius = (monCanvas.height - offset) / 2;

var now = new Date();

/*var defaultLineWidth = context.lineWidth;*/
context.lineCap = "butt";

var circleSecond = new Circle({ 
    name : "second",
    radius : (monCanvas.height - offset) / 2,
    interval : 60,
    color : "#19E55E",
    value : now.getSeconds()
})

var circleMinute = new Circle({ 
    name : "minute",
    radius : (monCanvas.height - offset * 2) / 2,
    interval : 360,
    color : "#E54019",
    value : now.getMinutes()
})


circleSecond.drawArc();
circleMinute.drawArc();
/*var counter = 0;*/
var repeater = setInterval (function(){
    context.clearRect(0, 0, monCanvas.width, monCanvas.height);
    circleSecond.update();
    circleMinute.update();
}, 1000)



