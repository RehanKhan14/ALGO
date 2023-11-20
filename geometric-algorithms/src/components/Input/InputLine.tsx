import { Grid,Button } from "@mui/material";
import {useState} from 'react'
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import style from "./css/InputLine.module.sass";
import { ScatterGraph } from "../Graph/ScatterGraph";

interface Props{
    runAlgo: any
}

export const InputLine = (props:Props)=>{ 
    const [points, setPoints] = useState([{x:0,y:0}])
    const [pointsX, setPointsX] = useState([0,0,0,0])
    const [pointsY, setPointsY] = useState([0,0,0,0])
    const [trackX, setTrackX] = useState([0,0,0,0])
    const [trackY, setTrackY] = useState([0,0,0,0])
    const [algo, setAlgo] = useState('CCW')

    const editPointList=(id:string, value:string)=>{
        let coordinate:number;
        if(isNaN(value as any)){
            return;
        }
        else{
            coordinate=Number(value);
        }
        
        const index:number=Number(id[0]);
        if(id[1]==='X'){
            setTrackX(prev=>{
                const temp=prev
                temp[index]=1
                return temp;})
            setPointsX(prev=>{
                const temp=prev
                temp[index]=coordinate
                return temp;})
        }
        else{
            setTrackY(prev=>{
                const temp=prev
                temp[index]=1
                return temp;})
            setPointsY(prev=>{
                const temp=prev
                temp[index]=coordinate
                return temp;})
        }
        convertPointFormat();

    }

    const convertPointFormat = () =>{
        const temp= [];
        for(let i=0;i<4;i++){
            const obj={x:pointsX[i],y:pointsY[i]};
            temp.push(obj);
        }
        setPoints(temp);
    }
    const handleSubmit =() =>{
        for(let i=0;i<4;i++){
            const line=(i<2?1:2);
            if(trackX[i]===0){
                window.alert(`Point ${(i%2)+1} of line ${line} not found`);
                return;
            }
            if(trackY[i]===0){
                window.alert(`Point ${(i%2)+1} of line ${line} not found`);
                return;
            }
        }
        props.runAlgo(points,algo);
    }
    
    return (
        <div>
            <h1 className={style.heading}>Line Intersection</h1>
            <Grid container spacing={1}>
                <Grid xs={4}>
                    <div>
                        <h2>Enter Coordinates</h2>
                        <br></br>
                        <h3>Line 1</h3> 
                        <TextField label="Point 1" variant="standard"
                        sx={{ m: 1, width: '20ch' }}
                        InputProps={{ startAdornment: <InputAdornment position="start">X: </InputAdornment>, }}
                        onChange={(event)=>{
                            editPointList('0X',event.target.value);
                        }}/>

                        <TextField label=" " variant="standard"
                        sx={{ m: 1, width: '20ch' }}
                        InputProps={{ startAdornment: <InputAdornment position="start">Y: </InputAdornment>, }}
                        onChange={(event)=>{
                            editPointList('0Y',event.target.value);
                        }}/>
                        <br></br>
                        <TextField label="Point 2" variant="standard"
                        sx={{ m: 1, width: '20ch'}}
                        InputProps={{ startAdornment: <InputAdornment position="start">X: </InputAdornment>, }} 
                        onChange={(event)=>{
                            editPointList('1X',event.target.value);
                        }}/>

                        <TextField label=" " variant="standard"
                        sx={{ m: 1, width: '20ch'}}
                        InputProps={{ startAdornment: <InputAdornment position="start">Y: </InputAdornment>, }}
                        onChange={(event)=>{
                            editPointList('1Y',event.target.value);
                        }}/>
                        <br></br>
                        <h3>Line 2</h3> 
    
                        <TextField label="Point 1" variant="standard"
                        sx={{ m: 1, width: '20ch'}}
                        InputProps={{ startAdornment: <InputAdornment position="start">X: </InputAdornment>, }}
                        onChange={(event)=>{
                            editPointList('2X',event.target.value);
                        }}/>

                        <TextField label=" " variant="standard"
                        sx={{ m: 1, width: '20ch'}}
                        InputProps={{ startAdornment: <InputAdornment position="start">Y: </InputAdornment>, }}
                        onChange={(event)=>{
                            editPointList('2Y',event.target.value);
                        }}/>
                        <br></br>
                        <TextField label="Point 2" variant="standard"
                        sx={{ m: 1, width: '20ch' }}
                        InputProps={{ startAdornment: <InputAdornment position="start">X: </InputAdornment>, }}
                        onChange={(event)=>{
                            editPointList('3X',event.target.value);
                        }}/>

                        <TextField label=" " variant="standard"
                        sx={{ m: 1, width: '20ch'}}
                        InputProps={{ startAdornment: <InputAdornment position="start">Y: </InputAdornment>, }}
                        onChange={(event)=>{
                            editPointList('3Y',event.target.value);
                        }}/>


                        <InputLabel >Algorithm</InputLabel>
                        <Select id="selectAlgo" value={algo} label="Algorithm" placeholder="Chose Algorithm"
                            onChange={  event=>{setAlgo(event.target.value);}}>
                            <MenuItem value={'CCW'}>Counter Clock Wise</MenuItem>
                            <MenuItem value={'Cra'}>Algebraic Algorithm</MenuItem>
                            <MenuItem value={'Swe'}>Sweep Line</MenuItem>
                        </Select>
                        <Button color="success" onClick={handleSubmit}>Run Intersection Algorithm</Button>
                        
                        
                    </div>
                </Grid>
                <Grid xs={8}>
                    <div>
                        <h2 className={style.head2}>Realtime Graph</h2>
                        <ScatterGraph data={points} aspect={3}/>
                    </div>                 
                </Grid>
            </Grid> 

        </div>
    );
}