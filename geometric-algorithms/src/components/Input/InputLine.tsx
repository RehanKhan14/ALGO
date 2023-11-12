import { Grid,Button } from "@mui/material";
import {useState} from 'react'
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import { ScatterGraph } from "../Graph/ScatterGraph";


export const InputLine = ()=>{ 
    const [points, setPoints] = useState([{x:0,y:0}])
    const [pointsX, setPointsX] = useState([0,0,0,0])
    const [pointsY, setPointsY] = useState([0,0,0,0])
    const [algo, setAlgo] = useState('')
    const [disableButton, setDisableButton] = useState(true)

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
            setPointsX(prev=>{
                const temp=prev
                temp[index]=coordinate
                return temp;})
        }
        else{
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
    }
    
    return (
        <div>
            <h1>Line Intersection</h1>
            <Grid container spacing={1}>
                <Grid xs={6}>
                    <div>
                        <h2>Enter Coordinates</h2>
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
                            onChange={  event=>{setAlgo(event.target.value);
                                                setDisableButton(false);}}>
                            <MenuItem value={'CCW'}>Counter Clock Wise</MenuItem>
                            <MenuItem value={'Sub'}>Substitution</MenuItem>
                            <MenuItem value={'Res'}>Reasearch Paper</MenuItem>
                        </Select>
                        <Button color="success" disabled={disableButton} onSubmit={handleSubmit}>Run Intersection Algorithm</Button>
                        
                        
                    </div>
                </Grid>
                <Grid xs={6}>
                    <div>
                        <h2>Realtime Graph</h2>
                        <ScatterGraph data={points} aspect={3}/>
                    </div>                 
                </Grid>
            </Grid> 

        </div>
    );
}