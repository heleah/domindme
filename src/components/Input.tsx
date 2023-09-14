import { Todo } from "@/utils/types";
import axios from "axios";

interface TodoProps {
  todo: Todo;
  value: string;
  onValueChange: (str: string) => void;
}

export default function Input({ todo, value, onValueChange }: TodoProps) {
  const id = todo.todo_id;

  function handleChange(e: any) {
    onValueChange(e.target.value);
  }

  return (
    <input
      type="text"
      id={id}
      name={id}
      value={value}
      onChange={handleChange}
    />
  );
}
