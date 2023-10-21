import { CoverSection } from "../components/CoverSection";
import { Features1 } from "../components/Features1";
import { Hero } from "../components/Hero";
import style from "./css/Home.module.scss";
import { SubSection } from "../components/Features1";

export const Home = () =>{
    return (
        <div className={style.container}>
            
            <CoverSection/>
            <Features1 
                title="Line Intersection"
                subtitle="Some subtitle type text"
                subsections={[  {heading:"Brute Fore",para:"Brute force text"},
                                {heading:"CCW",para:"Some CCW text"},
                                {heading:"Research",para:"Some text"}]}
            />
            <Features1 
                title="Convex Hull"
                subtitle="Some subtitle type text"
                subsections={[  {heading:"Brute Fore",para:"Brute force text"},
                                {heading:"Jarvis March",para:"Some CCW text"},
                                {heading:"Graham scan",para:"Brute force text"},
                                {heading:"Quick Elimination",para:"Brute force text"},
                                {heading:"Research Paper",para:"Brute force text"},
                                ]}
            />

            {/* <div className={style.text}>
            <h1>Geometric Algorithms</h1>
            <p>Geometric algorithms are essential tools in computational geometry, focusing on solving spatial problems efficiently. Among these algorithms, three noteworthy ones include Convex Hull, Closest Pair, and Voronoi Diagram.These geometric algorithms offer versatile solutions to spatial problems across multiple domains, making them essential knowledge for professionals and researchers working with spatial data and geometric structures.</p>
            </div>
            <Hero heading={"Line Intersection"} imgs={["placeholder1", "placeholder2", "placeholder3"]} description="The closest pair problem involves finding the two closest points in a set of points in a two-dimensional or higher-dimensional space."/>

            <Hero heading={"Convex Hull"} imgs={["placeholder1", "placeholder2", "placeholder3"]} description="In mathematics, the convex hull of a set X of points in a Euclidean space is the smallest convex set that contains X."/> */}

            
        </div>
    );
}

