import React from "react";
import { v4 } from "node-uuid";

const AddGridColumn = React.createClass({
  title: null,
  setTitleInput(element) {
    this.title = element;
  },
  addGridColumn() {
    const id = v4();
    this.props.addGridColumn(id, this.title.value);
  },
  render() {
    return (
      <figure className="grid-figure">
        <div className="form">
          <input
            type="text"
            required
            ref={this.setTitleInput}
            name="title"
            id="title"
            placeholder="Title"
          />
          <button className="save-button" onClick={this.addGridColumn}>
            + Add Column
          </button>
        </div>
      </figure>
    );
  }
});

export default AddGridColumn;
