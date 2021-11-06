import React from "react";
import { AppShell } from "@mantine/core";
import NavbarContainer from "../../components/NavbarContainer/NavbarContainer";
import HeaderContainer from "../../components/HeaderContainer/HeaderContainer";
import "./HomePage.scss";
import { colors } from "../../config/config";

const HomePage = () => {
  return (
    <AppShell
      padding="md"
      navbar={<NavbarContainer />}
      styles={(theme) => ({
        main: {
          backgroundColor: colors.whiteblue,
        },
      })}
    >
      <HeaderContainer />
    </AppShell>
  );
};

export default HomePage;
