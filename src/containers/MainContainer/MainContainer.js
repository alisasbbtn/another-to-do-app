import React, { Component } from "react";

import classes from "./MainContainer.module.css";

import TaskInput from "../../components/TaskInput/TaskInput";

class MainContainer extends Component {
  render() {
    return (
      <div className={classes.MainContainer}>
        <TaskInput />
      </div>
    );
  }
}

export default MainContainer;