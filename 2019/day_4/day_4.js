// --- Day 4: Secure Container ---

const checkLength = number => String(number).length === 6;

const checkWithinRange = (number, min, max) => number >= min && number <= max;

const checkAdjacentDigits = number => {
  let previousDigit;
  let isValid = false;
  const digits = String(number).split('');

  for (let i = 0; i < digits.length; i++) {
    if (!previousDigit) {
      previousDigit = digits[i];
      continue;
    } else if (digits[i] === previousDigit) {
      isValid = true;
      break;
    }
    previousDigit = digits[i];
  }

  return isValid;
};

const checkAdjacentDigitsGrouped = number => {
  const digits = String(number).split('');
  let isValid = false;
  let newGroup = false;
  let previousDigit;

  for (let i = 0; i < digits.length; i++) {
    const digit = digits[i];
    if (!previousDigit) {
      previousDigit = digit;
      continue;
    }
    if (digit === previousDigit) {
      if (!isValid) {
        isValid = true;
        newGroup = true;
      } else {
        isValid = false;
        newGroup = false;
      }
    } else {
      if (!isValid && i < digits.length - 1) {
        isValid = false;
      } else if (isValid && i === digits.length - 1) {
        isValid = true;
      } else {
        isValid = false;
      }
    }

    previousDigit = digit;
  }

  return isValid;
};

const checkDecrease = number => {
  let previousDigit;
  let isValid = true;
  const digits = String(number).split('');

  for (let i = 0; i < digits.length; i++) {
    const currentDigit = Number(digits[i]);
    if (!previousDigit) {
      previousDigit = currentDigit;
      continue;
    } else if (currentDigit < previousDigit) {
      isValid = false;
    }
    previousDigit = currentDigit;
  }

  return isValid;
};

const isValidPassword = (number, min, max, validators) =>
  checkLength(number) &&
  checkWithinRange(number, min, max) &&
  checkDecrease(number) &&
  validators.every(validator => !!validator(number));

const countPasswords = (min, max, validators) => {
  let count = 0;
  for (let password = min; password <= max; password++) {
    if (isValidPassword(password, min, max, validators)) {
      count += 1;
    }
  }

  return count;
};

module.exports = {
  checkLength,
  checkWithinRange,
  checkAdjacentDigits,
  checkDecrease,
  countPasswords,
  isValidPassword,
  checkAdjacentDigitsGrouped,
};
