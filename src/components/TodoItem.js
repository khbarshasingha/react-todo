import React, { Component } from "react";
import Todos from "./Todos";
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

  markComplete = e => {
    console.log(this.props.todo);
  };
  render() {
    return (
      <div style={this.getStyle()}>
        <p>
          <input type="checkbox" onChange={this.markComplete} />{" "}
          {this.props.todo.title}
        </p>
      </div>
    );
  }
}
TodoItem.propTypes = {
  todo: propTypes.object.isRequired
};
export default TodoItem;
