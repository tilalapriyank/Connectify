import React from "react";
import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";
import {
    HomeOutlined,
    UserOutlined,
    MessageOutlined,
    SettingOutlined,
    LogoutOutlined,
} from "@ant-design/icons";

const { Sider } = Layout;

const Sidebar: React.FC = () => {
    const menuItems = [
        {
            key: "1",
            icon: <HomeOutlined />,
            label: <Link to="/">Home</Link>,
        },
        {
            key: "2",
            icon: <UserOutlined />,
            label: <Link to="/profile">Profile</Link>,
        },
        {
            key: "3",
            icon: <MessageOutlined />,
            label: <Link to="/messages">Messages</Link>,
        },
        {
            key: "4",
            icon: <SettingOutlined />,
            label: <Link to="/settings">Settings</Link>,
        },
        {
            key: "5",
            icon: <LogoutOutlined />,
            label: <Link to="/logout">Logout</Link>,
        },
    ];

    return (
        <Sider collapsible theme="dark">
            <Menu theme="dark" mode="inline" items={menuItems} />
        </Sider>
    );
};

export default Sidebar;
