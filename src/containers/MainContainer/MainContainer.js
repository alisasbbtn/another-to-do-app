import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from '../../axios-tasks';
import * as actionCreators from '../../store/actions';

import classes from './MainContainer.module.scss';

import TaskInput from '../../components/TaskInput/TaskInput';
import TaskList from '../../components/TaskList/TaskList';

class MainContainer extends Component {
  state = {
    tasks: [],
  };

  componentDidMount() {
    axios.get('/tasks.json').then((response) => {
      const tasks = [];
      for (let key in response.data) {
        tasks.push({
          ...response.data[key],
          id: key,
        });
      }
      this.setState({ tasks: tasks });
    });
  }

  addTaskHandler = (event) => {
    if (event.which === 13 && event.target.value) {
      // TODO: Store in Firebase with Redux Thunk

      // axios.post('/tasks.json', taskData).then((response) => {
      // });
      this.props.onAddTask(event.target.value);
      event.target.value = '';
    }
  };

  toggleTaskHandler = (id) => {
    // TODO: Store in Firebase with Redux Thunk
    // axios
    //   .patch('/tasks/' + id + '.json', {
    //     isCompleted: tasks[taskIndex].isCompleted,
    //   })
    //   .then((response) => {
    //   });
  };

  deleteTaskHandler = (id) => {
    // TODO: Store in Firebase with Redux Thunk
    // axios.delete('/tasks/' + id + '.json').then(() => {
    // });
  };

  render() {
    return (
      <div className={classes.MainContainer}>
        <TaskInput taskAdded={this.addTaskHandler} />
        <TaskList
          tasks={this.props.tasks}
          taskDeleted={this.props.onDeleteTask}
          taskToggled={this.props.onToggleTask}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    tasks: state.tasks,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAddTask: (content) => dispatch(actionCreators.addTask(content)),
    onToggleTask: (id) => dispatch(actionCreators.toggleTask(id)),
    onDeleteTask: (id) => dispatch(actionCreators.deleteTask(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);
