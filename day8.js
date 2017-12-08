const converter = input => {
  return input
    .split('\n')
    .map(str => str.trim());
};

const addToRegister = (instruction, register = {}) => {
  let split = instruction.split(' ');
  let newName = split[0];
  let newName2 = split[4];
  if (!register[newName]) {
    register[newName] = 0;
  }
  if (!register[newName2]) {
    register[newName2] = 0;
  }
  return register;
};

const mapToArr = instruction => {
  let result = [];

  instruction
    .split(' ')
    .forEach((item, index) => {
      if (index !== 3) {
        if (item === 'inc') {
          result.push('+');
        } else if (item === 'dec') {
          result.push('-');
        } else {
          result.push(item);
        }
      }
  });
  return result;
};

const evalCondition = (instruction, register) => {
  let condiName = instruction[3];
  let condiOp = instruction[4];
  let condiNumber = instruction[5];
  let condition = register[condiName] + condiOp.concat(condiNumber);

  return eval(condition);
};

const execAction = (instruction, register) => {
  let name = instruction[0];
  let operator = instruction[1];
  let number = instruction[2];
  let action = register[name] + ' ' + operator + ' ' + number;
  let result = eval(action);

  register[name] = result;
  return register;
};

const execInstruction = (instruction, register) => {
  return evalCondition(instruction, register) ? execAction(instruction, register) : register;
};

const applyInstructions = input => {
  let result = converter(input);
  let register;
  
  result.forEach(instruction => register = addToRegister(instruction, register));
  result
    .map(instruction => mapToArr(instruction))
    .forEach(instruction => register = execInstruction(instruction, register));
  return register;
};

const getLargest = register => {
   let largest = null;
   for (key in register) {
     if (largest === null || register[key] > largest) {
       largest = register[key];
     } 
   }
   return largest;
};

const trackLargest = input => {
  let result = converter(input);
  let register;
  let largest = null;
  
  result.forEach(instruction => register = addToRegister(instruction, register));

  result
    .map(instruction => mapToArr(instruction))
    .forEach(instruction => {
      register = execInstruction(instruction, register);

      if (getLargest(register) > largest || largest === null) {
        largest = getLargest(register);
      }

    });

  return largest;
};

const getLargestRegister = input => getLargest(applyInstructions(input));

const getLargestEverRegister = input => trackLargest(input);

module.exports = {
  applyInstructions,
  converter,
  evalCondition,
  addToRegister,
  mapToArr,
  execAction,
  execInstruction,
  getLargest,
  getLargestRegister,
  getLargestEverRegister
};
