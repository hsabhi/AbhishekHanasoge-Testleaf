
function isOddOrEven(number) {

    if (number % 2 === 0) {
      return "Even";
    } else {
      return "Odd";
    }
  }
  
  let checkNumber = 10;
  
  console.log("The number is:", isOddOrEven(checkNumber));