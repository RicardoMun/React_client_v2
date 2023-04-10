import {
  AppstoreOutlined,
  BankOutlined,
  TeamOutlined,
} from "@ant-design/icons/lib/icons";
import React from "react";
import { Menu, Layout } from "antd";
import { useLocation, useNavigate } from "react-router-dom";
import "./MenuSider.scss";	

export const MenuSider = ( props ) => {
  const { Sider } = Layout;
  const location = useLocation();
  const navigate = useNavigate();

  const menuItems = [
    { key: "/admin", icon: <BankOutlined />, label: <span>Dashboard</span> },
    {
      key: "/admin-users",
      icon: <TeamOutlined />,
      label: <span>Usuarios</span>,
    },
    {
      key: "/admin-products",
      icon: <AppstoreOutlined />,
      label: <span>Productos</span>,
    },
    {
      key: "/admin-services",
      icon: <AppstoreOutlined />,
      label: <span>Servicios</span>,
    },
  ];

  const navigateTo = (e) => {
    const path = e.key;
    console.log("path: ", path);
    navigate(path);
  };

  return (
    <Sider collapsed={props.menuCollapsed}>
      <Menu 
        className="menu-sider"
        theme="light"
        mode="inline"
        defaultSelectedKeys={[location.pathname]}
        items={menuItems}
        onClick={navigateTo}
      />
    </Sider>
  );
};
