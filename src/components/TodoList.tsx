"use client";

import { useState } from "react";
import Todo from "./Todo";
import InputNew from "./InputNew";
import { Todo as TodoProps } from "@/utils/types";

interface TodoListProps {
  fetchedTodos: TodoProps[];
}

export default function TodoList({ fetchedTodos }: TodoListProps) {
  const [todos, setTodos] = useState(fetchedTodos);

  return (
    <ul>
      {todos.map((todo) => (
        <Todo
          key={todo.todo_id}
          todo={todo}
          todos={todos}
          setTodos={setTodos}
        />
      ))}
      <InputNew todos={todos} setTodos={setTodos} />
    </ul>
  );
}
