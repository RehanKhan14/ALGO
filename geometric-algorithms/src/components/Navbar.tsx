import { Grid,Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import styles from "./css/Navbar.module.css";
import { useEffect } from "react";

export const Navbar = () => {
    const navigate=useNavigate();
    useEffect(()=>{
        document.title="Geo Algorithmics";
    },[])
    return (
        <div className={styles.container}>
           <Grid container spacing={1}>
                
                <Grid xs={4} className={styles.first}>
                    <Link to='/' className={styles.logo}>
                        <img src="./images/logo.png" alt="icon"/>
                        <h2> Geo Algorithmics</h2>
                    </Link>
                </Grid>
                <Grid xs={4}>
                    <div className={styles.menuitems}>
                            <Link to='/closest-pair' className={styles.items}>Closest Pair </Link>
                            <Link to='/convex-hull' className={styles.items}>Convex Hull </Link>
                            <Link to='/voronoi-diagram' className={styles.items}>Voronoi Diagram </Link>
                    </div>
                </Grid>
                <Grid xs={4} className={styles.third}>
                    <Button variant="outlined" className={styles.contact} onClick={()=>{
                        navigate("/contact");
                    }}>Contact Us</Button>
                </Grid>
            </Grid> 
                        
        </div>
    );
}