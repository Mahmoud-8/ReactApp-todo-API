import { useState } from "react";

function EditItem({ todo, onSave,onCancel }) {
  const [editedText, setEditedText] = useState(todo.task);

  const handleTextChange = (event) => {
    event.preventDefault()
    setEditedText(event.target.value);
  };

  const handleSave = () => {
    onSave(editedText);

  };
  return (
    <div>
      <input type="text" value={editedText} onChange={handleTextChange} />

      
      <button onClick={handleSave}>Save</button>

      <button onClick={onCancel}>Cancel</button>
    </div>
  );
}

export default EditItem;
