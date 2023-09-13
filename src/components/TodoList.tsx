"use client";

import { useState } from "react";
import Todo from "./Todo";
import InputNew from "./InputNew";
import { Todo as TodoProps } from "@/utils/types";

interface TodoListProps {
  fetchedTodos: TodoProps[];
  addTodo: (obj: any) => Promise<void>;
}

export default function TodoList({ fetchedTodos, addTodo }: TodoListProps) {
  const [todos, setTodos] = useState(fetchedTodos);

  /* function updateTodo(todo: TodoProps) {
    axios.patch("/api/todos", todo);
  } */

  return (
    <ul>
      {todos.map((todo) => (
        <Todo key={todo.todo_id} todo={todo} /* updateTodo={updateTodo} */ />
      ))}
      <InputNew onAdd={addTodo} />
    </ul>
  );
}
