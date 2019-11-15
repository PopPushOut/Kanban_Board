import React from "react";

const AddGridColumn = React.createClass ({
    addGridColumn (event) {
        const [min, max] = [1000000000000000000,9999999999999999999]
        const randomnumber = Math.floor(Math.random() * (max - min + 1)) + min;
        console.log(randomnumber)

        event.preventDefault();
        console.log("Create new column");
    },
    render() {
        return (
            <figure className="grid-figure">
                <form onSubmit={this.addGridColumn}>
                    <input type="text" name="description" id="description" placeholder="Description"/>
                    <button type="submit" className="button">+ Add Column</button>
                </form>
            </figure>
        )
    }
});

export default AddGridColumn;