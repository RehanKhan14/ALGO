import { useChan } from "../../hooks/convexhull/chan";
import { useSortByPolarAngle } from "../../hooks/convexhull/polarangle";
import { HullGraph } from "../Graph/HullGraph";

interface Props{
    data:Points[]
}
interface Points{
    x:number,
    y:number,
}

export const Chan = (props:Props) => {
    const convexHull=useChan(props.data);
    const sorted:Points[]=useSortByPolarAngle(convexHull);
    
    return (
    <>
        <h1>Chan</h1>
        <HullGraph dataLine={sorted} dataScatter={props.data} />
    </>
    );
}