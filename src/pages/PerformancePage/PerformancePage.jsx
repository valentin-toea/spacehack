import React from "react";
import BarGraph from "../../components/BarGraph/BarGraph";
import { useSelector } from "react-redux";
import axios from "axios";
import { MAIN_URL } from "../../config/config";
import PieGraph from "../../components/PieGraph/PieGraph";
import { Card, Text } from "@mantine/core";

const PerformancePage = () => {
  const selectedPlatform = useSelector((state) => state.platform.value);
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    axios.get(MAIN_URL + "weekly").then((response) => setData(response.data));
  }, [selectedPlatform]);

  return (
    <div
      className="performance-page"
      style={{
        padding: "0 1rem",
        flexWrap: "wrap",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <BarGraph data={data} selectedPlatform={selectedPlatform} />
      <PieGraph data={data} selectedPlatform={selectedPlatform} />
    </div>
  );
};

export default PerformancePage;
