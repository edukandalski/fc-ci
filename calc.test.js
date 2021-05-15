const calc = require('./calc')

test('adds 1 + 2 to equal 3', () => {
  expect(calc.sum(1, 2)).toBe(3)
})

test('subtract 5 from 9 to equal 4', () => {
  expect(calc.subtract(9, 5)).toBe(4)
})

test('multiply 5 times 8 to equal 40', () => {
  expect(calc.multiply(5, 8)).toBe(40)
})

test('divide 33 by 11 to equal 3', () => {
  expect(calc.divide(33, 11)).toBe(3)
})
