var gpio = require('pi-gpio');

var gpioPin = 16;	// header pin 16 = GPIO port 23

gpio.open(gpioPin, "input pulldown", function(err) { 

	setInterval(function() {

		gpio.read(gpioPin, function(err, value) {
			console.log(value);
		})

	}, 100);

});
