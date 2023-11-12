import { Avatar, IconButton, List, ListItem, ListItemAvatar, ListItemText } from "@mui/material";
import FolderIcon from '@mui/icons-material/Folder';
import DeleteIcon from '@mui/icons-material/Delete';
interface Props{
    data:Data[]
}

interface Data{
    id:number,
    x:number,
    y:number
}
// 
export const PointList = (props:Props) =>{
    return (
        <>
            <List>
                {props.data.map((value:Data)=>{
                    return (
                        <ListItem secondaryAction={
                            <IconButton edge="start" aria-label="delete" color="error" onClick={()=>{console.log("del")}}>
                            <DeleteIcon />
                            </IconButton>}
                        >
                        <ListItemText primary={`${value.id}- (${value.x} ,${value.y})`}/>
                        </ListItem>
                    );
                })}
              
            </List>
        </>
    );
}