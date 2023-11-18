// Utility function to calculate the orientation of three points
function orientation(p1, p2, p3) {
    const val = (p2.y - p1.y) * (p3.x - p2.x) - (p2.x - p1.x) * (p3.y - p2.y);
    if (val === 0) return 0; // Collinear
    return (val > 0) ? 1 : 2; // Clockwise or Counterclockwise
}

// Utility function to compare two points based on angle
function compareAngles(pivot, a, b) {
    const angleA = Math.atan2(a.y - pivot.y, a.x - pivot.x);
    const angleB = Math.atan2(b.y - pivot.y, b.x - pivot.x);
    if (angleA !== angleB) return angleA - angleB;
    return orientation(pivot, a, b) === 2 ? -1 : 1; // Compare angles and adjust for counterclockwise orientation
}

// Utility function to find the convex hull of a set of points using the Graham Scan algorithm
function grahamScan(points) {
    const n = points.length;
    if (n < 3) return points; // Convex hull is not possible with less than 3 points

    const hull = [];

    // Find the point with the lowest y-coordinate (and leftmost if tied)
    const pivot = points.reduce((min, p) => (p.y < min.y || (p.y === min.y && p.x < min.x)) ? p : min, points[0]);
    hull.push(pivot);

    // Sort the points based on polar angle with respect to the pivot
    points.sort((a, b) => compareAngles(pivot, a, b));

    for (let i = 0; i < n; i++) {
        while (hull.length > 1 && orientation(hull[hull.length - 2], hull[hull.length - 1], points[i]) !== 2) {
            hull.pop();
        }
        hull.push(points[i]);
    }

    return hull;
}

// Utility function to merge two convex hulls
function mergeHulls(hull1, hull2) {
    const mergedHull = [];
    let i = 0;
    let j = 0;

    while (i < hull1.length || j < hull2.length) {
        if (i === hull1.length) {
            mergedHull.push(hull2[j++]);
        } else if (j === hull2.length) {
            mergedHull.push(hull1[i++]);
        } else {
            if (compareAngles(hull1[0], hull1[i], hull2[j]) < 0) {
                mergedHull.push(hull1[i++]);
            } else {
                mergedHull.push(hull2[j++]);
            }
        }
    }

    return grahamScan(mergedHull);
}

// Chan's algorithm for convex hull
export const useChan=(points)=> {
    const k = 4; // Adjust this parameter based on the size of the input

    // Split points into subsets of size k
    const subsets = [];
    for (let i = 0; i < points.length; i += k) {
        const subset = points.slice(i, i + k);
        subsets.push(grahamScan(subset));
    }

    // Merge subsets until there is only one convex hull
    while (subsets.length > 1) {
        const mergedSubsets = [];
        for (let i = 0; i < subsets.length; i += 2) {
            const subset1 = subsets[i];
            const subset2 = (i + 1 < subsets.length) ? subsets[i + 1] : [];
            const mergedSubset = mergeHulls(subset1, subset2);
            mergedSubsets.push(mergedSubset);
        }
        subsets.length = 0; // Clear subsets
        subsets.push(...mergedSubsets);
    }

    return subsets[0];
}

// Example usage:
// const points = [
//     new Point(0, 0),
//     new Point(1, 1),
//     new Point(2, 2),
//     new Point(3, 3),
//     new Point(4, 4),
//     new Point(1, 2),
// ];

// const points= [{x:0, y:3}, {x:1, y: 1}, {x:2, y: 2}, {x:4, y: 4},
//                     {x:0, y: 0}, {x:1, y: 2}, {x:3, y: 1}, {x:3, y: 3}]

// const convexHull = chanAlgorithm(points);
// console.log(convexHull)