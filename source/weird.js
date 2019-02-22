'use strict';

function getProperDivisors(number) {
  const divisors = new Set();
  divisors.add(1);
  for (let i = 2, limit = number; i < limit; ++i) {
    if (number % i === 0) {
      divisors.add(i);
      limit = Math.trunc(number / i);
      divisors.add(limit);
    }
  }
  return [...divisors].sort((a, b) => b - a); // sort by descending order
}

function hasSameSumOfSubsets(number, divisors, pos, sum) {
  const exceeded = sum - number;

  if (exceeded === 0) {
    return true;
  }

  if (exceeded < 0) {
    return false;
  }

  if (pos === divisors.length) {
    return false;
  }

  return hasSameSumOfSubsets(number, divisors, pos + 1, sum - divisors[pos]) ||
    hasSameSumOfSubsets(number, divisors, pos + 1, sum);
}

function isWeird(number) {
  const divisors = getProperDivisors(number);
  const sum = divisors.reduce((acc, d) => acc + d, 0);
  if (sum <= number) {
    return false;
  }
  if (hasSameSumOfSubsets(number, divisors, 0, sum)) {
    return false;
  }
  return true;
}

function solve(n) {
  return isWeird(n) ? 'weird' : 'not weird';
}

if (require.main === module) {
  const inputs = [];
  require('readline')
    .createInterface({
      input: process.stdin
    })
    .on('line', line => {
      inputs.push(parseInt(line.trim(), 10));
    })
    .on('close', () => {
      inputs.slice(1, inputs[0] + 1)
        .forEach(n => console.log(solve(n)));
    });
} else {
  exports.getProperDivisors = getProperDivisors;
  exports.isWeird = isWeird;
}
