import React from "react";
import { Avatar, Navbar, ThemeIcon, Title } from "@mantine/core";
import {
  BarChartIcon,
  CalendarIcon,
  DashboardIcon,
  GearIcon,
  HomeIcon,
  Pencil2Icon,
  ReaderIcon,
  RulerSquareIcon,
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
          icon={<DashboardIcon style={{ height: 20, width: 20 }} />}
          text="Dashboard"
          to="/"
        />
        <NavbarButton
          icon={<BarChartIcon style={{ height: 20, width: 20 }} />}
          text="Performance"
          to="/performance"
        />
        <NavbarButton
          icon={<RulerSquareIcon style={{ height: 20, width: 20 }} />}
          text="Post Analyze"
          to="/post-analyze"
        />
        <NavbarButton
          icon={<ReaderIcon style={{ height: 20, width: 20 }} />}
          text="Posts"
          to="/posts"
        />
      </Navbar.Section>
      <Navbar.Section className="user">
        <UserMenu />
      </Navbar.Section>
    </Navbar>
  );
};

export default NavbarContainer;
