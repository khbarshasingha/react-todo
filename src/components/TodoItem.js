import React, { Component } from "react";
// import Todos from "./Todos";
import propTypes from "prop-types";

export class TodoItem extends Component {
  getStyle = () => {
    // if (this.props.todo.completed) {
    //   return {
    //     textDecoration: "line-through"
    //   };
    // } else {
    //   return {
    //     textDecoration: "none"
    //   };
    // }
    //all of these using one line : ternary operator
    return {
      background: "grey",
      padding: "10px",
      borderBottom: "1px #ccc dotted",
      color: "orange",
      textDecoration: this.props.todo.completed ? "line-through" : "none"
    };
  };

  markComplete(id) {
    console.log(id);
  }
  render() {
    const { id, title } = this.props.todo;
    return (
      <div style={this.getStyle()}>
        <p>
          <input type="checkbox" onClick={this.markComplete(id)} /> {title}
        </p>
      </div>
    );
  }
}
TodoItem.propTypes = {
  todo: propTypes.object.isRequired
};
export default TodoItem;
