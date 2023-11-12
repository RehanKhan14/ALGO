import { CoverSection } from "../components/Home/CoverSection";
import { Features1 } from "../components/Home/Features1";
import { Hero } from "../components/Home/Hero";
import style from "./css/Home.module.scss";
import { SubSection } from "../components/Home/Features1";

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
                subsections={[  {heading:"Brute Fore",para:"The brute force approach for computing the convex hull involves examining all possible combinations of points in a given set to determine the subset that forms the convex hull. This method has a time complexity of O(n^3), making it inefficient for large datasets, as it systematically checks every triplet of points to identify the convex hull"},
                                {heading:"Jarvis March",para:"Jarvis March, or the gift wrapping algorithm, efficiently computes the convex hull by iteratively selecting points with the most counterclockwise angle. With a time complexity of O(nh), it is more practical for large datasets compared to brute force methods."},
                                {heading:"Graham scan",para:"Graham Scan efficiently computes the convex hull by sorting points based on polar angles and constructing the hull through a linear scan. With a time complexity of O(n log n), it is a faster alternative to brute force for large datasets."},
                                {heading:"Quick Elimination",para:"QuickHull, a divide-and-conquer algorithm, efficiently computes the convex hull by recursively eliminating interior points. With an average-case time complexity of O(n log n), it performs well on large datasets."},
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

