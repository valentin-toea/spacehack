import { ActionIcon, Card, Group, Image, Text, Tooltip } from "@mantine/core";
import React from "react";
import { Cross1Icon } from "@radix-ui/react-icons";
import { FiHeart, FiMessageSquare } from "react-icons/fi";
import "./TopPostCard.scss";
import Sentiment from "sentiment";

const confMedia = (str) => {
  return str && str.split("").length >= 2 ? str.split(" ")[2] : "";
};

const TopPostCard = ({ data, selectedPlatform }) => {
  const tags = ["cool", "blazing", "incredible", "glamour", "dog", "home"];

  const [sentimentObj, setSentimentObj] = React.useState(null);

  const analyzeSentiment = () => {
    const sentiment = new Sentiment();
    const result = sentiment.analyze(data.content);
    setSentimentObj({
      score: result.score,
      badWords: [...new Set(result.negative)],
      goodWords: [...new Set(result.positive)],
    });
  };

  React.useEffect(() => {
    analyzeSentiment();
  }, [data]);

  return (
    <Card
      className="card-wrapper"
      style={{ minHeight: "100%", marginBottom: "16px" }}
    >
      <Card.Section style={{ padding: "10px 0 0 10px " }}>
        <span>
          {selectedPlatform === "All Socials" && `Source: ${data.platform}`}
        </span>
      </Card.Section>
      <Card.Section className="image-wrapper">
        <Image
          src={confMedia(data.high_resolution_thumbnail_url)}
          alt="sth"
          className="image"
          style={{ minHeight: 280 }}
          withPlaceholder
          placeholder={<Image src="https://i.imgur.com/C55vgaQ.jpeg" />}
        ></Image>
      </Card.Section>

      <Group align="center">
        <FiHeart className="icon" />

        <Text>
          {selectedPlatform !== "Twitter" ? data.likes : data.favorites} Likes
        </Text>

        <FiMessageSquare className="icon" />
        <Text>
          {selectedPlatform !== "Twitter" ? data.comments : data.replies}{" "}
          Comments
        </Text>
      </Group>
      <Tooltip
        label={
          <div
            style={{
              maxWidth: "300px",
              minWidth: "300px",
              height: " 220px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            {sentimentObj && (
              <>
                <Text style={{ color: "white" }}>Score: {data.score}</Text>
                <Text style={{ color: "white" }}>
                  Bad Scored Words:
                  {sentimentObj.badWords.map((elem, index) => (
                    <span>
                      {elem}
                      {index === sentimentObj.badWords.length - 1 ? "." : ","}
                    </span>
                  ))}
                </Text>
                <Text style={{ color: "white" }}>
                  Good Scored Words:
                  {sentimentObj.goodWords.map((elem, index) => (
                    <div>
                      <span>
                        {elem}
                        {index === sentimentObj.badWords.length - 1 ? "." : ","}
                      </span>
                    </div>
                  ))}
                </Text>
                <Text style={{ color: "white" }}>
                  Sentiment: {sentimentObj.score < 0 && "Bad"}
                  {sentimentObj.score === 0 && "Neutral"}
                  {sentimentObj.score > 0 && "Good"}
                </Text>
              </>
            )}
          </div>
        }
        withArrow
        style={{ flex: 1 }}
      >
        <Text size="sm">{data.content}</Text>
      </Tooltip>
      <div class="tags">
        {tags.map((object, index) => (
          <Text size="sm" className="tag">
            #{object}
          </Text>
        ))}
      </div>
    </Card>
  );
};

export default TopPostCard;
