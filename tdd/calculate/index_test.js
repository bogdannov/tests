const assert = require('assert');
const Calculate =  require('../index.js')

describe('Calculate', () => {
    describe('.sum',() => {
        it('returns the sum of an array of numbers', () => {
            const expectedResult = 6;
            const inputArray = [1,2,3]

            const result = Calculate.sum(inputArray)

            assert.strictEqual(result, expectedResult);
        });

        it('returns the sum of a four item list', ()=>{
            const expectedResult = 22;
            const inputArray = [4,6,5,7];

            const result = Calculate.sum(inputArray);

            assert.strictEqual(result, expectedResult)

        });

        it('returns zero for an empty array', ()=>{
            const expectedResult = 0;
            const inputArray = [];

            const result = Calculate.sum(inputArray);

            assert.strictEqual(result, expectedResult)
        });

        it('Factorial method with 3 returns 6', () => {
            const expected = 6;
            const input = 3;
            const result = Calculate.factorial(input);

            assert.strictEqual(result, expected);
        })
        it('Factorial method with 3 returns 6', () => {
            const expected = 6;
            const input = 3;
            const result = Calculate.factorial(input);

            assert.strictEqual(result, expected);
        })

        it('Factorial method with 0 returns 1',() => {
            const expected = 1;
            const input = 0;
            const result = Calculate.factorial(input);

            assert.strictEqual(result, expected);
        })
    });
});
