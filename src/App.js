import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import Todos from "./components/Todos";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [input, setInput] = useState("");
  return (
    <>
      <Form
        todoList={todoList}
        setTodoList={setTodoList}
        input={input}
        setInput={setInput}
      />
      <Todos todoList={todoList} setTodoList={setTodoList} />
    </>
  );
}

export default App;
