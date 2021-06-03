import { Space } from 'antd';
import React from 'react';

export default class Test2 extends React.Component {
  constructor(props: unknown) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Space direction="vertical" align="center">
        <div>这个是test2</div>
        <div>这个是test22</div>
      </Space>
      // <div>
      // <div>这个是test2</div>
      // <div>这个是test22</div>
      // </div>
    );
  }
}
