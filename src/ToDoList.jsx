import { useState, useEffect } from "react";
import List from "./List";
import AddItem from "./AddItem";

function TodoApp() {

  const [todos, setTodos] = useState(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos")) || [];
    return storedTodos;
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const removeFormTodos = (idToRemove) => {
    const updatedTodos = todos.filter((todo) => todo.id !== idToRemove);
    setTodos(updatedTodos);
  };

  const removeAllItems = () => {
    setTodos([]);
  };

  const addOneItem = (newTodo) => {
    setTodos([...todos, newTodo]);
  };
  const toggleStatus = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id
        ? { ...todo, status: todo.status === "completed" ? "open" : "completed" }
        : todo
    );
    setTodos(updatedTodos);
  };

  const editTask = (id, editedText) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, task: editedText } : todo);

    setTodos(updatedTodos);
  }
  return (
    <div className="container">
      <AddItem addOneItem={addOneItem} />
      <button onClick={removeAllItems} className="delete-all">Delete
        All</button>

      <List tasks={todos}
        removeFromTodos={removeFormTodos}
        toggleStatus={toggleStatus}
        editTask={editTask} />
    </div>
  );
}

export default TodoApp;
