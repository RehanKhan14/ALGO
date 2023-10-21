import { Grid, Divider, Button } from "@mui/material";
import style from "./css/Hero.module.scss"
import { useNavigate } from "react-router-dom";

interface algo{
    heading:string;
    imgs:string[];
    description:string;
}

export const Hero = (props:algo) => {
    const navigate=useNavigate();
    const validUrl=`/${props.heading.toLowerCase().replace(" ","-")}`;
   return (
    <div className={style.container}>
        <Grid container >
  
            <Grid xs={3}>
                <div className={style.textContainer}>
                <h3>{props.heading}</h3>
                <p>{props.description}</p>
                <Button variant="contained" size="large" onClick={()=>{
                    navigate(validUrl);
                }}>Learn More</Button>
                </div>
            </Grid>
            <Grid xs={9}>
                <div className={style.imgContainer}>
                    {props.imgs.map((value:string)=>(
                    (<img src={`./images/${value}.jpg`} alt="example"/>)
                ))}
                </div>
                
            </Grid>
                <Divider textAlign="right" variant="inset" className={style.endline}/>
        </Grid>
    </div>
   ); 
}