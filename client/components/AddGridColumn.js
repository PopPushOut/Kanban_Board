import React from 'react';
import generateId from '../helpers/generator';

const AddGridColumn = React.createClass({
  title: null,
  setTitleInput(element) {
    this.title = element;
  },
  addGridColumn() {
    const id = generateId();
    this.props.addGridColumn(id, this.title.value);
  },
  render() {
    return (
      <figure className='grid-figure'>
        <div className='form'>
          <input
            type='text'
            required
            ref={this.setTitleInput}
            name='title'
            id='title'
            placeholder='Title'
          />
          <button style={{ marginTop: 5 + 'px' }} onClick={this.addGridColumn}>
            + Add Column
          </button>
        </div>
      </figure>
    );
  }
});

export default AddGridColumn;
