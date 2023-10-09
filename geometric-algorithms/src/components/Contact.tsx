import { Grid } from "@mui/material";
import style from "./css/Contact.module.css"
// import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export const Contact = () =>{
    // const navigate=useNavigate();
    useEffect(()=>{
        document.title="Geo Algorithmics | Contact";
    },[])
    return (
        <div className={style.container}>
            <h1>Developer Details</h1>
            <Grid container className={style.cards}>
                <Grid xs={3} className={style.card}>
                    <img src="./images/placeholder1.jpg" alt="person"/>
                    <p>
                        <b>Name: </b>Syed Muhammad Shayan Hussain<br/> 
                        <b>Email: </b>s.m.shayanhussain@gmail.com<br/> 
                        <b>LinkedIn: </b>Syed Muhammad Shayan Hussain<br/>
                        <b>University: </b>FAST NUCES, Karachi<br/>
                    </p>
                </Grid>
                <Grid xs={3} className={style.card}>
                    <img src="./images/placeholder1.jpg" alt="person"/>
                    <p>
                        <b>Name: </b>Syed Muhammad Shayan Hussain<br/> 
                        <b>Email: </b>s.m.shayanhussain@gmail.com<br/> 
                        <b>LinkedIn: </b>Syed Muhammad Shayan Hussain<br/>
                        <b>University: </b>FAST NUCES, Karachi<br/>
                    </p>
                </Grid>
                <Grid xs={3} className={style.card}>
                    <img src="./images/placeholder1.jpg" alt="person"/>
                    <p>
                        <b>Name: </b>Syed Muhammad Shayan Hussain<br/> 
                        <b>Email: </b>s.m.shayanhussain@gmail.com<br/> 
                        <b>LinkedIn: </b>Syed Muhammad Shayan Hussain<br/>
                        <b>University: </b>FAST NUCES, Karachi<br/>
                    </p>
                </Grid>
            </Grid>
        </div>
    );
}