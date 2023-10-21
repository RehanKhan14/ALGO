import { Icon } from "@mui/material"
import style from "./css/CoverSection.module.sass"
interface Props{
    title:string,
    subtitle:string,
    subsections:SubSection[]
}

export interface SubSection{
    heading:string,
    para:string,
    icon?:string
}

export const Features1 = (props:Props) =>{
    return (
         <div className={style.container} >
            
                <h2>{props.title}</h2>
                <p>{props.subtitle}</p>
                <div>
                    {props.subsections.map((item:SubSection)=>{
                        return (
                            <div>
                                <div>
                                    ICON
                                </div>
                                <div>
                                    <h5>{item.heading}</h5>
                                    <p>{item.para}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            
        </div>
    );
    
}