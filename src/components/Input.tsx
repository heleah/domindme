import { Todo } from "@/utils/types";
import axios from "axios";

interface TodoProps {
  todo: Todo;
  /* updateTodo: (todo: Todo) => void; */
}

export default function Input({ todo }: TodoProps) {
  const id = todo.todo_id;

  /*   async function updateTodo(todo: Todo) {
    console.log(todo);

    await fetch("/app/api/", {
      method: "PATCH",
      mode: "no-cors",
      body: JSON.stringify({ todo }),
    });

    axios.patch("/app/api/", todo);
  } */

  return (
    <input
      type="text"
      id={id}
      name={id}
      defaultValue={todo.task}
      //onChange={() => updateTodo(todo)}
    />
  );
}
