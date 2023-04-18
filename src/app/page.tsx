import Todo from "@/components/Todo";
import { PrismaClient } from "@prisma/client";
import "./globals.css";

const prisma = new PrismaClient();

export default async function Home() {
  const todos = await prisma.todos.findMany();

  return (
    <main>
      <h1>DoMindMe</h1>
      <ul>
        {todos.map((todo) => (
          <Todo key={todo.todo_id} todo={todo} />
        ))}
      </ul>
    </main>
  );
}
