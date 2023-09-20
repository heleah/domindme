"use server";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function createTodo(newTodo) {
  await prisma.todos.create({ data: { task: newTodo } });
}

async function updateTodo(todo, value) {
  await prisma.todos.update({
    where: { todo_id: todo.todo_id },
    data: { ...todo, task: value },
  });
}

async function deleteTodo(todo) {
  await prisma.todos.delete({
    where: { todo_id: todo.todo_id },
  });
}

export { createTodo, updateTodo, deleteTodo };
