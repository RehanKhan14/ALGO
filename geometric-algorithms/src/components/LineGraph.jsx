import {ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer} from 'recharts';

export const LineGraph = (props) =>{
    const data = [
      {name:"A", x: 100, y: 200 },
      { x: 120, y: 100 },
      { x: 170, y: 300 },
      { x: 140, y: 250},
      { x: 150, y: 400},
      { x: 110, y: 280 },
      {x: -1,y:-200},
      { x: 100, y: 200 },
    ]; 

    const data02 = [
  { x: 30, y: 20 },
  { x: 50, y: 180 },
  { x: 75, y: 240 },
  { x: 100, y: 100 },
  { x: 120, y: 190 },
];

    return (
        <>
                <ResponsiveContainer width="100%" height={400}>
        <ScatterChart
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid />
          <XAxis type="number" dataKey="x" name="x"/>
          <YAxis type="number" dataKey="y" name="y"/>
          <Tooltip cursor={{ strokeDasharray: '3 3' }} />
          <Legend />
          <Scatter name="Line" data={data} fill="blue" line shape="diamond" />
          <Scatter name="Points" data={data02} fill="red" shape="dot" />
        </ScatterChart>
      </ResponsiveContainer>
        </>
    );
}