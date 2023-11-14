import { useEffect,useState } from "react";
import { InputHull } from "../components/Input/InputHull";
interface Points{
    x:number,
    y:number
}

export const ConvexHull = () =>{
    const [data, setData]=useState<Points[]>([]);
    const [algo, setAlgo]=useState("");
    const [input, setInput]=useState(true);
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
        </>
    );
}