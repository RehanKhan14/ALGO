export const getDomain=(data)=>{
  const domain={
    minX:data[0].x,
    maxX:data[0].x,
    minY:data[0].y,
    maxY:data[0].y,
  }
  data.forEach(point=>{
    if(point.x<domain.minX){
      domain.minX=point.x;
    }
    else if(point.x>domain.maxX){
      domain.maxX=point.x;
    }
    if(point.y<domain.minY){
      domain.minY=point.y;
    }
    else if(point.y>domain.maxY){
      domain.maxY=point.y;
    }
  })
  return domain;
}