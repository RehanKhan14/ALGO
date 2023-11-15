import { useEffect,useState } from "react";
import { InputHull } from "../components/Input/InputHull";
import { BruteForce } from "../components/convex/BruteForce";
interface Points{
    x:number,
    y:number
}

export const ConvexHull = () =>{
    const [data, setData]=useState<Points[]>([]);
    const [algo, setAlgo]=useState("");
    const [input, setInput]=useState(true);
    const temp=[
                { x: 0, y: 0 },
                { x: 3, y: 0 },
                { x: 1, y: 1 },
                { x: 2, y: 2 },
                { x: 0, y: 3 }
                ];
    const switchIn=() =>{
        setInput(false);
    }
    const runAlgo = (coords:Points[],algorithm:string)=>{
        setData(coords);
        setAlgo(algorithm);
        switchIn();
        // useAreLinesIntersecting(lineA,lineB);
        console.log(coords);
    }
    useEffect(()=>{
        document.title="Geo Algorithmics | Convex Hull";
    },[])
    return (
        <>
            {input && <InputHull runAlgo={runAlgo}/>}
            {!input && <BruteForce data={data}/>}
        </>
    );
}