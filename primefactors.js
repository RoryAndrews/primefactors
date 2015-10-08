/**
 * Contains the primFactors function.
 * Created by Rory on 10/8/2015.
 */

/**
 * Finds the largest prime factor of the given num.
 * @param num The number which is being examined.
 * @returns {number} The largest prime factor.
 */
var primeFactors = function(num) {
  if(isNaN(num)) {
    throw new Error("Not a number.");
  }
  for(var i = 2; i < num; i++) {
    for(var j = 2; j < i; j++) {
      if(i % j === 0) {
        break;
      }
    }
    if(j === i) { //is prime
      if(num % i === 0) {
        return primeFactors(num / i);
      }
    }
  }
  return num;
};

