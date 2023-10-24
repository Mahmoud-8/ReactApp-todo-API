import { render, screen } from "@testing-library/react";
import {  test, expect } from 'vitest'
import List from "./List";

test("renders List component with a header", () => {
  const tasks = [
    { id: 1, text: "Task 1", completed: false },
    { id: 2, text: "Task 2", completed: true },
  ];

  render(
    <List
      tasks={tasks}
      removeFromTodos={() => {}}
      toggleStatus={() => {}}
      editTask={() => {}}
    />
  );

  const headerElement = screen.getByText("Task List");

  expect(headerElement).toBeInTheDocument();
});
