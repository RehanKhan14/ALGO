// interface point{
//     x:number,
//     y:number
// }
function orientation(p, q, r) {
    const val = (q.y - p.y) * (r.x - q.x) - (q.x - p.x) * (r.y - q.y);

    if (val === 0) {
        return 0;
    }

    return (val > 0) ? 1 : 2; // Clockwise or Counter-clockwise
}

function onSegment(p, q, r) {
    return (q.x <= Math.max(p.x, r.x) && q.x >= Math.min(p.x, r.x) &&
            q.y <= Math.max(p.y, r.y) && q.y >= Math.min(p.y, r.y));
}

export const AreLinesIntersecting=(line1, line2)=> {
    const p1 = line1[0];
    const q1 = line1[1];
    const p2 = line2[0];
    const q2 = line2[1];

    const o1 = orientation(p1, q1, p2);
    const o2 = orientation(p1, q1, q2);
    const o3 = orientation(p2, q2, p1);
    const o4 = orientation(p2, q2, q1);

    // General case
    if (o1 !== o2 && o3 !== o4) {
        return true;
    }

    // Special Cases: Collinear points
    if (o1 === 0 && onSegment(p1, p2, q1)) return true;
    if (o2 === 0 && onSegment(p1, q2, q1)) return true;
    if (o3 === 0 && onSegment(p2, p1, q2)) return true;
    if (o4 === 0 && onSegment(p2, q1, q2)) return true;

    return false; // Doesn't fall in any of the above cases
}

// Example usage:
// const line1 = [{x:0,y:0} ,{x:4,y:4}];
// const line2 = [{x:0,y:4} ,{x:4,y:0}];

// const result = areLinesIntersecting(line1, line2);
// console.log(result); // Output: true
