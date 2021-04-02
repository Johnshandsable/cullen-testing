const { TestScheduler } = require('@jest/core');
const sum = require('./sum.js');

test('should add two numbers together, and return the sum', () => {
  // this is where test code goes....
  const result = sum(83, 6);
  expect(result).toBe(89);
});

test('should add positive to negative ', () => {
  // this is where test code goes...
  const result = sum(83, -6);
  expect(result).toBe(77);
});

test('should add two negative numbers', () => {
  // this is where test code goes...
  const result = sum(-3, -6);
  expect(result).toBe(-9);
});

test('should fail if I give it only one argument', () => {
  //
  expect(() => {
    sum(-3);
  }).toThrow('Dont forget second argument!');
});

test('should convert number strings to numbers ', () => {
  //
  const result = sum('-3', '6');
  expect(result).toBe(3);
});
