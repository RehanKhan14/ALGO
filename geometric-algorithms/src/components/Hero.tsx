import { Grid } from "@mui/material";
import myImage from './images/placeholder2.jpg'
interface algo{
    heading:string;
    imgs:string[]
}

export const Hero = (props:algo) => {
   return (
    <div>
        <Grid container spacing={0}>
  
            <Grid xs={3}>
                <h3>{props.heading}</h3>
                <p>Example Images</p>
                <button>Run Algorithm</button>
            </Grid>
            <Grid xs={9}>
                <div>{props.imgs.map((value:string)=>(
                    (<img src={`./images/${value}.jpg`} alt="example" width="200px" height="200px"/>)
                ))}</div>
                
            </Grid>
        </Grid>
    </div>
   ); 
}