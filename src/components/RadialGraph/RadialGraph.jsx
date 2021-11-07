import { Card, Center } from "@mantine/core";
import React, { useState } from "react";
import {
  Legend,
  RadialBar,
  RadialBarChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

/* const data = [
  {
    name: "18-24",
    uv: 31.47,
    pv: 2400,
    fill: "#8884d8",
  },
  {
    name: "25-29",
    uv: 26.69,
    pv: 4567,
    fill: "#83a6ed",
  },
  {
    name: "30-34",
    uv: 15.69,
    pv: 1398,
    fill: "#8dd1e1",
  },
  {
    name: "35-39",
    uv: 8.22,
    pv: 9800,
    fill: "#82ca9d",
  },
];
 */

const fills = ["#8884d8", "#83a6ed", "#8dd1e1", "#82ca9d", "#83da9d"];

const RadialGraph = (props) => {
  const [data, setData] = useState(null);

  React.useEffect(() => {
    for (const key in props.data) {
      let val = {};
      if (key === props.selectedPlatform.toLowerCase()) {
        props.data[key].forEach((obj, index) => {
          for (const objKey in obj) {
            if (index === 0) val[objKey] = 0;
            val[objKey] += obj[objKey];
          }
        });
        const finalVal = [];
        Object.entries(val).forEach(([key, value], index) =>
          finalVal.push({
            name: key,
            uv: value,
            pv: value * 10,
            fill: fills[index],
          })
        );

        setData(finalVal);
      }
    }
  }, [props.data]);
  console.log(data);
  return (
    <Card
      radius="md"
      shadow="xs"
      style={{ padding: "1rem" }}
      style={
        props.selectedPlatform === "All Socials" && {
          transform: "translateY(-10000px)",
          position: "absolute",
        }
      }
    >
      <Center>
        <div style={{ height: 300, width: 500 }}>
          <ResponsiveContainer width="100%" height="100%">
            <RadialBarChart
              cx="50%"
              cy="50%"
              innerRadius="10%"
              outerRadius="80%"
              barSize={10}
              data={data}
            >
              <RadialBar
                minAngle={15}
                label={{ position: "insideStart", fill: "#000" }}
                background
                dataKey="uv"
              />
              <Legend
                iconSize={10}
                layout="vertical"
                verticalAlign="middle"
                align="right"
              />
            </RadialBarChart>
          </ResponsiveContainer>
        </div>
      </Center>
    </Card>
  );
};

export default RadialGraph;
