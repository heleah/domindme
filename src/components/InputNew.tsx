"use client";

interface InputNewProps {
  onAdd: (obj: any) => Promise<void>;
  todos: any;
  setTodos: (obj: any) => void;
}

export default function InputNew({ onAdd, todos, setTodos }: InputNewProps) {
  function handleKeyDown(e: any) {
    if (e.key === "Enter") {
      onAdd(e.target.value);
      setTodos([...todos, { task: e.target.value }]);
      e.target.value = "";
    }
  }

  return (
    <input type="text" placeholder="Add new..." onKeyDown={handleKeyDown} />
  );
}
