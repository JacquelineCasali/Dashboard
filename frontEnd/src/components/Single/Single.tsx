import React from "react";
import "./Single.css";
import {
  Tooltip,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";

type Props = {
  id: number;
  img?: string;
  title: string;
  info: object;
  chart?: {
    dataKeys: { name: string; color: string }[];
    data: object[];
  };
  activities?: { time: string; text: string }[];
};

export default function Single(props: Props) {
  return (
    <div className="single">
      <div className="view">
        <div className="infoUser">
          <div className="topInfo">
            {props.img && <img className="imgUser" src={props.img} alt="" />}

            <h1 className="h1u">{props.title}</h1>
            <button className="buttonadicionar">Update</button>
          </div>
          <div className="detalis">
            {/* {Object.entries(props.info).map((item)=>(

            <div className='itemdetalis' key={item[0]}>
            <span className='itemTitle'>{item[0]}</span>
            <span className='itemValue'>{item[1]}</span>
          
            </div>
             ))} */}
            {Object.entries(props.info).map((item) => (
              <div className="itemdetalis" key={item[0]}>
                <span className="itemTitle">{item[0]}</span>
                <span className="itemValue">{item[1]}</span>
              </div>
            ))}
          </div>
        </div>
        <hr />
        {props.chart && (
          <div className="chartUsers">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                width={500}
                height={300}
                data={props.chart.data}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                {props.chart.dataKeys.map((dataKey) => (
                  <Line
                    type="monotone"
                    dataKey={dataKey.name}
                    stroke={dataKey.color}
                  />
                ))}
              </LineChart>
            </ResponsiveContainer>
          </div>
        )}
      </div>

      <div className="atividade">
        <h2>Latest Activities</h2>
        {props.activities && (
          <ul>
            {props.activities.map((activity) => (
              <li className="li" key={activity.text}>
                <div className="div">
                  <p>{activity.text}</p>
                  <time>{activity.time}</time>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
