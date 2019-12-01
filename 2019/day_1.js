// --- Day 1: The Tyranny of the Rocket Equation ---

const parseInput = input =>
  input
    .split('\n')
    .map(str => str.trim())
    .map(str => Number(str));

const calculateFuel = mass => Math.floor(mass / 3) - 2;

const fuelCounterUpper = (input, fuelCalculator) => {
  return parseInput(input).reduce((fuelRequired, mass) => {
    fuelRequired += fuelCalculator(mass);
    return fuelRequired;
  }, 0);
};

const calculateFuelWithAdditional = mass => {};

module.exports = {
  parseInput,
  calculateFuel,
  fuelCounterUpper,
  calculateFuelWithAdditional,
};
