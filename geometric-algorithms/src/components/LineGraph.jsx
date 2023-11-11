import {ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer} from 'recharts';
import { getDomain } from './getDomain';

export const LineGraph = (props) =>{
    const domain = getDomain([...props.dataScatter,...props.dataLine]); //for graph axis

    return (
      <ResponsiveContainer width={props.width==null?'100%':props.width}  aspect={props.height==null?3:props.height}>
        <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
          <CartesianGrid name={props.name==null?"Convex Hull":props.name}/>
          <XAxis type="number" dataKey="x" name="x" domain={[domain.minX-10,domain.maxX+10]}/>
          <YAxis type="number" dataKey="y" name="y" domain={[domain.minY-10,domain.maxY+10]}/>
          <Tooltip cursor={{ strokeDasharray: '3 3' }} />
          <Legend />
          <Scatter name="Line" data={props.dataLine} fill="blue" line shape="diamond" />
          <Scatter name="Points" data={props.dataScatter} fill="red" shape="dot" />
        </ScatterChart>
      </ResponsiveContainer>
        
    );
}