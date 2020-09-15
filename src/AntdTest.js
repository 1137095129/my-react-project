import React from "react";
import { Layout, Menu, Breadcrumb } from "antd";
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
} from "@ant-design/icons";
import "./background.css";
import "antd/dist/antd.css";

const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

class AntdTest extends React.Component {
  render() {
    return (
      <Layout className="background">
        <Header className="header">
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
            <Menu.Item key="1">nav 1</Menu.Item>
            <Menu.Item key="2">nav 2</Menu.Item>
            <Menu.Item key="3">nav 3</Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: "0 50px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <Layout
            className="site-layout-background"
            style={{ padding: "24px 0" }}
          >
            <Sider className="site-layout-background" width={200}>
              <Menu
                mode="inline"
                defaultSelectedKeys={["1"]}
                defaultOpenKeys={["sub1"]}
                style={{ height: "100%" }}
              >
                <SubMenu key="sub1" icon={<UserOutlined />} title="subnav 1">
                  <Menu.Item key="1">option1</Menu.Item>
                  <Menu.Item key="2">option2</Menu.Item>
                  <Menu.Item key="3">option3</Menu.Item>
                  <Menu.Item key="4">option4</Menu.Item>
                </SubMenu>
                <SubMenu key="sub2" icon={<LaptopOutlined />} title="subnav 2">
                  <Menu.Item key="5">option5</Menu.Item>
                  <Menu.Item key="6">option6</Menu.Item>
                  <Menu.Item key="7">option7</Menu.Item>
                  <Menu.Item key="8">option8</Menu.Item>
                </SubMenu>
                <SubMenu
                  key="sub3"
                  icon={<NotificationOutlined />}
                  title="subnav 3"
                >
                  <Menu.Item key="9">option9</Menu.Item>
                  <Menu.Item key="10">option10</Menu.Item>
                  <Menu.Item key="11">option11</Menu.Item>
                  <Menu.Item key="12">option12</Menu.Item>
                </SubMenu>
                <SubMenu
                  key="sub4"
                  icon={<NotificationOutlined />}
                  title="subnav 4"
                >
                  <Menu.Item key="13">option9</Menu.Item>
                  <Menu.Item key="14">option10</Menu.Item>
                  <Menu.Item key="15">option11</Menu.Item>
                  <Menu.Item key="16">option12</Menu.Item>
                </SubMenu>
                <SubMenu
                  key="sub5"
                  icon={<NotificationOutlined />}
                  title="subnav 5"
                >
                  <Menu.Item key="17">option9</Menu.Item>
                  <Menu.Item key="18">option10</Menu.Item>
                  <Menu.Item key="19">option11</Menu.Item>
                  <Menu.Item key="20">option12</Menu.Item>
                </SubMenu>
                <SubMenu
                  key="sub6"
                  icon={<NotificationOutlined />}
                  title="subnav 6"
                >
                  <Menu.Item key="21">option9</Menu.Item>
                  <Menu.Item key="22">option10</Menu.Item>
                  <Menu.Item key="23">option11</Menu.Item>
                  <Menu.Item key="24">option12</Menu.Item>
                </SubMenu>
              </Menu>
            </Sider>
            <Content style={{ padding: "0 24px", minHeight: 280 }}>
              Content
            </Content>
          </Layout>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    );
  }
}
export default AntdTest;
