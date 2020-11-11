import React from "react";

import classes from "./TaskList.module.scss";

import Task from "./Task/Task";

const taskList = (props) => {
  let tasks = props.tasks.map((task) => {
    return (
      <Task
        id={task.id}
        content={task.content}
        createdAt={task.createdAt}
        isCompleted={task.id}
      />
    );
  });
  return <div className={classes.TaskList}>{tasks}</div>;
};

export default taskList;
