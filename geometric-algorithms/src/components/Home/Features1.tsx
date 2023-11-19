import { Icon } from "@mui/material"
import style from "./css/Features1.module.sass"
import ArticleIcon from '@mui/icons-material/Article';
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
                            <div className={style.main}>
                                <div className={style.icon}>
                                    <ArticleIcon/>
                                </div>
                                <div className={style.heading}>
                                    <h5>{item.heading}</h5>
                                    <div className={style.para}>
                                    <p>{item.para}</p>
                                    </div>
                                </div>
                            </div>                            
                        );
                    })}
                </div>
            
        </div>
    );
    
}