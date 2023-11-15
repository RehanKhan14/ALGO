import { useBruteForce } from "../../hooks/convexhull/bruteforce";
import { useSortByPolarAngle } from "../../hooks/convexhull/polarangle";
import { HullGraph } from "../Graph/HullGraph";

interface Props{
    data:Points[]
}
interface Points{
    x:number,
    y:number,
}

export const BruteForce = (props:Props) => {
    const convexHull=useBruteForce(props.data);
    const sorted:Points[]=useSortByPolarAngle(convexHull);
    
    return (
    <>
        {/* <p>The lines are {intersecting?" ":"not "}intersecting</p> */}
        <HullGraph dataLine={sorted} dataScatter={props.data} />
    </>
    );
}