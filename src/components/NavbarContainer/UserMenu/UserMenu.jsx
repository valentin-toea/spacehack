import { Avatar } from "@mantine/core";
import React from "react";

const UserMenu = () => {
  return (
    <div style={{ padding: 5, display: "flex", alignItems: "center" }}>
      <Avatar
        style={{ marginRight: 15 }}
        radius="xl"
        src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=255&q=80"
      />
      <div style={{ display: "flex", flexDirection: "column" }}>
        <span>Hootsuite Account </span>
        <span style={{ color: "grey", fontSize: "12px" }}>
          admin@hootsuite.com
        </span>
      </div>
    </div>
  );
};

export default UserMenu;
