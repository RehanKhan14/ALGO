import { useSweepLine } from "../../hooks/line/sweepline";
import { LineGraph } from "../Graph/LineGraph";

interface Props{
    lineA:Line[],
    lineB:Line[],
}
interface Line{
    x:number,
    y:number,
}

export const SweepLine = (props:Props) => {
    const intersecting=useSweepLine(props.lineA,props.lineB);
    
    return (
    <>
        <h1>Sweep Line Method</h1>
        <p>The lines are {intersecting?" ":"not "}intersecting</p>
        <LineGraph data1={props.lineA} data2={props.lineB}/>
    </>
    );
}