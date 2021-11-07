import { Card, Center, Text } from "@mantine/core";
import {
  Bar,
  CartesianGrid,
  Legend,
  XAxis,
  YAxis,
  BarChart,
  Tooltip,
} from "recharts";
import React from "react";
import { colors } from "../../config/config";

const WEEK_DAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const BarGraph = (props) => {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    if (props.data && props.selectedPlatform !== "All Socials") {
      let arr = props.data[props.selectedPlatform.toLowerCase()];
      let sumArr = [];
      arr.forEach((elem) => {
        let sum = 0;
        for (const key in elem) {
          sum += elem[key];
        }
        sumArr.push(sum);
      });

      arr = arr.map((_, index) => ({
        day: WEEK_DAYS[index],
        value: sumArr[index],
      }));
      setData(arr);
    } else {
      let allPlatformsArr = [];
      for (const dataKey in props.data) {
        let arr = props.data[dataKey];
        let sumArr = [];
        arr.forEach((elem) => {
          let sum = 0;
          for (const key in elem) {
            sum += elem[key];
          }
          sumArr.push(sum);
        });

        arr = arr.map((_, index) => ({
          day: WEEK_DAYS[index],
          value: sumArr[index],
        }));

        allPlatformsArr.push(arr);
        console.log(allPlatformsArr);

        let finalArr = new Array(7).fill({ day: "", value: 0 });

        allPlatformsArr.forEach((elem) => {
          elem.forEach((x, index) => {
            finalArr[index] = {
              value: finalArr[index].value + x.value,
              day: x.day,
            };
          });
        });

        console.log(finalArr);
        setData(finalArr);
      }
    }
  }, [props.data]);

  const bestDayToPost = (arr) => {
    const maxValue = Math.max.apply(
      Math,
      arr.map((elem) => elem.value)
    );

    return arr.find((elem) => elem.value === maxValue).day;
  };

  return (
    <Card
      radius="md"
      shadow="xs"
      style={{ padding: "1rem", marginBottom: "30px" }}
    >
      <Text>
        Week Days Stats
        {props.selectedPlatform === "All Socials" && " Across All Platforms"}
        <br />
        {"Your best day to post is "}
        <b>{data && bestDayToPost(data)}</b>
      </Text>
      <Center style={{ padding: "1rem" }}>
        <BarChart width={730} height={250} data={data}>
          <CartesianGrid strokeDasharray="3" />
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar
            maxBarSize={30}
            dataKey="value"
            name="Reachability Score"
            fill={colors.marine}
          />
        </BarChart>
      </Center>
    </Card>
  );
};

export default React.memo(BarGraph);
