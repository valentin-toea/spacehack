import { Card, Textarea } from "@mantine/core";
import './RecPage.scss';

const RecPage = () => {
    const debounce = (funct, timeout = 1000) => {
        let timer;
        return (...args) => {
            clearTimeout(timer);
            timer = setTimeout(() => { funct.apply(this, args); }, timeout);
        };

    }
    const saveInput = () => {
        console.log("yeess");
    }
    const processChange = debounce(() => saveInput());
    return (
        <div className="rec-wrapper">
            <div className="rec-container">
                <div className="field-container">
                    <Textarea
                        placeholder="Post content"
                        label="Post content"
                        maxRows={5}
                        minRows={3}
                        className="field"
                    />
                    <Textarea
                        placeholder="Choose your tags"
                        label="Tags"
                        maxRows={5}
                        autosize
                        className="field"
                        onKeyUp={() => processChange()}
                    />
                </div>
                <Card className="card">
                    <Card.Section className="section"> You know how it is black n yellow</Card.Section>
                </Card>

            </div>
        </div>

    );
}

export default RecPage;