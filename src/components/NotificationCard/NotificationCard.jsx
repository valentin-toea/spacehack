import { Card, Group, Text } from '@mantine/core';
import { FiAlertCircle, FiCheckCircle, FiEye } from "react-icons/fi";
import React from 'react';
import './NotificationCard.scss'
const NotificationCard = () => {
    return (
        <Card className="notification-wrapper">
            <Group className="notification-container">
                <Text size="lg" className="notification"><FiCheckCircle style={{color:"green", marginRight: "5px"}}/>You're doing pretty well on Facebook</Text>
                <Text size="lg" className="notification"><FiAlertCircle style={{color:"red", marginRight: "5px"}}/>Your Instagram reach is on a downfall</Text>
                <Text size="lg" className="notification"><FiEye style={{color:"orange", marginRight: "5px"}}/>Do not forget to analyze your text before posting it</Text>
            </Group>
        </Card>
    );
}

export default NotificationCard;