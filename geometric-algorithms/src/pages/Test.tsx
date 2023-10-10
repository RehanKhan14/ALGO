import { LineGraph } from "../components/LineGraph";
import { ScatterGraph } from "../components/ScatterGraph";

export const Test = () =>{
    const data = [
      { x: 100, y: 200},
      { x: 120, y: 100, z: 260 },
      { x: 170, y: 300, z: 400 },
      { x: 140, y: 250, z: 280 },
      { x: 150, y: 400, z: 500 },
      { x: 110, y: 280, z: 200 },
      {x: -1,y:-200,z:200}
    ]; 
    return (
        <>
            <h1>Scatter</h1>
            <ScatterGraph data={data}/>
         
            <h1>Line</h1>
            <LineGraph/>
        </>
    );
}