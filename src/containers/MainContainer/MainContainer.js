import React, { Component } from "react";

import classes from "./MainContainer.module.scss";

import TaskInput from "../../components/TaskInput/TaskInput";
import TaskList from "../../components/TaskList/TaskList";

class MainContainer extends Component {
  state = {
    tasks: [...Array(40).keys()].map((el, index) => {
      return { content: "Task " + index };
    }),
  };

  render() {
    return (
      <div className={classes.MainContainer}>
        <TaskInput />
        <TaskList tasks={this.state.tasks} />
      </div>
    );
  }
}

export default MainContainer;
