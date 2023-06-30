import React from "react";
import "../styles/Todo.css";

export default function Todo(props) {
  const handleCheckboxChange = (todoItem) => {
    todoItem.isCompleted = !todoItem.isCompleted;
    props.setTodoList(props.todoList);
  };

  return (
    <li className="todoItem">
      <span className="todoContent">
        <input
          type="checkbox"
          defaultChecked={props.item.isCompleted}
          onChange={() => handleCheckboxChange(props.item)}
        />
        {props.item.content}
        <button onClick={() => props.removeTodo(props.item.id)}>X</button>
      </span>
    </li>
  );
}
