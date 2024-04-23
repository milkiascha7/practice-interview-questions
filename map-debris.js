// Map the Debris
// According to Kepler's Third Law, the orbital period  T
//   of two point masses orbiting each other in a circular or elliptic orbit is:

// T=2πa3μ−−−√
 
// a - is the orbit's semi-major axis
// μ=GM - is the standard gravitational parameter
// G - is the gravitational constant,
// M - is the mass of the more massive body.

// Return a new array that transforms the elements' average altitude into their orbital periods (in seconds).

// example

// orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]) should return [{name: "sputnik", orbitalPeriod: 86400}]

function orbitalPeriod(arr) {
    const GM = 398600.4418;
    const earthRadius = 6367.4447;
    const a = 2 * Math.PI;
    const newArr = [];

    // the formula is T = 2 * PI (SquareRoot of a^3/u)
  
    const getOrbPeriod = function(obj) {
        console.log("object is", obj)
      const c = Math.pow(earthRadius + obj.avgAlt, 3);
      const b = Math.sqrt(c / GM);
      const orbPeriod = Math.round(a * b);
      // create new object
      return {name: obj.name, orbitalPeriod: orbPeriod};
    };
  
    for (let elem in arr) {
      newArr.push(getOrbPeriod(arr[elem]));
    }
  
    return newArr;
  }
  
  // test here
  orbitalPeriod([{ name: "sputnik", avgAlt: 35873.5553 }]);