// Getter functions are meant to simply return (get) the value of an object's private variable to the user
// without the user directly accessing the private variable.

// Setter functions are meant to modify (set) the value of an object's private variable based on the value passed into the setter function.
// This change could involve calculations, or even overwriting the previous value completely.

// Only change code below this line
class Thermostat {
  constructor(fahrenheitTemp) {
    this._fahrenheitTemp = fahrenheitTemp;
  }
  get temperature() {
    return (5 / 9) * (this._fahrenheitTemp - 32);
  }
  set temperature(updateTemp) {
    return (this._fahrenheitTemp = (updateTemp * 9.0) / 5 + 32);
  }
}

// Only change code above this line

const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in Celsius
thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius
