import { Card } from "@mantine/core";
import React, {useState} from "react";
import {
    Legend,
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
  ResponsiveContainer,
} from "recharts";


const TagChart = (props) => {
  const [data, setData] = useState([]);
  React.useEffect(() => {
    let arr = []
    props.data.forEach((obj,index) => arr.push({name: obj[1], value: obj[0], fullMark:1}));
    setData(arr);
  },[props.data])
  return (

    <div style={{height:'500px', width: '100%'}}>
      {
        console.log(data)
      }
       <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
          <PolarGrid />
          <PolarAngleAxis dataKey="name" />
          <PolarRadiusAxis angle={30} domain={[0, 1]} />
          <Radar name="Generated Tags" dataKey="value" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} isAnimationActive={false} />
          <Legend />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default React.memo(TagChart);
