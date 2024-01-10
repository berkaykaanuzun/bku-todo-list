import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";

function App() {
  const [todoInput, setTodoInput] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    setTodos((oldTodos) => [...oldTodos, todoInput]);
    setTodoInput("");
  };

  useEffect(() => {}, [todos]);

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      addTodo();
    }
  };

  const deleteByIndex = (index) => {
    setTodos((oldTodos) => {
      return oldTodos.filter((_, i) => i !== index);
    });
  };

  return (
    <>
      <h1>React</h1>
      <input
        value={todoInput}
        onChange={(e) => setTodoInput(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <Button variant="success" onClick={addTodo}>
        Ekle
      </Button>
      <div>
        <ul>
          {todos.map((todo, index) => (
            <li onClick={() => deleteByIndex(index)} key={index}>
              {todo}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
