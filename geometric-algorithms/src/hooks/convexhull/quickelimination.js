export const useQuickElimination=(points)=> {
  if (points.length < 3) {
    // Convex hull not possible with less than 3 points
    return points;
  }

  // Find the min and max points to form the initial line
  const minX = points.reduce((min, point) => (point.x < min.x ? point : min), points[0]);
  const maxX = points.reduce((max, point) => (point.x > max.x ? point : max), points[0]);

  const hull = [minX, maxX];

  // Divide the points into two sets based on the side of the line they lie on
  const dividePoints = (lineStart, lineEnd, points) => {
    const side = (point, start, end) => {
      return (end.x - start.x) * (point.y - start.y) - (end.y - start.y) * (point.x - start.x);
    };

    const maxDistancePoint = points.reduce((maxDistance, point) => {
      const currentDistance = side(point, lineStart, lineEnd);
      if (currentDistance > 0 && currentDistance > maxDistance.distance) {
        return { point, distance: currentDistance };
      }
      return maxDistance;
    }, { point: null, distance: 0 });

    if (maxDistancePoint.point) {
      dividePoints(lineStart, maxDistancePoint.point, points);
      hull.push(maxDistancePoint.point);
      dividePoints(maxDistancePoint.point, lineEnd, points);
    }
  };

  dividePoints(minX, maxX, points);
  dividePoints(maxX, minX, points);

  // Sort the points in the hull by their x-coordinate
  hull.sort((a, b) => a.x - b.x);

  return hull;
}

// Example usage:
// const points = [
//   { x: 1, y: 1 },
//   { x: 2, y: 5 },
//   { x: 3, y: 3 },
//   { x: 5, y: 3 },
//   { x: 6, y: 1 },
// ];

// const convexHull = quickHull(points);
// console.log(convexHull);
