import React from 'react';
import { Layout, Menu } from 'antd';
import './home.css';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

/**
 * 页面渲染逻辑
 * @returns
 */
const PageFrame = () => {
  return (
    <Layout className="home-classname" style={{ padding: 0 }}>
      {/* <Header className="header"> */}
      {/* <div>标题</div> */}
      {/* <Menu>
          <Menu.Item>菜单项</Menu.Item>
          <SubMenu title="看看1">子菜单</SubMenu>
          <SubMenu title="看看2">子菜单2</SubMenu>
        </Menu> */}
      {/* <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
          <Menu.Item key="1">nav 1</Menu.Item>
          <Menu.Item key="2">nav 2</Menu.Item>
          <Menu.Item key="3">nav 3</Menu.Item>
        </Menu>
      </Header> */}

      <Header className="header">
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
          <Menu.Item key="1">nav 1</Menu.Item>
          <Menu.Item key="2">nav 2</Menu.Item>
          <Menu.Item key="3">nav 3</Menu.Item>
        </Menu>
      </Header>
    </Layout>
  );
};

// 首页，消息
export default class Home extends React.Component {
  constructor(prop) {
    super(prop);
    this.state = {};
  }

  render() {
    return <PageFrame />;
    // return (
    //   <div>
    //     <div>开始</div>
    //   </div>
    // );
  }
}
