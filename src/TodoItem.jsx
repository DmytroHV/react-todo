import React from "react";

const TodoItem = ({ todo }) => {
  return <li className="TodoItem">{todo.text}</li>;
};

export default TodoItem;
