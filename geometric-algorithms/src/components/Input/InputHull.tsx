import { Grid,Button } from "@mui/material";
import {useState} from 'react'
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import { ScatterGraph } from "../Graph/ScatterGraph";
import { PointList } from "./PointList";


export const InputHull = ()=>{

    // const tempData = [{id:0,x:1,y:-1},{id:1,x:10,y:9}]

    const [pointsX, setPointsX]=useState([0]);
    const [pointsY, setPointsY]=useState([0]);
    const [disableButton, setDisableButton] = useState(false);
    const [algo, setAlgo] = useState('Bru');
    const [textX, setTextX] = useState("");
    const [textY, setTextY] = useState("");

    const handleDelete = (id:number) => {//for point list(child comp)
        let tempArr=pointsX;
        tempArr.splice(id,1);
        setPointsX(tempArr);
        console.log(tempArr);

        tempArr=pointsY;
        tempArr.splice(id,1); 
        setPointsY(tempArr);

    }
    const convertPointFormat=()=>{
        
    }


    const inputPoint = () =>{
        if(isNaN(textX as any)){
            window.alert("Invalid X-Coordinate");
            return;
        }
        if(isNaN(textY as any)){
            window.alert("Invalid Y-Coordinate");
            return;
        }
        // if(setPointsX.length<1){
        //     setPointsX([Number(textX)]);
        //     setPointsY([Number(textY)]);
        // }
        setPointsX(prev=>{return [...prev,Number(textX)]});
        setPointsY(prev=>{return [...prev,Number(textY)]});
        console.log(pointsX);
    }
    const handleSubmit=()=>{}
    
    return (
        <div>
            <h1>Convex Hull</h1>
            <Grid container spacing={1}>
                <Grid xs={6}>
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
                            <MenuItem value={'Res'}>Research Paper</MenuItem>
                        </Select>
                        <Button color="success" disabled={disableButton} onSubmit={handleSubmit}>Run Algorithm</Button>

                        <PointList x={pointsX} y={pointsY} nodeDelete={handleDelete}/>
                        
                    </div>
                </Grid>
                <Grid xs={6}>
                    <div>
                        <h2>Realtime Graph</h2>
                        {/* <ScatterGraph data={points} aspect={3}/> */}
                    </div>                 
                </Grid>
            </Grid>
        </div>
    );
}