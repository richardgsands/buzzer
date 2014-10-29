var gpio = require('pi-gpio');

var intervalId;
var durationId;
var gpioPin = 16;	// header pin 16 = GPIO port 23

// open pin 16 for output 
gpio.open(gpioPin, "output", function(err) { 
	var on = 1; 
	console.log('GPIO '+gpioPin+' is open. toggling LED every 100 mS for 10s');
	intervalId = setInterval(function() { 
		
		gpio.write(gpioPin, on, function() { 
			// toggle pin between high (1) and low (0) 
			on = (on + 1) % 2; 
		}); 
	}, 100); });

	durationId = setTimeout(function() { 
		clearInterval(intervalId); 
		clearTimeout(durationId); 
		console.log('10onds blinking completed'); 
		gpio.write(gpioPin, 0, function() { 
			// turn off pin 16 
			gpio.close(gpioPin); 
			// then Close pin 16  and terminate the program
			process.exit(0); 
		}); 
	}, 10000); // duration in mS

