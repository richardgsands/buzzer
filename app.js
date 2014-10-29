var gpio = require('pi-gpio');

var intervalId;
var durationId;
var gpioPin = 16;	// header pin 16 = GPIO port 23

gpio.open(gpioPin, "output", function(err) {
	var on = 1;
	
});
