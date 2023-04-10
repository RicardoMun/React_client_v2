import React, { useState } from "react";
import { Layout, Button } from "antd";
import { MenuSider } from "../components/MenuComponents/MenuSider/MenuSider";
import { MenuTop } from "../components/MenuComponents/MenuTop/MenuTop";
import { FooterPage } from "../components/Footer/Footer";
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
      
      <Content className="general-layout-content">{children}</Content>
      
      <Footer className="general-layout-footer">
        <FooterPage></FooterPage>
      </Footer>
      </Layout>
    </Layout>
  );
};
