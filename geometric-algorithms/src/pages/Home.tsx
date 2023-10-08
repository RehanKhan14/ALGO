import { Hero } from "../components/Hero";
interface HeroDetails{
    heading:string,
    imgs:string[3]
}

export const Home = () =>{
    return (
        <>
            <Hero heading={"Convex Hull"} imgs={["placeholder1", "placeholder2", "placeholder3"]}/>
        </>
    );
}

