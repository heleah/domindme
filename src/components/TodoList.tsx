"use client";

import { useState } from "react";
import Todo from "./Todo";
import InputNew from "./InputNew";
import { Todo as TodoProps } from "@/utils/types";

interface TodoListProps {
  fetchedTodos: TodoProps[];
  addTodo: (obj: any) => Promise<void>;
  updateTodo: (obj: any, value: string) => Promise<void>;
  deleteTodo: (obj: any) => Promise<void>;
}

export default function TodoList({
  fetchedTodos,
  addTodo,
  updateTodo,
  deleteTodo,
}: TodoListProps) {
  const [todos, setTodos] = useState(fetchedTodos);

  return (
    <ul>
      {todos.map((todo) => (
        <Todo
          key={todo.todo_id}
          todo={todo}
          onUpdate={updateTodo}
          onDelete={deleteTodo}
        />
      ))}
      <InputNew onAdd={addTodo} todos={todos} setTodos={setTodos} />
    </ul>
  );
}
