import { Avatar, Checkbox, IconButton, List, ListItem, ListItemAvatar, ListItemText } from "@mui/material";
import FolderIcon from '@mui/icons-material/Folder';
import DeleteIcon from '@mui/icons-material/Delete';
import { useEffect,useState } from "react";
interface Props{
    // data:Data[],
    x:number[],
    y:number[],
    nodeDelete:any,
    addCustomHull:any,
    removeCustomHull:any,
    checkedBoxes:number[],
}

export interface Data{
    id:number,
    x:number,
    y:number,
}
export const PointList = (props:Props) =>{
    const [data,setData] = useState<Data[]>([]);
    const convertData = () =>{
        const temp:Data[]=[];
        for(let i=0;i<props.x.length;i++){
            temp.push({id:i,x:props.x[i],y:props.y[i]});
        }
        setData(temp);
    }
    useEffect(()=>{convertData()},[props]);
    return (
        <>
            <List>
                {data.map((value:Data)=>{
                    const check=props.checkedBoxes.includes(value.id);
                    return (
                        <ListItem secondaryAction={
                            <>
                            <IconButton edge="start" aria-label="delete" color="error" onClick={()=>{props.nodeDelete(value.id);convertData()}}>
                            <DeleteIcon />
                            </IconButton>
                            <Checkbox onChange={(event)=>{
                                if(event.target.checked){
                                    props.addCustomHull(value.id);
                                }
                                else{
                                    props.removeCustomHull(value.id);
                                }
                            }} checked={check}/>
                            </>
                            }
                        >
                        <ListItemText primary={`${value.id}- (${value.x} ,${value.y})`}/>
                        </ListItem>
                    );
                })}
              
            </List>
        </>
    );
}