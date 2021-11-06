import { Card, Group, Image, Text } from "@mantine/core";
import { FiHeart, FiMessageSquare } from "react-icons/fi";
import './TopPostCard.scss'

const TopPostCard = () => {
    const tags = ["cool", "blazing", "incredible", "glamour", "dog", "home"];
    const likesNum = 7;
    const commNum = 10;
    return (
        <Card className="card-wrapper">
            <Card.Section className="image-wrapper">
                <Image src="https://i.imgur.com/C55vgaQ.jpeg" alt="sth" className="image"></Image>
            </Card.Section>
            <Group align="center">
                <FiHeart className="icon"/>
                <Text>{likesNum} Likes</Text>
                <FiMessageSquare className="icon"/> 
                <Text> {commNum} Comments</Text>
            </Group>
            <Text size="sm">Some really really big description, you know? The kind that sticks to your mind, clearly not this one, trust me.</Text>
            <div class="tags">
                {
                    tags.map((object, index) => (<Text size="sm" className="tag">#{object}</Text>))
                }
            </div>
        </Card>
    );
}

export default TopPostCard;