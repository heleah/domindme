"use client";

import { useState } from "react";
import { Todo } from "@/utils/types";
import { updateTodo, deleteTodo } from "@/app/api/routesTodo";
import styles from "./Todo.module.scss";
import Input from "./Input";
import TodoButton from "./TodoButton";

interface TodoProps {
  todo: Todo;
  todos: any;
  setTodos: (obj: any) => void;
}

export default function Todo({ todo, todos, setTodos }: TodoProps) {
  const [isEditView, setEditView] = useState(false);
  const [currentValue, setCurrentValue] = useState(todo.task);
  const [currentCheck, setCurrentCheck] = useState(todo.is_complete);
  const id = todo.todo_id;

  function toggleEditButton() {
    setEditView(!isEditView);
  }

  function updateTask() {
    toggleEditButton();
    if (!!isEditView) {
      updateTodo(todo, "task", currentValue);
    }
  }

  function handleDelete(todoToDel: Todo) {
    deleteTodo(todoToDel);
    let remainingTodos = todos.filter(
      (todo: Todo) => todo.todo_id != todoToDel.todo_id
    );
    setTodos(remainingTodos);
  }

  function toggleCheckbox() {
    setCurrentCheck(!currentCheck);
    updateTodo(todo, "is_complete", !currentCheck);
  }

  return (
    <li key={id} className={styles.todoItem}>
      {isEditView ? (
        <Input
          todo={todo}
          value={currentValue}
          onValueChange={setCurrentValue}
        />
      ) : (
        <>
          <input
            type="checkbox"
            id={id}
            name={id}
            className={styles.check}
            checked={currentCheck || false}
            onChange={toggleCheckbox}
          />
          <label htmlFor={id} className={styles.checkText}>
            {currentValue}
          </label>
        </>
      )}
      <TodoButton handleClick={updateTask}>
        {isEditView ? "Save" : "Edit"}
      </TodoButton>
      <TodoButton handleClick={() => handleDelete(todo)}>Delete</TodoButton>
    </li>
  );
}
