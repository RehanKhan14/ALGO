import { useEffect,useState } from "react";
import { InputLine } from "../components/Input/InputLine";
import { CCW } from "../components/line/CCW";
import { Cra } from "../components/line/Cra";
import { Research } from "../components/line/Research";
// import { AreLinesIntersecting } from "../hooks/line/useCCW";

interface Points{
    x:number,
    y:number,
}

export const Intersection = () =>{
    const [lineA, setLineA]=useState<Points[]>([]);
    const [lineB, setLineB]=useState<Points[]>([]);
    const [algo, setAlgo]=useState("");
    const [input, setInput]=useState(true);
    const switchIn=() =>{
        setInput(false);
    }
    const runAlgo = (coords:Points[],algorithm:string)=>{
        setLineA([coords[0],coords[1]]);
        setLineB([coords[2],coords[3]]);
        setAlgo(algorithm);
        switchIn();
        // useAreLinesIntersecting(lineA,lineB);
        // console.log(useAreLinesIntersecting(lineA,lineB));
    }
    useEffect(()=>{
        document.title="Geo Algorithmics | Intersection";
    },[]);
    // useEffect(()=>{
    //     AreLinesIntersecting(lineA,lineB);
    // },[setInput]);

    const getComponent=()=>{
        switch(algo){
            case 'CCW':
                return <CCW lineA={lineA} lineB={lineB}/>
            case 'Cra':
                return <Cra lineA={lineA} lineB={lineB}/>
            case 'Res':
                return <Research lineA={lineA} lineB={lineB}/>
        }
    }

    return (
        <>
            {/* Line Intersection */}
            {input && <InputLine runAlgo={runAlgo}/>}
            {!input && getComponent()}
            {/* {algo logic} */}
        </>
    );
}