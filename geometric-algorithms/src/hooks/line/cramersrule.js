function areLinesIntersecting(line1, line2) {
    const x1 = line1[0].x;
    const y1 = line1[0].y;
    const x2 = line1[1].x;
    const y2 = line1[1].y;

    const x3 = line2[0].x;
    const y3 = line2[0].y;
    const x4 = line2[1].x;
    const y4 = line2[1].y;

    const denominator = (x1 - x2) * (y3 - y4) - (y1 - y2) * (x3 - x4);

    if (denominator === 0) {
        // Lines are parallel
        return false;
    }

    const intersectX = ((x1 * y2 - y1 * x2) * (x3 - x4) - (x1 - x2) * (x3 * y4 - y3 * x4)) / denominator;
    const intersectY = ((x1 * y2 - y1 * x2) * (y3 - y4) - (y1 - y2) * (x3 * y4 - y3 * x4)) / denominator;

    // Check if the intersection point is within the line segments
    const isOnLine1 = intersectX >= Math.min(x1, x2) && intersectX <= Math.max(x1, x2) &&
                      intersectY >= Math.min(y1, y2) && intersectY <= Math.max(y1, y2);

    const isOnLine2 = intersectX >= Math.min(x3, x4) && intersectX <= Math.max(x3, x4) &&
                      intersectY >= Math.min(y3, y4) && intersectY <= Math.max(y3, y4);

    return isOnLine1 && isOnLine2;
}

// Example usage:
const line1 = [{x:0,y:0} ,{x:4,y:4}];
const line2 = [{x:8,y:4} ,{x:4,y:0}];

const result = areLinesIntersecting(line1, line2);
console.log(result); // Output: true