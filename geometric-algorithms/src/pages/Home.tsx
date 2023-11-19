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
                subtitle="Intersection Insights: Navigating the Overlapping World of Line Segments"
                subsections={[  {heading:"Counter Clock Wise Algorithm",para:"The Counter-Clockwise (CCW) algorithm determines whether three points are arranged in a counter-clockwise order, useful in line intersection calculations. Its time complexity is O(1), making it computationally efficient for assessing the relative orientations of points in planar geometry."},
                                {heading:"Algebric Algorithm",para:"The Algebraic Line Intersection Algorithm employs algebraic methods to determine the intersection points of two lines in the plane. Its time complexity depends on the specific implementation and the underlying algebraic techniques used, often falling within O(1) for straightforward cases or O(log n) for more complex scenarios involving advanced algebraic computations."},
                                {heading:"Sweep Line Algorithm",para:"The Sweep Line Algorithm efficiently identifies intersections among line segments by sweeping a horizontal line across the plane and handling events triggered by the sorted endpoints of segments. Its time complexity is O((n + k) log n), where n is the number of line segments, and k is the number of intersections, making it well-suited for scenarios with a large number of segments.                                "}]}
            />
            <Features1 
                title="Convex Hull"
                subtitle="Bounding Beauty: Exploring the Envelope of Convex Hull Algorithms"
                subsections={[  {heading:"Brute Fore ",para:"The brute force approach for computing the convex hull involves examining all possible combinations of points in a given set to determine the subset that forms the convex hull. This method has a time complexity of O(n^3), making it inefficient for large datasets, as it systematically checks every triplet of points to identify the convex hull"},
                                {heading:"Jarvis March ",para:"Jarvis March, or the gift wrapping algorithm, efficiently computes the convex hull by iteratively selecting points with the most counterclockwise angle. With a time complexity of O(nh), it is more practical for large datasets compared to brute force methods."},
                                {heading:"Graham scan ",para:"Graham Scan efficiently computes the convex hull by sorting points based on polar angles and constructing the hull through a linear scan. With a time complexity of O(n log n), it is a faster alternative to brute force for large datasets."},
                                {heading:"Quick Elimination ",para:"QuickHull, a divide-and-conquer algorithm, efficiently computes the convex hull by recursively eliminating interior points. With an average-case time complexity of O(n log n), it performs well on large datasets."},
                                {heading:"Chans Algoirthm ",para:"Chan's algorithm is a convex hull algorithm designed to efficiently compute the convex hull of a set of points in the plane. It combines the ideas of Graham's scan and Jarvis march, achieving a time complexity of O(n log h), where n is the number of input points, and h is the number of points on the convex hull."},
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

