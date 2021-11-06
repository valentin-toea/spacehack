import React, { forwardRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changePlatform } from "../../redux/platformSlice";
import {
  AppShell,
  Navbar,
  Header,
  ThemeIcon,
  Title,
  Select,
  Autocomplete,
  Text,
  Button,
  Group,
} from "@mantine/core";
import "./HeaderContainer.scss";

import {
  FiAlignJustify,
  FiFacebook,
  FiTwitter,
  FiLinkedin,
  FiInstagram,
} from "react-icons/fi";
import { useLocation } from "react-router";

const getIcon = (value) => {
  return (
    <>
      {value === "All Socials" && (
        <FiAlignJustify style={{ width: 20, height: 20, color: "black" }} />
      )}
      {value === "Facebook" && (
        <FiFacebook style={{ width: 20, height: 20, color: "black" }} />
      )}
      {value === "Instagram" && (
        <FiInstagram style={{ width: 20, height: 20, color: "black" }} />
      )}
      {value === "Twitter" && (
        <FiTwitter style={{ width: 20, height: 20, color: "black" }} />
      )}
      {value === "Linkedin" && (
        <FiLinkedin style={{ width: 20, height: 20, color: "black" }} />
      )}
    </>
  );
};

const CustomItem = forwardRef(({ value, ...others }, ref) => (
  <div
    ref={ref}
    {...others}
    style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
  >
    {getIcon(value)}
    <Group noWrap style={{ marginLeft: "10px" }}>
      <div>
        <Text>{value}</Text>
      </div>
    </Group>
  </div>
));

const HeaderContainer = () => {
  const [pageName, setPageName] = React.useState("Howdy, Hootsuite!");
  const selectedPlatform = useSelector((state) => state.platform.value);
  const dispatch = useDispatch();

  let selectData = [
    "All Socials",
    "Facebook",
    "Instagram",
    "Twitter",
    "Linkedin",
  ];

  const location = useLocation();

  React.useEffect(() => {
    if (location.pathname === "/") setPageName("Howdy, Hootsuite!");
    if (location.pathname === "/post-analyze")
      setPageName("Get the most of your posts");
  }, [location.pathname]);

  return (
    <Header className="header">
      <div className="header-container">
        <Title order={3}>{pageName}</Title>
        <div className="header-cell">
          <Select
            className="select-platform"
            data={selectData}
            value={selectedPlatform}
            onChange={(e) => dispatch(changePlatform(e))}
            style={{ marginRight: 10, width: 170 }}
            itemComponent={CustomItem}
            icon={getIcon(selectedPlatform)}
          />
          <Autocomplete
            placeholder="Search by tag"
            data={["React", "Angular", "Svelte", "Vue"]}
          />
        </div>
      </div>
    </Header>
  );
};

export default HeaderContainer;
