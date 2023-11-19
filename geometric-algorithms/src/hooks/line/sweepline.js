// class Point {
//     constructor(x, y) {
//       this.x = x;
//       this.y = y;
//     }
//   }
  
  class LineSegment {
    constructor(start, end) {
      this.start = start;
      this.end = end;
    }
  
    intersects(otherSegment) {
      const orientation1 = this.orientation(otherSegment.start);
      const orientation2 = this.orientation(otherSegment.end);
      const orientation3 = otherSegment.orientation(this.start);
      const orientation4 = otherSegment.orientation(this.end);
  
      return (
        orientation1 !== orientation2 &&
        orientation3 !== orientation4
      );
    }
  
    orientation(point) {
      const val = (this.end.y - this.start.y) * (point.x - this.end.x) - (this.end.x - this.start.x) * (point.y - this.end.y);
  
      if (val === 0) return 0;  // collinear
      return val > 0 ? 1 : 2;   // clockwise or counterclockwise
    }
  }
  
  // Example usage:
  
  // const line1 = new LineSegment(new Point(0, 0), new Point(4, 1));
  // const line2 = new LineSegment(new Point(5, 8), new Point(10, 20));
  
  // const intersection = line1.intersects(line2);

  // const data1=[{x:0,y:0},{x:1,y:1}]
  // const data2=[{x:0,y:1},{x:1,y:0}]

  export const useSweepLine=(data1, data2)=>{
    const line1 = new LineSegment(data1[0], data1[1]);
    const line2 = new LineSegment(data2[0], data2[1]);
  
    return line1.intersects(line2);
  }
  
  // console.log('Do the lines intersect?', useSweepLine(data1,data2));
  