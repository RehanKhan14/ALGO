// Calculate polar angle with respect to a reference point
const getAngle = (reference, point) => {
  const dx = point.x - reference.x;
  const dy = point.y - reference.y;
  return Math.atan2(dy, dx);
};

// Compare two points based on polar angle from the reference point to the points
const comparePoints = (reference, a, b) => {
  const angleA = getAngle(reference, a);
  const angleB = getAngle(reference, b);

  if (angleA < angleB) {
    return -1;
  } else if (angleA > angleB) {
    return 1;
  } else {
    // If angles are equal, compare distances
    const distanceA = Math.hypot(a.x - reference.x, a.y - reference.y);
    const distanceB = Math.hypot(b.x - reference.x, b.y - reference.y);

    return distanceA - distanceB;
  }
};

// Find the point with the minimum y-coordinate
const findMinYPoint = (points) => {
  return points.reduce((minPoint, point) =>
    point.y < minPoint.y ? point : minPoint
  );
};

// Sort array of points based on polar angle, starting with the point with the min y-coordinate
export const useSortByPolarAngle = (points) => {
  const sortedPoints = [];
  let remainingPoints = [...points];

  // Find the point with the minimum y-coordinate as the starting reference point
  const reference = findMinYPoint(remainingPoints);

  while (remainingPoints.length > 0) {
    // Sort the remaining points based on polar angle from the current reference point
    const sorted = remainingPoints.slice().sort((a, b) => comparePoints(reference, a, b));

    // Add the sorted points to the result
    sortedPoints.push(...sorted);

    // Update the remaining points for the next iteration
    remainingPoints = remainingPoints.filter(point => !sorted.includes(point));

    // Update the reference point for the next iteration
    if (remainingPoints.length > 0) {
      reference = sorted[0];
    }
  }
  sortedPoints.push(sortedPoints[0]);
  return sortedPoints;
};

// Example usage
// const points = [
//   { x: 0, y: 0 },
//   { x: 1, y: 1 },
//   { x: 2, y: 2 },
//   { x: 0, y: 3 },
//   { x: 3, y: 0 },
// ];

// const sortedPoints = sortByPolarAngle(points);
// console.log(sortedPoints);
