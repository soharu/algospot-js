// number: a natural number greater than 1
function getProperDivisors(number) {
  const divisorSet = new Set([1]);
  for (let i = 2; i < number; ++i) {
    if (divisorSet.has(i)) {
      break;
    }

    if (number % i === 0) {
      divisorSet.add(i);
      divisorSet.add(Math.trunc(number / i));
    }
  }

  return [...divisorSet].sort((a, b) => a - b);
}

function generateBitArray(number, bitLength) {
  const bits = [];
  let n = number;

  for (let i = 0; i < bitLength; ++i) {
    bits.push(n & 1);
    n >>= 1;
  }

  return bits.reverse();
}

function * subsets(numbers) {
  const bitLength = numbers.length;
  const numberOfSubsets = (2 ** bitLength) - 1;
  for (let i = 1; i <= numberOfSubsets; ++i) {
    const bits = generateBitArray(i, bitLength);
    yield numbers.filter((n, i) => bits[i] === 1);
  }
}

function sum(numbers) {
  return numbers.reduce((acc, n) => acc + n, 0);
}

function isWeird(number) {
  const properDivisors = getProperDivisors(number);

  if (sum(properDivisors) < number) {
    return false;
  }

  for (const subset of subsets(properDivisors)) {
    if (sum(subset) === number) {
      return false;
    }
  }

  return true;
}

function check(number) {
  return isWeird(number) ? 'weird' : 'not weird';
}

if (require.main === module) {
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
  exports.generateBitArray = generateBitArray;
  exports.subsets = subsets;
  exports.sum = sum;
  exports.isWeird = isWeird;
  exports.check = check;
}
