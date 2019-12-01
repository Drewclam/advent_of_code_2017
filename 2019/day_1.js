// --- Day 1: The Tyranny of the Rocket Equation ---

const parseInput = input =>
  input
    .split('\n')
    .map(str => str.trim())
    .map(str => Number(str));

const calculateFuel = mass => Math.floor(mass / 3) - 2;

const fuelCounterUpper = input => {
  return parseInput(input).reduce((fuelRequired, mass) => {
    fuelRequired += calculateFuel(mass);
    return fuelRequired;
  }, 0);
};

module.exports = {
  parseInput,
  calculateFuel,
  fuelCounterUpper,
};
