import React, { useState } from "react";
import { Layout, Button } from "antd";
import { MenuSider } from "../components/MenuComponents/MenuSider/MenuSider";
import { MenuTop } from "../components/MenuComponents/MenuTop/MenuTop";
import {GithubOutlined} from '@ant-design/icons';
import "./GeneralLayout.scss";

export const GeneralLayout = (props) => {

  const [menuCollapsed, setMenuCollapsed] = useState(false);

  const { children } = props;
  const { Header, Content, Footer } = Layout;

  return (
    <Layout>
      <MenuSider menuCollapsed={menuCollapsed} />
      <Layout
        style={{ marginLeft: menuCollapsed ? "80px" : "200px" }}
        className="layout-admin"
      >
      <Header className="layout-admin__header">
        <MenuTop
          menuCollapsed={menuCollapsed}
          setMenuCollapsed={setMenuCollapsed}
        />
      </Header>
      
      <Content>{children}</Content>
      
      <Footer>
        <Button type="link" onClick={() => console.log("GitHub")}>
          <GithubOutlined style={{ fontSize: "17px" }}/>
        </Button>
      </Footer>

      </Layout>
      {children}
    </Layout>
  );
};
