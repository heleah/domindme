import { PrismaClient } from "@prisma/client";
import "./globals.css";
import TodoList from "@/components/TodoList";

const prisma = new PrismaClient();

export default async function Home() {
  const fetchedTodos = await prisma.todos.findMany();

  return (
    <main>
      <h1>DoMindMe</h1>
      <TodoList fetchedTodos={fetchedTodos} />
    </main>
  );
}
