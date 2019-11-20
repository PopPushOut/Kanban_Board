import React from 'react';
import { v4 } from 'node-uuid';

function isEmpty(title) {
  return title.length === 0;
}

const AddGridColumn = React.createClass({
  componentWillMount() {
    this.state = {
      columnTitle: '',
      editMode: false,
      titleCanBeSubmitted: false
    };
  },
  changeHandler(event) {
    const title = event.target.value;
    this.setState({
      columnTitle: title,
      titleCanBeSubmitted: !isEmpty(title)
    });
  },
  addGridColumn() {
    const title = this.state.columnTitle;
    if (isEmpty(title)) {
      this.inputEl.focus();
      this.titleCanBeSubmitted = false;
      return;
    }
    const id = v4();
    this.props.addGridColumn(id, title);
    this.setInitialState();
  },
  setInitialState() {
    this.setState({
      columnTitle: '',
      editMode: false,
      titleCanBeSubmitted: false
    });
  },
  setEditMode() {
    this.setState({
      editMode: !this.state.editMode
    });
  },
  setTitleInput(element) {
    this.inputEl = element;
  },
  render() {
    return (
      <figure className='grid-figure'>
        {!this.state.editMode ? (
          <div className='control-buttons'>
            <button onClick={this.setEditMode}>+ Add Column</button>
          </div>
        ) : (
          <div className='form'>
            <input
              type='text'
              className={!this.state.titleCanBeSubmitted ? 'error' : ''}
              ref={this.setTitleInput}
              onChange={this.changeHandler}
              name='title'
              id='title'
              placeholder='New Column Title'
            />
            <div className='control-buttons'>
              <button onClick={this.addGridColumn}>Save</button>
              <button onClick={this.setInitialState}>Cancel</button>
            </div>
          </div>
        )}
      </figure>
    );
  }
});

export default AddGridColumn;
