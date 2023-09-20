"use client";

import { createTodo } from "@/app/api/routesTodo";

interface InputNewProps {
  todos: any;
  setTodos: (obj: any) => void;
}

export default function InputNew({ todos, setTodos }: InputNewProps) {
  function handleKeyDown(e: any) {
    if (e.key === "Enter") {
      createTodo(e.target.value);
      setTodos([...todos, { task: e.target.value }]);
      e.target.value = "";
    }
  }

  return (
    <input type="text" placeholder="Add new..." onKeyDown={handleKeyDown} />
  );
}
