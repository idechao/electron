import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Button, Layout, Menu } from 'antd';
import {
  UserOutlined,
  QrcodeOutlined,
  ApiOutlined,
  AccountBookOutlined,
} from '@ant-design/icons';
import icon from '../assets/icon.svg';
import './App.global.css';
import SubMenu from 'antd/lib/menu/SubMenu';
// import Sider from 'antd/lib/layout/Sider';

import Test1 from './features/user/test1';
import Test2 from './features/net/test2';
import Login from './features/login/login';
import Home from './home/home';
import AppHeader from './features/header/header';

const { Header, Content, Sider } = Layout;

const PageSider = () => {
  return (
    // <div>
    <Router>
      <Layout style={{ minHeight: '100vh' }}>
        {/* <Header className="app-header" /> */}
        <AppHeader />
        <Layout>
          <Sider width={200} className="site-layout-background">
            <Menu
              mode="inline"
              defaultSelectedKeys={['0']}
              defaultOpenKeys={['sub0']}
              style={{ height: '100%', borderRight: 0 }}
            >
              <SubMenu key="sub0" icon={<ApiOutlined />} title="排查链路">
                <Menu.Item key="0">
                  <Link to="/">常用排查链路</Link>
                  <Link to="/test1">常用排查链路11</Link>
                  <Link to="/test2">常用排查链路22</Link>
                </Menu.Item>
              </SubMenu>
              <SubMenu key="sub1" icon={<UserOutlined />} title="球球">
                <Menu.Item key="1">
                  <Link to="/Login">登录</Link>
                </Menu.Item>
                <Menu.Item
                  key="2"
                  onClick={() => {
                    props.gotoHome();
                  }}
                >
                  <Link to="/Home">首页</Link>
                </Menu.Item>
                <Menu.Item key="3">
                  <Link to="/Home">havanid查用户</Link>
                </Menu.Item>
                <Menu.Item key="4">
                  <Link to="/Home">havanid查支付宝账号</Link>
                </Menu.Item>
                <Menu.Item key="5">
                  <Link to="/Home">2088查用户</Link>
                </Menu.Item>
                <Menu.Item key="6">
                  <Link to="/Home">用户单元查询</Link>
                </Menu.Item>
              </SubMenu>
              <SubMenu
                key="sub2"
                icon={<AccountBookOutlined />}
                title="订单信息"
              >
                <Menu.Item key="7">
                  <Link to="/Home">订单信息查询</Link>
                </Menu.Item>
              </SubMenu>
              <SubMenu key="sub3" icon={<QrcodeOutlined />} title="设备管理">
                <Menu.Item key="8">
                  {/* <Link to="/Home">移动设备管理</Link> */}
                </Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>
          {/* </Layout> */}

          {/* <Layout> */}
          {/* <Header className="header" /> */}
          <Content
            className="site-layout-background"
            style={{
              // padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
            <Route exact path="/" component={Home} />
            <Route exact path="/Home" component={Home} />
            <Route exact path="/test1" component={Test1} />
            <Route exact path="/test2" component={Test2} />
            <Route exact path="/Login" component={Login} />

            <Route
              exact
              path="/alipayAccountQueryByHavanaId"
              component={Home}
            />
            <Route exact path="/queryEleUserByPhone" component={Home} />
            <Route exact path="/userQueryByPhone" component={Home} />
            <Route exact path="/orderInfoQuery" component={Home} />
            <Route exact path="/linkManager" component={Test1} />
          </Content>
        </Layout>
      </Layout>
    </Router>
    // </div>
  );
};
interface AppState {
  index: number;
}

// 父组件声明自己支持 context
const childContextTypes = {
  gotoHome: PropTypes.func,
};
export default class App extends React.Component<unknown, AppState> {
  gotoHome: any;

  constructor(props: unknown) {
    super(props);
    this.state = {
      index: 0,
    };

    this.gotoHome = this.gotoHome.bind(this);
  }

  render() {
    return (
      // <Router>
      // {/* <Switch> */}
      // <Route path="/" component={PageSider} />
      // {/* </Switch> */}
      // </Router>
      <PageSider />
    );
  }
}
