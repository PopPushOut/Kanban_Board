import React from "react";
import { Link } from 'react-router';

const ColumnItem = React.createClass({
render() {
    const { id, description } = this.props.item;
return( <figure className="grid-figure">
<div className="grid-photo-wrap">
<Link to={`/item/${id}`}>
    {description}
</Link>
</div>
</figure>
)
}
});

export default ColumnItem;