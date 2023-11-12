  
  function findMinY(points) {
    let minY = Infinity;
    let minIndex = 0;
  
    for (let i = 0; i < points.length; i++) {
      const point = points[i];
  
      if (point.y < minY || (point.y === minY && point.x < points[minIndex].x)) {
        minY = point.y;
        minIndex = i;
      }
    }
  
    return { point: points[minIndex], index: minIndex };
  }
  
  function polarComparator(p1, p2, p0) {
    const d = direction(p0, p1, p2);
  
    if (d < 0) return -1;
    if (d > 0) return 1;
  
    return distanceSq(p1, p0) < distanceSq(p2, p0) ? -1 : 1;
  }
  
  function grahamScan(points) {
    const { point: p0, index } = findMinY(points);
  
    // Swap p0 with points[index]
    [points[0], points[index]] = [points[index], points[0]];
  
    const sortedPolar = points
      .slice(1)
      .sort((p1, p2) => polarComparator(p1, p2, p0));
  
    const toRemove = [];
  
    for (let i = 0; i < sortedPolar.length - 1; i++) {
      const d = direction(sortedPolar[i], sortedPolar[i + 1], p0);
  
      if (d === 0) {
        toRemove.push(i);
      }
    }
  
    const cleanedPolar = sortedPolar.filter((_, index) => !toRemove.includes(index));
  
    const m = cleanedPolar.length;
  
    if (m < 2) {
      console.log('Convex hull is empty');
    } else {
      const stack = [points[0], cleanedPolar[0], cleanedPolar[1]];
      let stackSize = 3;
  
      for (let i = 2; i < m; i++) {
        while (true) {
          const d = direction(stack[stackSize - 2], stack[stackSize - 1], cleanedPolar[i]);
  
          if (d < 0) {
            break;
          } else {
            stack.pop();
            stackSize -= 1;
          }
        }
  
        stack.push(cleanedPolar[i]);
        stackSize += 1;
      }
  
      return stack;
    }
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
  const data = [
    {x: 100, y: 200 },
    { x: 120, y: 100 },
    { x: 170, y: 300 },
    { x: 140, y: 250},
    { x: 150, y: 400},
    { x: 110, y: 280 },
    {x: -1,y:-200},
    { x: 100, y: 200 },
  ];
  
  const convexHull = grahamScan(data);
  console.log(convexHull);
  