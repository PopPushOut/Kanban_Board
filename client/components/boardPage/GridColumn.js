import React from 'react';

import TaskList from './TaskList';

function validate(title) {
  return title.length !== 0;
}

const GridColumn = React.createClass({
  componentWillUnmount() {
    document.removeEventListener('click', this.handleOutsideClick, false);
  },
  componentWillMount() {
    this.state = {
      editMode: false,
      title: this.props.column.title,
      titleCanBeSubmitted: validate(this.props.column.title)
    };
  },
  onDragStart(e) {
    const dragInfo = {
      taskId: e.currentTarget.id,
      parentColumnId: this.props.column.id,
      parentColumnIndex: this.props.index
    };
    localStorage.setItem('dragInfo', JSON.stringify(dragInfo));
  },
  onDragOver(e) {
    e.preventDefault();
  },
  onDrop() {
    const droppedTask = localStorage.getItem('dragInfo');
    const parsedDragInfo = JSON.parse(droppedTask);
    const [taskId, newColumnIndex, oldColumnIndex] = [
      parsedDragInfo.taskId,
      this.props.index,
      parsedDragInfo.parentColumnIndex
    ];
    this.props.changeTasksParent(taskId, newColumnIndex, oldColumnIndex);
  },
  switchEditMode() {
    this.setState({ editMode: !this.state.editMode });
  },
  handleClick() {
    if (!this.state.titleCanBeSubmitted) {
      return;
    }
    if (!this.state.editMode) {
      document.addEventListener('click', this.handleOutsideClick, false);
    } else {
      this.saveTitle();
      document.removeEventListener('click', this.handleOutsideClick, false);
    }
    this.switchEditMode();
  },
  handleOutsideClick(e) {
    // ignore clicks on the component itself
    if (this.node.contains(e.target)) {
      return;
    }
    this.handleClick();
  },
  saveTitle() {
    this.props.updateGridColumnTitle(this.props.index, this.state.title);
  },
  changeHandler(event) {
    const titleValue = event.target.value;
    this.setState({
      title: titleValue,
      titleCanBeSubmitted: validate(titleValue)
    });
  },
  removeColumn() {
    var result = confirm('Are you sure you want to delete column?');
    if (result) {
      this.props.removeGridColumn(this.props.index);
    }
  },
  setTitleFieldNode(node) {
    this.node = node;
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
              className={!this.state.titleCanBeSubmitted ? 'error' : ''}
              ref={this.setTitleFieldNode}
              type='text'
              placeholder='Title'
              onChange={this.changeHandler}
              defaultValue={this.state.title}
            />
          </span>
        ) : (
          <div
            className='selectable'
            onClick={this.handleClick}
            ref={this.setTitleFieldNode}>
            <h2>{this.props.column.title}</h2>
          </div>
        )}
        <button className='remove' onClick={this.removeColumn}>
          &times;
        </button>

        <TaskList
          onDragStart={this.onDragStart}
          comments={this.props.comments}
          column={this.props.column}
          tasks={this.props.tasks}
          index={this.props.index}
          addTask={this.props.addTask}
        />
      </figure>
    );
  }
});

export default GridColumn;
