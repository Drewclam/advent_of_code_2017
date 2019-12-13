const parseInput = input =>
  input.split("\n").map(wirePaths => wirePaths.split(","));

const calculateManhattan = ([p1, p2], [q1, q2]) =>
  Math.abs(p1 - q1) + Math.abs(p2 - q2);

const parseInstruction = (coord, instruction) => {
  let [direction, ...units] = instruction;
  units = Number(units.join(""));

  switch (direction) {
    case "R":
      return [coord[0] + units, coord[1]];
    case "L":
      return [coord[0] - units, coord[1]];
    case "U":
      return [coord[0], coord[1] + units];
    case "D":
      return [coord[0], coord[1] - units];
  }
};

const parseInstructions = instructions => {
  return instructions.reduce(
    (coords, instruction) => {
      const newCoords = parseInstruction(
        coords[coords.length - 1],
        instruction
      );
      coords.push(newCoords);
      return coords;
    },
    [[0, 0]]
  );
};

const getIntersection = (range1, range2) => {
  console.log(range1, range2);
  if (!range1 || !range2) {
    return [];
  }
  const [[x1, y1], [x2, y2]] = range1;
  const [[x3, y3], [x4, y4]] = range2;
  if (x1 === x2 && y3 === y4) {
    return [x1, y3];
  }
  return [];
};

const getIntersections = (path1, path2) => {
  let intersections = [];
  for (let i = 0; i < path1.length; i++) {
    for (let k = 0; k < path2.length; k++) {
      intersections = intersections.concat(
        getIntersection([path1[i], path1[i + 1]], [path2[k], path2[k + 1]])
      );
    }
  }
  return intersections;
};

const getClosestManhattanPort = (instructions1, instructions2) => {
  return getIntersections(instructions1, instructions2);
};

module.exports = {
  calculateManhattan,
  parseInstruction,
  getIntersection,
  parseInput,
  getClosestManhattanPort,
  parseInstructions,
  getIntersections
};
