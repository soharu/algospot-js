function getProperDivisors(number) {
  const divisors = new Set([1]);
  for (let i = 2, n = number; i < n; ++i) {
    if (number % i === 0) {
      divisors.add(i);
      n = Math.trunc(number / i);
      divisors.add(n);
    }
  }
  return [...divisors].sort((a, b) => b - a); // sort by descending order
}

function isExistSubset(number, divisors, index, acc) {
  if (acc === number) {
    return true;
  }
  if (index >= divisors.length) {
    return false;
  }
  if (acc < number) {
    return isExistSubset(number, divisors, index + 1, acc + divisors[index]) ||
      isExistSubset(number, divisors, index + 1, acc);
  }
  return false;
}

function isWeird(number) {
  const divisors = getProperDivisors(number);
  const sum = divisors.reduce((acc, d) => acc + d, 0);
  if (sum > number && isExistSubset(number, divisors, 0, 0) === false) {
    return true;
  }
  return false;
}

if (require.main === module) {
  const check = number => isWeird(number) ? 'weird' : 'not weird';
  const inputs = [];
  require('readline')
    .createInterface({
      input: process.stdin
    })
    .on('line', line => {
      inputs.push(line.trim());
    })
    .on('close', () => {
      for (let i = 1; i < inputs.length; ++i) {
        console.log(check(parseInt(inputs[i], 10)));
      }
    });
} else {
  exports.getProperDivisors = getProperDivisors;
  exports.isWeird = isWeird;
}
