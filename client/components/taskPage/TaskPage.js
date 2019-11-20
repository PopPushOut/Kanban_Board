import React from "react";
import Comments from "./Comments.js";
import TaskInfo from "./TaskInfo.js";

const TaskPage = React.createClass({
  render() {
    const taskId = this.props.params.taskId;
    // get task information
    const task = this.props.tasks[taskId];
    const columns = this.props.gridColumns;
    const parentColumn = columns.find(column =>
      column.taskIds.includes(taskId)
    );
    if (task && columns && parentColumn) {
      return (
        <div className="single-task">
          <TaskInfo />
          <Comments />
        </div>
      );
    } else {
      return <div>Task with wrong id passed!</div>;
    }
  }
});

export default TaskPage;
