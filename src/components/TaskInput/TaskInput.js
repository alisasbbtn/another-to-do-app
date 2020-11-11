import React from 'react';

import classes from './TaskInput.module.scss';

const taskInput = () => {
  return (
    <div className={classes.TaskInput}>
      <input className={classes.Input} type="text" placeholder="Add a new task..."></input>
      <button className={classes.Button}><ion-icon name="add-circle" title="Add Task"></ion-icon></button>
    </div>
  );
};

export default taskInput;
