import { useGrahamScan } from "../../hooks/convexhull/grahamscan";
import { useSortByPolarAngle } from "../../hooks/convexhull/polarangle";
import { HullGraph } from "../Graph/HullGraph";

interface Props{
    data:Points[]
}
interface Points{
    x:number,
    y:number,
}

export const GrahamScan = (props:Props) => {
    const convexHull=useGrahamScan(props.data);
    const sorted:Points[]=useSortByPolarAngle(convexHull);
    
    return (
    <>
        <h1>Grahm Scan</h1>
        <HullGraph dataLine={sorted} dataScatter={props.data} />
    </>
    );
}