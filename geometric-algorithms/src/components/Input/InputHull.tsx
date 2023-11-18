import { Grid,Button } from "@mui/material";
import {useEffect, useState} from 'react'
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import { ScatterGraph } from "../Graph/ScatterGraph";
import { PointList } from "./PointList";
import {Data} from './PointList';

interface Props{
    runAlgo: any,
    verifyHull: any,
}


export const InputHull = (props:Props)=>{

    // const tempData = [{id:0,x:1,y:-1},{id:1,x:10,y:9}]

    const [data, setData]=useState<Data[]>([]);
    const [pointsX, setPointsX]=useState<number[]>([]);
    const [pointsY, setPointsY]=useState<number[]>([]);
    const [pointsInserted, setPointsInserted] = useState(false);
    const [algo, setAlgo] = useState('Bru');
    const [textX, setTextX] = useState("");
    const [textY, setTextY] = useState("");
    const [customHull, setCustomHull]= useState<number[]>([]);//holds the index
    
    const convertPointFormat=()=>{
        const temp:Data[]=[];
        for(let i=0;i<pointsX.length;i++){
            temp.push({id:i,x:pointsX[i],y:pointsY[i]});
        }
        setData(temp);
    }
    
    const handleDelete = (id:number) => {//for point list(child comp)
        // const tempCustom = customHull;
        // tempCustom.filter(value=>{
            //     return !(value===id);
            // })
            removeFromCustom(id);
            // setCustomHull(tempCustom);
        const tempArrX=pointsX;
        tempArrX.splice(id,1);
        setPointsX(tempArrX);
        // console.log(tempArr);
        
        const tempArrY=pointsY;
        tempArrY.splice(id,1); 
        setPointsY(tempArrY);
        
    }
    useEffect(convertPointFormat,[pointsX,pointsY,handleDelete]);
    
    
    
    const addToCustom = (id:number) =>{
        setCustomHull(prev=>{
            return [...prev,id];
        })
        
        console.log("added ",id);
        // console.log(customHull);
    }
    const removeFromCustom = (id:number) => {
        const tempCustom=customHull;
        for(let i=0;i<tempCustom.length;i++){
            if(tempCustom[i]==id){
                tempCustom.splice(i,1);
            }
        }
        for(let i=0;i<tempCustom.length;i++){
            if(tempCustom[i]>id){
                tempCustom[i]--;
            }
        }
        // tempCustom.filter(value=>{
            // return !(value==id);
            // })
            // tempCustom.splice(id,1);
            // tempCustom.map(value=>{
                //     if(value>id){
                    //         console.log("Updated ",value);
                    //         value--;
                    //     }
                    // })
                    setCustomHull(tempCustom);
                    console.log("removed ",id);
                    // console.log(customHull);
                }
                // useEffect(()=>{
                    // console.log(customHull)
    // },[handleDelete,removeFromCustom,addToCustom]);
    
    
    const inputPoint = () =>{
        if(isNaN(textX as any)){
            window.alert("Invalid X-Coordinate");
            return;
        }
        if(isNaN(textY as any)){
            window.alert("Invalid Y-Coordinate");
            return;
        }
        // convertPointFormat([...pointsX,Number(textX)], [...pointsY,Number(textY)]);
        setPointsX(prev=>{return [...prev,Number(textX)]});
        setPointsY(prev=>{return [...prev,Number(textY)]});
        // console.log(pointsX);
    }

    // const convertPointFormat=(arrX:number[], arrY:number[])=>{
        
        const handleSubmit=()=>{
            props.runAlgo(data,algo);
        }
        const runCustomHull=()=>{
            const userPoints:Data[]=[];
            if(customHull.length<3){
                window.prompt("Not Enough Points");
                return;
            }
            for(let i=0;i<customHull.length;i++){
                const id=customHull[i];
                const x=pointsX[customHull[i]];
                const y=pointsY[customHull[i]];
                userPoints.push({id,x,y})
                // console.log(userPoints[i]);
            }
            props.verifyHull(userPoints,data);
        }
        
        return (
            <div>
            <h1>Convex Hull</h1>
            <Grid container spacing={1}>
                <Grid xs={4}>
                    <div>
                        <h2>Enter Points</h2>
                        <TextField label="Coordinates" variant="standard"
                        sx={{ m: 1, width: '20ch' }}
                        InputProps={{ startAdornment: <InputAdornment position="start">X: </InputAdornment>, }}
                        onChange={(event)=>{
                            setTextX(event.target.value);
                        }}
                        />

                        <TextField label=" " variant="standard"
                        sx={{ m: 1, width: '20ch' }}
                        InputProps={{ startAdornment: <InputAdornment position="start">Y: </InputAdornment>, }}
                        onChange={(event)=>{
                            setTextY(event.target.value);
                        }}
                        />
                        <br></br>
                       <Button color="primary" onClick={inputPoint}>Add Point</Button> 
                        


                        <InputLabel >Algorithms</InputLabel>
                        <Select id="selectAlgo" value={algo} label="Algorithm" placeholder="Chose Algorithm"
                            onChange={  event=>{setAlgo(event.target.value);
                                                // setDisableButton(false);
                                                }}>
                            <MenuItem value={'Bru'}>Brute Force</MenuItem>
                            <MenuItem value={'Jar'}>Jarvis March</MenuItem>
                            <MenuItem value={'Gra'}>Graham Scan</MenuItem>
                            <MenuItem value={'Qck'}>Quick Elimination</MenuItem>
                            <MenuItem value={'Cha'}>Chan</MenuItem>
                        </Select>
                        <Button color="success" onClick={handleSubmit}>Run Algorithm</Button>

                        <PointList x={pointsX} y={pointsY} nodeDelete={handleDelete} checkedBoxes={customHull} addCustomHull={addToCustom} removeCustomHull={removeFromCustom}/>
                        
                        
                        <Button color="success" onClick={runCustomHull}>Verify Cutom Hull</Button>
                        
                    </div>
                </Grid>
                <Grid xs={8}>
                    <div>
                        <h2>Realtime Graph</h2>
                        {data.length<1?<p>Insert Points To Display Graph</p>:
                        <ScatterGraph data={data} aspect={3}/>
                        }
                    </div>                 
                </Grid>
            </Grid>
        </div>
    );
}