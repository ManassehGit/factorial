var assert = require("assert");
var Calculate =  require('../index.js');

describe('Calculate', () => {
  describe('.factorial', () => {
    it('checks if output of 5! is equal to 120', () => {
      const expectedResult = 120;

      const result = Calculate.factorial(5);
      assert.strictEqual(result, expectedResult);
    });

    it('checks for other input apart from 5', () => {
      const expectedResult = 6;

      const result = Calculate.factorial(3);
      assert.strictEqual(result, expectedResult);
    });

    it('covers the 0! edge case', () => {
      const expectedResult = 0;

      const result = Calculate.factorial(0);
      assert.strictEqual(result, expectedResult);
    });
  });
});