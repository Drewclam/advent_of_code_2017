const compare = (num, num2) => num === num2;

const converter = input => input.split('').map(char => Number(char));

const getCaptchaSum = (input, sum) => converter(input).reduce(sum, 0);

const sumNext = (sum, num, index, captcha) => {
  let num1 = captcha[index];
  let num2 = captcha[index + 1] ? captcha[index + 1] : captcha[0];

  return compare(num1, num2) ? (sum += num1) : sum;
};

const sumHalf = (sum, num, index, captcha) => {
  let half = captcha.length / 2;
  let remainder = index + half - captcha.length;
  
  if (index + half >= captcha.length) {
    if (num === captcha[remainder]) {
      return sum += num;
    } else {
      return sum;
    }
  } else {
    if (num === captcha[index + half]) {
      return sum += num;
    } else {
      return sum;
    }
  }
};

module.exports = {
  compare,
  getCaptchaSum,
  converter,
  sumNext,
  sumHalf,
};
