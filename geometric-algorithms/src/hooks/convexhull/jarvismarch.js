
  
export const useJarvisMarch=(points)=> {
    // Find the leftmost point
    let a = points.reduce((min, point) => (point.x < min.x ? point : min), points[0]);
    let index = points.indexOf(a);
  
    // Selection sort
    let l = index;
    let result = [a];
  
    while (true) {
      let q = (l + 1) % points.length;
      for (let i = 0; i < points.length; i++) {
        if (i === l) continue;
        // Find the greatest left turn
        // In case of collinearity, consider the farthest point
        let d = direction(points[l], points[i], points[q]);
        if (d > 0 || (d === 0 && distanceSq(points[i], points[l]) > distanceSq(points[q], points[l]))) {
          q = i;
        }
      }
  
      l = q;
      if (l === index) break;
      result.push(points[q]);
    }
  
    return result;
  }
  
  // Helper function to calculate the squared distance between two points
  function distanceSq(p1, p2) {
    return Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2);
  }
  
  // Helper function to determine the direction of a turn (positive for left, negative for right, 0 for collinear)
  function direction(p1, p2, p3) {
    return (p2.x - p1.x) * (p3.y - p1.y) - (p3.x - p1.x) * (p2.y - p1.y);
  }
  
  // Example usage:
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
  
  // const convexHull = jarvisMarch(data);
  // console.log(convexHull);
  