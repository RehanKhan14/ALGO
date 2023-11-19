import { useEffect,useState } from "react";
import { InputHull } from "../components/Input/InputHull";
import { BruteForce } from "../components/convex/BruteForce";
import { GrahamScan } from "../components/convex/GrahamScan";
import { JarvisMarch } from "../components/convex/JarvisMarch";
import { QuickElimination } from "../components/convex/QuickElimination";
import { Chan } from "../components/convex/Chan";
import { VerifyConvexHull } from "../components/convex/VerifyConvex";
import style from "./css/Intersection.module.scss";
interface Points{
    x:number,
    y:number
}

export const ConvexHull = () =>{
    const [data, setData]=useState<Points[]>([]);
    const [userData, setUserData]=useState<Points[]>([]);
    const [algo, setAlgo]=useState("");
    const [input, setInput]=useState(0); 
    const setInCompute=() =>{
        setInput(1);
    }
    const setInVerify=()=>{
        setInput(2);
    } 
    const runAlgo = (coords:Points[],algorithm:string)=>{
        setData(coords);
        setAlgo(algorithm);
        setInCompute();
        // useAreLinesIntersecting(lineA,lineB);
        // console.log(coords);
    }
    useEffect(()=>{
        document.title="Geo Algorithmics | Convex Hull";
    },[])

    const verifyHull=(userHull:Points[],data:Points[])=>{
        setData(data);
        setUserData(userHull);
        setInVerify();
    }
    const getComponent=()=>{
        switch(algo){
            case 'Bru':
                return <BruteForce data={data}/>
            case 'Jar':
                return <JarvisMarch data={data}/>
            case 'Gra':
                return <GrahamScan data={data}/>  
            case 'Qck':
                return <QuickElimination data={data}/>
            case 'Cha':
                return <Chan data={data}/>
        }
    }
    return (
        <div className={style.container}>
            {input===0 && <InputHull runAlgo={runAlgo} verifyHull={verifyHull}/>}
            {input===1 && getComponent()}
            {input===2 && <VerifyConvexHull data={data} custom={userData}/>}
        </div>
    );
}