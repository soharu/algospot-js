'use strict';

function getProperDivisors(number) {
  const divisors = [];
  divisors.push(1);
  for (let i = 2, limit = number; i < limit; ++i) {
    if (number % i !== 0) {
      continue;
    }
    divisors.push(i);
    limit = Math.trunc(number / i);
    if (i === limit) {
      break;
    }
    divisors.push(limit);
  }
  return divisors.sort((a, b) => b - a); // sort by descending order
}

function hasSameSumOfSubsets(number, divisors, index, sumOfSubset) {
  if (sumOfSubset === number) {
    // 찾았다!
    return true;
  }
  if (sumOfSubset > number) {
    // 더할 필요가 없다
    return false;
  }
  if (index === divisors.length) {
    // 더할게 없다
    return false;
  }
  return hasSameSumOfSubsets(number, divisors, index + 1, sumOfSubset + divisors[index]) ||
    hasSameSumOfSubsets(number, divisors, index + 1, sumOfSubset);
}

function isWeird(number) {
  const divisors = getProperDivisors(number);
  const sum = divisors.reduce((acc, d) => acc + d, 0);
  return (sum > number) && (hasSameSumOfSubsets(number, divisors, 0, 0) === false);
}

if (require.main === module) {
  const check = number => isWeird(number) ? 'weird' : 'not weird';
  let k = 0;
  require('readline')
    .createInterface({
      input: process.stdin
    })
    .on('line', line => {
      const n = parseInt(line, 10);
      if (k === 0) {
        k = n;
      } else {
        console.log(check(n));
      }
    });
} else {
  exports.getProperDivisors = getProperDivisors;
  exports.isWeird = isWeird;
}
