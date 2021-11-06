import { Group, Text, ThemeIcon, UnstyledButton } from "@mantine/core";
import React from "react";
import { Link } from "react-router-dom";
import "./NavbarButton.scss";

const NavbarButton = (props) => {
  const isSelected = () => window.location.pathname === props.to;

  return (
    <Link to={props.to || "/404"}>
      <UnstyledButton
        {...props}
        className={!isSelected() ? "unstyledButton" : "unstyledButtonSelected"}
      >
        <Group>
          <ThemeIcon
            variant="light"
            color={"transparent"}
            radius="xl"
            size="xl"
          >
            {props.icon}
          </ThemeIcon>
          <Text
            className={
              isSelected() ? "unstyledButtonTextSelected" : "unstyledButtonText"
            }
          >
            {props.text}
          </Text>
        </Group>
      </UnstyledButton>
    </Link>
  );
};

export default NavbarButton;
