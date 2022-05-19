// TODO: Write your function in this file
function fizzBuzz (lower, upper) {
    const outputArray = []
  
    for (let i = lower; i <= upper; i++) {
      const number = i
  
      if (number % 3 === 0 && number % 5 === 0) {
        outputArray.push('FizzBuzz')
      } else if (number % 3 === 0) {
        outputArray.push('Fizz')
      } else if (number % 5 === 0) {
        outputArray.push('Buzz')
      } else {
        outputArray.push(number)
      }
    }
  
    return outputArray
  }

// TODO: Change undefined below to the name of your function
module.exports = fizzBuzz