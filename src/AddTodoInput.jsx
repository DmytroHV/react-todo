import React, { Component } from "react";

import nanoid from "nanoid";

class AddTodoInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      addTodoText: ""
    };
  }

  handleChange = event => {
    const { value } = event.target;

    this.setState((prevState, props) => ({ addTodoText: value }));
  };

  handleBlur = event => {
    const { value } = event.target;
    const { onAddTodo } = this.props;

    const todo = {
      text: value,
      staus: "active",
      id: nanoid()
    };

    onAddTodo(todo);
  };

  render() {
    const { addTodoText } = this.state;
    const { onAddTodo } = this.props;

    return (
      <input
        type="text"
        name="addTodo"
        id="addTodo"
        className="AddTodoINput"
        placeholder="Add todo..."
        value={addTodoText}
        onChange={this.handleChange}
        onBlur={this.handleBlur}
      />
    );
  }
}

export default AddTodoInput;
