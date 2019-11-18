import React from 'react';

import TaskList from './TaskList';

const GridColumn = React.createClass({
  onDragStart(e) {
    const dragInfo = {
      taskId: e.currentTarget.id,
      parentColumnId: this.props.column.id,
      parentColumnIndex: this.props.index
    };
    console.log(dragInfo);
    localStorage.setItem('dragInfo', JSON.stringify(dragInfo));
  },
  onDragOver(e) {
    e.preventDefault();
  },
  onDrop() {
    //get the dropped task card from localStorage,
    const droppedTask = localStorage.getItem('dragInfo');
    const parsedDragInfo = JSON.parse(droppedTask);
    const [taskId, newColumnIndex, oldColumnIndex] = [
      parsedDragInfo.taskId,
      this.props.index,
      parsedDragInfo.parentColumnIndex
    ];
    this.props.changeTasksParent(taskId, newColumnIndex, oldColumnIndex);
  },
  componentWillMount() {
    this.state = {
      editMode: false,
      title: this.props.column.title
    };
  },
  editTitle() {
    this.setState({ editMode: !this.state.editMode });
  },
  saveTitle() {
    this.props.updateGridColumnTitle(this.props.index, this.state.title);
    this.setState({ editMode: !this.state.editMode });
  },
  changeHandler(event) {
    this.setState({ title: event.target.value });
  },
  render() {
    return (
      <figure
        className='grid-figure'
        onDragOver={this.onDragOver}
        onDrop={this.onDrop}>
        {this.state.editMode ? (
          <span className='form'>
            <input
              type='text'
              onChange={this.changeHandler}
              defaultValue={this.state.title}
            />
            <button className='save-button' onClick={this.saveTitle}>
              save
            </button>
          </span>
        ) : (
          <span>
            <h2>
              {this.props.column.title}
              <button className='edit-button' onClick={this.editTitle}>
                edit
              </button>
            </h2>
          </span>
        )}
        <button
          className='remove-column'
          onClick={this.props.removeGridColumn.bind(null, this.props.index)}>
          &times;
        </button>

        <TaskList
          onDragStart={this.onDragStart}
          column={this.props.column}
          tasks={this.props.tasks}
          index={this.props.index}
          addTask={this.props.addTask}></TaskList>
      </figure>
    );
  }
});

export default GridColumn;
