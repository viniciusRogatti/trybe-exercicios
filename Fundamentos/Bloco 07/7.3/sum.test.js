const sum = require('./sum');

test('expect whe sum of 4 and 5 equals 9', () => {
  expect(sum(4,5)).toBe(9);
});
test('expect whe sum of 0 and 0 equals 0', () => {
  expect(sum(0,0)).toBe(0);
});
test('expect whe return an error if the parameter received is not a number', () => {
  expect(() => sum(4,'5')).toThrow(Error);
});
test('expect whe message error is "parameters must be numbers"', () => {
  expect(() => sum(4,'5')).toThrow('parameters must be numbers');
});