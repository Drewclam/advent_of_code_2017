const parseInput = input => input.split('\n').map(wirePaths => wirePaths.split(','));

const calculateManhattan = ([p1, p2], [q1, q2] = [0, 0]) => Math.abs(p1 - q1) + Math.abs(p2 - q2);

const getResultCoord = (coord, instruction) => {
  let [direction, ...units] = instruction;
  units = Number(units.join(''));

  switch (direction) {
    case 'R':
      return [coord[0] + units, coord[1]];
    case 'L':
      return [coord[0] - units, coord[1]];
    case 'U':
      return [coord[0], coord[1] + units];
    case 'D':
      return [coord[0], coord[1] - units];
  }
};

const getRanges = instructions =>
  instructions.reduce(
    (coords, instruction) => {
      const prevCoord = coords[coords.length - 1];
      const nextCoord = getResultCoord(prevCoord, instruction);
      // Track steps
      let steps = prevCoord[2];
      steps += Math.abs(nextCoord[0] - prevCoord[0]) + Math.abs(nextCoord[1] - prevCoord[1]);

      coords.push([...nextCoord, steps]);
      return coords;
    },
    [[0, 0, 0]],
  );

const isWithinRange = (num, rangeMin, rangeMax) => {
  if (num <= rangeMax && num >= rangeMin) {
    return true;
  }

  return false;
};

const calculateSteps = (previousCoord, intersectionCoord, prevSteps) =>
  prevSteps +
  Math.abs(previousCoord[0] - intersectionCoord[0]) +
  Math.abs(previousCoord[1] - intersectionCoord[1]);

const getIntersection = (range1, range2) => {
  const [[x1, y1, prevSteps1], [x2, y2, nextSteps1]] = range1;
  const [[x3, y3, prevSteps2], [x4, y4, nextSteps2]] = range2;
  //       6,7x2
  //        | 6,5
  // 3,5 ------- 8,5
  //        |
  //       6,3x1
  if (
    x1 === x2 &&
    y3 === y4 &&
    isWithinRange(x1, Math.min(x3, x4), Math.max(x3, x4)) &&
    isWithinRange(y3, Math.min(y1, y2), Math.max(y1, y2))
  ) {
    const intersection = [x1, y3];
    const totalSteps =
      calculateSteps([x1, y1], intersection, prevSteps1) +
      calculateSteps([x3, y3], intersection, prevSteps2);
    return [...intersection, totalSteps];
  } else if (
    x3 === x4 &&
    y1 === y2 &&
    isWithinRange(x3, Math.min(x1, x2), Math.max(x1, x2)) &&
    isWithinRange(y1, Math.min(y3, y4), Math.max(y3, y4))
  ) {
    const intersection = [x3, y1];
    const totalSteps =
      calculateSteps([x1, y1], intersection, prevSteps1) +
      calculateSteps([x3, y3], intersection, prevSteps2);
    return [...intersection, totalSteps];
  }

  return null;
};

const getIntersections = (path1, path2, callback) => {
  let intersections = [];
  for (let i = 0; i < path1.length; i++) {
    const startCoord1 = path1[i];
    const endCoord1 = path1[i + 1];
    for (let j = 0; j < path2.length; j++) {
      const startCoord2 = path2[j];
      const endCoord2 = path2[j + 1];
      if (endCoord1 && endCoord2) {
        const intersection = getIntersection([startCoord1, endCoord1], [startCoord2, endCoord2]);
        intersections.push(intersection);
      }
    }
  }

  return intersections.filter(Boolean).filter(coord => !(coord[0] === 0 && coord[1] === 0));
};

const getClosestManhattanPort = (instructions1, instructions2) => {
  const manhattans = getIntersections(
    getRanges(instructions1),
    getRanges(instructions2),
  ).map(intersection => calculateManhattan(intersection));
  return Math.min(...manhattans);
};

const calculateStepsToIntersection = (instructions1, instructions2) =>
  getIntersections(getRanges(instructions1), getRanges(instructions2)).map(
    intersection => intersection[2],
  );

const calculateLeastSteps = (instructions1, instructions2) =>
  calculateStepsToIntersection(instructions1, instructions2).reduce((steps, current) => {
    if (!steps || steps > current) {
      steps = current;
    }

    return steps;
  });

module.exports = {
  calculateManhattan,
  getResultCoord,
  getIntersection,
  parseInput,
  getClosestManhattanPort,
  getRanges,
  getIntersections,
  calculateStepsToIntersection,
  calculateSteps,
  calculateLeastSteps,
};
