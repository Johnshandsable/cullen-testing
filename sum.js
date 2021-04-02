// Adds two numbers together and returns the sum of their values
function sum(a, b) {
  if (a === undefined || b === undefined) {
    throw new Error('Dont forget a second argument!');
  }
  return Number(a) + Number(b);
}

module.exports = sum;
