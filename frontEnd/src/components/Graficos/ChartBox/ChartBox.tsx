
import "./ChartBox.css"
import { Link } from "react-router-dom";

import { Line, LineChart, ResponsiveContainer, Tooltip } from "recharts";
// import {chartBoxUser} from "../../data"
type Props = {
  color: string;
  icon: string;
  title: string;
  dataKey: string;
  number: number | string;
  percentage: number;
  chartData: object[];
};

export default function ChartBox(props:Props) {
  return (
    <div className='box-9'>

<div className="title">
    <img src={props.icon} alt="" />
    <span>{props.title}</span>
    </div>
    <div className='chartBox'>

 <div className='boxInfo'>

    <h1 className='number'>{props.number}</h1>
    
<Link to={"/"} style={{color:props.color}}>
View all
</Link>

 </div>
 <div className='chartInfo'>
    <div className='chartss'>
    <ResponsiveContainer width="99%" height="100%">
      <LineChart data={props.chartData}>
      <Tooltip
                contentStyle={{ background: "transparent", border: "none" }}
                labelStyle={{ display: "none" }}
                position={{ x: 10, y: 70 }}
              />
       
        <Line type="monotone" 
        dataKey={props.dataKey}
         stroke={props.color}
          strokeWidth={2}
          dot={false} />
      </LineChart>
    </ResponsiveContainer>

    </div>
    <div className='texts'>
        <span className='percentage'
        style={{color: props.percentage<0?"tomato":"limegreen"}}>
          {props.percentage}%
            </span>
            <span className='duration'>this month</span>
    </div>
 </div>
    </div>
    </div>
  )
}
