"use client";
import { Todo } from "@/utils/types";

interface TodoProps {
  todo: Todo;
}

export default function Todo({ todo }: TodoProps) {
  const id = todo.todo_id;
  return (
    <li key={id}>
      <input type="checkbox" id={id} name={id} />
      <label htmlFor={id}>{todo.task}</label>
    </li>
  );
}
