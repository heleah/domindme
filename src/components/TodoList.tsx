"use client";

import axios from "axios";
import { useState } from "react";
import Todo from "./Todo";
import { Todo as TodoProps } from "@/utils/types";

interface TodoListProps {
  fetchedTodos: TodoProps[];
}

export default function TodoList({ fetchedTodos }: TodoListProps) {
  const [todos, setTodos] = useState(fetchedTodos);

  /* function updateTodo(todo: TodoProps) {
    axios.patch("/api/todos", todo);
  } */

  return (
    <ul>
      {todos.map((todo) => (
        <Todo key={todo.todo_id} todo={todo} /* updateTodo={updateTodo} */ />
      ))}
    </ul>
  );
}
