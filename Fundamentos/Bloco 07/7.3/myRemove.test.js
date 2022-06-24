const myRemove = require('./myRemove');

test('espera que ao passar [1, 2, 3, 4] e 3 retorne [1, 2, 4]', () => {
  expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
})