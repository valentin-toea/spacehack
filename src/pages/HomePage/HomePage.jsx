import React from "react";
import BarGraph from "../../components/BarGraph/BarGraph";
import PieGraph from "../../components/PieGraph/PieGraph";
import "./HomePage.scss";
import { useSelector } from "react-redux";
import { Card, ThemeIcon } from "@mantine/core";
import { colors } from "../../config/config";
import { FiThumbsUp, FiFileText, FiMessageSquare } from "react-icons/fi";
import TopPostCard from "../../components/TopPostCard/TopPostCard";
import NotificationCard from "../../components/NotificationCard/NotificationCard";

const calcSumTotal = (obj) => {
  return [
    {
      name: "No. of total posts",
      value:
        obj.facebook.total +
        obj.instagram.total +
        obj.linkedin.total +
        obj.twitter.total,
    },
    {
      name: "No. of likes",
      value:
        obj.facebook.likes +
        obj.instagram.likes +
        obj.linkedin.likes +
        obj.twitter.likes,
    },
    {
      name: "No. of comments",
      value:
        obj.facebook.comms +
        obj.instagram.comms +
        obj.linkedin.comms +
        obj.twitter.comms,
    },
  ];
};

const calcSum = (obj) => {
  return [
    { name: "No. of posts", value: obj.total },
    { name: "No. of likes", value: obj.likes },
    { name: "No. of comments", value: obj.comms },
  ];
};

const HomePage = () => {
  const selectedPlatform = useSelector((state) => state.platform.value);
  const postStats = useSelector((state) => state.postStat.value);

  let stats = [];

  if (postStats) {
    if (selectedPlatform === "All Socials") stats = calcSumTotal(postStats);
    else {
      stats = calcSum(postStats[selectedPlatform.toLowerCase()]);
    }
  }

  const setIcon = (index) => {
    return (
      <ThemeIcon
        size="45px"
        radius="md"
        color={
          index === 0 ? "violet" : index === 1 ? colors.lightblue : "orange"
        }
      >
        {index === 0 && <FiFileText style={{ width: 25, height: 25 }} />}
        {index === 1 && <FiThumbsUp style={{ width: 25, height: 25 }} />}
        {index === 2 && <FiMessageSquare style={{ width: 25, height: 25 }} />}
      </ThemeIcon>
    );
  };

  return (
    <div className="home-page" style={{ padding: "0 1rem" }}>
      <div style={{ display: "flex" }}>
        {postStats &&
          stats.map((obj, index) => (
            <Card
              key={index}
              radius="md"
              shadow="xs"
              padding="lg"
              style={{
                margin: "0 1rem",
                display: "flex",
                width: "100%",
                alignItems: "center",
              }}
            >
              {setIcon(index)}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginLeft: "15px",
                }}
              >
                <span
                  style={{ color: colors.lightmarine, marginBottom: "0.2rem" }}
                >
                  {obj.name}
                </span>
                <span
                  style={{
                    color: colors.darkmarine,
                    fontSize: "20px",
                    fontWeight: "bold",
                  }}
                >
                  {obj.value}
                </span>
              </div>
            </Card>
          ))}
      </div>
      {
        selectedPlatform === "All Socials" && <NotificationCard/>
      }
      <div style={{margin: '20px 2rem'}}>
        <span style={{ fontSize: "18px" }}>
          Your last post was <b style={{ fontSize: "22px" }}>2 days ago</b>
        </span>
      </div>

      <TopPostCard/>
    </div>
  );
};

export default HomePage;
