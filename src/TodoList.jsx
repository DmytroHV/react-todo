import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, filter }) => {
  let ownTodos = [];

  if (filter === "active") {
    ownTodos = todos.filter(todo => todo.status === "active");
  }

  if (filter === "completed") {
    ownTodos = todos.filter(todo => todo.status === "completed");
  }

  if (filter === "all") {
    ownTodos = todos;
  }

  return (
    <div className="TodoList">
      <ul className="TodoList__list">
        {ownTodos.map(todo => <TodoItem todo={todo} />)}
      </ul>
      <div className="TodoList__counter">{todos.length}</div>
    </div>
  );
};

export default TodoList;
