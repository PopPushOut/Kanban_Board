import React from 'react';
import Comments from './Comments.js';
import TaskInfo from './TaskInfo.js';

const TaskPage = React.createClass({
  removeTask(taskId, columnIndex) {
    var result = confirm('Are you sure you want to delete task?');
    if (result) {
      this.props.removeTask(taskId, columnIndex);
      this.props.history.push('/');
    }
  },
  render() {
    const taskId = this.props.params.taskId;
    const task = this.props.tasks[taskId];
    const columns = this.props.gridColumns;
    const parentColumnIndex = columns.findIndex((column) =>
      column.taskIds.includes(taskId)
    );
    const taskComments = this.props.comments[taskId] || [];
    if (task && columns && parentColumnIndex != -1) {
      const parentTitle = columns[parentColumnIndex].title;
      return (
        <div className='single-task'>
          <button
            className='remove'
            onClick={this.removeTask.bind(null, taskId, parentColumnIndex)}>
            &times;
          </button>
          <TaskInfo
            parentTitle={parentTitle}
            task={task}
            taskComments={taskComments}
            {...this.props}
          />
          <Comments taskComments={taskComments} {...this.props} />
        </div>
      );
    } else {
      return <div>Ooooops, something went wrong!</div>;
    }
  }
});

export default TaskPage;
