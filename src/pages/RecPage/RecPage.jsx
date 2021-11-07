import { Button, Card, Center, Textarea } from "@mantine/core";
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

const RecPage = () => {
  const [addon, setAddon] = useState([]);
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
    console.log(e);
  };
  const processChange = debounce((e) => saveInput(e));

  const makeTag = (event) => {
    if (event.lastIndexOf(" ") === event.length - 1 && event.length > 1) {
      setAddon((prev) => [...prev, event]);
    }
  };

  const [sentimentObj, setSentimentObj] = React.useState(null);

  const analyzeSentiment = () => {
    const sentiment = new Sentiment();
    const result = sentiment.analyze(postText);
    setSentimentObj({
      score: result.score,
      badWords: [...new Set(result.negative)],
      goodWords: [...new Set(result.positive)],
    });
  };

  return (
    <div className="rec-wrapper">
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
            autosize
            className="field"
            onChange={(event) => makeTag(event.target.value)}
            onKeyUp={() => processChange()}
          />
        </div>
        <Card className="card" shadow="xs">
          <Card.Section
            className="section"
            style={{ flexDirection: "column", display: "flex" }}
          >
            <Button onClick={() => analyzeSentiment()}>
              Analize your text
            </Button>
            {sentimentObj && (
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
                <div>
                  <span>Words you might want to avoid: </span>
                  {sentimentObj.badWords.length === 0 && "None"}
                  {sentimentObj.badWords.map((elem, index) => (
                    <span>
                      {elem}
                      {index === sentimentObj.badWords.length - 1 ? "." : ","}
                    </span>
                  ))}
                </div>
                <div>
                  <span>Words you might want to keep: </span>
                  {sentimentObj.goodWords.length === 0 && "None"}
                  {sentimentObj.goodWords.map((elem, index) => (
                    <span>
                      {elem}
                      {index === sentimentObj.goodWords.length - 1 ? "." : ","}
                    </span>
                  ))}
                </div>
              </Center>
            )}
          </Card.Section>
        </Card>
      </div>
    </div>
  );
};

export default RecPage;
