import React from "react";
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
} from "@mantine/core";
import "./HeaderContainer.scss";

const HeaderContainer = () => {
  const selectedPlatform = useSelector((state) => state.platform.value);
  const dispatch = useDispatch();

  let selectData = ["Facebook", "Instagram", "Twitter", "Linkedin"];

  return (
    <Header className="header">
      <div className="header-container">
        <Title order={3}>Yessir </Title>
        <div className="header-cell">
          <Select
            className="select-platform"
            data={selectData}
            value={selectedPlatform}
            onChange={(e) => dispatch(changePlatform(e))}
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
