import { PrismaClient } from "@prisma/client";
import "./globals.css";
import TodoList from "@/components/TodoList";

const prisma = new PrismaClient();

export default async function Home() {
  const fetchedTodos = await prisma.todos.findMany();

  async function addTodo(newTodo: any) {
    "use server";
    console.log(newTodo);
    await prisma.todos.create({ data: { task: newTodo } });
  }

  return (
    <main>
      <h1>DoMindMe</h1>
      <TodoList fetchedTodos={fetchedTodos} addTodo={addTodo} />
    </main>
  );
}
