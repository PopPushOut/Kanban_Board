import React from "react";
import ColumnItem from './ColumnItem';
const GridColumn = React.createClass({
render() {
  return (<figure className="grid-figure">
    <button className="button" onClick={this.props.removeGridColumn.bind(null, this.props.index)}>X</button>
    <h3>{this.props.column.caption}</h3>
    {this.props.column.items ? this.props.column.items.map((item, index) => {
          return (
            <ColumnItem key={item.id} item={item}></ColumnItem>
          );
    }):''
    }
  </figure>
  )
}
});

export default GridColumn;
