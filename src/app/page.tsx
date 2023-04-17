import { PrismaClient } from "@prisma/client";
import { use } from "react";

const prisma = new PrismaClient();

export default async function Home() {
  const todos = await use(prisma.todos.findMany());

  return (
    <main>
      <h1 style={{ textAlign: "center", fontFamily: "cursive", color: "#fff" }}>
        DoMindMe
      </h1>
      <ul>
        {todos.map((todo) => (
          <li key={String(todo.id)}>
            <input
              type="checkbox"
              id={String(todo.id)}
              name={String(todo.id)}
            />
            <label htmlFor={String(todo.id)}>{todo.task}</label>
          </li>
        ))}
      </ul>
    </main>
  );
}
