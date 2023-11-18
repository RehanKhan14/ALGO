import { useBruteForce } from "../../hooks/convexhull/bruteforce";
import { useSortByPolarAngle } from "../../hooks/convexhull/polarangle";
import { LineGraph } from "../Graph/LineGraph";

interface Props{
    data:Points[],
    custom:Points[]
}
interface Points{
    x:number,
    y:number,
}

export const VerifyConvexHull = (props:Props) => {
    const convexHull=useBruteForce(props.data);
    const sorted:Points[]=useSortByPolarAngle(convexHull);
    const userPoints:Points[]=useSortByPolarAngle(props.custom);

    let compare=true;
    if(sorted.length!=userPoints.length){
        compare=false;
    }
    else{
        for(let i=0;i<sorted.length;i++){
            if(sorted[i].x!=userPoints[i].x || sorted[i].y!=userPoints[i].y){
                compare=false;
                break;
            }
        }

    }
    
    return (
    <>
        <h1>Comparing Convex Hulls</h1>
        <p>The user generated convex hull is {compare?"correct.":"wrong"}</p>
        <LineGraph nameA={"Correct Hull"} dataPoints={props.data} data1={sorted} nameB={"User Hull"} data2={userPoints}/>
    </>
    );
}