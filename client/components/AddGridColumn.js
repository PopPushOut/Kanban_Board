import React from "react";

const AddGridColumn = React.createClass({
  componentWillMount() {
    this.title = null;
  },
  setTitleInput(element) {
    this.title = element;
  },
  addGridColumn(event) {
    const [min, max] = [1000000000000000000, 9999999999999999999];
    const id = Math.floor(Math.random() * (max - min + 1)) + min;

    event.preventDefault();
    console.log("Create new column");
  },
  render() {
    return (
      <figure className="grid-figure">
        <form onSubmit={this.addGridColumn}>
          <input
            type="text"
            required
            ref={this.setTitleInput}
            name="title"
            id="title"
            placeholder="Title"
          />
          <button>+ Add Column</button>
        </form>
      </figure>
    );
  }
});

export default AddGridColumn;
