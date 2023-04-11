import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function Home() {
  const todos = await prisma.todos.findMany();

  return (
    <main>
      <h1>DoMindMe</h1>
      <ul>
        {todos.map((todo) => (
          <li key={String(todo.id)}>{todo.task}</li>
        ))}
      </ul>
    </main>
  );
}
