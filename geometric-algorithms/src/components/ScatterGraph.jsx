import { CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer, ScatterChart, Scatter, ReferenceLine, Legend } from 'recharts';
import { getDomain } from './getDomain';

export const ScatterGraph = (props) =>{
    const domain=getDomain(props.data);
    
    return (
      <ResponsiveContainer width={props.width==null?'100%':props.width} aspect={props.height==null?3:props.height}>
        <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
          <CartesianGrid name='Real Time Graph'/>
          <XAxis type="number" dataKey="x" name="x" domain={[domain.minX-10,domain.maxX+10]} tickCount={10} />
          <YAxis type="number" dataKey="y" name="y" domain={[domain.minY-10,domain.maxY+10]} tickCount={10}/>
          <Tooltip  cursor={{strokeDasharray:'3 3',color:'green'}} payload={[{name:'Coordintae'}]} />
          <ReferenceLine y={0} stroke="black" />{/*To show the quadrant division line */}
          <ReferenceLine x={0} stroke="black" />
          <ReferenceLine segment={[{x:0, y:0}, {x:0, y:0}]} label={{value:"(0,0)", position:"bottom"}}/>
          <Legend/>
          <Scatter name="Points" data={props.data} fill="red" />
        </ScatterChart>
      </ResponsiveContainer>
    );
}