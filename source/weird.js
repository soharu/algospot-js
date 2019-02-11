const primitiveWeridNumbers = new Set([
  70, 836, 4030, 5830, 7192, 7912, 9272, 10792, 17272, 45356, 73616, 83312, 91388, 113072
]);

function generatePrimeNumberTable(numberLimit) {
  const notPrime = 1;
  const table = new Array(numberLimit + 1);
  for (let i = 0; i <= numberLimit; ++i) {
    table[i] = 0;
  }

  // 0 and 1 is not a prime number
  table[0] = notPrime;
  table[1] = notPrime;

  for (let i = 1; i <= numberLimit; ++i) {
    if (table[i] === 1) {
      continue;
    }

    for (let j = i * 2; j <= numberLimit; j += i) {
      table[j] = notPrime;
    }
  }

  return table;
}

const isPrimeNumber = (function () {
  const primeNumberTable = generatePrimeNumberTable(3000);
  return number => primeNumberTable[number] === 0;
})();

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

function sum(numbers) {
  return numbers.reduce((acc, n) => acc + n, 0);
}

function isWeird(number) {
  // It is not known if any odd weird numbers exist. If so, they must be greater than 10^21
  if (number % 2 === 1) {
    return false;
  }

  if (primitiveWeridNumbers.has(number)) {
    return true;
  }

  const properDivisors = getProperDivisors(number);
  if (sum(properDivisors) < number) {
    return false;
  }

  const pwns = [...primitiveWeridNumbers];
  for (let i = 0; i < pwns.length; ++i) {
    if (number % pwns[i] !== 0) {
      continue;
    }

    const p = Math.trunc(number / pwns[i]);
    if (isPrimeNumber(p) && p > sum(getProperDivisors(p))) {
      return true;
    }
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
  exports.generatePrimeNumberTable = generatePrimeNumberTable;
  exports.getProperDivisors = getProperDivisors;
  exports.sum = sum;
  exports.isWeird = isWeird;
}
