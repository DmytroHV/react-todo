import "./App.css";

import React, { Component } from "react";

import TodoList from "./TodoList";
import AddTodoInput from "./AddTodoInput";
import Filters from "./Filters";

import nanoid from "nanoid";

class TodoApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [
        {
          text: "Task 1",
          status: "active", // completed, pending
          id: nanoid()
        },
        {
          text: "Task 2",
          status: "active", // completed, pending
          id: nanoid()
        },
        {
          text: "Task 3",
          status: "active", // completed, pending
          id: nanoid()
        },
        {
          text: "Task 4",
          status: "completed", // completed, pending
          id: nanoid()
        },
        {
          text: "Task 5",
          status: "completed", // completed, pending
          id: nanoid()
        }
      ],
      filter: "all"
    };
  }

  handleAddTodo = todo => {
    this.setState((prevState, props) => ({
      todos: [...prevState.todos, todo]
    }));
  };

  handleChangeFilter = newFilter => {
    this.setState((prevState, props) => ({
      filter: newFilter
    }));
  };

  render() {
    const { todos, filter } = this.state;

    return (
      <div className="TodoApp">
        <header className="TodoApp__header">
          <h1 className="TodoApp__title">Todos</h1>
        </header>
        <div className="TodoApp_content">
          <AddTodoInput onAddTodo={this.handleAddTodo} />
          <TodoList todos={todos} filter={filter} />
          <Filters onChangeFilter={this.handleChangeFilter} />
        </div>
      </div>
    );
  }
}

export default TodoApp;
