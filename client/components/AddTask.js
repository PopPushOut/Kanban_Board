import React from "react";
import { v4 } from "node-uuid";

const AddTask = React.createClass({
  taskDescription: null,
  setDescriptionInput(element) {
    this.taskDescription = element;
  },
  addTask() {
    const [columnIndex, description, taskId] = [
      this.props.index,
      this.taskDescription.value,
      v4()
    ];
    this.props.addTask(columnIndex, description, taskId);
  },
  render() {
    return (
      <li className="form">
        <input
          type="text"
          ref={this.setDescriptionInput}
          name="description"
          id="description"
          placeholder="Description"
        />
        <button onClick={this.addTask} className="save-button">
          + Add Task
        </button>
      </li>
    );
  }
});

export default AddTask;
