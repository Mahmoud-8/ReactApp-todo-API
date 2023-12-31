import { useState, useEffect } from "react";
import List from "./List";
import AddItem from "./AddItem";

function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('http://localhost:3000/todos');
        if (!response.ok) {
          throw new Error('Failed to fetch data from the server');
        }
        const data = await response.json();
        setTodos(data);
        setError(null);
      } catch (error) {
        setError('Failed to fetch data from the server');
      }
    }

    // Call the fetchData function when the component mounts
    fetchData();
  }, []); // Empty dependency array to run only once when mounted

  const removeFormTodos = async (idToRemove) => {
    try {
      const response = await fetch(`http://localhost:3000/todos/${idToRemove}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Failed to delete data from the server');
      }

      // Remove the deleted todo from your component state
      setTodos(todos.filter((todo) => todo.id !== idToRemove));
      setError(null);

    } catch (error) {
      setError('Failed to delete todo from the server');
      console.error(error);
    }
  };

  const removeAllItems = () => {
    setTodos([]);
  };





  const addOneItem = async (newTodo) => {
    console.log(newTodo);
    try {
      const response = await fetch('http://localhost:3000/todos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newTodo),
      });

      if (!response.ok) {
        throw new Error('Failed to save data to the server');
      }

      setTodos([...todos, newTodo]);
      setError(null);

    } catch (error) {
      setError('Failed to save todo to the server');
      console.error(error);
    }
  };




// Toggle status function
const toggleStatus = async (id) => {
  const updatedTodos = todos.map((todo) =>
    todo.id === id
      ? { ...todo, status: todo.status === "completed" ? "open" : "completed" }
      : todo
  );
  setTodos(updatedTodos);

  // Send request to update status on the server
  try {
    const response = await fetch(`http://localhost:3000/todos/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ status: updatedTodos.find(todo => todo.id === id).status }),
    });

    if (!response.ok) {
      throw new Error('Failed to update data on the server');
    }
  } catch (error) {
    setError('Failed to update todo on the server');
    console.error(error);
  }
};

 
// Edit task function
const editTask = async (id, updateditems) => {
  try {
    const response = await fetch(`http://localhost:3000/todos/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updateditems),
    });

    if (!response.ok) {
      throw new Error('Failed to update data on the server');
    }

    // Update the todo
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, ...updateditems } : todo
    );

    setTodos(updatedTodos);
    setError(null);
  } catch (error) {
    setError('Failed to update todo on the server');
    console.error(error);
  }
};
  
  return (
    <div className="container">
      <AddItem addOneItem={addOneItem}  />
      <button onClick={removeAllItems} className="delete-all">
        Delete All
      </button>

      {error ? (
        <div className="error">{error}</div>
      ) : (
        <List
          tasks={todos}
          removeFromTodos={removeFormTodos}
          toggleStatus={toggleStatus}
          editTask={editTask}
        />
      )}
    </div>
  );
}

export default TodoApp;
