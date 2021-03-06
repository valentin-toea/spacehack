import {
  Badge,
  Button,
  Card,
  Center,
  Chip,
  Chips,
  SegmentedControl,
  Textarea,
  Title,
} from "@mantine/core";
import React, { useState } from "react";
import "./RecPage.scss";
import Sentiment from "sentiment";
import {
  BiSad,
  BiHappyAlt,
  BiMeh,
  BiHappyHeartEyes,
  BiAngry,
} from "react-icons/bi";
import { MAIN_URL } from "../../config/config";
import axios from "axios";
import {
  Legend,
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
  ResponsiveContainer,
} from "recharts";
import TagChart from "./TagChart";
import { FiFlag } from "react-icons/fi";

const gradients = [
  { from: "indigo", to: "cyan" },
  { from: "teal", to: "lime", deg: 105 },
  { from: "teal", to: "blue", deg: 60 },
  { from: "orange", to: "red" },
  { from: "grape", to: "pink", deg: 35 },
];

const RecPage = () => {
  const [addon, setAddon] = useState([]);
  const [tagsText, setTagsText] = React.useState("");
  const [postText, setPostText] = React.useState("");
  const debounce = (funct, timeout = 1000) => {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        funct.apply(this, args);
      }, timeout);
    };
  };
  const saveInput = (e) => {
    console.log(addon);
    if (e.length === 0) setAddon([]);
  };
  const processChange = debounce((e) => saveInput(e));

  const makeTag = (event) => {
    setTagsText(event);
    if (event.lastIndexOf(" ") === event.length - 1 && event.length > 1) {
      const arr = event.split(" ").filter((elem) => elem !== "");

      setAddon(arr);
    }
  };

  const [sentimentObj, setSentimentObj] = React.useState(null);
  const [trends, setTrends] = React.useState([]);
  const [recommendedTags, setRecommendedTags] = React.useState([]);
  const [tagsFromNet, setTagsFromNet] = React.useState([]);

  const analyzeSentiment = () => {
    const sentiment = new Sentiment();
    const result = sentiment.analyze(postText);
    setSentimentObj({
      score: result.score,
      badWords: [...new Set(result.negative)],
      goodWords: [...new Set(result.positive)],
    });
  };
  const [readable, setReadable] = useState(null);

  React.useEffect(() => {
    axios.get(MAIN_URL + "trendy").then((response) => setTrends(response.data));
  }, []);

  const checkTextWriting = () => {
    axios.post(MAIN_URL + "gob", { data: postText }).then((result) => {
      setReadable(result.data);
    });
  };

  const getTagsFromText = () => {
    axios
      .post(MAIN_URL + "tags", { data: postText + " " + tagsText })
      .then((result) =>
        setRecommendedTags(result.data.filter((elem) => !addon.includes(elem)))
      );

    axios
      .post(MAIN_URL + "more_tags", { data: postText + " " + tagsText })
      .then((result) =>
        setTagsFromNet(result.data.filter((elem) => !addon.includes(elem)))
      );
  };

  return (
    <div className="rec-wrapper">
      <div
        style={{
          alignSelf: "flex-start",
          paddingLeft: "30px",
          marginBottom: "10px",
        }}
      >
        <b style={{ marginRight: 5 }}>Popular trends:</b>
        {trends.map((trend, index) => (
          <Badge
            variant="gradient"
            gradient={gradients[index]}
            style={{ margin: "0px 3px" }}
          >
            {trend}
          </Badge>
        ))}
      </div>
      <div className="rec-container">
        <div className="field-container">
          <Textarea
            placeholder="Post content"
            label="Post content"
            maxRows={5}
            minRows={3}
            value={postText}
            onChange={(e) => setPostText(e.target.value)}
            className="field"
          />
          <Textarea
            placeholder="Choose your tags"
            label="Tags"
            maxRows={5}
            value={tagsText}
            className="field"
            onChange={(event) => makeTag(event.target.value)}
            onKeyUp={(e) => processChange(e.target.value)}
          />
          <div>
            <Chips multiple value={["checked", "checked-disabled"]}>
              {addon.map((val) => (
                <Chip style={{ margin: "2px 3px" }}>
                  <b>#</b>
                  {val}
                </Chip>
              ))}
            </Chips>
          </div>
          <Button
            onClick={() => {
              analyzeSentiment();
              checkTextWriting();
            }}
            style={{ marginTop: "10px" }}
          >
            Analize your text
          </Button>

          <Button
            onClick={() => {
              getTagsFromText();
            }}
            style={{ marginTop: "10px" }}
          >
            Generate tags
          </Button>
        </div>

        {sentimentObj && (
          <Card className="card" shadow="xs">
            <Card.Section
              className="section"
              style={{
                flexDirection: "column",
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <Center
                style={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div>
                  {sentimentObj.score > 6 && <BiHappyHeartEyes size="90" />}
                  {sentimentObj.score > 0 && sentimentObj.score <= 6 && (
                    <BiHappyAlt size="90" />
                  )}
                  {sentimentObj.score === 0 && <BiMeh size="90" />}
                  {sentimentObj.score < 0 && sentimentObj.score >= -6 && (
                    <BiSad size="90" />
                  )}
                  {sentimentObj.score < -6 && <BiAngry size="90" />}
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-around",
                    width: "100%",
                    marginTop: "10px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <h4>
                      {" "}
                      <FiFlag fill="red" /> Red flags{" "}
                    </h4>
                    {sentimentObj.badWords.length === 0 && "None"}
                    {sentimentObj.badWords.map((elem, index) => (
                      <span>
                        {elem}
                        {index === sentimentObj.badWords.length - 1 ? "." : ","}
                      </span>
                    ))}
                  </div>
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <h4>
                      {" "}
                      <FiFlag fill="green" /> Green flags{" "}
                    </h4>
                    {sentimentObj.goodWords.length === 0 && "None"}
                    {sentimentObj.goodWords.map((elem, index) => (
                      <span>
                        {elem}
                        {index === sentimentObj.goodWords.length - 1
                          ? "."
                          : ","}
                      </span>
                    ))}
                  </div>
                </div>
              </Center>
              <span style={{ alignSelf: "center" }}>
                {readable} readability!
              </span>
            </Card.Section>
          </Card>
        )}
      </div>
      {recommendedTags.length !== 0 && tagsFromNet.length !== 0 && (  
        <>
          <TagChart data={recommendedTags} />
          <TagChart data={tagsFromNet} />
        </>
      )}
    </div>
  );
};

export default RecPage;
