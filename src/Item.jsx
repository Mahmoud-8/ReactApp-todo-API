import { useState } from "react";
import EditItem from "./EditItem";


function Item({ todo, removeFromTodos, toggleStatus, editTask }) {
const [edit, setEdit] = useState(false);

  const handleEdit= () => {
    setEdit(true);
  };

  const handleCheckboxChange = () => {
    toggleStatus(todo.id);
  };
  const handleSave = (editedText) => {
    editTask(todo.id, editedText);
    setEdit(false);
 
  };
  const handleDelete = () => {
    removeFromTodos(todo.id);
  };

  const handleCancel = () => {
    setEdit(false);
  }


  if (edit) {
    return <EditItem todo={todo} onSave={handleSave} onCancel={handleCancel} />;
  }


  return (
    <li
      key={todo.id}
      className={`task-item ${todo.status === "open" ? "open" : "completed"}`}
    >
      <label className="checkbox-label">
        <input
          type="checkbox"
          checked={todo.status === "completed"}
          onChange={handleCheckboxChange}
        />
      </label>
      <span className="task-text">
        {todo.task}
        {todo.status === "completed"}
      </span>
      
      <button className="edit-button" onClick={handleEdit}>Edit</button>


      <button className="delete-button" onClick={handleDelete}>Delete</button>
    </li>
  );
}

export default Item
