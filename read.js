var gpio = require('pi-gpio');

var inputPin = 16;	// header pin 16 = GPIO port 23
var inputPinTriggerValue = 1;

var ledPin = 18;


// Watch input pin
gpio.open(inputPin, "input pulldown", function(err) { 

	setInterval(function() {

		gpio.read(inputPin, function(err, value) {
			console.log(value);

			if (value == inputPinTriggerValue) {
				buzz();
			}
		})

	}, 100);

});


// Activate buzzer
function buzz() {

	// Flash LED
	flash(18, 200, 30000);

	// Play buzzer.mp3

}


// Flash LED
function flash(pin, interval, duration) {

	var intervalId;
	var durationId;

	// Open pin  for output 
	gpio.open(pin, "output", function(err) { 
		var on = 1; 
		console.log('GPIO '+pin+' is open. toggling LED every '+interval+' mS for ' +duration+ ' mS');
		intervalId = setInterval(function() { 
			
			gpio.write(pin, on, function() { 
				// toggle pin between high (1) and low (0) 
				on = (on + 1) % 2;
				console.log(on) 
			}); 
		}, interval); });

		durationId = setTimeout(function() { 
			clearInterval(intervalId); 
			clearTimeout(durationId); 
			console.log('10onds blinking completed'); 

			// turn off pin 16 and close pin
			gpio.write(pin, 0, function() { 
				gpio.close(pin); 
			}); 
		}, duration); // duration in mS



}