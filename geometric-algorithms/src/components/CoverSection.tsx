import style from "./css/CoverSection.module.sass"

export const CoverSection = ()=>{
    return (
        <div className={style.container} style={{backgroundImage: `./images/placeholder1.jpg`}}>
            
                <h2>Visualization of Geometric Methods</h2>
                <p>Explore the Beauty of Geometry Through Visualization</p>
                <img src={`./cover10.jpg`} />
            
        </div>
    );
}