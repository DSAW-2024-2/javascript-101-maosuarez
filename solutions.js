// npm run-script test

function sum(a, b) {
  if (
    typeof a === "number" &&
    !isNaN(a) &&
    typeof b === "number" &&
    !isNaN(b)
  ) {
    return a + b;
  } else {
    console.log("Los datos de entrada no son adecuados");
  }
}

// Factorial of a Number
function factorial(n) {
  function procedimiento(result, paso) {
    if (paso === 0) {
      return result;
    } else {
      return procedimiento(result * paso, paso - 1);
    }
  }

  if (typeof n === "number" && !isNaN(n)) {
    if (n === 0) {
      return 1;
    }
    return procedimiento(1, n);
  } else {
    return "Los datos de entrada no son adecuados";
  }
}

// Find the Largest Number
function findLargest(arr) {
  let max = arr[0];
  if (typeof max === "number" && !isNaN(max)) {
    for (let i = 1; i < arr.length; i++) {
      if (max < arr[i]) {
        max = arr[i];
      }
    }
    return max;
  } else {
    console.log("Los datos de entrada no son adecuados");
  }
}

// Count Vowels in a String
function countVowels(str) {
  if (typeof str === "number" && !isNaN(str)) {
    console.log("Los datos de entrada no son adecuados");
  } else {
    let vowels = ["a", "e", "i", "o", "u"];
    let count = 0;
    for (let i = 0; i < str.length; i++) {
      if (vowels.includes(str[i].toLowerCase())) {
        count++;
      }
    }
    return count;
  }
}

// Check if a Number is Prime
function isPrime(n) {
  if (typeof n === "number" && !isNaN(n)) {
    if (n <= 1) {
      return false;
    }
    let count = 0;
    for (let i = 1; i <= n; i++) {
      if (n % i === 0) {
        count++;
      }
    }
    if (count != 2) {
      return false;
    }
    return true;
  } else {
    console.log("Los datos de entrada no son adecuados");
  }
}

module.exports = {
  sum,
  factorial,
  findLargest,
  countVowels,
  isPrime,
};
