import React from "react";
import { AppShell } from "@mantine/core";
import NavbarContainer from "../../components/NavbarContainer/NavbarContainer";
import HeaderContainer from "../../components/HeaderContainer/HeaderContainer";
import "./HomePage.scss";

const HomePage = () => {
  return (
    <AppShell padding="md" navbar={<NavbarContainer />}>
      <HeaderContainer />
    </AppShell>
  );
};

export default HomePage;
