import { Hero } from "../components/Hero";
import style from "./css/Home.module.css";

export const Home = () =>{
    return (
        <div className={style.container}>
            <div className={style.text}>
            <h1>Geometric Algorithms</h1>
            <p>Geometric algorithms are essential tools in computational geometry, focusing on solving spatial problems efficiently. Among these algorithms, three noteworthy ones include Convex Hull, Closest Pair, and Voronoi Diagram.These geometric algorithms offer versatile solutions to spatial problems across multiple domains, making them essential knowledge for professionals and researchers working with spatial data and geometric structures.</p>
            </div>
            <Hero heading={"Closest Pair"} imgs={["placeholder1", "placeholder2", "placeholder3"]} description="The closest pair problem involves finding the two closest points in a set of points in a two-dimensional or higher-dimensional space."/>

            <Hero heading={"Convex Hull"} imgs={["placeholder1", "placeholder2", "placeholder3"]} description="In mathematics, the convex hull of a set X of points in a Euclidean space is the smallest convex set that contains X."/>

            <Hero heading={"Voronoi Diagram"} imgs={["placeholder1", "placeholder2", "placeholder3"]} description="A Voronoi diagram is a geometric structure that partitions a space into regions based on the closest proximity to a set of input points."/>
        </div>
    );
}

