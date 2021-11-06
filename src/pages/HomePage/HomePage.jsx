import React from "react";
import BarGraph from "../../components/BarGraph/BarGraph";
import PieGraph from "../../components/PieGraph/PieGraph";
import "./HomePage.scss";


const HomePage = () => {
  return (
    <div>
        <BarGraph/>
        <PieGraph/>
    </div>
  );
};

export default HomePage;
