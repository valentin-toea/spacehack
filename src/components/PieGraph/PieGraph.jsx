import { Card, Center, Text } from "@mantine/core";
import React from "react";
import { useSelector } from "react-redux";
import { Cell, Legend, Pie, PieChart, Tooltip } from "recharts";

const renderCustomLabel = (item) => (
  <text
    fill={item.fill}
    x={item.x}
    y={item.y}
    stroke="none"
    alignmentBaseline="middle"
    className="recharts-text recharts-pie-label-text"
    textAnchor="end"
  >
    <tspan x={item.x} textAnchor={item.textAnchor} dy="0em">
      {item.name}
    </tspan>
  </text>
);

const PieGraph = (props) => {
  const [data, setData] = React.useState(null);
  const selectedPlatform = useSelector((state) => state.platform.value);
  const colors = [
    "#896cde",
    "#8884d8",
    "#83a6ed",
    "#8dd1e1",
    "#82ca9d",
    "#8cc953",
    "#a9d154",
  ];

  React.useEffect(() => {
    let arr = [];
    for (const key in props.data) {
      let val = 0;
      props.data[key].forEach((obj) => {
        for (const objKey in obj) {
          val += obj[objKey];
        }
      });
      const finalVal = Math.round((100 * val) / 140000);
      arr.push({ name: key, value: finalVal });
      setData(arr);
    }
  }, [props.data]);

  React.useEffect(() => {
    return () => setData(null);
  }, []);

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const getBestPerformer = (arr) => {
    const maxValue = Math.max.apply(
      Math,
      arr.map((elem) => elem.value)
    );

    return capitalizeFirstLetter(
      arr.find((elem) => elem.value === maxValue).name
    );
  };

  return (
    <Card
      radius="md"
      shadow="xs"
      style={{ padding: "1rem" }}
      style={
        selectedPlatform !== "All Socials" && {
          transform: "translateY(-10000px)",
          position: "absolute",
        }
      }
    >
      <Text>Performance Comparasion Between Platforms</Text>
      <Text>
        Best performance on <b>{data && getBestPerformer(data)}</b>
      </Text>
      <Center>
        {data && (
          <PieChart width={530} height={250}>
            <Pie
              label={(item) => this.renderCustomLabel(item)}
              data={data}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              innerRadius={45}
              outerRadius={80}
              label
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={colors[index]} />
              ))}
            </Pie>
            <Legend verticalAlign="middle" align="right" layout="vertical" />
          </PieChart>
        )}
      </Center>
    </Card>
  );
};

export default React.memo(PieGraph);
