import { Button, Space } from 'antd';
import React from 'react';
import { SmileOutlined } from '@ant-design/icons';
import {
  bucLogin,
  getStorageCookies,
  getCookies,
} from '../../../Puppeteer/browser';

interface AppState {
  isLogin: boolean;
}

export default class Login extends React.Component<unknown, AppState> {
  constructor(props: unknown) {
    super(props);
    this.state = {
      isLogin: false,
    };
  }

  componentDidMount() {
    this.getCookies();
  }

  // eslint-disable-next-line class-methods-use-this
  async getCookies() {
    // getStorageCookies();
    const res = await getCookies();
    window.console.log('---getCookies, res=${}', res);

    if (res && res.length > 0) {
      this.setState({
        isLogin: true,
      });
    }
  }

  // 点击登录
  // eslint-disable-next-line class-methods-use-this
  async login() {
    window.console.log('---login');
    const res = await bucLogin();
    window.console.log('---login, res=${}', res);
  }

  render() {
    const { isLogin = false } = this.state;
    if (isLogin) {
      return (
        <Button
          type="primary"
          icon={<SmileOutlined />}
          shape="round"
          onClick={() => this.login()}
        >
          登录
        </Button>
      );
    }
    return (
      <Space>
        <Button
          type="primary"
          icon={<SmileOutlined />}
          shape="round"
          onClick={() => this.login()}
        >
          已经登录
        </Button>
        <Button
          type="primary"
          icon={<SmileOutlined />}
          shape="round"
          onClick={() => this.getCookies()}
        >
          输出cookies
        </Button>
        <Button
          type="primary"
          icon={<SmileOutlined />}
          shape="round"
          onClick={() => this.getCookies()}
        >
          请求数据
        </Button>
      </Space>
    );
  }
}
