import React from "react";
import { Avatar, Navbar, ThemeIcon, Title } from "@mantine/core";
import {
  BarChartIcon,
  CalendarIcon,
  GearIcon,
  HomeIcon,
} from "@radix-ui/react-icons";
import NavbarButton from "../NavbarButton/NavbarButton";
import "./NavbarContainer.scss";
import UserMenu from "./UserMenu/UserMenu";

const NavbarContainer = () => {
  return (
    <Navbar padding="xl" className="navbar-container">
      <Navbar.Section className="title">
        <Title order={3}>Application</Title>
      </Navbar.Section>
      <Navbar.Section grow mt="lg">
        <NavbarButton
          icon={<HomeIcon style={{ height: 20, width: 20 }} />}
          text="Home"
          to="/"
        />
        <NavbarButton
          icon={<CalendarIcon style={{ height: 20, width: 20 }} />}
          text="Calendar"
          to="/1"
        />
        <NavbarButton
          icon={<BarChartIcon style={{ height: 20, width: 20 }} />}
          text="Attendance"
          to="/2"
        />
        <NavbarButton
          icon={<GearIcon style={{ height: 20, width: 20 }} />}
          text="Settings"
          to="/3"
        />
      </Navbar.Section>
      <Navbar.Section className="user">
        <UserMenu />
      </Navbar.Section>
    </Navbar>
  );
};

export default NavbarContainer;
