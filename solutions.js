// Sum of Two Numbers
function sum(a, b) {
  return Number(a) + Number(b);
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

  if (n === 0) {
    return 1;
  }
  return procedimiento(1, n);
}

// Find the Largest Number
function findLargest(arr) {
  let max = 0;
  while (arr) {
    if (max < arr.pop()) {
      max = arr.pop();
    }
  }
  return max;
}

// Count Vowels in a String
function countVowels(str) {
  let vowels = ["a", "e", "i", "o", "u"];
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i].toLowerCase())) {
      count++;
    }
  }
  return count;
}

// Check if a Number is Prime
function isPrime(n) {
  if (n <= 1) {
    return false;
  }
  let count = 0;
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      count++;
    }
  }
  if (count == 2) {
    return true;
  }
  return false;
}

module.exports = {
  sum,
  factorial,
  findLargest,
  countVowels,
  isPrime,
};
