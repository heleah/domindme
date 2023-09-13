"use client";

interface InputNewProps {
  onAdd: (obj: any) => Promise<void>;
}

export default function InputNew({ onAdd }: InputNewProps) {
  async function handleKeyDown(e: any) {
    if (e.key === "Enter") {
      onAdd(e.target.value);
      e.target.value = "";
      setTimeout(() => window.location.reload(), 80);
    }
  }

  return (
    <input type="text" placeholder="Add new..." onKeyDown={handleKeyDown} />
  );
}
