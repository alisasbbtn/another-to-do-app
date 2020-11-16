import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Tasks from '../../containers/Tasks/Tasks';
import Auth from '../../containers/Auth/Auth';

import classes from './Layout.module.scss';

const layout = () => {
  return (
    <div className={classes.Layout}>
      <div className={classes.MainContainer}>
        <Switch>
          <Route path="/" exact component={Tasks} />
          <Route path="/auth" exact component={Auth} />
        </Switch>
      </div>
    </div>
  );
};

export default layout;
