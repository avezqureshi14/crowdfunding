import React from "react";
import { Layout, Menu, Button, Typography } from "antd";

const { Header } = Layout;
const { Text } = Typography;
const Navbar = () => {
  return (
    <>
      <Header>
        <Text strong style={{ color: "#fff" }}>
          Crowdfunding
        </Text>

        <div style={{ float: "right" }}>
          <Button type="primary">0xc...D26</Button>
        </div>
      </Header>
    </>
  );
};

export default Navbar;
