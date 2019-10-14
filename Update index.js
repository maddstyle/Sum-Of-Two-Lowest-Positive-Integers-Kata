function sumTwoSmallestNumbers(numbers) {  
 
  let onlyPositiveNumbers = [];
  for(let i = 0; i < numbers.length; i++) {
      if(numbers[i] >= 0) {
        onlyPositiveNumbers.push(numbers[i]);
      }
  }
 
  onlyPositiveNumbers.sort((a, b) => a - b);
  
  return onlyPositiveNumbers[0] + onlyPositiveNumbers[1]; 
}
