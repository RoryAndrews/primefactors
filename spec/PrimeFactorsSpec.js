/* globals primeFactors */

describe("Prime Factors", function() {

  it("Number 13195 should have the largest prime factor 29", function() {
    expect(primeFactors(13195)).toEqual(29);
  });

  it("Number 600851475143 should have the largest prime factor 6857", function() {
    expect(primeFactors(600851475143)).toEqual(6857);
  });

  it("should given an error if not given a number", function() {
    expect(function() {primeFactors("Hello");} ).toThrowError("Not a number.");
  });

});
