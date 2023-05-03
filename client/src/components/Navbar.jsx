import React from "react";
import { Layout, Menu, Button, Typography } from "antd";
const { Header } = Layout;
const { Text } = Typography;
const Navbar = () => {
  return (
    <>
      <Header className="navbar_custom_css" >
        <Text strong style={{ color: "#fff" }}>
          Crowdfunding
        </Text>

        <div style={{ float: "right" }}>
          <Button className="button" type="primary">0xc...D26</Button>
        </div>
      </Header>
    </>
  );
};

export default Navbar;
