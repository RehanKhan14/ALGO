import { useAreLinesIntersecting } from "../../hooks/line/cramersrule";
import { LineGraph } from "../Graph/LineGraph";

interface Props{
    lineA:Line[],
    lineB:Line[],
}
interface Line{
    x:number,
    y:number,
}

export const Cra = (props:Props) => {
    const intersecting=useAreLinesIntersecting(props.lineA,props.lineB);
    
    return (
    <>
        <h1>Cramers Rule</h1>
        <p>The lines are {intersecting?" ":"not "}intersecting</p>
        <LineGraph data1={props.lineA} data2={props.lineB}/>
    </>
    );
}