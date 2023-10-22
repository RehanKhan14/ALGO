// Function to find the convex hull using a brute force approach
function convexHullBruteForce(points) {
    if (points.length < 3) {
      // Convex hull is not possible with less than 3 points
      return points;
    }
  
    const isClockwise = (a, b, c) => {
      return (b[1] - a[1]) * (c[0] - b[0]) - (b[0] - a[0]) * (c[1] - b[1]) > 0;
    };
  
    const uniquePoints = [...new Set(points.map(JSON.stringify))].map(JSON.parse);
  
    const hull = [];
    for (let i = 0; i < uniquePoints.length; i++) {
      for (let j = 0; j < uniquePoints.length; j++) {
        if (i !== j) {
          let line = [uniquePoints[i], uniquePoints[j]];
          let isConvex = true;
  
          for (let k = 0; k < uniquePoints.length; k++) {
            if (k !== i && k !== j) {
              if (isClockwise(line[0], line[1], uniquePoints[k])) {
                isConvex = false;
                break;
              }
            }
          }
  
          if (isConvex) {
            hull.push(line[0]);
            if (!hull.some((point) => point[0] === line[1][0] && point[1] === line[1][1])) {
              hull.push(line[1]);
            }
          }
        }
      }
    }
  
    return [...new Set(hull.map(JSON.stringify))].map(JSON.parse);
  }
  
  // Example usage:
  const points = [
    [1, 1],
    [2, 2],
    [2, 4],
    [3, 3],
    [4, 2],
    [4, 4],
    [5, 1],
    [5, 3]
  ];
  
  const convexHull = convexHullBruteForce(points);
  console.log(convexHull);
  