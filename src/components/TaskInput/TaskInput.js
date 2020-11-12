import React from 'react';

import classes from './TaskInput.module.scss';

const taskInput = (props) => {
  return (
    <div className={classes.TaskInput}>
      <input
        className={classes.Input}
        type="text"
        placeholder="Add a new task..."
        onKeyUp={props.taskAdded}
      ></input>
    </div>
  );
};

export default taskInput;
