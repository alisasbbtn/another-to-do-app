import React from "react";

import classes from "./Task.module.scss";

const task = (props) => {
  return (
    <div className={classes.Task}>
      <label className={classes.TaskContainer}>
        <input type="checkbox" />
        <span className={classes.CustomCheckbox}></span>
        <p className={classes.TaskContent}>{props.content}</p>
      </label>
      <ion-icon name="trash-outline"></ion-icon>
    </div>
  );
};

export default task;
