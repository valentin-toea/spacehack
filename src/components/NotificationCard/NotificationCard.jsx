import { Card, Group, Image, Text } from '@mantine/core';
import { FiAlertCircle, FiCheckCircle, FiEye } from "react-icons/fi";
import  Sit  from '../../SitReadingDoodle.svg';
import React from 'react';
import './NotificationCard.scss'
const NotificationCard = () => {
    return (
        <Card className="notification-wrapper" shadow="md" radius="md">
            <Group className="notification-container">
                <Text color="green" size="lg" className="notification"><FiCheckCircle style={{color:"green", marginRight: "5px"}}/>You're doing pretty well on Facebook</Text>
                <Text color="red" size="lg" className="notification"><FiAlertCircle style={{color:"red", marginRight: "5px"}}/>Your Instagram reach is on a downfall</Text>
                <Text color="orange" size="lg" className="notification"><FiEye style={{color:"orange", marginRight: "5px"}}/>Do not forget to analyze your text before posting it</Text>
            </Group>
            <Card.Section>
                <Image src={Sit} alt="clumsy" width={280}/>
            </Card.Section>
        </Card>
    );
}

export default NotificationCard;