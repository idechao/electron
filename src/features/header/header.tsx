import React from 'react';

import style from './header.css';

const PageFrame = () => {
  return (
    <div className={style.appHeader}>
      <div>这个是标题</div>
    </div>
  );
};

export default class AppHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <PageFrame />;
  }
}
