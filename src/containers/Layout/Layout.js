import React, { Component } from 'react';

import classes from './Layout.module.scss';

import MainContainer from '../MainContainer/MainContainer';

class Layout extends Component {
  render() {
    return (
      <div className={classes.Layout}>
        <MainContainer />
      </div>
    )
  }
}

export default Layout;