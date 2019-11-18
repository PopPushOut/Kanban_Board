import React from 'react';

import Task from './Task';
import AddTask from './AddTask';

const TaskList = React.createClass({
  render() {
    return (
      <ul className='task-list'>
        {this.props.column.taskIds
          ? this.props.column.taskIds.map((taskId, index) => (
              <Task
                onDragStart={this.props.onDragStart}
                key={index}
                task={this.props.tasks[taskId]}
              />
            ))
          : ''}
        <AddTask index={this.props.index} addTask={this.props.addTask} />
      </ul>
    );
  }
});

export default TaskList;
