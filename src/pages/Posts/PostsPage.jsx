import React from "react";
import { useState } from "react";
import { Select } from "@mantine/core";
import TopPostCard from "../../components/TopPostCard/TopPostCard";
import axios from "axios";
import { MAIN_URL } from "../../config/config";
import { handlePostsData } from "../HomePage/HomePage.config";
import { useSelector } from "react-redux";

const PostsPage = () => {
  const selectedPlatform = useSelector((state) => state.platform.value);
  const [value, setValue] = useState("New");
  const [posts, setPosts] = useState([]);

  React.useEffect(() => {
    value === "New" &&
      axios.get(MAIN_URL + "/most_recent").then((response) => {
        const arr = handlePostsData(response.data, selectedPlatform);
        console.log(arr);
        setPosts(arr);
      });

    value === "Best" &&
      axios.get(MAIN_URL + "/most_popular").then((response) => {
        const arr = handlePostsData(response.data, selectedPlatform);
        console.log(arr);
        setPosts(arr);
      });
  }, [selectedPlatform, value]);
  console.log(posts);
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Select
        label="Filter"
        value={value}
        onChange={(e) => setValue(e)}
        data={["New", "Best"]}
      />
      <div
        style={{
          width: "100%",
          height: "100%",
          marginTop: "30px",
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        {posts.map((elem) => (
          <TopPostCard data={elem} />
        ))}
      </div>
    </div>
  );
};

export default PostsPage;
