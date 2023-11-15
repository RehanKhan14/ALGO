
import { useJarvisMarch } from "../../hooks/convexhull/jarvismarch";
import { useSortByPolarAngle } from "../../hooks/convexhull/polarangle";
import { HullGraph } from "../Graph/HullGraph";

interface Props{
    data:Points[]
}
interface Points{
    x:number,
    y:number,
}

export const JarvisMarch = (props:Props) => {
    const convexHull=useJarvisMarch(props.data);
    const sorted:Points[]=useSortByPolarAngle(convexHull);
    
    return (
    <>
        <h1>Jarvis March</h1>
        <HullGraph dataLine={sorted} dataScatter={props.data} />
    </>
    );
}