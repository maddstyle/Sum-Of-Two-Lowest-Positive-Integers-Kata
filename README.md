# Sum-Of-Two-Lowest-Positive-Integers-Kata

function sumTwoSmallestNumbers(numbers) {  
 
  let positiveNumbers = [];
  
  for(let i = 0; i < numbers.length; i++) {
      if(numbers[i] >= 0) {
        positiveNumbers.push(numbers[i]);
      }
  }
 
  positiveNumbers.sort((a, b) => a - b);
  
  return positiveNumbers[0] + positiveNumbers[1]; 
}
