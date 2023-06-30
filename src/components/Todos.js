import React, { useState } from "react";
import Todo from "./Todo";

export default function Todos(props) {
  const [showCompleted, setShowCompleted] = useState(true);

  const removeTodo = (id) => {
    let newTodos = [...props.todoList];
    newTodos = newTodos.filter((item) => item.id !== id);
    props.setTodoList(newTodos);
  };

  return (
    <>
      <ul>
        {showCompleted
          ? props.todoList.map((todoItem) => {
              return (
                <Todo
                  item={todoItem}
                  removeTodo={removeTodo}
                  todoList={props.todoList}
                  setTodoList={props.setTodoList}
                  key={todoItem.id}
                />
              );
            })
          : props.todoList
              .filter((todoItem) => !todoItem.isCompleted)
              .map((todoItem) => {
                return (
                  <Todo
                    item={todoItem}
                    removeTodo={removeTodo}
                    todoList={props.todoList}
                    setTodoList={props.setTodoList}
                    key={todoItem.id}
                  />
                );
              })}
      </ul>
      <button onClick={() => setShowCompleted(!showCompleted)}>
        {showCompleted ? "Hide" : "Show"} Completed
      </button>
    </>
  );
}
