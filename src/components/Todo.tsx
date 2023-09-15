"use client";

import { useState } from "react";
import { Todo } from "@/utils/types";
import styles from "./Todo.module.scss";
import Input from "./Input";

interface TodoProps {
  todo: Todo;
  onUpdate: (todo: Todo, value: string) => void;
  onDelete: (todo: Todo) => void;
}

export default function Todo({ todo, onUpdate, onDelete }: TodoProps) {
  const [isEditView, setEditView] = useState(false);
  const [currentValue, setCurrentValue] = useState(todo.task);
  const id = todo.todo_id;

  function toggleEditButton() {
    setEditView(!isEditView);
  }

  function updateTask(e: any) {
    toggleEditButton();
    if (!!isEditView) {
      onUpdate(todo, currentValue);
    }
  }

  function handleDelete(todo: Todo) {
    onDelete(todo);
    setTimeout(() => window.location.reload(), 100);
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
          <input type="checkbox" id={id} name={id} className={styles.check} />
          <label htmlFor={id} className={styles.checkText}>
            {currentValue}
          </label>
        </>
      )}
      <button onClick={updateTask}>{isEditView ? "Save" : "Edit"}</button>
      <button onClick={() => handleDelete(todo)}>Delete</button>
    </li>
  );
}
