// Function to find the convex hull using a brute force approach
export const BruteForce = points => {
    if (points.length < 3) {
      // Convex hull is not possible with less than 3 points
      return points;
    }
  
    const isClockwise = (a, b, c) => {
      return (b.x - a.x) * (c.y - b.y) - (b.y - a.y) * (c.x - b.x) > 0;
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
  // const points = [
  //   {x: 0, y: 0 },
  //   { x: 0, y: 4 },
  //   { x: -4, y: 0 },
  //   { x: 5, y: 0},
  //   { x: 0, y: -6},
  //   { x: 1, y: 0 },
  // ];
  // const data = [
  //   {x: 100, y: 200 },
  //   { x: 120, y: 100 },
  //   { x: 170, y: 300 },
  //   { x: 140, y: 250},
  //   { x: 150, y: 400},
  //   { x: 110, y: 280 },
  //   {x: -1,y:-200},
  //   { x: 100, y: 200 },
  // ];
  
  // const convexHull = convexHullBruteForce(data);
  // console.log(convexHull);
  