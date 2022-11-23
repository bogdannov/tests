const Calculate = {
    sum(inputArray) {
        if (inputArray.length === 0) {
            return 0;
        }
        return inputArray.reduce((sum, value) => {
            return sum + value;
        })
    },

    factorial(input) {
        let factorialNumber = input;
        let result = input;
        while(factorialNumber > 1) {
            factorialNumber = factorialNumber - 1;
            result = result * factorialNumber;
        }

        return result;
    }
}

module.exports = Calculate;

