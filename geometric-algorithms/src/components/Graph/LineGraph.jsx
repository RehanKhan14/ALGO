import {ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer} from 'recharts';
import { getDomain } from '../../hooks/getDomain';

export const LineGraph = (props) =>{
    const domain = getDomain([...props.data1,...props.data2]); //for graph axis

    return (
      <ResponsiveContainer width={props.width==null?'100%':props.width}  aspect={props.height==null?3:props.height}>
        <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
          <CartesianGrid name={"Line Graph"}/>
          <XAxis type="number" dataKey="x" name="x" domain={[domain.minX-10,domain.maxX+10]}/>
          <YAxis type="number" dataKey="y" name="y" domain={[domain.minY-10,domain.maxY+10]}/>
          <Tooltip cursor={{ strokeDasharray: '3 3' }} />
          <Legend />
          {props.dataPoints!=null && <Scatter name="Points" data={props.dataPoints} fill="red" />}
          <Scatter name={props.nameA==null?'Line A':props.nameA} data={props.data1} fill="blue" line shape="diamond" />
          <Scatter name={props.nameB==null?'Line B':props.nameB} data={props.data2} fill="magenta" line shape="dot" />
        </ScatterChart>
      </ResponsiveContainer> 
    );
}