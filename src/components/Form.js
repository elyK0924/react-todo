import React from "react";

export default function Form(props) {
  const addTodo = (value) => {
    if (value === "") return;
    let newTodo = {
      id: createNewId(),
      content: value,
      isCompleted: false,
    };

    const newTodos = [...props.todoList, newTodo];
    props.setTodoList(newTodos);
    props.setInput("");
  };

  function createNewId() {
    let todoId = Math.floor(Math.random() * 1000);
    props.todoList.forEach((todo) => {
      if (todo.id === todoId) {
        todoId = Math.floor(Math.random() * 1000);
      }
    });
    return todoId;
  }

  return (
    <div>
      <h1>What needs to be done?</h1>
      <span>
        <input
          value={props.input}
          type="text"
          onChange={(e) => props.setInput(e.target.value)}
        />
        <button onClick={() => addTodo(props.input)}>Add Todo</button>
      </span>
    </div>
  );
}
