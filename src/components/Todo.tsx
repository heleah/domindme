"use client";
import { useState } from "react";
import { Todo } from "@/utils/types";
import styles from "./Todo.module.scss";
import Input from "./Input";

interface TodoProps {
  todo: Todo;
  //updateTodo: (todo: Todo) => void;
}

export default function Todo({ todo /* , updateTodo */ }: TodoProps) {
  const [isEditView, setEditView] = useState(false);
  const id = todo.todo_id;

  function toggleEditButton() {
    setEditView(!isEditView);
  }

  /*  function updateTask(e: any) {
    todo.task = e.target.value;
  } */

  return (
    <li key={id} className={styles.todoItem}>
      {isEditView ? (
        <Input todo={todo} /* updateTodo={updateTodo} */ />
      ) : (
        <>
          <input type="checkbox" id={id} name={id} className={styles.check} />
          <label htmlFor={id} className={styles.checkText}>
            {todo.task}
          </label>
        </>
      )}
      <button onClick={toggleEditButton}>{isEditView ? "Save" : "Edit"}</button>
    </li>
  );
}
