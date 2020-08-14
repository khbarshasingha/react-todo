import React, { Component } from "react";
import Todos from "./components/Todos";

import "./App.css";

// import propTypes from "prop-types";

class App extends Component {
  state = [
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
  ];

  render() {
    return (
      <div className="App">
        <Todos todos={this.state} />
      </div>
    );
  }
}

export default App;

// App.propTypes = {
//   todos: propTypes.object.isRequired
// };
