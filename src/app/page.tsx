import { PrismaClient } from "@prisma/client";
import "./globals.css";
import TodoList from "@/components/TodoList";
import { Todo } from "@/utils/types";

const prisma = new PrismaClient();

export default async function Home() {
  const fetchedTodos = await prisma.todos.findMany();

  async function addTodo(newTodo: string) {
    "use server";
    console.log(newTodo);
    await prisma.todos.create({ data: { task: newTodo } });
  }

  async function updateTodo(todo: Todo, value: string) {
    "use server";
    console.log(todo);
    await prisma.todos.update({
      where: { todo_id: todo.todo_id },
      data: { ...todo, task: value },
    });
  }

  async function deleteTodo(todo: Todo) {
    "use server";
    console.log(todo);
    await prisma.todos.delete({
      where: { todo_id: todo.todo_id },
    });
  }

  return (
    <main>
      <h1>DoMindMe</h1>
      <TodoList
        fetchedTodos={fetchedTodos}
        addTodo={addTodo}
        updateTodo={updateTodo}
        deleteTodo={deleteTodo}
      />
    </main>
  );
}
