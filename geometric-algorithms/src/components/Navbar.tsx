import { Grid,Link } from "@mui/material";
import { Link as RLink } from "react-router-dom";
import styles from "./css/Navbar.module.css";

export const Navbar = () => {
    return (
        <div className={styles.container}>
           <Grid container spacing={1}>
                
                <Grid item xs={6} md={4}>
                    <RLink to='/' className={styles.logo}><h2> Geometric Algorithms</h2></RLink>
                </Grid>
                <Grid item xs={6} md={8}>
                    <div className={styles.menuitems}>
                         <Link underline="hover" color={"Blue"}>
                            <RLink to='/closest-pair' className={styles.items}>Closest Pair </RLink>
                        </Link>
                        <Link underline="hover" color={"Blue"}>
                            <RLink to='/convex-hull' className={styles.items}>Convex Hull </RLink>
                        </Link>
                        <Link underline="hover" color={"Blue"}>
                            <RLink to='/voronoi-diagram' className={styles.items}>Voronoi Diagram </RLink>
                        </Link>
                    </div>
                </Grid>
            </Grid> 
        </div>
    );
}