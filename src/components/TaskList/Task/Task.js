import React from 'react';

import classes from './Task.module.scss';

const task = (props) => {
  return (
    <div className={classes.Task}>
      <label className={classes.TaskContainer}>
        <input
          type="checkbox"
          checked={props.isCompleted}
          onChange={() => props.toggled(props.id)}
        />
        <span className={classes.CustomCheckbox}></span>
        <p className={classes.TaskContent}>{props.content}</p>
      </label>
      <button
        className={classes.DeleteButton}
        onClick={() => props.deleted(props.id)}
      >
        <ion-icon name="trash-outline"></ion-icon>
      </button>
    </div>
  );
};

export default task;
