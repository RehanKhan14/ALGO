import { Hero } from "../components/Hero";

export const Home = () =>{
    return (
        <>
            <Hero heading={"Closest Pair"} imgs={["placeholder1", "placeholder2", "placeholder3"]} description="The closest pair problem involves finding the two closest points in a set of points in a two-dimensional or higher-dimensional space."/>

            <Hero heading={"Convex Hull"} imgs={["placeholder1", "placeholder2", "placeholder3"]} description="In mathematics, the convex hull of a set X of points in a Euclidean space is the smallest convex set that contains X."/>

            <Hero heading={"Voronoi Diagram"} imgs={["placeholder1", "placeholder2", "placeholder3"]} description="A Voronoi diagram is a geometric structure that partitions a space into regions based on the closest proximity to a set of input points."/>
        </>
    );
}

