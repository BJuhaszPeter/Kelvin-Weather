// --------------Kelvin Weather---------------
/*Deep in his mountain-side meteorology lab, the mad scientist Kelvin has mastered weather prediction.

Recently, Kelvin began publishing his weather forecasts on his website. However there’s a problem: All of his forecasts describe the temperature in Kelvin. */

// The forecast today is 293 Kelvin.

const kelvin = 293;

// Celsius is similar to Kelvin — the only difference is that Celsius is 273 degrees less than Kelvin.

const celsius = kelvin - 273;

// Calculate Fahrenheit

const fahrenheit = Math.floor(celsius * (9 / 5) + 32);

console.log('The temperature is TEMPERATURE degrees Fahrenheit: ' + fahrenheit);

console.log('The temperature is TEMPERATURE degrees Celsius: ' + celsius);

console.log('The temperature is TEMPERATURE degrees Kelvin: ' + kelvin);
