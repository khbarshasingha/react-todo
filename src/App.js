import React, { Component } from "react";
import Todos from "./components/Todos";

import "./App.css";

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: "javascript",
        completed: true
      },

      {
        id: 2,
        title: "react todo",
        completed: false
      },

      {
        id: 3,
        title: "node ",
        completed: false
      }
    ]
  };

  render() {
    return (
      <div className="App">
        <Todos todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
