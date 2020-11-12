import React from 'react';
import classes from './Layout.module.scss';
import MainContainer from '../../containers/MainContainer/MainContainer';

const layout = () => {
  return (
    <div className={classes.Layout}>
      <MainContainer />
    </div>
  )
}

export default layout;