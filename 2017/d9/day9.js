


const garbageDetector = group => {
  let open;
  for (let i = 0; i < group.length; i++) {
    if (group.charAt(i) === '<') {
      for (let j = group.length - 1; j > 0; j++) {
        if (group.charAt(j) === '>') {
          return true;
        }
      }
    }
  }
  return false;
};



module.exports = {
  garbageDetector,
};