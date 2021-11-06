import React from "react";
import { Navbar, ThemeIcon, Title } from "@mantine/core";

const NavbarContainer = () => {
  return (
    <Navbar height={600} padding="xs">
      <Navbar.Section className="title">
        <ThemeIcon></ThemeIcon>
        <Title order={3}>Application</Title>
      </Navbar.Section>
      <Navbar.Section mt="lg" className="unstyledButtonSelected">
        <span className="unstyledButtonTextSelected">Something</span>
      </Navbar.Section>

      <Navbar.Section mt="lg" className="unstyledButton">
        <span className="unstyledButtonText">SomethingElse</span>
      </Navbar.Section>
      <Navbar.Section mt="lg" className="unstyledButton">
        <span className="unstyledButtonText">Anything</span>
      </Navbar.Section>
    </Navbar>
  );
};

export default NavbarContainer;
