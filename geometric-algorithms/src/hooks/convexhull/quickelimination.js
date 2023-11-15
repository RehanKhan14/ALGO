class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

function ccw(p1, p2, p3) {
  return (p2.y - p1.y) * (p3.x - p2.x) - (p2.x - p1.x) * (p3.y - p2.y);
}

function quickHull(points) {
  if (points.length < 4) {
    // Convex hull is not possible with less than 4 points
    return points;
  }

  // Find the points with the lowest and highest x-coordinate, and lowest and highest y-coordinate
  let minX = points[0], maxX = points[0], minY = points[0], maxY = points[0];

  for (let i = 1; i < points.length; i++) {
    if (points[i].x < minX.x) {
      minX = points[i];
    }
    if (points[i].x > maxX.x) {
      maxX = points[i];
    }
    if (points[i].y < minY.y) {
      minY = points[i];
    }
    if (points[i].y > maxY.y) {
      maxY = points[i];
    }
  }

  // Form the convex hull using the quick elimination method
  const convexHull = [minX, maxX, minY, maxY];

  // Remove interior points
  for (let i = 0; i < points.length; i++) {
    if (points[i] !== minX && points[i] !== maxX && points[i] !== minY && points[i] !== maxY) {
      if (ccw(minX, minY, points[i]) > 0 || ccw(minY, maxX, points[i]) > 0 || ccw(maxX, maxY, points[i]) > 0 || ccw(maxY, minX, points[i]) > 0) {
        convexHull.push(points[i]);
      }
    }
  }

  return convexHull;
}

function bruteForceHull(points, quickHullPoints) {
  const hullSet = new Set(quickHullPoints.map(point => `${point.x},${point.y}`));

  for (let i = 0; i < points.length; i++) {
    const point = points[i];
    const key = `${point.x},${point.y}`;

    if (!hullSet.has(key)) {
      hullSet.add(key);
    }
  }

  return Array.from(hullSet).map(key => {
    const [x, y] = key.split(',').map(Number);
    return new Point(x, y);
  });
}

// Example usage
const points = [
  new Point(0, 0),
  new Point(1, 2),
  new Point(3, 1),
  new Point(4, 4),
  new Point(2, 5),
  new Point(5, 3)
];

const quickHullResult = quickHull(points);
const bruteForceResult = bruteForceHull(points, quickHullResult);

console.log("Quick Hull Result:", quickHullResult);
console.log("Brute Force Result:", bruteForceResult);
