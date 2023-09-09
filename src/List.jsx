import Item from "./Item";

function List({ tasks, removeFromTodos, toggleStatus, editTask }) {
  return (
    <div className="task-list">
      {tasks.length === 0 ? (
        <p className="no-tasks">No tasks today!</p>
      ) : (
        <ul>
          {tasks.map((todo) => (
            <Item
              key={todo.id}
              todo={todo}
              removeFromTodos={removeFromTodos}
              toggleStatus={toggleStatus}
              editTask={editTask}
            />
          ))}
        </ul>
      )}
    </div>
  );
}

export default List;
